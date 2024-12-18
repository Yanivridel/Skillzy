const subjects = [
    { name: "Mathematics", img: "../assets/imeges/Mathematics.jpg" },
    { name: "Science", img: "../assets/imeges/Science.jpg" },
    { name: "Computer Science", img: "../assets/imeges/Computer Science.jpg" },
    { name: "Engineering", img: "https://via.placeholder.com/150?text=Engineering" },
    { name: "History", img: "https://via.placeholder.com/150?text=History" },
    { name: "Geography", img: "https://via.placeholder.com/150?text=Geography" },
    { name: "Languages", img: "https://via.placeholder.com/150?text=Languages" },
    { name: "Literature", img: "https://via.placeholder.com/150?text=Literature" },
    { name: "Arts", img: "https://via.placeholder.com/150?text=Arts" },
    { name: "Music", img: "https://via.placeholder.com/150?text=Music" },
    { name: "Physical Education", img: "https://via.placeholder.com/150?text=Physical+Education" },
    { name: "Health and Wellness", img: "https://via.placeholder.com/150?text=Health+and+Wellness" },
    { name: "Business", img: "https://via.placeholder.com/150?text=Business" },
    { name: "Economics", img: "https://via.placeholder.com/150?text=Economics" },
    { name: "Finance", img: "https://via.placeholder.com/150?text=Finance" },
    { name: "Law", img: "https://via.placeholder.com/150?text=Law" },
    { name: "Political Science", img: "https://via.placeholder.com/150?text=Political+Science" },
    { name: "Philosophy", img: "https://via.placeholder.com/150?text=Philosophy" },
    { name: "Psychology", img: "https://via.placeholder.com/150?text=Psychology" },
    { name: "Sociology", img: "https://via.placeholder.com/150?text=Sociology" },
    { name: "Anthropology", img: "https://via.placeholder.com/150?text=Anthropology" },
    { name: "Environmental Studies", img: "https://via.placeholder.com/150?text=Environmental+Studies" },
    { name: "Religious Studies", img: "https://via.placeholder.com/150?text=Religious+Studies" },
    { name: "Vocational Skills", img: "https://via.placeholder.com/150?text=Vocational+Skills" },
    { name: "Technology", img: "https://via.placeholder.com/150?text=Technology" },
    { name: "Media Studies", img: "https://via.placeholder.com/150?text=Media+Studies" },
    { name: "Communication", img: "https://via.placeholder.com/150?text=Communication" },
    { name: "Public Speaking", img: "https://via.placeholder.com/150?text=Public+Speaking" },
    { name: "Creative Writing", img: "https://via.placeholder.com/150?text=Creative+Writing" },
    { name: "Architecture", img: "https://via.placeholder.com/150?text=Architecture" },
  ];


  import React from 'react'
  
  function subCard() {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
          <div
            className="flex flex-col justify-end bg-cover bg-center rounded-lg shadow-md h-40 text-white"
            style={{
              backgroundImage: "https://via.placeholder.com/150?text=Mathematics",
            }}
          >
            <div className="bg-black bg-opacity-50 p-2 text-center rounded-b-lg">
            Mathematics
            </div>
          </div>
     
      </div>
    )
  }
  
  export default subCard
  