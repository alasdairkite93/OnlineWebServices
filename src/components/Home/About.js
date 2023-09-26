import React from "react";

const About = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Never waste a minute</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Save time and costs with a solution tailored for you.</p>
                    {/*<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">*/}
                    {/*    <a href="#"*/}
                    {/*       className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">*/}
                    {/*        Get started*/}
                    {/*        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
                    {/*             fill="none" viewBox="0 0 14 10">*/}
                    {/*            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
                    {/*                  stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>*/}
                    {/*        </svg>*/}
                    {/*    </a>*/}
                    {/*    <a href="#"*/}
                    {/*       className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">*/}
                    {/*        Learn more*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
                <div>
                    <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                            src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
};

export default About;