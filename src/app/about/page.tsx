import React from "react"
import Header from "../../components/header"
import JSLogo from '../../img/Logos/JSLogo.png'
import ASPNET from '../../img/Logos/ASPNETLogo.png'
import CSharp from '../../img/Logos/CSharpLogo.png'
import SQL from '../../img/Logos/SQLServerLogo.jpg'
import Tailwind from '../../img/Logos/TailwindCSS.png'
import Bootstrap from '../../img/Logos/BootstrapLogo.jpg'
import ReactLogo from '../../img/Logos/ReactLogo.png'
import NodeLogo from '../../img/Logos/NodeJSLogo.jpg'
import WordPress from '../../img/Logos/WordPressLogo.png'
import DaisyUI from '../../img/Logos/daisyUI.svg'

export default function About() {
    return(
        <div className="bg-white h-screen">
            <Header />
            <div className="text-[#011b45]"> 
                <div className="mx-10">
                    <p className="text-main-text text-center text-xl mt-5 lg:text-2xl">Welcome to my corner of the digital world!</p>
                    <p className="mt-5">I am Thomas, a passionate full-stack developer with a background in freight forwarding. 
                    My journey into the realm of technology began in 2013 when I discovered my fascination for IT. From providing first and second-line 
                    support to diving headfirst into coding, I have embraced every challenge along the way.</p>
                    <p className="mt-5">When I am not immersed in code, you will find me cherishing moments with my family, exploring new technologies, 
                    and delving into coding challenges. My passion for programming is fueled by the thrill of 
                    problem-solving and the endless possibilities it offers.</p>
                    <p className="mt-5">Explore my page to discover more about my experiences, projects, and the tech stack I am proficient in. 
                    Let us embark on this coding journey together!</p>
                </div>
                <div className="bg-white">
                    <div className="bg-background-main mt-5 grid grid-cols-2 gap-5 lg:mt-24 lg:mx-10 lg:grid-cols-5 lg:gap-5 lg:pb-14">
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={JSLogo.src} alt="DillingData" width="172" height="150" />
                            <p className="text-main-text text-md lg:text-3xl">JavaScript</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={ASPNET.src} alt="DillingData" width="150" height="150" />
                            <p className="text-main-text text-md lg:text-3xl">ASP.NET</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={CSharp.src} alt="C# Logo" width="150" height="150" />
                            <p className="text-main-text text-md lg:text-3xl">C#</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={SQL.src} alt="DillingData" width="150" height="150" />
                            <p className="text-main-text text-md lg:text-3xl">Microsoft SQL</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={Tailwind.src} alt="DillingData" width="150" height="150" />
                            <p className="text-main-text text-md lg:text-3xl">TailWind CSS</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={Bootstrap.src} alt="DillingData" width="150" height="150" />
                            <p className="text-main-text text-md lg:text-3xl">BootStrap</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={ReactLogo.src} alt="DillingData" width="150" height="150" />
                            <p className="text-main-text texst-md lg:text-3xl">ReactJS</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={NodeLogo.src} alt="DillingData" width="150" height="150" />
                            <p className="text-main-text text-md lg:text-3xl">NodeJS</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="mx-auto mt-14 lg:mt-20" src={DaisyUI.src} alt="DillingData" width="150" height="150" />
                            <p className="text-main-text text-md lg:text-3xl mt-12">Daisy UI</p>
                        </div>
                        <div className="bg-[#f2f2f2] w-[180px] h-[180px] mx-auto lg:w-[230px] lg:h-[230px] rounded-[50px] text-center">
                            <img className="rounded-[50px] mx-auto lg:mt-5" src={WordPress.src} alt="DillingData" width="150" height="150" />
                            <p className="text-main-text text-md lg:text-3xl">WordPress</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}