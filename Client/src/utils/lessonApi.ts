import axios from "axios";

const LOCAL_HOST = 'http://localhost:3000';
const API_URL = LOCAL_HOST;

export const getAllLessons = async () => {
    try {
        const { data } = await axios.get(`${API_URL}/api/lessons`);
        return data;
    } catch (error) {
        console.error('Error getting all lessons:', error);
        throw error;
    }
};