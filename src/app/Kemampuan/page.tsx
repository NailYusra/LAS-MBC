import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { FocusCards } from "../components/ui/focus-cards";
import Kemampuan from "./Kemampuan";
import Navbar from "../components/ulitities/NavBar/navbar";

const Page = () => {
    const cards = [
        {
            title: "Algoritma Pemrograman (GO)",
            src: "https://images.unsplash.com/photo-1724339940329-ce55645c5a2b?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Struktur Data (C++)",
            src: "https://images.unsplash.com/photo-1724339940874-ba2b418b9aa4?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Strategi Algoritma (Python)",
            src: "https://images.unsplash.com/photo-1724339940308-40e0275ea153?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Lulus Tahap Open Rekrutasi MBC LAB",
            src: "https://images.unsplash.com/photo-1724339940347-b2b230c33dd8?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "CEO Kelompok-Mata Kuliah Kewirausahaan",
            src: "https://images.unsplash.com/photo-1724340482125-3df9b300c47c?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Perwakilan State To Prodi-BPM HIMA IF Telkom University",
            src: "https://images.unsplash.com/photo-1724340176551-967350fb935e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <>
            <Kemampuan />
            <Navbar />
            <div className= "top-20 h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <BackgroundBeams />
                <p className="flex text-3xl py-4 justify-start font-mono">Pengalaman & Proyek</p>
                <FocusCards cards={cards} />
            </div>
        </>
    );
}

export default Page;