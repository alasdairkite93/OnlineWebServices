import React from "react";
import aboutJSON from "../../components/AboutComponents/main";

const AboutMain = (props) => {

    const {heading, pitch, background, background1, background2, experience} = props.data;

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"
                     src="https://res.cloudinary.com/dqehq7lmd/image/upload/v1718742798/IMG_3191-removebg-preview_ujyhyg.png"/>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{heading}</h1>
                    <p className="mb-2 leading-relaxed">{pitch}.</p>
                    <p className="mb-2 leading-relaxed">{background}.</p>
                    <p className="mb-2 leading-relaxed">{background1}.</p>
                    <p className="mb-2 leading-relaxed">{background2}.</p>
                    <p className="mb-2 leading-relaxed">{experience}.</p>
                </div>
            </div>
        </section>
    )
};

export default AboutMain;
