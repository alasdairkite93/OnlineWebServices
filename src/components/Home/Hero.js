import React from "react";

import styled from "styled-components";


import {
    AiOutlineTwitter,
    AiOutlineYoutube,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin, AiOutlineGithub,
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
  color: black;
  font-size: 80px;
`;

const Para = styled.p`
  font-size: 5px;
  color: black;
  font-size: 40px;
`;

const Flex = styled.div`
  display: flex;
  padding: 30px;
  color: white;
`


const Hero = () => {
    return (
        <section className=" px-5 text-black ">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <Heading>
                        Online Web Services
                    </Heading>

                    <Para>
                        A friendly software company that will help you explore the potential of
                        your ideas, before bringing them into being through the incredible work of a knowledgeable and hard working team.
                    </Para>

                    <Flex>
                        <a
                            href="https://www.linkedin.com/in/alasdair--kite"
                            className="pr-4 inline-block hover:text-black"
                        >
                            {" "}
                            <AiOutlineLinkedin size={40}  />{" "}
                        </a>
                        <a
                            href="https://github.com/alasdairkite93"
                            className="pr-4 inline-block hover:text-black"
                        >
                            {" "}
                            <AiOutlineGithub size={40}  />{" "}
                        </a>
                    </Flex>

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