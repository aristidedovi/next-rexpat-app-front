import Banner from "./Banner";

const HomePage = () => {
  return (
    <div>
      {/* // Home section */}
      <div>
        <Banner />
        {/* <div
          className="relative bg-cover bg-center h-screen"
          //style="background-image: url('images/background-images.jpg');"
          style={{ backgroundImage: "url('images/background-images.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
            <div className="text-left text-white">
              <h1 className="text-5xl font-bold mb-4">
                Bienvenue sur notre site !
              </h1>
              <p className="text-lg mb-8">
                Découvrez nos services exceptionnels et bien plus encore.
              </p>
              <a
                href="#"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                À propos de nous
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Nous sommes une entreprise dédiée à fournir les meilleurs
                services à nos clients. Notre expertise s'étend sur plusieurs
                domaines, et nous nous engageons à vous offrir une expérience
                exceptionnelle.
              </p>
              <p className="text-gray-700 text-lg">
                Avec des années d'expérience et une équipe passionnée, nous nous
                efforçons toujours de répondre aux attentes de nos clients et de
                dépasser leurs exigences.
              </p>
            </div>

            <div>
              <img
                src="/images/about-us.png"
                alt="About Us Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
