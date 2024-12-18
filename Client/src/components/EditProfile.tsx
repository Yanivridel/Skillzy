// import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, Button } from '@shadcn/ui';
// import { useState } from 'react';

// const EditProfile: React.FC<EditProfileProps> = ({ open, handleClose, user, token }) => {
//   const [image, setImage] = useState<File | null>(null);
//   const [uploadStatus, setUploadStatus] = useState<string>("");
//   const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");
//   const [isUploading, setIsUploading] = useState<boolean>(false);
//   const [username, setUsername] = useState<string>(user?.username || "");
//   const [bio, setBio] = useState<string>(user?.bio || "");
//   const [phone, setPhone] = useState<string>(user?.phone || "");
//   const [email, setEmail] = useState<string>(user?.email || "");

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!image) {
//       setUploadStatus("Please select an image to upload.");
//       return;
//     }

//     // const formData = new FormData();
//     // formData.append("file", image);
//     // formData.append("upload_preset", "Mock-Social-Network-Preset");
//     // formData.append("cloud_name", "dnnifnoyf");
//     // setIsUploading(true);

// //     try {
// //       const response = await axios.post(
// //         `https://api.cloudinary.com/v1_1/dnnifnoyf/image/upload`,
// //         formData
// //       );
// //       setUploadedImageUrl(response.data.secure_url);
// //       setUploadStatus("Image uploaded successfully!");
// //     } catch (error) {
// //       console.error(error);
// //       setUploadStatus("Error uploading image.");
// //     } finally {
// //       setIsUploading(false);
// //     }
// //   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTrigger asChild>
//         <Button variant="outline">Open Dialog</Button>
//       </DialogTrigger>
      
//       <DialogContent>
//         <DialogTitle>Edit your Profile</DialogTitle>
//         <DialogDescription>
//           <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
//             <img
//               className="w-20 h-20 rounded-full object-cover mx-auto m-4"
//               src={user.profilePic || " Edit profile pic"}
//               alt="profile pic"
//             />

//             <label
//               htmlFor="fileInput"
//               style={{
//                 display: "inline-block",
//                 backgroundColor: "rgb(30,30,30)",
//                 padding: "10px 20px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 color: "rgb(220,220,220)",
//                 fontSize: "0.9rem",
//                 border: "1px solid rgb(80,80,80)",
//               }}
//             >
//               Choose File
//             </label>
//             <input
//               id="fileInput"
//               type="file"
//               onChange={handleImageChange}
//               style={{ display: "none" }}
//             />
//             <button
//               onClick={handleUpload}
//               className="pt-3 block mx-auto text-[#0095f6] font-bold text-sm cursor-pointer bg-none border-none hover:text-blue-400 transition"
//             >
//               Upload
//             </button>
//           </Box>
//           <Box>
//             {isUploading ? (
//               <div className="flex justify-center pb-3">
//                 <ClipLoader color="#ffffff" size={40} />
//               </div>
//             ) : (
//               <p style={{ color: "rgb(180,180,180)", fontSize: "0.85rem" }}>
//                 {uploadStatus}
//               </p>
//             )}
//           </Box>
//           <Box>
//             <div className="field">
//               <label className="block text-sm font-bold mb-1">Username</label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full py-2 px-4 mb-3 text-sm bg-black rounded-md border border-gray-600"
//               />
//             </div>
//             <div className="field">
//               <label className="block text-sm font-bold mb-1">Bio</label>
//               <textarea
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//                 className="w-full py-2 px-4 mb-3 text-sm bg-black rounded-md border border-gray-600"
//                 rows={3}
//               ></textarea>
//             </div>
//             <div className="field">
//               <label className="block text-sm font-bold mb-1">Phone</label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full py-2 px-4 mb-3 text-sm bg-black rounded-md border border-gray-600"
//               />
//             </div>
//             <div className="field">
//               <label className="block text-sm font-bold mb-1">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full py-2 px-4 mb-3 text-sm bg-black rounded-md border border-gray-600"
//               />
//             </div>
//           </Box>
//         </DialogDescription>

//         <DialogFooter>
//           <Button
//             onClick={() => {
//               editProfile();
//               handleClose();
//               setTimeout(() => {
//                 window.location.reload();
//               }, 300);
//             }}
//             variant="outline"
//           >
//             Save changes
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditProfile;
