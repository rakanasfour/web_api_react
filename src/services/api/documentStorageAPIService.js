import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchDocumentStorage = async () => {
    try {
        const response = await axios.get(`${API_URL}/document-storage`);
        return response.data;
    } catch (error) {
        console.error("Error fetching packaging:", error);
        throw error;
    }
};

// Add new packaging
export const addDocumentStorage = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/document-storage`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

// Update packaging
export const updateDocumentStorage = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/document-storage/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating document-storage:", error);
        throw error;
    }
};

// Delete packaging
export const deleteDocumentStorage = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/document-storage/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting document storage:", error);
        throw error;
    }
};
