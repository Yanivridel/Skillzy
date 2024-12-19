import { RootState } from "@/store";
import { editProfile, getUserById } from "@/utils/userApi";
import mongoose from "mongoose";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import defultImg from "./../assets/images/anonymous-user.png";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlices";
import LessonCard from "@/components/TeacherCard/teacherCard";

interface ProfileData {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  userImage: string | null;
  myTeachers: mongoose.Types.ObjectId[];
  schedule: string[];
  location: string;
  bio: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedProfile, setEditedProfile] = useState<ProfileData | null>(null);

  const dispatch = useDispatch();
  const userLogged = useSelector((state: RootState) => state.userLogged);

  async function getUser(id: string) {
    try {
      setLoading(true);
      const { user } = await getUserById(id);
      setProfile(user);
      setEditedProfile(user);
    } catch (err) {
      setError("Failed to load profile");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userLogged._id) {
      getUser(userLogged._id.toString());
    }
  }, [userLogged._id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedProfile(profile);
  };

  const handleSaveClick = async () => {
    if (editedProfile) {
      try {
        const { user } = await editProfile(editedProfile as any);
        setProfile(user);
        dispatch(setUser(user));
        setIsEditing(false);
      } catch (err) {
        setError("Failed to save profile");
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ProfileData
  ) => {
    if (editedProfile) {
      setEditedProfile({
        ...editedProfile,
        [field]: e.target.value,
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex justify-center w-full flex-col h-full m-auto">
      <div className="md:max-w-[600px] mx-auto p-6 m-4 h-full rounded-lg w-[90%] bg-gray-100 shadow-lg">
        <h2 className="text-center text-2xl font-semibold pb-3">Your Profile</h2>

        <div className="profile-info mb-6 flex flex-col items-center border-4 rounded-lg border-[var(--container-bg)] p-8 bg-white shadow-lg">
          <div className="profile-pic mb-4">
            <img
              src={profile?.userImage || defultImg}
              alt="Profile"
              className="rounded-full object-cover w-[150px] h-[150px] mb-4 border-2 border-primary"
            />
          </div>

          <div className="profile-details text-center flex flex-col gap-3 w-full">
            <div className="block mb-2">
              <strong>First Name:</strong>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile?.fName || ""}
                  onChange={(e) => handleInputChange(e, "fName")}
                  className="border rounded px-2 py-1 w-full md:w-[80%] mx-auto"
                />
              ) : (
                <p>{profile?.fName || "N/A"}</p>
              )}
            </div>

            <div className="block mb-2">
              <strong>Last Name:</strong>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile?.lName || ""}
                  onChange={(e) => handleInputChange(e, "lName")}
                  className="border rounded px-2 py-1 w-full md:w-[80%] mx-auto"
                />
              ) : (
                <p>{profile?.lName || "N/A"}</p>
              )}
            </div>

            <div className="block mb-2">
              <strong>Location:</strong>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile?.location || ""}
                  onChange={(e) => handleInputChange(e, "location")}
                  className="border rounded px-2 py-1 w-full md:w-[80%] mx-auto"
                />
              ) : (
                <p>{profile?.location || "N/A"}</p>
              )}
            </div>

            <div className="block mb-2">
              <strong>Bio:</strong>
              {isEditing ? (
                <input
                  value={editedProfile?.bio || ""}
                  onChange={(e) => handleInputChange(e, "bio")}
                  className="border rounded px-2 py-1 w-full md:w-[80%] mx-auto"
                />
              ) : (
                <p>{profile?.bio || "N/A"}</p>
              )}
            </div>
          </div>
        </div>
        <div className="saved-teachers mb-6 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-2">Saved Teachers</h2>
          <ul className="list-disc pl-6">
            {profile?.myTeachers?.length > 0 ? (
              profile.myTeachers.map((teacher, index) => (
                <li key={index}>{teacher._id}</li>
              ))
            ) : (
              <li>No saved teachers</li>
            )}
          </ul>
        </div>

        <div className="lessons mb-6 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-2">Your Lessons</h2>
          <ul className="list-disc pl-6">
            {profile?.schedule?.length > 0 ? (
              profile.schedule.map((lesson, index) => (
                <li key={index}><LessonCard lesson={lesson} profile={true}/></li>
              ))
            ) : (
              <li>No lessons scheduled</li>
            )}
          </ul>
        </div>

        <div className="flex justify-center gap-4 items-center">
          {!isEditing ? (
            <button
              onClick={handleEditClick}
              className="px-6 py-3 bg-[hsl(25,100%,62%)] text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-[hsl(25,90%,55%)] shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full md:w-[30%]"


            >
              Edit
            </button>
          ) : (
            <div className="flex justify-center gap-4 items-center w-full">
              <button
                onClick={handleSaveClick}
                className="px-6 py-3 bg-green-800 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-green-900 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full md:w-[30%]"
                >
                Save
              </button>
              <button
                onClick={handleCancelClick}
                className="px-6 py-3 bg-red-800 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-red-900 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full md:w-[30%]"

              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
