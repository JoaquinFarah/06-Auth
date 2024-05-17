import Image from "next/image"
import Link from "next/link"
import { logout } from "../logout/actions";


export default function Navbar() {    
    return(
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
            <div className="md:col-span-3">
                <Link href="/">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                    />
                </Link>
            </div>
            <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
                                
            </div>
            <div className="flex items-end gap-x-2 ms-auto md:col-span-3">
                <Link href="/">
                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-1 ml-1">Home</button>
                </Link>
                <Link href="/login">
                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-1 ml-1">LogIn</button>
                </Link> 
                <form action={logout}>
                    <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-1 ml-1">LogOut</button>
                </form> 
            </div>
        </nav>        
    )
}