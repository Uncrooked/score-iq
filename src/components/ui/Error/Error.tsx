'use client'

import { useRef } from "react";
import { useEffect } from "react";

export default function Error(){
    const errorRef = useRef<HTMLDivElement | null>(null);

    function removeError(){
        if(errorRef.current) errorRef.current.style.display = "none";
    }

    useEffect(() => {
        setTimeout(removeError,5000);
    },[]);

    return(
        <div id="error" ref={errorRef}>
            Mauvaise réponse
        </div>
    )
}