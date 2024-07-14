"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
// pages/page.tsx
import React from 'react';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { mainColor } from '../Colors'; 

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div style={{ color: mainColor }} className={`bg-[${mainColor}] p-[6px] rounded-md`}>

        <DataObjectIcon sx={{ fontSize: 27, color: 'white' }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span style={{ color: mainColor }} className=" font-extrabold text-purple-600 ">Snippet</span>
        <span className="text-slate-600 font-extrabold">Master</span>
      </div>
    </div>
  );
}

// function Buttons() {
//   const { useId } = useAuth();
//   return (

//     <div >

//     </div>
  
//     // <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
//     //   <button style={{ backgroundColor: mainColor }} className={`max-sm:w-full bg-${mainColor} p-[8px] px-6 text-sm text-white rounded-md`}>
//     //     Sign In
//     //   </button>
      
//     //   <button className=" max-sm:w-full text-sm border border-purple-600 text-purple-600 
//     //   hover:bg-purple-600 hover:text-white p-[8px] px-6 rounded-md">Sign Up</button>
//     // </div>
//   );
// }

function Buttons() {
  const { userId } = useAuth();
  console.log("User Id" , userId);

  return (
    <div className="max-sm:w-full">
      {userId ? (
        <Link href="/my-notes">
          <button
            className="max-sm:w-full bg-purple-600 p-[8px] px-6 text-sm text-white rounded-md"
          >
            Access To The App
          </button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
          <button
            className="max-sm:w-full bg-purple-600 p-[8px] px-6 text-sm text-white rounded-md"
          >
            <Link href="/sign-in">Sign In</Link>
          </button>
          <button
            className="max-sm:w-full text-sm border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white p-[8px] px-6 rounded-md"
          >
            <Link href="/sign-up">Sign Up</Link>
          </button>
        </div>
      )}
    </div>
  );
}


function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-3xl text-black text-center">
        Organize Your Code Snippets 
        <span style={{ color: mainColor }}> Efficiently!</span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        With our advanced tagging and search features, you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time writing it.
      </p>
      <button
        style={{ backgroundColor: mainColor }}
        className="block px-9 py-3 text-sm font-medium text-white transition focus:outline-none rounded-md"
        type="button"
      >
        Let's get started!
      </button>
    </div>
  );
}

