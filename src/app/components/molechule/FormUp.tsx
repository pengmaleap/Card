"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { User } from "@/app/page";

interface FormProps {
  setCardInfo: Dispatch<SetStateAction<User[]>>;
  cardInfo: User[];
  onselectUser: User | undefined;
}

const FormUp: React.FC<FormProps> = ({
  setCardInfo,
  onselectuser,
  cardInfo,
}) => {
  const [formData, setFormData] = useState({
    src: onselectuser?.src,
    name: onselectuser?.name,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnUploadFile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevUser) => {
        return {
          ...prevUser,
          src: imageUrl,
        };
      });
    }
  };

  const UpdateForm = () => {
    setCardInfo((preInfo) => {
      const update = preInfo.map((item) => {
        if (item.name === onselectuser?.name) {
          return {
            ...item,
            ...formData,
          };
        }
        return item;
      });
      return update;
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 ml-[1590px] ">
      <div className="z-10 px-4 py-6 max-w-xl  w-[700px]">
        <form className="flex flex-col bg-white rounded-lg shadow-2xl border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Update Profile
          </h2>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            className="mt-1 mb-4 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            type="text"
            name="name"
            placeholder="Enter your name"
            defaultValue={onselectuser?.name}
            value={formData.name}
            onChange={handleChange}
          />
          <label
            htmlFor="src"
            className="block text-sm font-medium text-gray-700"
          >
            Choose Image
          </label>
          <input
            id="src"
            className="mt-1 mb-4 p-2 w-full border border-gray-300 rounded-md shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            type="file"
            name="src"
            onChange={handleOnUploadFile}
          />
          <div className="flex justify-center">
            <img
              src={onselectuser?.src}
              className="mb-4 max-h-60 rounded-md shadow-sm"
            />
          </div>
          <button
            className="mt-4 py-2 px-4 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white font-semibold rounded-lg shadow-md"
            type="button"
            onClick={UpdateForm}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormUp;
