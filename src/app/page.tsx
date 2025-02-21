"use client";  // ✅ Now it's a client component

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [count, setCount] = useState(0); // Now we have state

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="p-6 rounded-lg text-center">
          <Image
            src="https://pfpmaker.com/content/img/profile-pictures/funny/gallery/8.png"
            alt="Profile Picture"
            width={550}
            height={150}
            className="rounded-full mx-auto"
          />
          <h1 className="text-2xl font-bold mt-4">Generative AI Engineer</h1>



        </div>
      </div>
    </div>
  );
}
