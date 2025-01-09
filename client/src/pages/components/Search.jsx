import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Label, TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importation de l'icône de localisation
import { Select as Anas } from "flowbite-react";
import { Button } from "flowbite-react";

import Select from "react-select";

import logo from "../../../src/assets/logo.jpg";
import React, { useState } from "react";

function Search() {
  const tryMe = () => {
    console.log("hello");
  };
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  // Lorsqu'une spécialité est sélectionnée
  const handleSpecialtyChange = (selectedOption) => {
    setSelectedSpecialty(selectedOption);
    console.log("Spécialité sélectionnée:", selectedOption);
  };
  const specialties = [
    { value: "cardiology", label: "Cardiologie" },
    { value: "neurology", label: "Neurologie" },
    { value: "dermatology", label: "Dermatologie" },
    { value: "pediatrics", label: "Pédiatrie" },
    { value: "orthopedics", label: "Orthopédie" },
    { value: "gynecology", label: "Gynécologie" },
    { value: "general_surgery", label: "Chirurgie générale" },
    { value: "radiology", label: "Radiologie" },
    { value: "psychiatry", label: "Psychiatrie" },
  ];
  // Données pour les pays avec leurs drapeaux
  const options = [
    {
      value: "TN",
      label: "Tunisie",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",
    },
    {
      value: "DZ",
      label: "Algérie",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
    },
    {
      value: "FR",
      label: "France",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    },
    {
      value: "US",
      label: "États-Unis",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    },
  ];

  // Fonction pour gérer la sélection
  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    console.log("Pays sélectionné:", selectedOption);
  };

  const customSingleValue = ({ data }) => (
    <div className="flex items-center">
      <FaMapMarkerAlt className="flex items-center text-gray-500" />{" "}
      {/* Icône à gauche du texte sélectionné */}
      {data.label}
    </div>
  );

  return (
    <Tabs aria-label="Default tabs" variant="default" className="flex ">
      <Tabs.Item
        active
        title=" Medecin "
        icon={HiUserCircle}
        className="flex items-center   "
      >
        <div className="flex items-center ">
          <TextInput
            id="large"
            type="text"
            sizing="sm"
            className="w-96  flex items-center"
            icon={CiSearch}
            placeholder="Rechercher un médecin"
          />

          <div className="w-96">
            <Select
              id="specialty"
              options={specialties}
              onChange={handleSpecialtyChange}
              value={selectedSpecialty}
              placeholder="Spécialité"
              isSearchable // Activer la recherche
              className=""
            />
          </div>
          <div className="w-40   ">
            <Select
              value={selectedCountry}
              onChange={handleChange}
              options={options}
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <img src={e.image} alt={e.label} className="w-6 h-6 mr-2" />
                  {e.label}
                </div>
              )}
            />
          </div>
          <div className="w-96 ">
            <Anas id="countries" required icon={FaMapMarkerAlt}>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Anas>
          </div>
          <Button
            className=" w-24  h-10 flex  items-center     "
            onClick={tryMe}
          >
            <CiSearch className="w-8 h-8" />{" "}
          </Button>
        </div>
      </Tabs.Item>
      <Tabs.Item title="Dashboard" icon={MdDashboard}>
        This is{" "}
        <span className="font-medium text-gray-800 dark:text-white">
          Dashboard tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        This is{" "}
        <span className="font-medium text-gray-800 dark:text-white">
          Settings tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        This is{" "}
        <span className="font-medium text-gray-800 dark:text-white">
          Contacts tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
    </Tabs>
  );
}
export default Search;
