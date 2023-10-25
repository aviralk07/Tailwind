import myImage from "./jerry.png";
import myImage1 from "./foot.png";
import myImage2 from "./foot1.png";
import myImage3 from "./cr71.png";
import myImage4 from "./ax.jpeg";
import myImage5 from "./ee.png";
import myImage6 from "./az.jpg";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(CSSPlugin);

function App() {
  const imgRef = useRef(null);
  const rotatingImgRef = useRef(null); // Add a ref for the rotating image
  useEffect(() => {
    // GSAP animation
    gsap.to(imgRef.current, {
      duration: 8,
      rotation: 360, // Rotate 360 degrees (1 full rotation)
      x: 300, // Move 100 pixels to the right
      ease: "bounce.out", // Add a bounce effect
    });
    gsap.to(rotatingImgRef.current, {
      duration: 4, // Adjust the duration as needed
      y: 20,
      repeat: -1, // Infinite rotation
      ease: "linear", // Linear rotation
    });
  }, []);
  return (
    <>
      <div className="flex justify-between items-center bg-green-500">
        <img
          src={myImage}
          className="h-20 w-20 bg-transparent"
          alt="Description of your image"
        />
        <img
          ref={imgRef}
          src={myImage1}
          className="absolute top-4 left-20 h-16 w-16 bg-transparent"
          alt="Description of your image"
        />
        <nav className="p-4">
          <ul className="flex space-x-4">
            <li className="text-white hover:text-yellow-400 lg:text-2xl cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="text-white hover:text-blue-500 lg:text-2xl cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="text-white hover:text-purple-500 lg:text-2xl cursor-pointer">
              <a href="#">Catalog</a>
            </li>
            <li className="text-white hover:text-pink-500 lg:text-2xl cursor-pointer">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <input
          type="text"
          className="border border-gray-900 mr-4 h-9 bg-white-900 border-solid border-l-cyan-700 absolute top-5 right-40 "
        />
        <button className="bg-red-500 hover:bg-red-400 focus:bg-pink-500 text-white font-bold py-2 px-4 rounded text-current mr-10 ">
          Click me
        </button>
      </div>

      <main>
        <div className="main bg-blue-200   py-40 pl-9">
          <div className="text-6xl pl-9">The best Football in the town</div>
          <p className="py-4 pl-9 w-86">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            incidunt eum! Nemo mollitia enim nulla eos. Vel, possimus, itaque .
          </p>
          <div className="button m-10   ">
            <button className="bg-purple-500 hover:bg-orange-400 focus:bg-pink-500 text-white font-bold py-2 px-4 rounded-3xl text-current mr-5 ">
              Buy Now
            </button>
            <button className="bg-purple-500 hover:bg-orange-400 focus:bg-pink-500 text-white font-bold py-2 px-4 rounded-3xl text-current ">
              Contact Us
            </button>
          </div>
          <div className="flex flex-wrap m-10 space-x-4 ">
            <img src={myImage2} className="w-20" alt="" />
            <img src={myImage2} className="w-20" alt="" />
            <img src={myImage2} className="w-20" alt="" />
            <img src={myImage2} className="w-20" alt="" />
            <img src={myImage2} className="w-20" alt="" />
          </div>
          <img
            src={myImage3}
            alt=""
            ref={rotatingImgRef}
            className="top-12 right-20 absolute"
          />
        </div>
      </main>
    </>
  );
}

export default App;
