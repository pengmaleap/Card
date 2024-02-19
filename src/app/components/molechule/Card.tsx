import Image from "next/image";
import React from "react";

interface CardProps {
  src: string;
  alt: string;
  name: string;
}

const Card: React.FC<CardProps> = ({
  src,
  alt,
  name,
  getname,
  getonselect,
}) => {
  return (
    <div
      onClick={() => {
        if (getname === name) {
          getonselect("");
        } else {
            getonselect(name);
        } 
      }}
      className={
        getname === name
          ? "w-[500px] h-[150px] shadow-xl rounded-xl bg-red-300"
          : "w-[500px] h-[150px] shadow-xl rounded-xl"
      }
    >
      <div className="flex h-full">
        {/* image */}
        <div className="w-[25%] relative">
          <Image fill src={src} alt={alt} />
        </div>
        <div className="relative w-[75%]">
          {/* name */}
          <p className="ml-10" fontSize="h6" variant="bold">
            {name}
          </p>
          <button className="absolute top-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex justify-center items-center mt-5">
            <button className="border-2 bg-green-500 w-[100px] h-[50px] flex justify-center items-center">
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
