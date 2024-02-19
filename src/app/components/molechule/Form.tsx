"use client";
import React, { ReactNode, useState } from "react";

interface FormProps {
  children: ReactNode;
  setCardInfo: ([]) => void;
}

const Form: React.FC<FormProps> = ({ setCardInfo }) => {
  const [formData, setFormData] = useState({
    src: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardInfo((preData) => [...preData, formData]);
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

  return (
    <div className="flex items-center justify-center bg-gray-200 ml-[1590px] ">
      <div className="z-10 px-4 py-6 max-w-xl  w-[700px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white rounded-lg shadow-2xl border border-gray-100 p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add Card
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
          <button
            className="mt-4 py-2 px-4 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white font-semibold rounded-lg shadow-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
