import React, { useRef } from 'react'
import './scroll.css'
import { gsap } from "gsap/dist/gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Scroll = () => {
    const main = useRef();
    useGSAP(() => {
        gsap.to(".box", {
            x: 300, duration: 1.5,

            ScrollTrigger: {
                trigger: ".box",
                start: " top bottom",
                end: "top 30%",
                markers: true,
            }
        }



        )
    })


    return (
        <>

            <div>
                <section className="section flex-center column text-center">
                    <h2>Basic ScrollTrigger with React</h2>
                    <p>Scroll down to see the magic happen!!</p>
                </section>
                <div className="section flex-center column" ref={main}>
                    <div className="box gradient-blue">box</div>
                    <div className="box gradient-blue">box</div>
                    <div className="box gradient-blue">box</div>
                </div>
                <section className="section"></section>
            </div>

        </>
    )
}

export default Scroll;
