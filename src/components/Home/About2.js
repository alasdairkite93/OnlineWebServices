import React from "react";
const About2 = () => {
    return (

        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl grid lg:grid-cols-1 ">
                <div className="text-center md:w-[90%] mx-auto text-black ">
                    <h2 className="text-2xl text-center font-semibold font-display text-black dark:text-white sm:text-3xl">
                        Avoid playing back the same mistakes.
                    </h2>
                </div>
                <div className="flex flex-col justify-center">
                            <img  className="object-cover w-1/2 mx-auto maw-w-44" src="https://res.cloudinary.com/dsfypcapq/image/upload/v1695713654/mixtape_wzyte8.png"
                                 alt="shopping item"/>
                </div>
            </div>
        </div>

    )
}

export default About2;