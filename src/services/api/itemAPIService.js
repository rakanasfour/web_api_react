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

export const fetchItemsAdminWithpaging = async (page = 0, size = 5) => {
    try {
        const response = await axios.get(API_URL+"api/items/all",{
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};

/*
export async function getServerSideProps(context) {
    const page = context.query.page || 1;
    const res = await fetch(API_URL+"api/items/test?page=${page}&size=20");
    const items = await res.json();
    return { props: { items } };
}
*/

export const fetchItemsChannel = async (channel) => {
    try {
        const response = await axios.get(`${API_URL}${channel}/api/items`);
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};

// Add new items
export const addItem = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}api/items`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding item", error);
        throw error;
    }
};

export const updateItem = async (id, updatedItem) => {
    try {
        const response = await axios.put(
            `${API_URL}api/items/update/${id}`, updatedItem // Pass the full object
        );
        return response.data;
    } catch (error) {
        console.error("Error updating item:", error);
        throw error;
    }
};

  export const deleteItem = async (itemId) => {
    try {
      await axios.delete(`${API_URL}items/${itemId}`);
    } catch (error) {
      console.error("Error deleting items", error);
      throw error;
    }
  };

export const fetchItemById = async (id,channel) => {
    try {
        const response = await axios.get(`${API_URL}${channel}/api/items/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching item:", error);
        throw error;
    }
};

export const fetchItemByIdAdmin = async (id) => {
    try {
        const response = await axios.get(`${API_URL}api/items/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching item:", error);
        throw error;
    }
};