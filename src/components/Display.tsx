// components/Display.tsx
import React, { useEffect, useRef, useState } from "react";

// =========================
// Import Images
// =========================
import background from "../assets/back/back.jpg";

import blueF from "../assets/cars/blue f.jpg";
import blueS from "../assets/cars/blue s.jpeg";
import dark from "../assets/cars/dark.jpg";
import front from "../assets/cars/front.jpg";
import green from "../assets/cars/green.png";
import grey from "../assets/cars/grey.jpg";
import lambo1 from "../assets/cars/lambo1.jpg";
import lambos from "../assets/cars/lambos.jpg";
import large from "../assets/cars/large.jpg";
import redF from "../assets/cars/red f.jpg";
import red3 from "../assets/cars/red3.jpg";
import redone from "../assets/cars/redone.jpeg";
import sportBlue from "../assets/cars/sport blue.jpg";
import sportG from "../assets/cars/sport g.jpg";
import whiteF from "../assets/cars/white f.jpg";
import wine from "../assets/cars/wine.jpg";
import white from "../assets/cars/white.jpg";

// =========================
// Images Array
// =========================
const imageData = [
  { src: blueF },
  { src: blueS },
  { src: dark },
  { src: front },
  { src: green },
  { src: grey },
  { src: lambo1 },
  { src: lambos },
  { src: large },
  { src: redF },
  { src: red3 },
  { src: redone },
  { src: sportBlue },
  { src: sportG },
  { src: whiteF },
  { src: wine },
  { src: white },
];

const Display: React.FC = () => {
  const [degrees, setDegrees] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDegrees((prev) => prev - 45);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
    }
  }, [degrees]);

  const handleNext = () => {
    setDegrees((prev) => prev - 45);
  };

  const handlePrev = () => {
    setDegrees((prev) => prev + 45);
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const boxStyle: React.CSSProperties = {
    width: "200px",
    height: "200px",
    position: "relative",
    transformStyle: "preserve-3d",
    transform: `perspective(1000px) rotateY(${degrees}deg)`,
    transition: "transform 1.5s",
  };

  const btnsStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-100px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "30px",
  };

  const btnStyle: React.CSSProperties = {
    width: "60px",
    height: "60px",
    border: "2px solid #fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(6px)",
  };

  const arrowBase: React.CSSProperties = {
    position: "absolute",
    width: "15%",
    height: "15%",
    borderTop: "3px solid #fff",
    borderRight: "3px solid #fff",
  };

  const nextArrow: React.CSSProperties = {
    ...arrowBase,
    transform: "rotate(45deg) translate(-2.5px, 2.5px)",
  };

  const prevArrow: React.CSSProperties = {
    ...arrowBase,
    transform: "rotate(225deg) translate(-2.5px, 2.5px)",
  };

  return (
    <div
      className="w-full px-4"
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      {/* Carousel */}
      <div style={containerStyle}>
        <div ref={boxRef} style={boxStyle}>
          {imageData.map((item, index) => (
            <span
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                transformOrigin: "center",
                transformStyle: "preserve-3d",
                transform: `rotateY(${index * (360 / imageData.length)}deg) translateZ(300px)`,
                WebkitBoxReflect:
                  "below 0px linear-gradient(transparent, transparent, #0004)",
              }}
            >
              <img
                src={item.src}
                alt={`Car ${index + 1}`}
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </span>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div style={btnsStyle}>
          <div style={btnStyle} onClick={handlePrev}>
            <div style={prevArrow}></div>
          </div>

          <div style={btnStyle} onClick={handleNext}>
            <div style={nextArrow}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;