import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export const fetchItemsAdmin = async () => {
    try {
        const response = await axios.get(API_URL+"api/items");
        return response.data;
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};

export const fetchItemsChannel = async (channel) => {
    try {
        const response = await axios.get(`${API_URL}${channel}/api/items`);
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};

// Add new items
export const addItem = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}api/items`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding item", error);
        throw error;
    }
};

// Update packaging
export const updateItem = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}api/items/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating items", error);
        throw error;
    }
};

// Delete packaging
export const deleteItem= async (id) => {
    try {
        const response = await axios.delete(`${API_URL}api/items/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting Item", error);
        throw error;
    }
};

export const fetchItemById = async (id,channel) => {
    try {
        const response = await axios.get(`${API_URL}${channel}/api/items/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching item:", error);
        throw error;
    }
};

export const fetchItemByIdAdmin = async (id) => {
    try {
        const response = await axios.get(`${API_URL}api/items/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching item:", error);
        throw error;
    }
};