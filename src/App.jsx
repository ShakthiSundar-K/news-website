import React from "react";
import NavBar from "./components/NavBar";
import MainNews from "./components/MainNews";

export default function App() {
  return (
    <>
      <div className='max-w-[1200px] mx-auto '>
        <div className='text-3xl md:text-4xl text-center mb-4 mt-8 text-red-600'>
          THE UNITY EXPRESS
        </div>
        <NavBar />
        <MainNews />
      </div>
    </>
  );
}
