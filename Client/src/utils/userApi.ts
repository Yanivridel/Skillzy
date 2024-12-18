import axios from 'axios';
// import { getCookie } from './cookies';
import { IFormData } from '@/types/userTypes';

const LOCAL_HOST = 'http://localhost:3000';
const API_URL = LOCAL_HOST;

export const createUser = async ({fName, lName, phone, email, password, role}: IFormData) => {
    try {
        const { data } = await axios.post(`${API_URL}/api/users/signup`, {fName, lName, phone, email, password, role });
        return data;
        console.log(data);
        
    } 
    catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
};