import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchModelPictures = async () => {
    try {
        const response = await axios.get(`${API_URL}/model-pictures`);
        return response.data;
    } catch (error) {
        console.error("Error fetching model picture:", error);
        throw error;
    }
};

// Add new packaging
export const addModelPicture= async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/model-pictures`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding model picture:", error);
        throw error;
    }
};

// Update packaging
export const updateModelPicture = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/model-pictures/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating packaging:", error);
        throw error;
    }
};

// Delete packaging
export const deleteModelPictures = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/model-pictures/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting model-picture", error);
        throw error;
    }
};
