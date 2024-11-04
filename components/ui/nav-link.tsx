"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLink() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold"> My website</h1>
            </div>
            <div className="flex items-center">
              <ul className="flex space-x-4">
                <li className="">
                  <Link
                    className={`hover:underline link ${
                      pathname === "/" ? "active" : ""
                    }`}
                    href="/"
                  >
                    Accueil
                  </Link>
                </li>
                <li className="">
                  <Link
                    className={`hover:underline link ${
                      pathname === "/about" ? "active" : ""
                    }`}
                    href="/"
                  >
                    Présentation
                  </Link>
                </li>
                <li className="">
                  <a href="" className="hover:underline">
                    Service
                  </a>
                </li>
                <li className="">
                  <a href="" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
