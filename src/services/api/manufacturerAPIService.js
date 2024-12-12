import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all manufacturer
export const fetchManufacturers = async () => {
    try {
        const response = await axios.get(`${API_URL}/manufacturers`);
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer:", error);
        throw error;
    }
};

// Add new manufacturer
export const addManufacturer = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/manufacturers`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding manufacturer:", error);
        throw error;
    }
};

// Update manufacturer
export const updateManufacturer = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/manufacturers/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating manufacturer", error);
        throw error;
    }
};

// Delete manufacturer
export const deleteManufacturer = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/manufacturers/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting manufacturer:", error);
        throw error;
    }
};
