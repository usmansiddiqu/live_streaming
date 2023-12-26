import React from "react";

function ErrorComponent({ message }) {
  return (
    <div className="bg-[#F8D7DA] h-[auto] w-[auto] p-2 rounded mb-5 error-box">
      <span className="text-[#D10B29]">{message}</span>
    </div>
  );
}

export default ErrorComponent;
