import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faH, faHouse } from '@fortawesome/free-solid-svg-icons';

const textStyle = {
    cursor: 'pointer',
}

export default function Header() {
    return(
        <div className="h-[10%] w-full grid grid-cols-3 shadow-lg">
            <div className="grid grid-cols-2">
                <div>{/* Add Logo Here */}</div>
                <div></div>
            </div>
            <div className="grid grid-cols-5">
                <div className="text-xl flex justify-end items-center" >
                    <FontAwesomeIcon className='text-blue-500 hover:text-blue-700' icon={faHouse} width='20' />
                </div>
                <div className="text-xl flex justify-center items-center" >
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>
                        Home
                    </p>
                </div>
                <div className="text-xl flex justify-center items-center">
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>
                        Web
                    </p>
                </div>
                <div className="text-xl flex justify-center items-center">
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>
                        Portfolio
                    </p>
                </div>
                <div className="text-xl flex justify-center items-center">
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>
                        Contact
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div></div>
                <div>{/* Add Another button (maybe dark mode) Here */}</div>
            </div>
        </div>
    )
}