
const textStyle = {
    cursor: 'pointer',
}

export default function Header() {
    return(
        <div className="h-20 w-full grid grid-cols-3 shadow-lg">
            <div className="grid grid-cols-2">
                <div>{/* Add Logo Here */}</div>
                <div></div>
            </div>
            <div className="grid grid-cols-4">
                <div className="text-xl flex justify-center items-center" >
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>
                        Home
                    </p>
                </div>
                <div className="text-xl flex justify-center items-center">
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>About</p>
                </div>
                <div className="text-xl flex justify-center items-center">
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>Portfolio</p>
                </div>
                <div className="text-xl flex justify-center items-center">
                    <p className="text-blue-500 hover:text-blue-700" style={textStyle}>Contact</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div></div>
                <div>{/* Add Another button (maybe dark mode) Here */}</div>
            </div>
        </div>
    )
}