import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchChannel = async () => {
    try {
        const response = await axios.get(`${API_URL}/channels`);
        return response.data;
    } catch (error) {
        console.error("Error fetching packaging:", error);
        throw error;
    }
};

// Add new packaging
export const addChannel  = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/channels`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

// Update packaging
export const updateChannel   = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/channels/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating channel:", error);
        throw error;
    }
};

// Delete packaging
export const deleteChannel   = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/channels/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting channel :", error);
        throw error;
    }
};