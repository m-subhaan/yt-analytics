import React from "react";
import MenuBar from "../../components/Navbar";
import Header from "./Header";
import TrustedBy from "./TrustedBy";
import GetToKnow from "./GetToKnow";
import HowItWorksSection from "./HowItWorks";
import Footer from "../../components/Footer";

const LadningContainer = () => {
    return (
        <>
            <MenuBar />
            <Header />
            <TrustedBy />
            <GetToKnow mainHeader="Take your Youtube Channel to the next level with this latest tool"
                header="Track and inspect your channel analytics"
                description="Unlock the power of your YouTube channel with real-time analytics tracking. From views to
            subscribers, our cutting-edge tools help you stay ahead of the game and crush your content
            goals. Take control of your success and dominate the platform with confidence." />
            <HowItWorksSection />
            <GetToKnow mainHeader="Enhance your video ranking with a single click!"
                header="Built-in AI-based SEO optimized title and description generator"
                description="Revolutionize your content creation with our AI-powered SEO title and description generator. 
                Say goodbye to writer's block and hello to high-ranking content that gets noticed. 
                Streamline your process and dominate search results with just a few clicks." />
            <Footer/>
        </>
    )
}

export default LadningContainer;