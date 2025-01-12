import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function GoogleFacebook({ className = "" }) {
  return (
    <div className={`flex flex-col gap-4  ${className}`}>
      <button className="bg-blue-500 text-white rounded-2xl p-2  flex gap-2 justify-center items-center">
        {" "}
        <FaFacebookSquare />
        S'inscrire avec Facebook
      </button>
      <button className="bg-blue-500 text-white rounded-2xl p-2  flex gap-2 justify-center items-center">
        {" "}
        <FaGoogle />
        S'inscrire avec Google{" "}
      </button>
    </div>
  );
}

export default GoogleFacebook;
