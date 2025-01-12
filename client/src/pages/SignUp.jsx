import doctor from "../assets/doctor.jpg";
import React, { useState } from "react";
import { Select as Anas } from "flowbite-react";
import { Radio } from "flowbite-react";

import GoogleFacebook from "./components/GoogleFacebook";

function SignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [genre, setGenre] = useState("");
  const [data, setData] = useState(false);
  const [numeroPays, setNumeroPays] = useState(false);
  const toggleForm = () => setIsLogin(false);
  const truea = () => setIsLogin(true);
  const [isChecked, setIsChecked] = useState(false);
  const [MotDePasseOublier, setMotDePasseOublier] = useState(true);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    numero: "",
    sexe: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted!");
  };
  const handleLogin = (e) => {
    e.preventDefault();

    alert("Form Submitted!");
  };

  const handlePays = () => {
    setNumeroPays(!numeroPays);
  };

  const handleChanged = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div className="flex  ">
      <img src={doctor} alt="doctor" className="h-[500px]  flex-1" />
      <div className="flex flex-col flex-1 items-center  gap-4">
        {isLogin ? (
          <h4 className="text-center text-3xl font-bold ">
            Vous avez déjà utilisé ?
          </h4>
        ) : (
          <h4 className="text-center text-3xl font-bold      ">
            Vous n'avez pas de compte ?
          </h4>
        )}
        <div className="flex justify-center gap-4     ">
          <span onClick={truea} className=" cursor-pointer">
            Connexion
            <div className="mt-1 h-1 w-17 mx-auto bg-slate-500     "></div>
          </span>
          <span onClick={toggleForm} className="cursor-pointer">
            Inscription
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
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t-2 border-gray-300" />
          <span className="mx-4 text-gray-500">OU</span>
          <hr className="flex-grow border-t-2 border-gray-300" />
        </div>
        <div className="  ">
          <GoogleFacebook />
        </div>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t-2 border-gray-300" />
          <span className="mx-4 text-gray-500">OU</span>
          <hr className="flex-grow border-t-2 border-gray-300" />
        </div>
        <div className="text-center  ">
          <span>Merci de saisir vos informations</span>

          <div className="flex space-x-4  justify-center  mt-4">
            <form
              onSubmit={handleSubmit}
              className="flex items-center mb-4 flex-col"
            >
              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sexe"
                    value="Homme"
                    id="sexe"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Homme
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="sexe"
                    name="sexe"
                    value="Femme"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Femme
                </label>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <input
                  type="text"
                  id="nom"
                  placeholder="Nom"
                  className="rounded-lg h-9"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  className="rounded-lg h-9"
                  id="prenom"
                  onChange={handleChange}
                />

                <div className="flex items-center  ">
                  <span
                    type="number"
                    onChange={handleChange}
                    className="cursor-pointer  border text-lg py-1"
                    id="preNumero"
                  >
                    +216
                  </span>

                  <input
                    type="text"
                    placeholder="Numéro"
                    className=" h-9  w-full rounded-tr-lg rounded-br-lg"
                    onChange={handleChange}
                    id="numero"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-lg h-9 "
                  id="email"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="password"
                  placeholder="Mot de passe"
                  className="rounded-lg h-9"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>

          <button type="submit" className="bg-slate-500 w-full  text-white">
            S'inscrire
          </button>
        </div>
      </div>
    );
  }
  function login() {
    return (
      <div className="flex flex-col  ">
        <GoogleFacebook className="mt-4" />
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t-2 border-gray-300" />
          <span className="mx-4 text-gray-500">OU</span>
          <hr className="flex-grow border-t-2 border-gray-300" />
        </div>
        <div>{MotDePasseOublier ? loginForm() : resetForm()}</div>
      </div>
    );
  }
  function loginForm() {
    return (
      <div>
        <form
          onSubmit={handleLogin}
          className="flex items-center gap-4  flex-col"
        >
          <input
            type="email"
            id="email"
            placeholder="email"
            className="rounded-lg h-9 w-full"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="rounded-lg h-9 w-full"
            onChange={handleChange}
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">
              Se souvenir de moi sur cet appareil
            </label>
          </div>
          <button
            type="sumbmit"
            className="w-full bg-blue-800 text-white p-2 rounded-lg"
          >
            {" "}
            Se Connecter{" "}
          </button>
        </form>
        <span
          onClick={() => setMotDePasseOublier(false)}
          className="cursor-pointer"
        >
          Vous avez perdu votre mot de passe ?{" "}
        </span>
      </div>
    );
  }
  function resetForm() {
    return (
      <div className="text-center flex flex-col">
        <span className="text-sm ">Saisissez votre adresse email. </span>
        <span className="text-sm ">
          Vous recevrez un email pour changer votre mot de passe.{" "}
        </span>

        <form
          onSubmit={handleLogin}
          className="flex items-center gap-4  flex-col"
        >
          <input
            type="email"
            id="email"
            placeholder="email"
            className="rounded-lg h-9 w-full"
            onChange={handleChange}
          />

          <button
            type="sumbmit"
            className="w-full bg-blue-800 text-white p-2 rounded-lg"
          >
            Réinitialiser
          </button>
        </form>
        <span
          onClick={() => setMotDePasseOublier(true)}
          className="cursor-pointer"
        >
          Connectez-vous{" "}
        </span>
      </div>
    );
  }
}

export default SignUp;
