'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const textStyle = {
    cursor: 'pointer',
}

export default function Header() {

    const router = useRouter();

    return(
        <div className="h-[10%] w-full grid grid-cols-3 shadow-lg">
            <div className="grid grid-cols-2">
                <div>{/* Add Logo Here */}</div>
                <div></div>
            </div>
            <div className="flex justify-center items-center">
                <div className="text-xl m-5" >
                    <Link href='/'>
                    <FontAwesomeIcon className='text-blue-500 hover:text-blue-700' icon={faHouse} width='20' />
                    </Link>
                </div>
                {/* 
                <div className="text-xl flex justify-center items-center" >
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>
                        Home
                    </p>
                </div>
                */}
                <div className="text-xl m-5">
                    <Link className="text-blue-500 hover:text-blue-700" style={textStyle} href='/about'>
                        About
                    </Link>
                </div>
                <div className="text-xl m-5">
                    <Link className="text-blue-500 hover:text-blue-700" style={textStyle} href='portfolio'>
                        Portfolio
                    </Link>
                </div>
                <div className="text-xl m-5">
                    <a className="text-blue-500 hover:text-blue-700" style={textStyle} href="mailto: thomas@dillingdata.se">
                        Contact
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div></div>
                <div>{/* Add Another button (maybe dark mode) Here */}</div>
            </div>
        </div>
    )
}