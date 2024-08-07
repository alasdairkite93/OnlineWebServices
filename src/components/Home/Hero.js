import React from "react";

import styled from "styled-components";
import '../../stylesheets/split.css';



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
  color: white;
  font-size: 80px;
  text-align: center;
  padding-left: 2%;
`;

const Para = styled.p`
  font-size: 5px;
  color: white;
  font-size: 40px;
  text-align: center;
  padding-left: 2%;

`;

const Flex = styled.div`
  display: flex;
  padding: 30px;
  color: white;
`

const List = styled.ul`
  text-align: center;
  font-size: 30px;
  font-style: italic;
  color: white;
`

const TopDiv = styled.div`
  padding-bottom: 10%;
  

`

const Background1 = styled.div`
  background-color: #540D6E;
`

const Hero = () => {
    return (
        <TopDiv>
            <div className="split-container">
                <div className="split-left">

                <div className="hero-info pb-5 md:pb-0">
                    <Heading>
                        Online Web Services
                    </Heading>

                    <Para>
                        No matter your experience or expertise, we have the know how to turn your ideas into reality.
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
                </div>
                <div className="split-right">
                <div className="hero-img">
                    <div className="herotext">
                        <List>
                            <li>Websites</li>
                            <li>Applications</li>
                            <li>Software as a Service (SAAS)</li>
                            <li>Scraping Projects</li>
                            <li>Mailing Lists</li>
                            <li>Ecommerce</li>
                            <li>Integrations</li>
                            <li>Chat Bots</li>
                        </List>
                    </div>
                </div>
            </div>
            </div>
        </TopDiv>
    );
};

export default Hero;