import React, {useState} from "react";

import {MenuIcon, XIcon} from "@heroicons/react/outline";
import BrandLogo from "../assets/BrandLogo.png";

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <img className="h-12 max-w-none sm:h-14" src={BrandLogo} alt="brand-logo" />
                    <ul className="hidden md:flex mb-0">
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-textColor mr-4">Sign In</button>
                    <button className="px-8 py-3 rounded-md">Sign Up</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                <li className="border-b-2 border-zinc-300">Home</li>
                <li className="border-b-2 border-zinc-300">About</li>
                <li className="border-b-2 border-zinc-300">Support</li>
                <li className="border-b-2 border-zinc-300">Pricing</li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-textColor px-8 py-3 mb-4 rounded-md">Sign In</button>
                    <button className="px-8 py-3 rounded-md">Sign Up</button>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
