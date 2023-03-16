import React from "react";

import {UserGroupIcon, EyeIcon} from "@heroicons/react/solid";

import ClientDummy from "../assets/client-dummy.png";

const ClientCard = ({name}) => {
    return (
        <div className="text-white bg-textColor p-8 rounded-xl mix-blend-luminosity">
            <img src={ClientDummy} alt="/" className="h-20 mx-auto rounded-full" />
            <h4 className=" uppercase text-xl font-bold m-3">{name}</h4>
            <div className="px-2 flex justify-between items-center mb-2">
                <div>
                    <p className="text-2xl leading-7 font-bold mb-2">7.31M</p>
                    <div className="flex justify-between items-center">
                        <UserGroupIcon className="w-5" />
                        <p className="m-0 px-2">subscribers</p>
                    </div>
                </div>
                <div>
                    <p className="text-2xl leading-7 font-bold mb-2">7.31M</p>
                    <div className="flex justify-between items-center">
                        <EyeIcon className="w-5" />
                        <p className="m-0 px-2">views</p>
                    </div>
                </div>
            </div>
            <p className="text-sm leading-7 font-light opacity-50">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus obcaecati consequuntur ab
                temporibus fugit! Tenetur, quibusdam eaque perspiciatis, laborum.
            </p>
        </div>
    );
};

export default ClientCard;
