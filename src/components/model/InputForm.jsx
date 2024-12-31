
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Example({ onSubmit }) {
  const [brands, setBrands] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [modelName, setModelName] = useState("");
  const [modelDescription, setModelDescription] = useState("");

  useEffect(() => {
    // Fetch models from the backend
    const fetchBrands = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/brands');
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedBrandId || !modelName || !modelDescription) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = { brandId: selectedBrandId, modelName, modelDescription };
    onSubmit(formData); // Pass data to parent or API call
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">model form</h2>
          <p className="mt-1 text-sm/6 text-gray-600">please fill the blank with the required field</p>

  <label htmlFor="modelDropdown" className="text-gray-700 font-bold">Select a Brand:</label>
  <select
    id="modelDropdown"
    value={selectedBrandId}
    onChange={(e) => setSelectedBrandId(e.target.value)}
    required
    className="p-2 border border-gray-300 rounded-md"
  >
    <option value="">-- Select a Brand --</option>
    {brands.map((brand) => (
      <option key={brand.brandId} value={brand.brandId}>
        {brand.brandName}
      </option>
    ))}
    
  </select>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="modelName" className="block text-sm/6 font-medium text-gray-900">
                Model Name
              </label>
              <div className="mt-2">
                <input
                  id="modelName"
                  name="modelName"
                  onChange={(e) => setModelName(e.target.value)}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

  
            <div className="col-span-full">
              <label htmlFor="modelDescription" className="block text-sm/6 font-medium text-gray-900">
              Model Description
              </label>
              <div className="mt-2">
                <textarea
                  id="modelDescription"
                  name="modelDescription"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                  onChange={(e) => setModelDescription(e.target.value)} // Bind textarea to state

                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Please describe the Model.</p>
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
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
        Submit
    </button>
      </div>
    </form>
  )
}
