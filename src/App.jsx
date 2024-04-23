import React from "react"
import './App.css'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);


function App() {

  useGSAP(() => {
    gsap.to(".box1", { x: "-100", duration: 3, })
    gsap.to(".box2", { y: "200", duration: 5, rotateX: "360", ease: "elastic" })
    gsap.to(".box3", { x: "100", duration: 3, })
  })

  setInterval(() => {

    const tl = gsap.timeline({ repeat: 2, repeatDelay: 1, yoyo: true })
    tl.to("h1 span", { duration: 6, text: " hello i am ravi " })
      .to(".btn", { x: 100, yoyo: false })
      .set(".btn", { text: "Iam btn" })

  }, 6000)

  return (
    <>
      <div className="container  border" >
        <div className="row">
          <div className="col-md-3  box1 bg-dark  text-center text-light "> <h1 className="Text"> <span></span></h1></div>
          <div className="col-md-3  box2 bg-dark  text-center text-light "> <h1 className="Text"><span></span></h1></div>
          <div className="col-md-3  box3 bg-dark  text-center text-light "> <h1 className="Text"><span></span> </h1>
            <button className="btn btn-danger mx-4">Ravi</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
