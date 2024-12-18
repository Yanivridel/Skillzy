import { Subject } from "@/types/userTypes";

import React from "react";

interface subCardProps {
  subject: Subject;
}

function SubCard({ subject }: subCardProps) {
  return (
    <div className="p-5">
      <div
        className="flex flex-col justify-end bg-cover bg-center rounded-lg shadow-md text-white transition-all duration-300 ease-in-out transform hover:rotate-3 hover:scale-110 hover:shadow-[0_50px_20px_rgba(0,0,0,0.2)]"
        style={{
          backgroundImage: `url(${subject.img})`,
          aspectRatio: "1",
          height: "0",
          paddingTop: "100%",
        }}
      >
        <div className="bg-black bg-opacity-50 p-4 text-center rounded-b-lg">
          {subject.name}
        </div>
      </div>
    </div>
  );
}

export default SubCard;
