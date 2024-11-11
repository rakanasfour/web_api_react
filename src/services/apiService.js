import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchChannel = async () => {
    try {
        const response = await axios.get(API_URL+"/models");
        return response.data;
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};

export const fetchChannel2 = async () => {
    try {
        const response = await axios.get(API_URL+"/models");
        return response.data;
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};
