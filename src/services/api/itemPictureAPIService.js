import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchItemPictures = async () => {
    try {
        const response = await axios.get(`${API_URL}/item-pictures`);
        return response.data;
    } catch (error) {
        console.error("Error fetching packaging:", error);
        throw error;
    }
};

// Add new packaging
export const addItemPicture = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/item-pictures`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

// Update packaging
export const updateItemPicture  = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/item-pictures/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating packaging:", error);
        throw error;
    }
};

// Delete packaging
export const deleteItemPicture  = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/item-pictures/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting packaging:", error);
        throw error;
    }
};
