
const textStyle = {
    color: 'blue',
}


export default function Header() {
    return(
        <div className="h-20 w-full border-solid border-red-800 border-4 grid grid-cols-3" style={textStyle}>
            <div className="grid grid-cols-2">

            </div>
            <div className="grid grid-cols-4">
                <div className="text-xl">Home</div>
                <div className="text-xl">About</div>
                <div className="text-xl">Portfolio</div>
                <div className="text-xl">Contact</div>
            </div>
            <div className="grid grid-cols-2">

            </div>
        </div>
    )
}