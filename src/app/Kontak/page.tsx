"use client"

import React from "react";
import Kontak from "./Kontak";
import { BackgroundBeams } from "../components/ui/background-beams";
import { FloatingDock } from "../components/ui/floating-dock";
import {
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandGithub,
    IconBrandX,
    IconHome,
    } from "@tabler/icons-react";
import Navbar from "../components/ulitities/NavBar/navbar";

const page = () => {
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/",
        },
        {
          title: "Instagram",
          icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.instagram.com/nailyusr/",
        },
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.linkedin.com/in/nail-zaidan/",
        },
        {
          title: "Twitter",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://twitter.com/NailYusra4",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/NailYusra",
        },
      ];

    return (
        <>
            <Navbar/>
            <div className="">
                <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                    <p className="flex text-5xl font-mono">Kontak</p>
                    <BackgroundBeams />
                    <div className="flex items-center justify-center h-[35rem] w-full">
                    <FloatingDock
                        mobileClassName="translate-y-20" // only for demo, remove for production
                        items={links}
                    />
                    </div>
                </div>
            </div>
            

            <Kontak/>
        </>
    )
}

export default page