"use client";

import React, { useState } from "react";

const ModelInput = ({ brands = [], facilities = [], onSubmit }) => {
  const [formData, setFormData] = useState({
    modelName: "",
    modelDescription: "",
    modelBrandId: "",
    modelManufacturerFacilityId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Submit the form data to the parent component or API
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Model Form
        </h2>

        {/* Model Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Model Name
          </label>
          <input
            type="text"
            name="modelName"
            value={formData.modelName}
            onChange={handleInputChange}
            placeholder="Enter model name"
            className="mt-2 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            required
          />
        </div>

        {/* Model Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Model Description
          </label>
          <textarea
            name="modelDescription"
            value={formData.modelDescription}
            onChange={handleInputChange}
            placeholder="Enter model description"
            className="mt-2 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            rows="4"
          ></textarea>
        </div>

        {/* Brand (Many-to-One Relationship) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <select
            name="modelBrandId"
            value={formData.modelBrandId}
            onChange={handleInputChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            required
          >
            <option value="">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand.brandId} value={brand.brandId}>
                {brand.brandName}
              </option>
            ))}
          </select>
        </div>

        {/* Manufacturer Facility (Many-to-One Relationship) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Manufacturer Facility
          </label>
          <select
            name="modelManufacturerFacilityId"
            value={formData.modelManufacturerFacilityId}
            onChange={handleInputChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
          >
            <option value="">Select a facility</option>
            {facilities.map((facility) => (
              <option key={facility.facilityId} value={facility.facilityId}>
                {facility.facilityName}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModelInput;
