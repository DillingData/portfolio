import React from "react";
import Header from "../components/header";
import HomeBody from "../components/home";


export default function Home() {
    return(
        <div className="bg-white h-screen ">
            <Header />
            <HomeBody />
        </div>
    )
}