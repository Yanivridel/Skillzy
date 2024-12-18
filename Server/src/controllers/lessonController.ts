import { Request, Response, NextFunction } from 'express';
import { MongoError } from 'mongodb'; 
import userModel from "../models/userModel";
import Lesson from '../models/lessonModel';
import jwt from 'jsonwebtoken';

// utils imports
import { hashPassword, comparePassword } from "../utils/auth";
import { AuthenticatedRequest } from 'src/types/expressTypes';
import mongoose from 'mongoose';
import lessonModel from '../models/lessonModel';

const JTW_EXPIRATION = { expiresIn: '1d'};

// CREATE LESSON
interface createLessonType {
    subject: string;
    title: string;
    startDate: Date;
    duration: number;
    description: string;
    level: string;
    membersLimit: number;
}
export const createLesson = async (req: Request<{},{},createLessonType> , res: Response): Promise<void> => {
    try {
        let { subject, title, startDate, duration, description, level, membersLimit } = req.body
        const authenticatedReq = req as AuthenticatedRequest;
        const { userId } = authenticatedReq;

        if(!subject || !title || !startDate || !duration || !level || !membersLimit || !userId) {
            res.status(400).send({status: "error", message: "Missing required parameters"});
            return;
        }
        if(!description) description = '';

        const newLesson = new lessonModel({
            teacher: new mongoose.Types.ObjectId(userId),
            subject,
            title,
            startDate,
            duration,
            description,
            level,
            membersLimit
        });
    
        await newLesson.save();
    
        res.status(201).send({
            status: "success",
            message: "lesson created successfully",
            newLesson
        });

    } catch (error) {
        console.log(error); // dev mode
        res.status(500).json({
            status: "error",
            message: "An unexpected error occurred",
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}

// GET ALL LESSONS
export const getAllLessons = async (req: Request, res: Response): Promise<void> => {
    try {

        const lessons = await lessonModel.find();

        if (!lessons) {
            res.status(404).json({ status:"error", message: 'There are no lessons' });
            return;
        }

        res.status(200).send({
            status: "success",
            message: "Lessons found successfully",
            lessons
        })
    } catch (error) {
        console.log(error); // dev mode
        res.status(500).json({
            status: "error",
            message: "An unexpected error occurred",
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}