import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [attributes, setAttributes] = useState([]);
  const [salesCategories, setSalesCategories] = useState([]);
  const [models, setModels] = useState([]);
  const [formData, setFormData] = useState({
    itemName: '',
    itemSku: '',
    itemDescription: '',
    itemStatus: 'AVAILABLE',
    modelId:'',
    attributeIds: [],
    salesCategoryIds: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [attributesRes, salesCategoriesRes, modelRes] = await Promise.all([
          axios.get('http://localhost:8080/api/attributes'),
          axios.get('http://localhost:8080/api/sales-categories'),
          axios.get('http://localhost:8080/api/models'),
        
        ]);

        setAttributes(attributesRes.data);
        setSalesCategories(salesCategoriesRes.data);
        setModels(modelRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (id, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: prevState[field].includes(id)
        ? prevState[field].filter((item) => item !== id)
        : [...prevState[field], id],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/items/request', formData);
      console.log('Item created successfully:', response.data);
      alert('Item created successfully!');
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Failed to create the item. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-gray-50 rounded-md shadow">
      <h2 className="text-lg font-semibold text-gray-900">Item Form</h2>
      <p className="text-sm text-gray-600">Please fill out the fields below:</p>

      {/* Text Inputs */}
      <input
        type="text"
        name="itemName"
        value={formData.itemName}
        onChange={handleInputChange}
        placeholder="Item Name"
        className="form-input"
        required
      />
      <input
        type="text"
        name="itemSku"
        value={formData.itemSku}
        onChange={handleInputChange}
        placeholder="Item SKU"
        className="form-input"
        required
      />
      <textarea
        name="itemDescription"
        value={formData.itemDescription}
        onChange={handleInputChange}
        placeholder="Item Description"
        className="form-textarea"
      />

      {/* Dropdowns */}
      <select
        name="itemStatus"
        value={formData.itemStatus}
        onChange={handleInputChange}
        className="form-select"
      >
        <option value="AVAILABLE">AVAILABLE</option>
        <option value="NOTAVAILABLE">NOT AVAILABLE</option>
        <option value="DISCONTINUED">DISCONTINUED</option>
      </select>



      <label htmlFor="modelDropdown" className="text-gray-700 font-bold">Select a model:</label>
      <select
        name="modelId"
        id="modelDropdown"
        value={formData.modelId}
        onChange={handleInputChange}
        required
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">-- Select a Model --</option>
        {models.length === 0 ? (
         <option disabled>Loading models...</option>
              ) : (
                models.map((model) => (
                  <option key={model.modelId} value={model.modelId}>
                    {model.modelName}
                  </option>
                ))
              )}

      </select>


      {/* Checkboxes */}
      <fieldset>
        <legend className="text-sm font-semibold">Attributes:</legend>
        {attributes.map((attribute) => (
          <label key={attribute.attributeId} className="block">
            <input
              type="checkbox"
              checked={formData.attributeIds.includes(attribute.attributeId)}
              onChange={() => handleCheckboxChange(attribute.attributeId, 'attributeIds')}
            />
            {attribute.attributeName}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend className="text-sm font-semibold">Sales Categories:</legend>
        {salesCategories.map((category) => (
          <label key={category.salesCategoryId} className="block">
            <input
              type="checkbox"
              checked={formData.salesCategoryIds.includes(category.salesCategoryId)}
              onChange={() => handleCheckboxChange(category.salesCategoryId, 'salesCategoryIds')}
            />
            {category.salesCategoryName}
          </label>
        ))}
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
