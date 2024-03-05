import React from "react";
import NavBar from "./NavBar/NavBarHome";

function Homepage() {
  return (
    <div>
      <NavBar />
      <div className="home">
        <img className="h-12 rounded-full" src="/img/logo.svg" alt="Logo" />
        <h1>
          <span>Dev</span>Meet
        </h1>
        <p className="font-thin">Tech Interviews Made Easy</p>
        <br></br>
        <p className="font-bold">
          A Video Conferencing App with built in Code Editor and Compiler.
        </p>
        <br></br>
        <a href="/meet">
          <button className=" text-lg flex p-3 items-center justify-center mx-2 font-thin rounded-md bg-neutral-200 dark:bg-neutral-800">
            Start a Meeting Now
          </button>
        </a>
        <br></br>
        <footer className="font-thin text-sm text-gray-300">
          For Developers by Developers.
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
