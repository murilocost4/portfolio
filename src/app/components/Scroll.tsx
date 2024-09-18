"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Scroll() {

    const aosInit = AOS.init({duration:1200});
    useEffect(() => {
      aosInit
    })

    return(
        <div className="w-72 h-72 bg-none border-2 border-white rounded-md" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"></div>
    )
}