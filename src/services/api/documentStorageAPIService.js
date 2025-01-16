import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchDocumentStorage = async () => {
    try {
        const response = await axios.get(`${API_URL}/document-storage`);
        return response.data;
    } catch (error) {
        console.error("Error fetching packaging:", error);
        throw error;
    }
};

// Add new packaging
export const addDocumentStorage = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/document-storage`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

export const updateDocumentStorage = async (id, updatedDocumentStorage) => {
    try {
        const response = await axios.put(
            `${API_URL}/document-storage/update/${id}`,
            updatedDocumentStorage // Pass the full object
        );
        return response.data;
    } catch (error) {
        console.error("Error updating DocumentStorage:", error);
        throw error;
    }
};

  export const deleteDocumentStorage = async (documentStorageId) => {
    try {
      await axios.delete(`${API_URL}/document-storage/${documentStorageId}`);
    } catch (error) {
      console.error("Error deleting DocumentStorage:", error);
      throw error;
    }
  };
