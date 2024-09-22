const clearLocalStorage = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("data");
};

export default clearLocalStorage;
