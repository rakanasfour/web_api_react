import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchUomPictures = async () => {
    try {
        const response = await axios.get(`${API_URL}/uom-pictures`);
        return response.data;
    } catch (error) {
        console.error("Error fetching UomPicture:", error);
        throw error;
    }
};

// Add new packaging
export const addUomPicture = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/uom-pictures`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding UomPicture:", error);
        throw error;
    }
};

// Update packaging
export const updateUomPicture = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/uom-pictures/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating UomPicture:", error);
        throw error;
    }
};

// Delete packaging
export const deletePackaging = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/packaging/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting packaging:", error);
        throw error;
    }
};
