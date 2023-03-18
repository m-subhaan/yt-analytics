import React from "react";
import  { Link } from 'react-router-dom';

import Image from "../../assets/image.png";

const GetToKnow = () => {
    return (
        <div className="w-full bg-[#d5e1ed] py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4 rounded-3xl" src={Image} alt="/" />
                <div className="flex flex-col justify-center md:p-6 lg:p-0">
                    <p className="text-primaryColor uppercase font-bold">
                        Take your Youtube Channel to the next level with this latest tool
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Track and inspect your channel analytics
                    </h1>
                    <p>
                        Unlock the power of your YouTube channel with real-time analytics tracking. From views to
                        subscribers, our cutting-edge tools help you stay ahead of the game and crush your content
                        goals. Take control of your success and dominate the platform with confidence.
                    </p>
                    <Link to="/signup"><button className="py-3 px-6 rounded-md w-[200px] my-4">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GetToKnow;
