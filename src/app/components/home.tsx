import React from 'react';
import homeImg from '../../img/homeimg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function HomeBody() {
    return(
        <div className='h-[90%]'>
            <div className='grid grid-cols-2 h-full'>
                <div className='text-[#011b45] m-5 flex justify-center items-center'>
                    <p>Test2</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='m-5'>
                        <img className='rounded-3xl' src={homeImg.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}