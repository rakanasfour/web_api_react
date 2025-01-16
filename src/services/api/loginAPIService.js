import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export const fetchItemsAdmin = async () => {
    try {
        const response = await axios.get(API_URL+"api/items");
        return response.data;
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        try {
            const response = await axios.post(API_URL+"api/auth/login", { username, password });
            res.status(200).json(response.data); // JWT token
        } catch (error) {
            res.status(error.response?.status || 500).json({ message: 'Authentication failed' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
