 import React from "react";
 import Header from "../components/header";
 import skaan from "../../img/Skanemorskan.png"
 import tms from "../../img/TrioPlanning.png"

 export default function portfolio() {
    return(
        <div className="bg-white h-screen">
            <Header />
            <div className="text-[#011b45]">
                <div className="grid grid-cols-2 mt-5">
                    <div className="flex justify-end items-center m-5">
                        <div className="w-96 h-96 rounded overflow-hidden shadow-lg">
                            <a href="https://www.skanemorskan.se" target="_blank">
                                <img className="w-full" src={skaan.src} alt="Sunset in the mountains" />
                            </a>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">SkåneMorskan</div>
                                <p className="text-gray-700 text-base">
                                    Presentation of the webPage
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nursing</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#birth-preperation</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center m-5">
                        <div className="w-96 h-96 rounded overflow-hidden shadow-lg">
                            <a href="#" target="_blank">
                                <img className="w-full" src={tms.src} alt="Sunset in the mountains" />
                            </a>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">SkåneMorskan</div>
                                <p className="text-gray-700 text-base">
                                    Presentation of the webPage
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nursing</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#birth-preperation</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
 }