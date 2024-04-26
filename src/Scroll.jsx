import React, { useRef } from 'react'
import './scroll.css'
import { gsap } from "gsap/dist/gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Scroll = () => {
    const main = useRef();
    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.box');
            const boxes2 = gsap.utils.toArray('.boxs');
            boxes.forEach((box) => {
                gsap.to(box, {
                    x: -50, y: -50,
                    scrollTrigger: {
                        trigger: box,
                        start: 'bottom bottom',
                        end: ' center center',
                        scrub: true,
                        markers: true,
                    },
                });
            });

            boxes2.forEach((box2) => {
                gsap.to(box2, {
                    x: 90,
                    scrollTrigger: {
                        trigger: box2,
                        start: 'bottom bottom',
                        end: '  center 100%',
                        scrub: true,
                        markers: true,
                    },
                });
            });
        },
        { scope: main }
    );

    return (
        <>
            <div className="container border " ref={main}>
                <div className="box mx-1"><span>Box-1</span></div>
                <div className="box">Box-2</div>
                <div className=" mx-2">
                    <div className="boxs "><span>Box-3</span></div>
                    <div className="boxs mt-1">Box-4</div>
                </div>
            </div>

        </>
    )
}

export default Scroll;
