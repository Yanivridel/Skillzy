import mongoose, { Types } from "mongoose"
import { User } from "./userTypes";

export interface Lesson {
    _id: mongoose.Types.ObjectId;
    subject: string;
    title: string;
    startDate: Date;
    duration: number;
    teacher: User;
    description: string;
    membersLimit: number;
    participants: mongoose.Types.ObjectId[];
    level: string;
    price: number;
}

export interface LatLng {
    lat: number;
    lng: number;
    info?: string;
}