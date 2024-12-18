import mongoose from "mongoose";

export interface User {
    fName: string;
    lName: string;
    phone: string;
    email: string;
    password: string;
    role: string;
    userImage: string;
    video: string;
    myTeachers: mongoose.Types.ObjectId[];
    schedule: mongoose.Types.ObjectId[]; 
    rating: number | null;
    coins: number;
    tradeable: boolean;
    location: string;
    coordinates: number[];
    bio: string;
}

export interface IFormDataSingUp {
    fName: string;
    lName: string;
    phone: string;
    email: string;
    password: string;
    role: string;
}
export interface IFormDataLogIn {
    email: string;
    password: string;
}

export interface Subject {name: string; img: string}