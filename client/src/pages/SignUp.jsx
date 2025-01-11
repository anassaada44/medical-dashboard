import doctor from "../assets/doctor.jpg";
import React, { useState } from "react";
import { Select as Anas } from "flowbite-react";

import GoogleFacebook from "./components/GoogleFacebook";

function SignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [genre, setGenre] = useState("");
  const [numeroPays, setNumeroPays] = useState(false);
  const handlePays = () => {
    setNumeroPays(!numeroPays);
  };

  const handleChange = (e) => {
    setGenre(e.target.value);
  };

  const toggleForm = () => setIsLogin(false);
  const truea = () => setIsLogin(true);
  return (
    <div className="flex  ">
      <img src={doctor} alt="doctor" className="h-[500px]  flex-1" />
      <div className="flex flex-col flex-1 items-center  gap-4">
        {isLogin ? (
          <h4 className="text-center text-3xl font-bold ">
            Vous avez déjà utilisé ?
          </h4>
        ) : (
          <h4 className="text-center">Vous n'avez pas de compte ?</h4>
        )}
        <div className="flex justify-center gap-4     ">
          <span onClick={truea} className="cursor-pointer">
            connexion
            <div className="mt-1 h-1 w-17 mx-auto bg-slate-500     "></div>
          </span>
          <span onClick={toggleForm} className="cursor-pointer">
            inscription
            <div className="mt-1 h-1 w-16 mx-auto  bg-slate-500   "></div>
          </span>
        </div>
        <div className="w-[300px] ">{isLogin ? login() : register()}</div>
      </div>
    </div>
  );
  function register() {
    return (
      <div className="flex flex-col">
        <span className="bg-yellow-500  text-white text-center p-1 rounded-lg mx-4">
          {" "}
          Vous êtes professionnel de santé ?{" "}
        </span>
        <div class="flex items-center my-4">
          <hr class="flex-grow border-t-2 border-gray-300" />
          <span class="mx-4 text-gray-500">OU</span>
          <hr class="flex-grow border-t-2 border-gray-300" />
        </div>
        <div className="  ">
          <GoogleFacebook />
        </div>
        <div class="flex items-center my-4">
          <hr class="flex-grow border-t-2 border-gray-300" />
          <span class="mx-4 text-gray-500">OU</span>
          <hr class="flex-grow border-t-2 border-gray-300" />
        </div>
        <div className="text-center">
          Merci de saisir vos informations
          <div className="flex space-x-4  justify-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="genre"
                value="homme"
                checked={genre === "homme"}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Homme</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="genre"
                value="femme"
                checked={genre === "femme"}
                onChange={handleChange}
                className="form-radio text-pink-500"
              />
              <span className="ml-2">Femme</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <input type="text" placeholder="Nom" className="rounded-lg h-9" />
          <input type="text" placeholder="Prénom" className="rounded-lg h-9" />
          <div className="flex items-center  ">
            <span
              onClick={handlePays}
              className="cursor-pointer  border text-lg py-1"
            >
              +216
            </span>

            <input
              type="text"
              placeholder="Nom"
              className=" h-9  w-full rounded-tr-lg rounded-br-lg"
            />
          </div>

          <input type="text" placeholder="Nom" className="rounded-lg h-9" />
          <input type="text" placeholder="Nom" className="rounded-lg h-9" />
        </div>

        <button className="bg-slate-500 text-white">S'inscrire</button>
      </div>
    );
  }
  function login() {
    return (
      <div className="flex flex-col  ">
        <input
          type="text"
          placeholder="Email"
          className="border-2 border-slate-500   h-8  rounded-lg"
        />
        <input
          type="text"
          placeholder="Mot de passe"
          className="border-2 border-slate-500"
        />
        <button className="bg-slate-500 text-white">Se connecter</button>
      </div>
    );
  }
}

export default SignUp;
