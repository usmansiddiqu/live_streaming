import React, { useState, useEffect } from "react";

const TrialTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Start at 60 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // Stop the timer when it reaches 0
          return 0;
        }
        return prevTime - 1; // Decrease time by 1 every second
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center mt-6 mb-2">
      <span className="bg-red-800 text-white text-md font-medium mr-2 px-4 py-2 rounded shadow-lg">
        {timeLeft > 0 ? `${timeLeft}s left on trial` : "Trial expired"}
      </span>
    </div>
  );
};

export default TrialTimer;
