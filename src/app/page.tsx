import React from "react";
import Header from "./components/header";
import HomeBody from "./components/home";
import Link from "next/link";


export default function Home() {
    return(
        <div className="bg-white h-screen">
            <Header />
            <HomeBody />
        </div>
    )
}