import React from 'react';
import homeImg from '../img/homeimg.jpg'

export default function HomeBody() {
    return(
        <div className='md:h-[90%]'>
            <div className='md:grid md:grid-cols-2 h-full'>
                <div className='text-[#011b45] p-5 text-center md:text-left md:flex md:justify-center md:items-center'>
                    <div className=''>
                        <h1 className='text-2xl font-bold'>Hi there!</h1>
                        <br />
                        <p>
                            I am Thomas Dilling-Hansen, a passionate Fullstack web developer with 2 years of experience in creating dynamic and 
                            user-friendly web applications. My expertise lies in ASP.NET, JavaScript, TailWindCSS, Bootstrap, Next.JS, and React Native.
                        </p>
                        <br />
                        <p>
                            In addition to my development skills, I also have a solid understanding of databases, including SQL, MySQL, and SQLITE. 
                            Prior to my career in web development, I spent 1 year providing first-line IT support and another 2 years as a second-line IT specialist.
                        </p>
                        <br />
                        <p>
                            With a knack for problem-solving and a keen eye for detail, I thrive on challenges and am dedicated to 
                            delivering high-quality solutions that exceed expectations.
                        </p>
                        <br />

                        <p className='font-bold'>Lets build something incredible together!</p>
                    </div>
                </div>
                <div className='bg-white md:bg-inherit md:flex md:justify-center md:items-center'>
                    <div className='p-5'>
                        <img className='rounded-3xl' src={homeImg.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}