"use client";

import React, { useState } from "react";

const ButtonPlus = ({ children, selectedit }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="m-5 bg-pink-500 rounded-full w-10 h-10 flex justify-center items-center">
        <button onClick={() => setIsShow(true)}>
          {" "}
          {selectedit ? "edit" : "+"}
        </button>
        {isShow && children}
      </div>
      <div
        onClick={() => setIsShow(false)}
        className="m-5 bg-pink-500 rounded-full w-10 h-10 flex justify-center items-center"
      >
        <button>x</button>
      </div>
    </>
  );
};
export default ButtonPlus;
