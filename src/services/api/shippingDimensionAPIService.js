import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchShippingDimension= async () => {
    try {
        const response = await axios.get(`${API_URL}/shipping-dimensions`);
        return response.data;
    } catch (error) {
        console.error("Error fetching packaging:", error);
        throw error;
    }
};

// Add new packaging
export const addShippingDimension = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/shipping-dimensions`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

// Update packaging
export const updateShippingDimension = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/packaging/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating packaging:", error);
        throw error;
    }
};

// Delete packaging
export const deleteShippingDimension = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/shipping-dimensions/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting shipping-dimensions:", error);
        throw error;
    }
};
