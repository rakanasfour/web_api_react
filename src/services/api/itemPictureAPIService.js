import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all packaging
export const fetchItemPictures = async () => {
    try {
        const response = await axios.get(`${API_URL}/item-pictures`);
        return response.data;
    } catch (error) {
        console.error("Error fetching packaging:", error);
        throw error;
    }
};




// Add new packaging
export const addItemPicture = async (packagingData) => {
    try {
        const response = await axios.post(`${API_URL}/item-pictures`, packagingData);
        return response.data;
    } catch (error) {
        console.error("Error adding packaging:", error);
        throw error;
    }
};

export const fetchItemsPicturesWithpaging = async (page = 0, size = 5) => {
    try {
        const response = await axios.get(API_URL+"/item-pictures/all",{
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};



export const updateItemPicture = async (id, updatedItemPicture) => {
    try {
        const response = await axios.put(
            `${API_URL}/item-picture/update/${id}`,
            updatedItemPicture // Pass the full object
        );
        return response.data;
    } catch (error) {
        console.error("Error updating item picture:", error);
        throw error;
    }
};

  export const deleteItemPicture= async (itemPictureId) => {
    try {
      await axios.delete(`${API_URL}/item-picture/${itemPictureId}`);
    } catch (error) {
      console.error("Error deleting item-picture", error);
      throw error;
    }
  };
