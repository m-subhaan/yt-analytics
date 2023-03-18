import React from "react";
import  { Link } from 'react-router-dom';

import Image from "../../assets/image.png";

const GetToKnow = (props) => {
    return (
        <div className="w-full bg-[#d5e1ed] py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4 rounded-3xl" src={Image} alt="/" />
                <div className="flex flex-col justify-center md:p-6 lg:p-0">
                    <p className="text-primaryColor uppercase font-bold">
                        {props.mainHeader}
                    </p>
                    <h1 className="text-textColor md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        {props.header}
                    </h1>
                    <p>
                        {props.description}
                    </p>
                    <Link to="/signup"><button className="py-3 px-6 rounded-md w-[200px] my-4">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GetToKnow;
