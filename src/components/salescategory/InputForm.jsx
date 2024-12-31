
import React, { useState } from 'react';

export default function Example({ onSubmit }) {

  const [salesCategoryName, setSalesCategoryName] = useState("");
  const [salesCategoryMeasurementType, setSalesCategoryMeasurementType] = useState("");
  const [salesCategorySystemMeasurement, setSalesCategorySystemMeasurement] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!salesCategoryName || !salesCategoryMeasurementType || !salesCategorySystemMeasurement) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = { salesCategoryName, salesCategoryMeasurementType,salesCategorySystemMeasurement };
    onSubmit(formData); // Pass data to parent or API call
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">salesCategory form</h2>
          <p className="mt-1 text-sm/6 text-gray-600">please fill the blank with the required field</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="salesCategoryName" className="block text-sm/6 font-medium text-gray-900">
              sales Category Name
              </label>
              <div className="mt-2">
                <input
                  id="salesCategoryName"
                  name="salesCategoryName"
                  value={salesCategoryName}
                  onChange={(e) => setSalesCategoryName(e.target.value)}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />


 
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="salesCategoryMeasurementType" className="block text-sm/6 font-medium text-gray-900">
              sales Category Measurement Type
              </label>
              <div className="mt-2">
              <select
              name="salesCategoryMeasurementType"
              value={salesCategoryMeasurementType}
              onChange={(e) => setSalesCategoryMeasurementType(e.target.value)}
              className="form-select"
            >
            <option value="" disabled>Select a measurement type</option>
            <option value="COUNT">COUNT</option>
            <option value="WEIGHT">WEIGHT</option>
            <option value="VOLUME">VOLUME</option>
            </select>
              </div>
            </div>
  


  
            <div className="col-span-full">
              <label htmlFor="salesCategorySystemMeasurement" className="block text-sm/6 font-medium text-gray-900">
              sales Category System Measurement
              </label>
              <div className="mt-2">


              <select
              name="salesCategorySystemMeasurement"
             value={salesCategorySystemMeasurement}
              onChange={(e) => setSalesCategorySystemMeasurement(e.target.value)}
              className="form-select"
            >
                   <option value="" disabled>Select a system measurement</option>
                  <option value="METRIC">METRIC</option>
                  <option value="IMPERIAL">IMPERIAL</option>
            </select>
   
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">please describe the item.</p>
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
