import React, { useRef } from "react";
import '../../style.css'
import { FaArrowUp } from "react-icons/fa";


export function BtnTop(){

    function btnTop(){
        window.scrollTo(0,0);
    };

    return (
        <>
        <button className="btn-top" onClick={() => {
            btnTop();
        }}>
            <FaArrowUp/>
        </button>
        </>
    );
};