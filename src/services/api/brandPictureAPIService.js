import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all with paging
export const fetchBrandPictures = async (page = 0, size = 10) => {
    try {
        const response = await axios.get(`${API_URL}/brand-picture`, {
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching brand pictures:", error);
        throw error;
    }
};

// Add new packaging
export const addPackaging = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/packaging`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

export const updateBrand = async (id, updatedBrand) => {
    try {
        const response = await axios.put(
            `${API_URL}/brands/update/${id}`,
            updatedBrand // Pass the full object
        );
        return response.data;
    } catch (error) {
        console.error("Error updating brand:", error);
        throw error;
    }
};

  export const deleteBrand = async (brandId) => {
    try {
      await axios.delete(`${API_URL}/brands/${brandId}`);
    } catch (error) {
      console.error("Error deleting brand:", error);
      throw error;
    }
  };
