"use client"

import React from "react";
import Pengalaman from "./Pengalaman";
import { BackgroundBeams } from "../components/ui/background-beams";
import { HoverEffect } from "../components/ui/card-hover-effect";
import Navbar from "../components/ulitities/NavBar/navbar";

const page = () => {
    const projects = [
        {
          title: "Bahasa Pemrograman GO",
          description:
            "Implementasi Bahasa GO secara ter struktur.",
          link: "/Pengalaman",
        },
        {
          title: "Bahasa Pemrograman C++",
          description:
            "Implementasi C++ dalam memahami struktur data lanjutan.",
          link: "https://mages.unsplash.com",
        },
        {
          title: "Bahasa Pemrograman Python",
          description:
            "Memahami pembuatan aplikasi sederhana (.exe) dengan menggunakan bahasa Python.",
          link: "https://mages.unsplash.com",
        },
        {
          title: "Bahasa Pemrograman HTML+CSS",
          description:
            "Implementasi Front-End dasar dalam pembuatan website .",
          link: "https://mages.unsplash.com",
        },
        {
          title: "Bahasa Indonesia",
          description:
            "Dapat secara natif menggunakan bahasa Indonesia, baik secara formal maupun non-formal.",
          link: "https://mages.unsplash.com",
        },
        {
          title: "Bahasa Inggris",
          description:
            "Pandai memamahmi bahasa inggris. Digunakan sering kali untuk membaca artikel, memahami pesan video/film, membaca dokumentasi formal software.",
          link: "https://mages.unsplash.com",
        },
      ];
    
    return (
        <>
            <Navbar/>
            <div className="py-18">
                <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <p className="flex text-3xl font-mono py-4">Kemampuan</p>
                <HoverEffect items={projects} />
                <BackgroundBeams/>
                </div>
            </div>
            


            <Pengalaman/>
        </>
    )
}

export default page