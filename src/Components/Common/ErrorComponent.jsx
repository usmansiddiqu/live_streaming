import React from "react";

function ErrorComponent({ message }) {
  return (
    <div className="bg-[#F8D7DA] h-[auto] w-[auto] p-5 rounded mb-5">
      <span className="text-[#D10B29]">{message}</span>
    </div>
  );
}

export default ErrorComponent;
