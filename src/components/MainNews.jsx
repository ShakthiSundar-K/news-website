import React from "react";
import jai from "../assets/jaishankar.png";

export default function MainNews() {
  return (
    <div className='grid grid-cols-2 gap-0 mt-4 border border-gray-600'>
      <div>
        <p className='text-4xl pt-8 font-bold text-black ps-3'>
          Jaishankar to travel to Pakistan for SCO meet on October 15-16
        </p>
        <p className='text-2xl pt-2 font-normal ps-3'>
          Earlier in August, Pakistan had invited India and Prime Minister
          Narendra Modi to the Shanghai Cooperation Organisation’s Council of
          Heads of Government meeting in October.
        </p>
      </div>
      <div className='mx-auto h-auto m-auto p-2'>
        <img src={jai} alt='' />
      </div>
    </div>
  );
}
