import React from "react";
import {Link} from "react-router-dom";

const Solutions = () => {
    return (
        <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0">
            <div className="container xl:max-w-6xl mx-auto px-4">
                <header className="text-center mx-auto mb-12 lg:px-20">
                    <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Can Do</h2>
                </header>
                <div className="flex flex-wrap flex-row -mx-4 text-center">
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                         data-wow-duration="1s"
                         styles="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                        <Link to="/email-lists">
                        <div className="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2">
                            <div className="inline-block text-gray-900 mb-4">
                                <svg width="5rem" height="5rem" viewBox="0 0 20 20" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="layer1">
                                        <path
                                            d="M 2 3 L 2 4 L 19 4 L 19 15 L 20 15 L 20 3 L 2 3 z M 0 5 L 0 17 L 18 17 L 18 5 L 0 5 z M 1.6621094 6 L 16.337891 6 L 9.6796875 11.017578 L 8.3203125 11.017578 L 1.6621094 6 z M 1 6.7539062 L 7.9863281 12.017578 L 10.013672 12.017578 L 17 6.7539062 L 17 15.246094 L 12.195312 11.626953 L 11.363281 12.251953 L 16.337891 16 L 1.6621094 16 L 6.6367188 12.251953 L 5.8046875 11.626953 L 1 15.246094 L 1 6.7539062 z "
                                            styles="fill:#222222; fill-opacity:1; stroke:none; stroke-width:0px;"/>
                                    </g>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Build new leads and contacts</h3>
                            <p className="text-gray-500">Utilise validated email lists and contacts from directories, google and
                                social media like LinkedIn.</p>
                        </div>
                        </Link>
                    </div>
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                         data-wow-duration="1s" data-wow-delay=".1s"
                         styles="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                        <Link to="/web-scraping">
                            <div className="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2">                            <div className="inline-block text-gray-900 mb-4">
                                <svg width="5rem" height="5rem" viewBox="-0.56 0 171.265 171.265"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="scraper" transform="translate(-421.662 -997.216)">
                                        <path id="Path_105" data-name="Path 105"
                                              d="M567.7,1015.657a4,4,0,1,0,5.656,0A4,4,0,0,0,567.7,1015.657Z"/>
                                        <path id="Path_106" data-name="Path 106"
                                              d="M591.8,1017.423a19.372,19.372,0,0,0-5.711-13.787l-.707-.709a19.5,19.5,0,0,0-27.578,0l-40.61,40.61c-25.274-2.8-61.3,14.466-92.591,44.575l-2.94,2.828,77.541,77.54,2.827-2.939c30.688-31.9,48.212-69.5,44.308-94.58l39.75-39.75A19.373,19.373,0,0,0,591.8,1017.423Zm-52.871,60.949c.113,21.706-14.987,51.8-39.863,78.658l-65.951-65.951c25.689-23.775,54.811-38.8,76.333-39.794l-7.859,7.859,28.285,28.283Zm41.5-52.817-50.558,50.56L512.9,1059.144l50.559-50.559a11.5,11.5,0,0,1,16.262,0l.708.709a11.5,11.5,0,0,1,0,16.263Z"/>
                                    </g>
                                </svg>

                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Web Scraping</h3>
                            <p className="text-gray-500">Scrape content from web pages and APIs.</p>
                        </div>
                        </Link>
                    </div>
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                         data-wow-duration="1s" data-wow-delay=".3s"
                         styles="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <Link to="/web-development">
                            <div className="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2">                            <div className="inline-block text-gray-900 mb-4">
                                <svg width="5rem" height="5rem" viewBox="0 0 17 17" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                                    <g>
                                    </g>
                                    <path d="M0 0v17h17v-17h-17zM1 6h9v10h-9v-10zM16 16h-5v-10h5v10zM1 5v-4h15v4h-15z"
                                          fill="#000000"/>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Full Stack Web Development</h3>
                            <p className="text-gray-500">Deploy front and back end web services using the latest framework with database integration.</p>
                        </div>
                        </Link>
                    </div>
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                         data-wow-duration="1s"
                         styles="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                        <Link to="/web-tool-development">
                            <div className="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                <svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                      width="5rem" height="5rem" viewBox="0 0 37.884 37.885"
                                     styles="enable-background:new 0 0 37.884 37.885;"
                                     xml="preserve">
<g>
	<g>
		<path d="M31.212,8.157h-3.346L19.832,1.32c0.045-0.111,0.072-0.233,0.072-0.36c0-0.529-0.431-0.96-0.96-0.96
			c-0.531,0-0.961,0.431-0.961,0.96c0,0.127,0.027,0.249,0.072,0.36l-8.034,6.837H6.674c-1.432,0-2.595,1.164-2.595,2.595V35.29
			c0,1.433,1.163,2.595,2.595,2.595h21.606l5.524-5.525V10.752C33.806,9.321,32.642,8.157,31.212,8.157z M28.675,11.48
			c0,0.771-0.626,1.396-1.396,1.396s-1.396-0.625-1.396-1.396s0.625-1.396,1.396-1.396S28.675,10.71,28.675,11.48z M18.458,1.767
			c0.144,0.088,0.304,0.154,0.486,0.154s0.341-0.065,0.488-0.153l7.508,6.39H10.947L18.458,1.767z M24.507,11.48
			c0,0.771-0.625,1.396-1.398,1.396c-0.77,0-1.394-0.625-1.394-1.396s0.624-1.396,1.394-1.396
			C23.882,10.084,24.507,10.71,24.507,11.48z M20.339,11.48c0,0.771-0.626,1.396-1.396,1.396c-0.771,0-1.396-0.625-1.396-1.396
			s0.626-1.396,1.396-1.396S20.339,10.71,20.339,11.48z M16.17,11.48c0,0.771-0.623,1.396-1.393,1.396
			c-0.774,0-1.399-0.625-1.399-1.396s0.625-1.396,1.399-1.396C15.547,10.084,16.17,10.71,16.17,11.48z M10.607,10.084
			c0.771,0,1.396,0.626,1.396,1.396s-0.625,1.396-1.396,1.396s-1.396-0.625-1.396-1.396S9.837,10.084,10.607,10.084z M32.392,31.773
			l-0.294,0.291h-2.224c-1.038,0-1.887,0.852-1.887,1.889v2.224l-0.293,0.293H6.674c-0.651,0-1.18-0.528-1.18-1.18V14.527H32.39
			v17.247H32.392z"/>
        <path d="M11.081,24.771l1.356,0.543c0,0.56,0.073,1.121,0.223,1.676l-1.171,0.875c-0.18,0.135-0.234,0.404-0.122,0.598
			l1.059,1.834c0.112,0.193,0.371,0.279,0.578,0.191l1.345-0.574c0.404,0.404,0.854,0.749,1.339,1.027l-0.207,1.447
			c-0.03,0.221,0.12,0.45,0.337,0.508l2.043,0.549c0.216,0.059,0.461-0.063,0.545-0.271l0.544-1.357
			c0.559,0,1.121-0.074,1.675-0.223l0.877,1.172c0.133,0.178,0.402,0.233,0.596,0.121l1.834-1.059
			c0.194-0.112,0.281-0.372,0.193-0.578l-0.576-1.346c0.404-0.403,0.751-0.854,1.029-1.34l1.447,0.207
			c0.222,0.032,0.449-0.119,0.508-0.334l0.549-2.047c0.058-0.216-0.064-0.461-0.273-0.545l-1.355-0.543
			c0-0.561-0.073-1.121-0.223-1.674l1.172-0.877c0.179-0.135,0.233-0.402,0.121-0.598l-1.06-1.832
			c-0.112-0.194-0.372-0.28-0.578-0.192l-1.345,0.575c-0.405-0.405-0.855-0.75-1.342-1.031l0.207-1.445
			c0.031-0.222-0.118-0.451-0.336-0.509l-2.045-0.548c-0.215-0.058-0.461,0.064-0.545,0.272l-0.542,1.358
			c-0.559,0-1.121,0.073-1.674,0.222l-0.877-1.171c-0.133-0.18-0.402-0.234-0.596-0.122l-1.834,1.059
			c-0.194,0.112-0.281,0.371-0.193,0.576l0.576,1.347c-0.405,0.403-0.751,0.854-1.03,1.339l-1.447-0.207
			c-0.221-0.031-0.449,0.119-0.507,0.335l-0.549,2.046C10.75,24.441,10.873,24.688,11.081,24.771z M16.908,21.785
			c1.947-1.125,4.436-0.457,5.56,1.49s0.457,4.436-1.488,5.559c-1.948,1.124-4.437,0.457-5.561-1.49S14.962,22.908,16.908,21.785z"
        />
	</g>
</g>
</svg>
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Database Design & Creation</h3>
                            <p className="text-gray-500">Database design and development to match your business logic.</p>
                        </div>
                        </Link>
                    </div>
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                         data-wow-duration="1s" data-wow-delay=".1s"
                         styles="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                        <Link to="/application-development">
                            <div className="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" fill="currentColor"
                                     className="bi bi-wallet2" viewBox="0 0 16 16">
                                    <path
                                        d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Application
                                Development</h3>
                            <p className="text-gray-500">Services to help you build a plugin, desktop or other kind of application.</p>
                        </div>
                        </Link>
                    </div>
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                         data-wow-duration="1s" data-wow-delay=".3s"
                         styles="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <Link to="/seo-affiliates">
                            <div className="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" fill="currentColor"
                                     className="bi bi-funnel" viewBox="0 0 16 16">
                                    <path
                                        d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Machine Learning & Artificial Intelligence</h3>
                            <p className="text-gray-500">Trained models and data processing to accomodate machine intelligence based applications.</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions;