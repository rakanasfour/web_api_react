import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchClasses = async () => {
    try {
        const response = await axios.get(`${API_URL}/classes`);
        return response.data;
    } catch (error) {
        console.error("Error fetching classes:", error);
        throw error;
    }
};


export const updateClass = async (classId, updatedValue) => {
    try {
      const response = await axios.put(`${API_URL}/classes/update/${classId}`, { className: updatedValue });
      return response.data;
    } catch (error) {
      console.error("Error updating class:", error);
      throw error;
    }
  };
  
  export const deleteClass = async (classId) => {
    try {
      await axios.delete(`${API_URL}/classes/${classId}`);
    } catch (error) {
      console.error("Error deleting class:", error);
      throw error;
    }
  };

// Add new packaging
export const addSalesCategory = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/classes`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding classes:", error);
        throw error;
    }
};

// Update packaging
export const updateSalesCategory = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/classes/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating classes:", error);
        throw error;
    }
};

// Delete packaging
export const deleteSalesCategory = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/classes/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting classes:", error);
        throw error;
    }
};
