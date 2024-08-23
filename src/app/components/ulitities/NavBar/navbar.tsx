import Image from "next/image"
import DesktopImage from "../../../../../saia-modified.png"
import Link from "next/link"

const Navbar = () =>{
    return (
        <header className="">
            <div className="border-yellow-300 bg-blend-lighten flex py-5  text-4xl font-semibold justify-around align-bottom font-sans">
                <Link href="/" className=""><Image src={DesktopImage} alt= "" width={80} height={80}/></Link>
                <a href="/Profil" className="">Profil</a>
                <a href="/Pengalaman" className="">Kemampuan</a>
                <a href="/Kemampuan" className="">Proyek & Pengalaman</a>
                <a href="/Kontak" className="">Kontak</a>
            </div>
        </header>
    )
}

export default Navbar