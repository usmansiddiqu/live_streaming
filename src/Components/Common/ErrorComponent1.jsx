import React from "react";

function ErrorComponent1({ message }) {
  return (
    <div className=" h-[auto] w-full flex justify-center">
      <span className="text-[#fffff]">{message}</span>
    </div>
  );
}

export default ErrorComponent1;
