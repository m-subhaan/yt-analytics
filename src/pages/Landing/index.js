import React from "react";
import MenuBar from "../../components/Navbar";
import Header from "./Header";
import TrustedBy from "./TrustedBy";
import GetToKnow from "./GetToKnow";
import About from "./About";

const LadningContainer = () => {
    return (
        <>
            <MenuBar/>
            <Header />
            <TrustedBy />
            <GetToKnow />
            <About />
        </>
    )
}

export default LadningContainer;