import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchModel= async () => {
    try {
        const response = await axios.get(`${API_URL}/models`);
        return response.data;
    } catch (error) {
        console.error("Error fetching models:", error);
        throw error;
    }
};

// Add new packaging
export const addModel = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/models`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

// Update packaging
export const updateModel = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/models/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating packaging:", error);
        throw error;
    }
};

// Delete packaging
export const deleteModel = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/models/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting packaging:", error);
        throw error;
    }
};
