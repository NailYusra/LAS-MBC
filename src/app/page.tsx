"use client"

import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import Navbar from "./components/ulitities/NavBar/navbar";


export default function Home() {
  return (
      <section id="section1">
        <Navbar/>
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <p className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 text-center font-sans font-bold">
              Halo Semua
            </p>
            <p></p>
            <p className="text-neutral-300 max-w-lg mx- my-2 text-sm text-center relative z-10">
              Selamat datang di website portofolio saya. Disini saya menyediakan informasi pribadi berkenaan dengan: kemampuan, pengalaman, proyek, sosial media & kontak saya.
            </p>
          </div>
          <BackgroundBeams />
        </div>
      </section>
  )
}
