import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all manufacturer
export const fetchManufacturerFacilities = async () => {
    try {
        const response = await axios.get(`${API_URL}/manufacturer-facilities`);
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer-facilities:", error);
        throw error;
    }
};

// Add new manufacturer
export const addManufacturerFacility = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/manufacturer-facilities`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding manufacturer-facilities:", error);
        throw error;
    }
};

// Update Manufacturer Facility
export const updateManufacturerFacility = async (id, updatedManufacturerFcilities) => {
    try {
        const response = await axios.put(`${API_URL}/manufacturer-facilities/${id}`, updatedManufacturerFcilities);
        return response.data;
    } catch (error) {
        console.error("Error updating manufacturer-facilities", error);
        throw error;
    }
};

// Delete Manufacturer Facility
export const deleteManufacturerFacility = async (facilityId) => {
    try {
        const response = await axios.delete(`${API_URL}/manufacturer-facilities/${facilityId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting manufacturer facilities:", error);
        throw error;
    }
};

