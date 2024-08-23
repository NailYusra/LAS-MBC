"use client"

import Navbar from "../components/ulitities/NavBar/navbar";
import React from "react";
import Profil from "./Profil";
import { BackgroundBeams } from "../components/ui/background-beams";
import Image from "next/image";
import image1 from "@/../../NONFORMAL_NAIL YUSRA ALFIDZAKIY ZAIDAN.jpg"

const page = () => {
    return (
        <>
            <Navbar/>    
            <div className="bg-neutral-950 relative flex flex-col items-center justify-center antialiased py-18">
                <BackgroundBeams />
            
                <p className="flex text-6xl font-mono py-3">Tentang Saya</p>
                <Image src={image1} alt=".." width={300} height={300} />
                <div className="py-10 flex-col text-xl font-serif">
                    <div>
                        <p className="text-3xl">Nama: Nail Yusra Alfidzakiy Zaidan</p>
                        <p className="text-3xl">Umur: 20 Tahun</p>
                    </div>
                    <div className="flex-col py-10">
                        <p className="text-3xl">Pendidikan Terakhir: SMAN 4 CIMAHI</p>
                        <p className="flex-col text-3xl">
                            Status: Mahasiswa S1 Informatika Telkom University
                        </p>
                    </div>
                </div>
            </div>

            <Profil/>
        </>
    )
}

export default page