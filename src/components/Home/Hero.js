import React from "react";
import WatchImg from "/Users/alasdairkite/Documents/reactprojects/routing/src/assets/blankbaseball.png";

import styled from "styled-components";

import {
    AiOutlineTwitter,
    AiOutlineYoutube,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from "react-icons/ai";

import {
    TbBrandVinted,
} from "react-icons/tb";


import {
    FaEbay,
} from "react-icons/fa";

// Create a Title component that'll render an <h1> tag with some styles
const Heading = styled.h1`
  font-family: Futura, sans-serif;
  line-height: 1.5 !important;
  color: white;
  font-size: 80px;
`;

const Para = styled.p`
  font-size: 5px;
  color: white;
  font-size: 40px;
`;

const Flex = styled.div`
  display: flex;
  padding: 30px;
  color: white;
`


const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-sky-300 to-orange-300 px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <Heading>
                        Online Web Services
                    </Heading>

                    <Para>
                        Productivity boosting software applications for recruitment and marketing professionals.
                    </Para>

                    <Flex>
                        <a
                            href="https://www.linkedin.com/in/alasdair--kite"
                            className="pr-4 inline-block hover:text-black"
                        >
                            {" "}
                            <AiOutlineLinkedin size={40}  />{" "}
                        </a>
                    </Flex>

                    <a
                        href="/#projects"
                        className=" btn bg-accent  border-2 border-[#284B63] text-white px-6 py-3 hover:bg-transparent"
                    >
                        See Projects
                    </a>
                </div>

                <div className="hero-img">
                    <img
                        src="https://res.cloudinary.com/dsfypcapq/image/upload/v1695713331/blankbaseball_zkchaq.png"
                        alt="coding illustration"
                        className="lgw-[80%] ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;