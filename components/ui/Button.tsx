import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  href: string;
}

const Button = ({ label, href }: ButtonProps) => {
  const className1 =
    "px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700";
  //   const className2 =
  //     "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  return (
    <div>
      <Link href={href} className={className1}>
        {label}
      </Link>
    </div>
  );
};

export default Button;
