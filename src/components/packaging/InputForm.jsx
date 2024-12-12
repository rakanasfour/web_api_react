"use client";

import { useState } from "react";
import { addPackaging } from "@/services/api/packagingAPIService"; // Adjust the import path as needed

export default function Example() {
  const [packagingType, setPackagingType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const newPackaging = { packagingType: packagingType };
      await addPackaging(newPackaging);
      setMessage("Packaging added successfully!");
      setPackagingType(""); // Clear the input field
    } catch (error) {
      setMessage("Failed to add packaging. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Packaging Form</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Please fill the blank with the required field
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="packagingType"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Packaging Type
              </label>
              <div className="mt-2">
                <input
                  id="packagingType"
                  name="packagingType"
                  type="text"
                  value={packagingType}
                  onChange={(e) => setPackagingType(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
        {message && <p className="mt-4 text-sm text-gray-900">{message}</p>}
      </div>
    </form>
  );
}
