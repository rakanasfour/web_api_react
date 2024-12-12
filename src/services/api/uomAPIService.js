import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchUom = async () => {
    try {
        const response = await axios.get(`${API_URL}/uoms`);
        return response.data;
    } catch (error) {
        console.error("Error fetching uom", error);
        throw error;
    }
};

// Add new packaging
export const addUom = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/uoms`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding uom:", error);
        throw error;
    }
};

// Update packaging
export const updatePackaging = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/uoms/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating uom", error);
        throw error;
    }
};

// Delete packaging
export const deleteUom = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/uoms/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting uom", error);
        throw error;
    }
};
