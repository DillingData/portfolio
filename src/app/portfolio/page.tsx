 import React from "react";
 import Header from "../components/header";
 import skaan from "../../img/Skanemorskan.png"
 import tms from "../../img/TrioPlanning.png"
 import landing from "../../img/landingPage.png"

 export default function portfolio() {
    return(
        <div className="bg-white h-screen">
            <Header />
            <div className="text-[#011b45] bg-white md:bg-transparent">
                <div className="text-center m-5">
                    <p className="md:text-xl">
                    <span className="text-bold">Welcome to my portfolio!</span> Here, you will find a collection of 
                    web projects showcasing my skills and expertise in web development. 
                    From responsive designs to intuitive interfaces, each project reflects my commitment to delivering high-quality solutions 
                    that exceed expectations. I invite you to explore these projects and discover the creativity and craftsmanship 
                    behind each one. Thank you for visiting, and feel free to reach out if you have any questions or collaboration opportunities 
                    in mind. Let us build something great together!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                    <div className="flex justify-center items-center m-5">
                        <div className="w-96 h-[31rem] rounded overflow-hidden shadow-lg">
                            <a href="https://www.skanemorskan.se" target="_blank">
                                <img className="w-full" src={skaan.src} alt="Sunset in the mountains" />
                            </a>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">SkåneMorskan</div>
                                <p className="text-gray-700 text-base overflow-auto">
                                    A information page made with simple HTML, CSS, JavaScript & TailWind CSS. This is a simple introduciton page that 
                                    the company is using to present its business online
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nursing</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#birth-preperation</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center m-5">
                        <div className="w-96 h-[31rem] rounded overflow-hidden shadow-lg">
                            <a href="#" target="_blank">
                                <img className="w-full" src={tms.src} alt="Sunset in the mountains" />
                            </a>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">TMS System (Transport Management System)</div>
                                <p className="text-gray-700 text-base overflow-auto">
                                    A TMS system build for a major logistics coorporation for planning goods and trucks, the system includes among many features 
                                    uploading of Excel bookings to a database, Excel / PDF Reports and Invoicing via a central financial system
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Logistics</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reports </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center m-5">
                        <div className="w-96 h-[31rem] rounded overflow-hidden shadow-lg">
                            <a href="#" target="_blank">
                                <img className="w-full" src={landing.src} alt="Sunset in the mountains" />
                            </a>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Landing page</div>
                                <p className="text-gray-700 text-base overflow-auto">
                                    This is a Next.JS Landing page build for a React Native project i am working on.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#checklist</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#easy-life</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
 }