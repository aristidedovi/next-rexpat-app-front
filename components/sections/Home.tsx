"use client";

import { motion } from "motion/react";

const HomePage = () => {
  // Please use 'useState()' to implement Navbar functionality
  return (
    <div>
      <div className="relative overflow-hidden">
        {/* <header className="bg-white shadow-sm z-50 top-0 inset-x-0 fixed">
          <nav className="items-center justify-between mx-auto flex max-w-screen-2xl p-4 px-12">
            <div className="flex w-1/4">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Windframe</span>
                <p className="text-green-700 font-bold">REXPAT ASSISSTANCE</p>
              </a>
            </div>
            <div className="flex justify-between w-1/4">
              <a
                href="#_"
                className="text-black hover:underline font-semibold hover:text-green-500
    text-center"
              >
                Présentation
              </a>
              <a
                href="#_"
                className="text-black hover:underline font-semibold hover:text-green-500 text-center"
              >
                Données
              </a>
              <a
                href="#_"
                className="text-black hover:underline font-semibold hover:text-green-500 text-center"
              >
                FAQ
              </a>
            </div>
            <div className="flex justify-end w-1/4">
              <a className="px-5 py-2.5 rounded-md text-white bg-green-700 hover:bg-green-500 font-semibold">
                Témoigner
              </a>
            </div>
          </nav>
        </header> */}
        <section className="mx-auto mt-16 pt-24 pb-28 max-w-screen-2xl p-4 relative isolate">
          <svg
            className="w-[468px] h-[788px] top-1 transform-gpu overflow-hidden blur-2xl absolute left-0 -z-10 -my-48"
            viewBox="0 0
468 788"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="Windframe_xxuj2tMc-h"
          >
            <circle
              cx="44.5105"
              cy="378.637"
              r="156.383"
              fill="#15803d"
            ></circle>
            <circle
              cx="119.803"
              cy="529.24"
              r="156.383"
              fill="#15803d"
            ></circle>
            <circle
              cx="173.364"
              cy="372.857"
              r="156.383"
              fill="#15803d"
            ></circle>
            <g filter="url(#filter0_b_1410_520)">
              <circle
                cx="73.5409"
                cy="394.049"
                r="393.819"
                fill="white"
                fillOpacity="0.79"
              ></circle>
            </g>
            <defs>
              <filter
                x="-460.404"
                y="-139.896"
                width="1067.89"
                height="1067.89"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="70.063"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1410_520"
                ></feComposite>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1410_520"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
          <motion.div
            initial={{ y: -100, opacity: 0 }} // Commence hors de l'écran, en haut
            animate={{ y: 0, opacity: 1 }} // Descend jusqu'à sa position finale
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 1,
            }}
            className="mx-auto justify-center max-w-2xl"
          >
            <p className="text-center text-gray-500 font-medium tracking-wide uppercase">
              REXPAT ASSISTANCE
            </p>
            <p className="mt-2 text-center text-4xl md:text-6xl font-bold tracking-tight text-black">
              Retour aux Sources!
            </p>
            <p className="mt-6 text-lg text-gray-600 text-center">
              Découvrez l'Impact du Retour de la Diaspora !
            </p>

            <div className="mt-24 bg-white rounded-lg drop-shadow-xl p-2.5 flex border border-gray-300">
              <input
                type="email"
                className="border-none focus:outline-none p-2.5 flex-1 flex-shrink-0 w-full text-lg"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-md bg-black text-white"
              >
                S'abonner
              </button>
            </div>
            <div className="items-center justify-center mt-6 flex gap-3">
              <svg
                className="w-6 h-6"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="Windframe_Tah5SlXh7oi"
              >
                <path
                  d="M11.0527 22.0752C17.128 22.0752 22.0527 17.1505 22.0527 11.0752C22.0527
    4.9999 17.128 0.0751953 11.0527 0.0751953C4.97743 0.0751953 0.0527344 4.9999 0.0527344 11.0752C0.0527344
    17.1505 4.97743 22.0752 11.0527 22.0752Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M5.55273 11.6251L8.85273
    14.9251L16.5527 7.2251"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p className="text-center text-gray-600">
                C'est 100% gratuit et nous n'enverrons jamais plus d'un email
                par mois
              </p>
            </div>
          </motion.div>
        </section>
        {/* <section className="h-auto p-4 bg-green-700 w-auto">
          <div className="h-auto flex items-center justify-center container max-w-2xl mx-auto">
            <p className="text-white text-center mt-8 text-lg">
              Facilitez votre retour avec des données concrètes:
            </p>
          </div>
          <div className="h-auto flex items-center justify-center container max-w-2xl mx-auto">
            <p className="text-white text-center font-semibold text-2xl md:text-xl">
              l’application qui accompagne la diaspora dans sa reconnexion
            </p>
          </div>
        </section> */}
        {/* <section className="h-auto w-full flex p-6 bg-green-700 w-auto">
          <div className="flex w-full grid grap-20 place-items-center mt-10 mx-auto lg:grid-cols-3 grid-col-3">
            <div className="w-full h-full flex items-center justify-center md:w-1/3">
              <img
                src="https://imgur.com/AsYT4fJ.png"
                className="object-contain object-top lg:w-auto lg:h-full w-full h-auto
    rounded-none"
              />
            </div>
            <div className="w-full h-full flex items-center justify-center md:w-1/3">
              <img
                src="https://imgur.com/d8NtJEb.png"
                className="object-contain object-top lg:w-auto lg:h-full w-full h-auto"
              />
            </div>
            <div className="w-full h-full flex items-center justify-center md:w-1/3">
              <img
                src="https://imgur.com/8Bqi6Ls.png"
                className="object-contain object-top lg:w-auto lg:h-full w-full h-auto"
              />
            </div>
          </div>
        </section> */}
        <section
          //className="text-black mx-auto max-w-screen-2xl relative isolate overflow-hidden bg-green-700 p-10 h-auto"
          className="w-full bg-green-700 text-black mx-auto relative isolate overflow-hidden p-20 h-auto"
        >
          {/* <svg
            className="h-[610px] w-[200px] absolute -z-10 transform-gpu overflow-hidden blur-2xl -top-32 right-0"
            viewBox="0 0
468 788"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="Windframe_sP5P2N3hszP"
          >
            <circle
              cx="44.5105"
              cy="378.637"
              r="156.383"
              fill="#15803d"
            ></circle>
            <circle
              cx="119.803"
              cy="529.24"
              r="156.383"
              fill="#15803d"
            ></circle>
            <circle
              cx="173.364"
              cy="372.857"
              r="156.383"
              fill="#15803d"
            ></circle>
            <g filter="url(#filter0_b_1410_520)">
              <circle
                cx="73.5409"
                cy="394.049"
                r="393.819"
                fill="white"
                fillOpacity="0.79"
              ></circle>
            </g>
            <defs>
              <filter
                x="-460.404"
                y="-139.896"
                width="1067.89"
                height="1067.89"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="70.063"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1410_520"
                ></feComposite>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1410_520"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg> */}
          <p className="lg:text-xl tracking-tight text-center text-white">
            Facilitez votre retour avec des données concrètes:
          </p>
          <p className="lg:text-3xl tracking-tight text-center text-white text-xl">
            l’application qui accompagne la diaspora dans sa reconnexion
          </p>
          <div className="lg:grid-cols-3 mt-1 py-5 px-20 mx-auto grid place-items-center gap-10 max-w-screen-2xl">
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <img
                src="https://imgur.com/8Bqi6Ls.png"
                className="object-contain object-top w-full h-auto lg:w-auto"
              />
            </div>
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <img
                src="https://imgur.com/d8NtJEb.png"
                className="object-contain object-top w-full h-auto lg:w-auto"
              />
            </div>
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <img
                src="https://imgur.com/8Bqi6Ls.png"
                className="object-contain object-top w-full h-auto lg:w-auto"
              />
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage: "url(https://imgur.com/QETsBkJ.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid mx-auto place-items-start p-10">
            <div className="items-center bg-gray-200 bg-opacity-50 justify-center p-10 h-auto">
              <p className="text-2xl font-semibold">Choix du témoignage</p>
              <p className="text-xl text-left mt-7">
                <span className="font-bold">Logement</span>: Difficultés et
                succès dans la recherche d'un logement.
              </p>
              <p className="text-xl text-left mt-7">
                <span className="font-bold">Emploi</span>: Opportunités d'emploi
                et intégration dans le marché du travail.
              </p>
              <p className="text-xl text-left mt-7">
                <span className="font-bold">Éducation</span>: Qualité et accès
                aux écoles pour les enfants ou formations pour les adultes.
              </p>
              <p className="text-xl text-left mt-7 mb-7">
                <span className="font-bold">Entrepreneuriat</span>: Lancement
                d'entreprises, financement et développement.
              </p>
              <button
                className="bg-green-700 hover:bg-green-500 font-semibold text-white h-12 rounded-md shadow-md pr-6 pl-6
    text-center"
              >
                Témoigner
              </button>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <p></p>
            </div>
          </div>
        </section>
        <section className="bg-white text-black my-20 mx-auto max-w-screen-2xl p-6 relative isolate overflow-hidden">
          <svg
            className="h-[610px] w-[200px] absolute -z-10 transform-gpu overflow-hidden blur-2xl -top-32 right-0"
            viewBox="0 0
