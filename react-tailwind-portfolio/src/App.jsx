import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-700 mb-4 md:mb-0">
            <span className="text-xl ml-3">RyoCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-600 duration-300">
              Home
            </a>
            <a href="#home" className="mr-5 hover:text-blue-600 duration-300">
              About
            </a>
            <a href="#home" className="mr-5 hover:text-blue-600 duration-300">
              Skills
            </a>
            <a href="#home" className="hover:text-blue-600 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default App;
