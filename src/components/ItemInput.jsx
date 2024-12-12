"use client";

import React, { useState } from "react";



const ItemInput = ({ channels, models, onSubmit }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemSku: "",
    itemDescription: "",
    itemType: "",
    itemQuantity: 0,
    itemAvailability: "In Stock",
    itemMsaPromoItem: "",
    itemBasePrice: "",
    itemWeight: "",
    itemUpdatedAtBy: "",
    itemStatus: "AVAILABLE",
    itemManufacturerPricingId: "",
    itemDistributorId: "",
    itemModelId: "",
    itemComplianceCategoryId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleQuantityChange = (change) => {
    setFormData((prevData) => ({
      ...prevData,
      itemQuantity: Math.max(0, prevData.itemQuantity + change),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Callback to handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Item Name</label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter item name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Item SKU</label>
        <input
          type="text"
          name="itemSku"
          value={formData.itemSku}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter SKU"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Item Description</label>
        <textarea
          name="itemDescription"
          value={formData.itemDescription}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows="3"
          placeholder="Enter description"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Item Type</label>
        <input
          type="text"
          name="itemType"
          value={formData.itemType}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter type"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Item Quantity</label>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded"
          >
            -
          </button>
          <input
            type="number"
            name="itemQuantity"
            value={formData.itemQuantity}
            readOnly
            className="text-center w-16 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Channel</label>
        <select
          name="itemChannel"
          value={formData.itemChannel}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select a channel</option>
          {channels.map((channel) => (
            <option key={channel.id} value={channel.id}>
              {channel.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Model</label>
        <select
          name="itemModelId"
          value={formData.itemModelId}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select a model</option>
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ItemInput;
