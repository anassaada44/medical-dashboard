import React, { useState } from "react";

function Questions({ titre }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="mt-8 ">
      {/* Div qui déclenche l'action au clic */}
      <div
        className=" bg-slate-300 text-black cursor-pointer rounded   p-4  "
        onClick={toggleVisibility}
      >
        {titre}
      </div>

      {/* Div qui sera affiché ou masqué */}
      {isVisible && (
        <div
          className={`bg-slate-300   rounded transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Ceci est un div caché qui est maintenant visible !
        </div>
      )}
    </div>
  );
}

export default Questions;
