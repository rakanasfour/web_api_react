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

export const fetchModelsWithPaging = async (page = 0, size = 10) => {
    try {
        const response = await axios.get(`${API_URL}/models/all`, {
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching brand pictures:", error);
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

// Update model
export const updateModel = async (id, updateModel) => {
    try {
        const response = await axios.put(`${API_URL}/models/update/${id}`, updateModel);
        return response.data;
    } catch (error) {
        console.error("Error updating model:", error);
        throw error;
    }
};

// Delete model
export const deleteModel = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/models/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting model:", error);
        throw error;
    }
};
