export const getOrCreateTabId = () => {
  try {
    let id = sessionStorage.getItem("ps_tab_id");
    if (!id) {
      id = `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem("ps_tab_id", id);
    }
    return id;
  } catch {
    return "tab_" + Math.random().toString(36).slice(2, 10);
  }
};

const keyForUser = (userId) => `STREAM_TABS:${userId}`;
const STALE_MS = 30 * 1000; // 30s - prune aggressive for quick recovery
const lockKeyForUser = (userId) => `STREAM_LOCK:${userId}`;

export const getUserIdFromStorage = () => {
  try {
    const data = JSON.parse(localStorage.getItem("data"));
    return data?._id || data?.id || null;
  } catch {
    return null;
  }
};

export const getOwnerId = () => {
  const userId = getUserIdFromStorage();
  if (userId) return userId;
  try {
    let anon = localStorage.getItem("ps_anon_id");
    if (!anon) {
      anon = `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem("ps_anon_id", anon);
    }
    return `anon:${anon}`;
  } catch {
    return "anon_fallback";
  }
};

const normalizeSet = (rawValue) => {
  if (!rawValue) return [];
  try {
    const parsed = JSON.parse(rawValue);
    // If it's array of strings -> convert to records; else assume records
    if (Array.isArray(parsed)) {
      if (parsed.length && typeof parsed[0] === "string") {
        return parsed.map((id) => ({ id, ts: Date.now() }));
      }
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
};

const pruneStale = (records) => {
  const now = Date.now();
  return records.filter((r) => now - (r?.ts || 0) <= STALE_MS);
};

export const getActiveTabCount = (userId) => {
  try {
    const raw = localStorage.getItem(keyForUser(userId));
    let records = normalizeSet(raw);
    records = pruneStale(records);
    localStorage.setItem(keyForUser(userId), JSON.stringify(records));
    return records.length;
  } catch {
    return 0;
  }
};

export const canOpenStream = (userId, max = Infinity) => {
  const count = getActiveTabCount(userId);
  return { canOpen: count < max, count };
};

const nowMs = () => Date.now();

const tryAcquireLock = (userId, ttlMs = 1500) => {
  try {
    const lockKey = lockKeyForUser(userId);
    const tabId = getOrCreateTabId();
    const raw = localStorage.getItem(lockKey);
    const current = raw ? JSON.parse(raw) : null;
    const now = nowMs();
    if (!current || current.expiresAt <= now || current.owner === tabId) {
      const newLock = { owner: tabId, expiresAt: now + ttlMs };
      localStorage.setItem(lockKey, JSON.stringify(newLock));
      // Verify we own it (last write wins)
      const verify = JSON.parse(localStorage.getItem(lockKey) || "{}");
      if (verify.owner === tabId) return true;
    }
    return false;
  } catch {
    return true; // fail-open to avoid deadlock on restricted storage
  }
};

const releaseLock = (userId) => {
  try {
    const lockKey = lockKeyForUser(userId);
    const tabId = getOrCreateTabId();
    const raw = localStorage.getItem(lockKey);
    const current = raw ? JSON.parse(raw) : null;
    if (current && current.owner === tabId) {
      localStorage.removeItem(lockKey);
    }
  } catch {}
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const addTabAtomically = async (userId, max = Infinity) => {
  const tabId = getOrCreateTabId();
  // Prefer navigator.locks when available for cross-tab mutual exclusion
  if (
    typeof navigator !== "undefined" &&
    navigator.locks &&
    navigator.locks.request
  ) {
    try {
      let result = { allowed: false, size: 0 };
      await navigator.locks.request(
        `ps-stream-lock:${userId}`,
        { mode: "exclusive" },
        async () => {
          const raw = localStorage.getItem(keyForUser(userId));
          let records = normalizeSet(raw);
          records = pruneStale(records);
          // No limit check - allow unlimited streams
          const idx = records.findIndex((r) => r.id === tabId);
          if (idx === -1) {
            records.push({ id: tabId, ts: nowMs() });
          } else {
            records[idx].ts = nowMs();
          }
          localStorage.setItem(keyForUser(userId), JSON.stringify(records));
          result = { allowed: true, size: records.length };
        }
      );
      return result;
    } catch {
      // Fallback to custom lock below
    }
  }
  for (let i = 0; i < 30; i++) {
    if (tryAcquireLock(userId)) {
      try {
        const raw = localStorage.getItem(keyForUser(userId));
        let records = normalizeSet(raw);
        records = pruneStale(records);
        // No limit check - allow unlimited streams
        const idx = records.findIndex((r) => r.id === tabId);
        if (idx === -1) {
          records.push({ id: tabId, ts: nowMs() });
        } else {
          records[idx].ts = nowMs();
        }
        localStorage.setItem(keyForUser(userId), JSON.stringify(records));
        return { allowed: true, size: records.length };
      } finally {
        releaseLock(userId);
      }
    }
    await sleep(50);
  }
  // If we couldn't acquire lock, fallback to optimistic check
  const { canOpen } = canOpenStream(userId, max);
  if (!canOpen) return { allowed: false, size: getActiveTabCount(userId) };
  return (
    addTabForUser(userId), { allowed: true, size: getActiveTabCount(userId) }
  );
};

export const addTabForUser = (userId) => {
  try {
    const tabId = getOrCreateTabId();
    const raw = localStorage.getItem(keyForUser(userId));
    let records = normalizeSet(raw);
    records = pruneStale(records);
    const existingIdx = records.findIndex((r) => r.id === tabId);
    if (existingIdx === -1) {
      records.push({ id: tabId, ts: Date.now() });
    } else {
      records[existingIdx].ts = Date.now();
    }
    localStorage.setItem(keyForUser(userId), JSON.stringify(records));
    return { added: existingIdx === -1, tabId, size: records.length };
  } catch {
    return { added: true, tabId: getOrCreateTabId(), size: 1 };
  }
};

export const removeTabForUser = (userId) => {
  try {
    const tabId = getOrCreateTabId();
    const raw = localStorage.getItem(keyForUser(userId));
    let records = normalizeSet(raw);
    records = records.filter((r) => r.id !== tabId);
    localStorage.setItem(keyForUser(userId), JSON.stringify(records));
    return { remaining: records.length, tabId };
  } catch {
    return { remaining: 0, tabId: getOrCreateTabId() };
  }
};

export const touchTabForUser = (userId) => {
  try {
    const tabId = getOrCreateTabId();
    const raw = localStorage.getItem(keyForUser(userId));
    let records = normalizeSet(raw);
    const idx = records.findIndex((r) => r.id === tabId);
    if (idx === -1) {
      records.push({ id: tabId, ts: Date.now() });
    } else {
      records[idx].ts = Date.now();
    }
    records = pruneStale(records);
    localStorage.setItem(keyForUser(userId), JSON.stringify(records));
    return { size: records.length, tabId };
  } catch {
    return { size: 1, tabId: getOrCreateTabId() };
  }
};
