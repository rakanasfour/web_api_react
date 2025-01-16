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

// Fetch all with paging
export const fetchUomPicturesWithPagin = async (page = 0, size = 10) => {
    try {
        const response = await axios.get(`${API_URL}/uom-pictures/all`, {
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching uom pictures:", error);
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
export const updateUomPicture = async (id, updatedUomPicture) => {
    try {
        const response = await axios.put(`${API_URL}/uom-pictures/${id}`, updatedUomPicture);
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
