import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTrialTag } from "../../api/slice/auth.slice";

const TrialTimer = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // Stop the timer when it reaches 0
          dispatch(setTrialTag(false));
          return 0;
        }
        return prevTime - 1; // Decrease time by 1 every second
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center mt-3">
      <span className=" text-white text-md font-medium mr-2 px-4 py-2 rounded shadow-lg">
        {timeLeft > 0 ? `${timeLeft}s left on trial` : "Trial expired"}
      </span>
    </div>
  );
};

export default TrialTimer;
