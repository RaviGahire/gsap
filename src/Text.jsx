import React, { useRef } from 'react'
import './App.css'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);








const Text = () => {


    const container = useRef();
    const circle = useRef();
    const text = useRef();

    useGSAP(() => {
        // use selectors...
        gsap.to(".box", { rotation: "+=360", duration: 3, scrub: true });

        // or refs...
        gsap.to(circle.current, { rotation: "-=360", duration: 3 });

        gsap.to(text.current,{rotate:"20",duration:3})
    },
        { scope: container }
    ); // <-- scope for selector text (optional)


    return (
        <>
            <div className="App">
                <div ref={container} className="container">
                    <div className="box gradient-blue">selector</div>
                    <div className="circle gradient-green" ref={circle}>
                        Ref
                    </div>
                </div>
                <div className="box gradient-blue">selector</div>
               
            </div>

            <h1 className='mytext' ref={text}> heloo</h1>
        </>
    )
}

export default Text;


