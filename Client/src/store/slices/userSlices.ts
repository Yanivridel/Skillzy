import { removeCookie } from "@/utils/cookies";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import mongoose, {  Types } from 'mongoose'


interface UserState {
    isLogged: boolean;
    _id: Types.ObjectId | null;
    fName: string;
    lName: string;
    email: string;
    userImage: string;
    phone: string;
    role: string;
    coins: number;
    myTeachers: Types.ObjectId[];
    schedule: Types.ObjectId[];
    tradeable: boolean;
}

interface SetUserPayload {
    _id: Types.ObjectId;
    fName: string;
    lName: string;
    email: string;
    userImage: string;
    phone: string;
    role: string;
    coins: number;
    myTeachers: Types.ObjectId[];
    schedule: Types.ObjectId[];
    tradeable: boolean;
}

interface TeacherPayload {
    teacherId: string;
}
interface LessonPayload {
    lessonId: string;
}

const initialState: UserState = {
    isLogged: false,
    _id: null,
    fName: "",
    lName: "",
    email: "",
    userImage: "",
    phone: "",
    role: "",
    coins: 0,
    myTeachers: [],
    schedule: [],
    tradeable: false
};

const userSlice = createSlice({
    name: "userLogged",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<SetUserPayload>) => {
            const { fName, lName, email, userImage, phone, role, coins, tradeable, schedule, myTeachers, _id } = action.payload;
        
            if (fName && email && lName && phone && role && schedule && myTeachers) {
                state._id = _id;
                state.fName = fName;
                state.lName = lName;
                state.email = email;
                state.userImage = userImage;
                state.myTeachers = myTeachers;
                state.schedule = schedule;
                state.phone = phone;
                state.role = role;
                state.coins = coins;
                state.tradeable = tradeable;
                state.isLogged = true;
            } else {
                console.error("Invalid user data:", action.payload);
            }
        },
        unsetUser: (state) => {
            state._id = null;
            state.isLogged= false,
            state.fName= "",
            state.lName= "",
            state.email= "",
            state.userImage= "",
            state.phone= "",
            state.role= "",
            state.coins= 0,
            state.myTeachers= [],
            state.schedule= [],
            state.tradeable= false
            removeCookie("token");
        },
        addLikedTeacher: (state, action: PayloadAction<TeacherPayload>) => {
            const { teacherId } = action.payload;
            const objTeacherId = new mongoose.Types.ObjectId(teacherId);
            if (!state.myTeachers.includes(objTeacherId)) {
                state.myTeachers.push(objTeacherId);
            }
        },
        deleteLikedTeacher: (state, action: PayloadAction<TeacherPayload>) => {
            const { teacherId } = action.payload;
            const objTeacherId = new mongoose.Types.ObjectId(teacherId);
            state.myTeachers = state.myTeachers.filter(
                (teacher) => teacher !== objTeacherId
            );
        },
        addLessonSchedule: (state, action: PayloadAction<LessonPayload>) => {
            const { lessonId } = action.payload;
            const objLessonId = new mongoose.Types.ObjectId(lessonId);
            if (!state.myTeachers.includes(objLessonId)) {
                state.myTeachers.push(objLessonId);
            }
        },
        deleteLessonSchedule: (state, action: PayloadAction<LessonPayload>) => {
            const { lessonId } = action.payload;
            const objLessonId = new mongoose.Types.ObjectId(lessonId);
            state.myTeachers = state.myTeachers.filter(
                (teacher) => teacher !== objLessonId
            );
        },
    },
})

export const { setUser, unsetUser, addLikedTeacher, deleteLikedTeacher,
    addLessonSchedule, deleteLessonSchedule } = userSlice.actions;

export default userSlice.reducer;