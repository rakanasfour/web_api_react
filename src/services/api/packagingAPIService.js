import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchPackaging = async () => {
    try {
        const response = await axios.get(`${API_URL}/packaging`);
        return response.data;
    } catch (error) {
        console.error("Error fetching packaging:", error);
        throw error;
    }
};

// Add new packaging
export const addPackaging = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/packaging`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

// Update packaging
export const updatePackaging = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/packaging/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating packaging:", error);
        throw error;
    }
};

// Delete packaging
export const deletePackaging = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/packaging/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting packaging:", error);
        throw error;
    }
};
