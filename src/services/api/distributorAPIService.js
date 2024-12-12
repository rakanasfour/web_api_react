import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchDistributor = async () => {
    try {
        const response = await axios.get(`${API_URL}/distributors`);
        return response.data;
    } catch (error) {
        console.error("Error fetching distributor:", error);
        throw error;
    }
};

// Add new packaging
export const addDistributor  = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/distributors`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding distributor:", error);
        throw error;
    }
};

// Update packaging
export const updateDistributor   = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/distributors/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating distributor:", error);
        throw error;
    }
};

// Delete packaging
export const deleteDistributor  = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/distributors/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting distributor :", error);
        throw error;
    }
};
