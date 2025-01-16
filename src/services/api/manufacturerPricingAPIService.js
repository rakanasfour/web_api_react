import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all manufacturer
export const fetchManufacturerPricings = async () => {
    try {
        const response = await axios.get(`${API_URL}/manufacturer-pricing`);
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer-pricing", error);
        throw error;
    }
};

// Add new manufacturer
export const addManufacturerPricing = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/manufacturer-pricing`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding manufacturer-facilities:", error);
        throw error;
    }
};

// Update manufacturer
export const updateManufacturerPricing = async (id, updatedManufacturerPricing) => {
    try {
        const response = await axios.put(`${API_URL}/manufacturer-pricing/${id}`, updatedManufacturerPricing );
        return response.data;
    } catch (error) {
        console.error("Error updating manufacturer-pricing", error);
        throw error;
    }
};

// Delete manufManufacturer Pricing
export const deleteManufacturerPricing = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/manufacturer-pricing/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting manufacturer-pricing", error);
        throw error;
    }
};

