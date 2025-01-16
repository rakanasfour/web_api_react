
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user", error);
        throw error;
    }
};


// Fetch all with paging
export const fetchUserPaging = async (page = 0, size = 10) => {
    try {
        const response = await axios.get(`${API_URL}/users/all`, {
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};


// Add new packaging
export const addUser = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
};

// Update packaging
export const updateUser = async (id, updatedUser) => {
    try {
        const response = await axios.put(`${API_URL}/users/${id}`, updatedUser);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

// Delete packaging
export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting users:", error);
        throw error;
    }
};