468 788"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="Windframe_NU945YbeQK"
          >
            <circle
              cx="44.5105"
              cy="378.637"
              r="156.383"
              fill="#15803d"
            ></circle>
            <circle
              cx="119.803"
              cy="529.24"
              r="156.383"
              fill="#15803d"
            ></circle>
            <circle
              cx="173.364"
              cy="372.857"
              r="156.383"
              fill="#15803d"
            ></circle>
            <g filter="url(#filter0_b_1410_520)">
              <circle
                cx="73.5409"
                cy="394.049"
                r="393.819"
                fill="white"
                fillOpacity="0.79"
              ></circle>
            </g>
            <defs>
              <filter
                x="-460.404"
                y="-139.896"
                width="1067.89"
                height="1067.89"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="70.063"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1410_520"
                ></feComposite>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1410_520"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">
            Stats
          </p>
          <p className="text-4xl lg:text-6xl font-bold tracking-tight text-center">
            Nos résultats en chiffres
          </p>
          <div className="lg:grid-cols-3 mt-10 mx-auto grid place-items-center gap-20 max-w-screen-2xl">
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <p className="font-bold text-5xl">99%</p>
              <p className="font-bold text-2xl pt-2">Customer satisfaction</p>
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum similique magnam amet
              </p>
            </div>
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <p className="font-bold text-5xl">32M</p>
              <p className="font-medium text-2xl pt-2">Active users</p>
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum similique magnam amet
              </p>
            </div>
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <p className="font-bold text-5xl">300%</p>
              <p className="font-medium text-2xl pt-2">Company growth</p>
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum similique magnam amet
              </p>
            </div>
          </div>
        </section>
        <section
          style={{ backgroundImage: "url(#)" }}
          className="w-full flex bg-green-700"
        >
          <div className="h-80 flex items-center justify-center container flex-col lg:pl-28 lg:pr-28">
            <p className="text-white text-center mb-10 lg:text-2xl">
              Partagez votre expérience et inspirez d'autres membres de la
              diaspora ! Votre témoignage peut faire la différence pour ceux qui
              envisagent le retour.
            </p>
            <button className="bg-white text-black h-12 rounded-md shadow-md pr-6 pl-6 text-center font-semibold">
              Voir plus
            </button>
          </div>
        </section>
      </div>
      <section
        style={{
          backgroundImage: "url(https://imgur.com/HtlXCcw.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="h-screen w-full flex"
      >
        <div className="grid mx-auto pt-10 place-items-start items-center">
          <div className="bg-gray-200 bg-opacity-50 p-10">
            <p className="text-2xl font-semibold">
              Statistiques sur le logement
            </p>
            <p className="text-9xl text-green-700 text-left mt-7">40%</p>
            <p className="text-xl text-left">
              des participants ont opté pour l’achat d’un bien immobilier à leur
              retour
            </p>
            <p className="text-9xl text-left mt-7 text-yellow-500">60%</p>
            <p className="text-xl text-left">préfèrent la location.</p>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: "url(#)" }}
        className="w-full flex bg-green-700"
      >
        <div className="h-80 items-center justify-center grid p-10 lg:grid-cols-3">
          <div className="col-span-2">
            <p className="text-white lg:text-xl">
              Vous avez des questions ou souhaitez en savoir plus sur nos
              services ? Nous sommes là pour vous aider ! Contactez-nous dès
              aujourd'hui, et notre équipe vous répondra dans les plus brefs
              délais. Ensemble, faisons de votre retour une réussite.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-white text-black h-12 rounded-md shadow-md pr-6 pl-6 text-center font-semibold">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
      {/* <footer aria-labelledby="footer-heading" className="bg-white">
        <p className="sr-only" id="footer-heading">
          Footer
        </p>
        <div className="mx-auto px-4 py-20 max-w-screen-2xl">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="mt-10 xl:mt-0">
              <p className="text-sm font-semibold leading-6 text-black">
                Subscribe to our newsletter
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-800">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email-address"
                  autoComplete="email"
                  required
                  className="min-w-0 appearance-none border-0 ring-1 ring-inset ring-white/10 placeholder:text-gray-500
      focus:ring-2 focus:ring-inset focus:ring-black focus:outline-none w-full rounded-md bg-gray-50 px-3
      py-1.5 text-base text-black shadow-sm sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  id="email-address"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                
                    className="flex hover:bg-black focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-full items-center
        justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white
        shadow-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-10 xl:mt-0 xl:col-span-2 grid grid-cols-2 gap-8">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <p className="text-sm font-semibold leading-6 text-black">
                    Category
                  </p>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Analytics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Commerce
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <p className="text-sm font-semibold leading-6 text-black">
                    Category
                  </p>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Mission and Values
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <p className="text-sm font-semibold leading-6 text-black">
                    Category
                  </p>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Team
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <p className="text-sm font-semibold leading-6 text-black">
                    Category
                  </p>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Claim
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-800 hover:text-black"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24 border-t border-white/10">
            <div className="md:order-2 flex space-x-6">
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_Yx5e8swlGBH"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438
      9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195
      2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22
      16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_GTZJcKmJXmx"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0
      011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0
      2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0
      01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643
      0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0
      01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">X</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_wVnaiktgzgF"
                >
                  <path
                    d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002
      21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574
      12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541
      13.096V13.0956Z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_1hjQERHbhTu"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839
      9.504.5.092.682-.217.682-.483
      0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_44Dr4mMXvlB"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418
      4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0
      1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998
      5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              © 2024 Windframe, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HomePage;
