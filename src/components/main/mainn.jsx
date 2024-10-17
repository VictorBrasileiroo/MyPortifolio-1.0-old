import React, { useRef } from "react";
import '../../style.css'
import { Hero } from "./hero/hero";
import { AboutMe } from "./aboutMe/aboutme";
import { Tecs } from "./tecs/tecs";
import { Projects } from "./projectss/projects";

export function Main(){
    return (
        <>
        <main className="container-main">
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Tecs></Tecs>
            <Projects></Projects>
        </main>
        </>
    )
}