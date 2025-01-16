import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchSalesCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/sales-categories`);
        return response.data;
    } catch (error) {
        console.error("Error fetching sales category:", error);
        throw error;
    }
};

// Add new packaging
export const addSalesCategory = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/sales-categories`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding sales category:", error);
        throw error;
    }
};

// Update packaging
export const updateSalesCategory = async (id, updatedSalesCategory) => {
    try {
        const response = await axios.put(`${API_URL}/sales-categories/${id}`, updatedSalesCategory);
        return response.data;
    } catch (error) {
        console.error("Error updating sales category:", error);
        throw error;
    }
};

// Delete packaging
export const deleteSalesCategory = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/sales-categories/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting sales-category:", error);
        throw error;
    }
};
