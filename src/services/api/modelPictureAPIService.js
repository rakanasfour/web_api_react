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


// Fetch all with paging
export const fetchModelPicturesWithPaging = async (page = 0, size = 10) => {
    try {
        const response = await axios.get(`${API_URL}/model-pictures/all`, {
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching uom pictures:", error);
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
export const updateModelPicture = async (id, updatedModelPicture) => {
    try {
        const response = await axios.put(`${API_URL}/model-pictures/${id}`, updatedModelPicture);
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
