import React, { useEffect, useState } from 'react';


interface ProfileData {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  userImage: string | null;
  myTeachers: string[];
  schedule: string[];
  location: string;
  bio: string;
}

const Profile = ({ userId }: { userId: string }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`);

        const data = await response.json();

        if (response.ok) {
          setProfile(data.user); // Set the profile data
        } else {
          setError(data.message); // Show error message
        }
      } catch (err) {
        setError('An error occurred while fetching the profile data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex justify-center w-full flex-col h-[100%] m-auto">
      <div className="md:max-w-[450px] mx-auto p-4 m-4 h-[100%] rounded-lg w-[60%]">
        <h2 className="text-center pb-3">Your Profile</h2>

        <div className="profile-info mb-6 flex flex-col items-center border-4 rounded-lg border-[var(--container-bg)] p-8">
          <div className="profile-pic mb-4">
            <img
              src={profile?.userImage || '/path/to/default-image.png'}
              alt="Profile"
              className="rounded-full object-cover w-[150px] h-[150px] mb-4 border-2 border-primary"
            />
            {/* Optionally, allow the user to update the profile image */}
            <input type="file" accept="image/*" className="p-2 border-2 rounded-md" />
          </div>

          <div className="profile-details text-center flex gap-3">
            <label className="block mb-2">
              First Name:
              <input
                type="text"
                value={profile?.fName || ''}
                readOnly
                className="w-full px-4 py-2 border rounded text-[var(--input-text)] mb-2"
              />
            </label>

            <label className="block mb-2">
              Last Name:
              <input
                type="text"
                value={profile?.lName || ''}
                readOnly
                className="w-full px-4 py-2 border rounded text-[var(--input-text)] mb-2"
              />
            </label>

            <label className="block mb-2">
              Email:
              <input
                type="email"
                value={profile?.email || ''}
                readOnly
                className="w-full px-4 py-2 border rounded text-[var(--input-text)] mb-2"
              />
            </label>

            <label className="block mb-2">
              Phone:
              <input
                type="text"
                value={profile?.phone || ''}
                readOnly
                className="w-full px-4 py-2 border rounded text-[var(--input-text)] mb-2"
              />
            </label>

            <label className="block mb-2">
              Location:
              <input
                type="text"
                value={profile?.location || ''}
                readOnly
                className="w-full px-4 py-2 border rounded text-[var(--input-text)] mb-2"
              />
            </label>

            <label className="block mb-2">
              Bio:
              <textarea
                value={profile?.bio || ''}
                readOnly
                className="w-full px-4 py-2 border rounded text-[var(--input-text)] mb-2"
              />
            </label>
          </div>
        </div>

        <div className="saved-teachers mb-6">
          <h2 className="text-xl font-semibold mb-2">Saved Teachers</h2>
          <ul className="list-disc pl-6">
            {profile?.myTeachers.map((teacher, index) => (
              <li key={index}>{teacher}</li>
            ))}
          </ul>
        </div>

        <div className="lessons mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Lessons</h2>
          <ul className="list-disc pl-6">
            {profile?.schedule.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
