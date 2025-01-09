import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import Footer from "./Footer";

function Magazine() {
  return (
    <div className="">
      <div className="flex justify-between mt-8 mx-32  text-2xl font-bold items-center">
        <span>Magazine</span>
        <Link
          to="/magazine"
          className="bg-blue-800 text-white py-2 rounded px-4 hover:bg-blue-900 text-center"
        >
          {" "}
          plus d'articles{" "}
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-3 bg-red-900 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4  ">
        {" "}
        <Carousel className="h-56 ">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
        </Carousel>
        <Carousel className="h-56 ">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
        </Carousel>{" "}
        <Carousel className="h-56 ">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
        </Carousel>
        <Carousel className="h-56">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Magazine;
