import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen"
        //style="background-image: url('images/background-images.jpg');"
        style={{ backgroundImage: "url('images/background-images.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <div className="text-left text-white">
            <h1 className="text-5xl font-bold mb-4">
              Bienvenue sur notre Rexpat Assistant
            </h1>
            <p className="text-lg mb-8">
              Découvrez nos services exceptionnels et bien plus encore.
            </p>
            {/* <a
              href="#"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              En savoir plus
            </a> */}
            <Button label="En savoir plus" href="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
