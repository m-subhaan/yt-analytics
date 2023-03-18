import React from "react";

const HowItWorksSection = () => {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-textColor text-3xl md:text-4xl font-bold">How it works</h1>
                <div className="mt-20 grid gap-16 lg:gap-4 md:grid-cols-2 lg:grid-cols-5">
                    <div className="flex flex-col relative group transition duration-500 ease-in-out hover:translate-y-1 hover:scale-105">
                        <div className="flex-1 bg-white rounded-lg shadow-lg">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-primaryColor rounded-full flex items-center justify-center z-10">
                                <div className="text-textColor font-bold text-2xl">1</div>
                            </div>
                            <div className="px-6 py-8">
                                <h1 className="text-textColor font-bold text-2xl mb-2">Registration</h1>
                                <p>
                                Create an account and access features.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col relative group transition duration-500 ease-in-out hover:translate-y-1 hover:scale-105">
                        <div className="flex-1 bg-white rounded-lg shadow-lg">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-primaryColor rounded-full flex items-center justify-center z-10">
                                <div className="text-textColor font-bold text-2xl">2</div>
                            </div>
                            <div className="px-6 py-8">
                                <h1 className="text-textColor font-bold text-2xl mb-2">Connect Channel and Analyze</h1>
                                <p>
                                Link channel and view engagement, demographics, and views.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col relative group transition duration-500 ease-in-out hover:translate-y-1 hover:scale-105">
                        <div className="flex-1 bg-white rounded-lg shadow-lg">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-primaryColor rounded-full flex items-center justify-center z-10">
                                <div className="text-textColor font-bold text-2xl">3</div>
                            </div>
                            <div className="px-6 py-8">
                                <h1 className="text-textColor font-bold text-2xl mb-2">Keyword Research</h1>
                                <p>
                                Research relevant keywords for video optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col relative group transition duration-500 ease-in-out hover:translate-y-1 hover:scale-105">
                        <div className="flex-1 bg-white rounded-lg shadow-lg">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-primaryColor rounded-full flex items-center justify-center z-10">
                                <div className="text-textColor font-bold text-2xl">4</div>
                            </div>
                            <div className="px-6 py-8">
                                <h1 className="text-textColor font-bold text-2xl mb-2">Generate Title and Description</h1>
                                <p>
                                Create effective titles and descriptions to attract viewers and increase engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col relative group transition duration-500 ease-in-out hover:translate-y-1 hover:scale-105">
                        <div className="flex-1 bg-white rounded-lg shadow-lg">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-primaryColor rounded-full flex items-center justify-center z-10">
                                <div className="text-textColor font-bold text-2xl">5</div>
                            </div>
                            <div className="px-6 py-8">
                                <h1 className="text-textColor font-bold text-2xl mb-2">Optimize Video</h1>
                                <p>
                                Enhance video metadata, tags, and other factors to boost visibility and reach.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Repeat the card div 4 more times for a total of 5 cards */}
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
