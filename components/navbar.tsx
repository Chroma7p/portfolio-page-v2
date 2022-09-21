import { useRouter } from "next/router";
import React from "react";

export const Navbar = () => {
  const router = useRouter();
  return (
    <header className="bg-slate-800 text-slate-100 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-slate-100 md:ml-3 md:text-xl text-3xl">
            Portfolio
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-lg md:text-base justify-center">
          <a
            onClick={() => router.push("/")}
            className="mx-5 hover:text-gray-300"
          >
            Top
          </a>
          <a
            onClick={() => router.push("/work")}
            className="mx-5 hover:text-gray-300"
          >
            Work
          </a>
          <a
            onClick={() => router.push("/hobby")}
            className="mx-5 hover:text-gray-300"
          >
            Hobby
          </a>
        </nav>
      </div>
    </header>
  );
};
