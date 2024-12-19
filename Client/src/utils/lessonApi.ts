import axios from "axios";
import { getCookie } from "./cookies";

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

export const registerLesson = async (lessonId: string) => {
    try {
        const { data } = await axios.post(`${API_URL}/api/lessons/register/${lessonId}`, {}, {
            headers: {
                Authorization: `Bearer ${getCookie("token")}`
            },
        });
        return data;
    } catch (error) {
        console.error('Error register to lesson:', error);
        throw error;
    }
};