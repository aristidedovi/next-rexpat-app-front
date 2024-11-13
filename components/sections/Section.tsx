import React from "react";

const Section = ({ fillColor = "#4A3AFF" }) => {
  return (
    <div>
      <section className="mx-auto mt-16 pt-24 pb-28 relative max-w-screen-2xl p-4 isolate">
        <svg
          className="w-[468px] h-[788px] absolute top-0 left-0 -z-10 transform-gpu overflow-hidden blur-2xl"
          viewBox="0 0 468 788"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="44.5105" cy="378.637" r="156.383" fill={fillColor} />
          <circle cx="119.803" cy="529.24" r="156.383" fill="#702DFF" />
          <circle cx="173.364" cy="372.857" r="156.383" fill="#2D5BFF" />
          <g filter="url(#filter0_b_1410_520)">
            <circle
              cx="73.5409"
              cy="394.049"
              r="393.819"
              fill="white"
              fillOpacity="0.79"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_1410_520"
              x="-460.404"
              y="-139.896"
              width="1067.89"
              height="1067.89"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="70.063" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1410_520"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1410_520"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-gray-500 font-medium tracking-wide uppercase">
            Tailwind Page Builder
          </p>
          <p className="mt-2 text-center text-4xl md:text-6xl font-bold tracking-tight text-black">
            The best way to organize your work
          </p>
          <p className="mt-6 text-lg text-gray-600 text-center">
            Want to receive a monthly email in your inbox with awesome free tips
            and resources on productivity? Please submit your email below.
          </p>
          <div className="mt-24 w-full bg-white rounded-lg drop-shadow-xl p-2.5 flex border border-gray-300">
            <input
              type="email"
              className="border-none focus:outline-none p-2.5 flex-1 flex-shrink-0 text-lg w-full"
              placeholder="Your email"
            />
            <button
              type="submit"
              style={{ fontFamily: "Arial" }}
              className="px-5 py-2.5 rounded-md bg-black text-white"
            >
              Subscribe
            </button>
          </div>
          <div className="items-center justify-center mt-6 flex gap-3">
            <svg
              className="w-6 h-6"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0527 22.0752C17.128 22.0752 22.0527 17.1505 22.0527 11.0752C22.0527 4.9999 17.128 0.0751953 11.0527 0.0751953C4.97743 0.0751953 0.0527344 4.9999 0.0527344 11.0752C0.0527344 17.1505 4.97743 22.0752 11.0527 22.0752Z"
                fill="currentColor"
              />
              <path
                d="M5.55273 11.6251L8.85273 14.9251L16.5527 7.2251"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-center text-gray-600">
              It's 100% free and we will never send more than one email per
              month
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
