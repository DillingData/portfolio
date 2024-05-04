import React from 'react';
import homeImg from '../../img/homeimg.jpg'

export default function HomeBody() {
    return(
        <div className='h-[90%]'>
            <div className='grid grid-cols-2 h-full'>
                <div className='h-full'>
                    
                </div>
                <div className='h-full flex justify-center items-center'>
                    <div className='m-5'>
                        <img className='rounded-3xl' src={homeImg.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}