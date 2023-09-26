import React from "react";


const cards = (props) => {

    const { facts } = props.data;

    const card = facts.map(
        (info) => {

            //     <ul>
            //         <li>{info.heading}</li>
            //         <li>{info.fact}</li>
            //         <li>{info.image}</li>
            //     </ul>
            // )

            return (
                        <div
                            className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div
                                className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">

                                <svg width="700" height="660">
                                    <defs>
                                        <pattern id="image" x="0" y="0" patternUnits="userSpaceOnUse" height="1" width="1">
                                            <image x="0" y="0" xlinkhref={info.image}></image>
                                        </pattern>
                                    </defs>
                                    <circle id='top' cx="180" cy="120" r="80" fill="url(#image)"/>
                                </svg>

                                {/*<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
                                {/*     stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">*/}
                                {/*    */}
                                {/*    <img src={info.image} />*/}
                                {/*</svg>*/}
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{info.heading}</h2>
                                <p className="leading-relaxed text-base">{info.fact}.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                         stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                         viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
            )
        }
    )
    return (
        // <div className="gap-16  py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                {card}
            </div>
        </section>
    )
}

export default cards;