import doctor from "../assets/doctor.jpg";
import React, { useState } from "react";
import Search from "./components/Search";
import acteMedicaux from "../assets/dummy";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Questions from "./components/Questions";
import Magazine from "./components/Magazine";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="flex flex-col  ">
      <div className="flex       ">
        {/* Texte à gauche */}
        <div className="flex w-3/4 flex-col ">
          <span className=" text-sm font-bold ml-8 mt-8 md:text-5xl ">
            Prenez rapidement un rendez-vous avec votre médecin !
          </span>
          <span className=" text-2xl font-bold ml-8 mt-8        ">
            Sélectionnez votre médecin, choisissez la date et l'heure de votre
            rdv et recevez votre sms/mail de confirmation. C’est aussi simple
            que ça !
          </span>
        </div>

        {/* Image à droite */}
        <div className="flex w-1/4 justify-center ">
          <img src={doctor} alt="Placeholder" className="w-60 h-60  " />
        </div>
      </div>
      <Search />

      <span className="text-5xl font-bold flex justify-center text-center mt-8  ">
        Pourquoi prendre rendez-vous avec Med.tn?
      </span>
      <span className="text-2xl font-bold flex justify-center text-center mt-8">
        {" "}
        Avec Med, prenez rendez-vous en ligne avec votre médecin autrement !
      </span>
      <div className="flex justify-between mt-8 mx-56">
        <div className="flex flex-col">
          <img src="https://cdn.med.tn/img/step1.svg" alt="Placeholder" />
          <span className="text-sm flex justify-center text-center mt-8">
            {" "}
            Accédez rapidement à votre médecin
          </span>
        </div>
        <div className="flex flex-col">
          <img src="https://cdn.med.tn/img/step1.svg" alt="Placeholder" />
          <span className="text-sm flex justify-center text-center mt-8">
            {" "}
            Accédez rapidement à votre médecin
          </span>
        </div>{" "}
        <div className="flex flex-col mb-8">
          <img src="https://cdn.med.tn/img/step1.svg" alt="Placeholder" />
          <span className="text-sm flex justify-center text-center mt-8">
            {" "}
            Accédez rapidement à votre médecin
          </span>
        </div>
      </div>
      <div className="bg-gray-200 pl-10 mt-6 ">
        <h6 className="text-3xl font-bold pt-10 mb-5 ">Actes médicaux </h6>
        <div className="flex flex-wrap gap-4 p-4   ">
          {acteMedicaux.map((acte) => (
            <span
              key={acte.id}
              className=" px-4 hover:bg-amber-500 cursor-pointer    rounded-3xl bg-white flex "
            >
              {acte.titre}{" "}
            </span>
          ))}
        </div>
        <div className=" flex items-center justify-between p-4">
          <h6 className="text-3xl font-bold pt-10 mb-5 ">
            Questions médicales{" "}
          </h6>
          <div className="flex gap-4">
            <Link to="/" className="bg-yellow-200 p-2 rounded-3xl">
              Poser ma question
            </Link>
            <Link to="/" className="bg-green-300    p-2 rounded-3xl">
              Poser ma question
            </Link>
          </div>
        </div>
        <div className="flex space-x-4  mr-8  ">
          <div className="flex flex-col space-y-2 w-1/3">
            <Questions titre="hellé" />
            <Questions titre="hellé" />
            <Questions titre="hellé" />
          </div>
          <div className="flex flex-col space-y-2 w-1/3">
            <Questions titre="hellé" />
            <Questions titre="hellé" />
            <Questions titre="hellé" />
          </div>
          <div className="flex flex-col space-y-2 w-1/3">
            <Questions titre="hellé" />
            <Questions titre="hellé" />
            <Questions titre="hellé" />
          </div>
        </div>
      </div>
      <Magazine />
    </div>
  );
}

export default Home;
