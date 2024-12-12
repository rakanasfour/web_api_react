import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all manufacturer
export const fetchManufacturerFacilities = async () => {
    try {
        const response = await axios.get(`${API_URL}/manufacturer-facilities`);
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer-facilities:", error);
        throw error;
    }
};

// Add new manufacturer
export const addManufacturerFacility = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/manufacturer-facilities`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding manufacturer-facilities:", error);
        throw error;
    }
};

// Update manufacturer
export const updateManufacturerFacility = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/manufacturer-facilities/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating manufacturer-facilities", error);
        throw error;
    }
};

// Delete manufacturer
export const deleteManufacturerFacility = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/manufacturer-facilities/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting manufacturer facilities:", error);
        throw error;
    }
};
