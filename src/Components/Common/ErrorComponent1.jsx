import React from "react";

function ErrorComponent1({ message }) {
  return (
    <div className=" h-[auto] w-[auto] p-2 rounded mb-5 error-box">
      <span className="text-[#fffff]">{message}</span>
    </div>
  );
}

export default ErrorComponent1;
