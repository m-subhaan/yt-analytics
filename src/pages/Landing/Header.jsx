import React from 'react';

import YoutubeImage from "../../assets/Make-Money-on-YouTube.jpg";

function Header() {
    return (
        <div className="w-full h-[140vh] bg-[#d5e1ed] flex flex-col justify-between md:h-screen">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className=' flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <h1 className='text-textColor text-4xl md:text-5xl font-bold'>Designed to boost your YouTube views</h1>
                    <p className='text-textColor py-3 text-2xl'>Get free insights and guidance to keep your YouTube channel growing.</p>
                    <button className='py-3 px-6 rounded-md sm:w-[60%] my-4'>Getting Started</button>
                </div>
                <div>
                    <img className='w-full' src={YoutubeImage} alt="/"/>
                </div>
            </div>
        </div>
    );
}

export default Header;