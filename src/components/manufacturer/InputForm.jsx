import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example({ onSubmit }) {
  const [manufacturerName, setManufacturerName] = useState("");
  const [manufacturerDescription, setModelDescription] = useState("");
  const [manufacturerStatus, setManufacturerStatus] = useState("ACTIVE");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!manufacturerName || !manufacturerDescription || !manufacturerStatus) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = { manufacturerName, manufacturerDescription,manufacturerStatus };
    onSubmit(formData); // Pass data to parent or API call
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Item form</h2>
          <p className="mt-1 text-sm/6 text-gray-600">please fill the blank with the required field</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
              manufacturer Name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  onChange={(e) => setManufacturerName(e.target.value)}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
              manufacturer Description
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  onChange={(e) => setModelDescription(e.target.value)}
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
              manufacturerStatus
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  onChange={(e) => setManufacturerStatus(e.target.value)}
                  autoComplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >

                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
   
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>




          </div>
        </div>


      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
