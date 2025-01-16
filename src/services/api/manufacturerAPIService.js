import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all manufacturer
export const fetchManufacturers = async () => {
    try {
        const response = await axios.get(`${API_URL}/manufacturers`);
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer:", error);
        throw error;
    }
};

export const fetchManufacturersWithPaging = async (page = 0, size = 10) => {
    try {
        const response = await axios.get(`${API_URL}/manufacturers/all`, {
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer:", error);
        throw error;
    }
};



// Add new manufacturer
export const addManufacturer = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/manufacturers`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding manufacturer:", error);
        throw error;
    }
};


// Update manufacturer
export const updateManufacturer = async (id, updatedManufacturer) => {
    try {
        const response = await axios.put(
            `${API_URL}/manufacturers/update/${id}`,
            updatedManufacturer // Pass the full object
        );
        return response.data;
    } catch (error) {
        console.error("Error updating manufacturer:", error);
        throw error;
    }
};

// Delete manufacturer
  export const deleteManufacturer = async (manufacturerId) => {
    try {
      await axios.delete(`${API_URL}/manufacturers/${manufacturerId}`);
    } catch (error) {
      console.error("Error deleting manufacturer", error);
      throw error;
    }
  };