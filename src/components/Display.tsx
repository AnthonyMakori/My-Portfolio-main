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
import grey from "../assets/cars/grey f.jpg";
import lambo1 from "../assets/cars/lambo1.jpg";
import lambos from "../assets/cars/lambos.jpg";
import large from "../assets/cars/large.jpg";
import redF from "../assets/cars/red f.jpg";
import red3 from "../assets/cars/red3.jpg";
import redone from "../assets/cars/redone.jpeg";
import sportBlue from "../assets/cars/sport blue.jpg";
import sportG from "../assets/cars/sport g.jpg";
import whiteF from "../assets/cars/white f.jpg";
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
  { src: white },
];

const Display: React.FC = () => {
  const [degrees, setDegrees] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const ROTATE_STEP = 360 / imageData.length;

  // =========================
  // Auto Rotate
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      setDegrees((prev) => prev - ROTATE_STEP);
      setCurrentIndex((prev) => (prev + 1) % imageData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.transform = `perspective(1200px) rotateY(${degrees}deg)`;
    }
  }, [degrees]);

  const handleNext = () => {
    setDegrees((prev) => prev - ROTATE_STEP);
    setCurrentIndex((prev) => (prev + 1) % imageData.length);
  };

  const handlePrev = () => {
    setDegrees((prev) => prev + ROTATE_STEP);
    setCurrentIndex(
      (prev) => (prev - 1 + imageData.length) % imageData.length
    );
  };

  return (
    <div
      className="w-full px-4"
      style={{
        margin: 0,
        padding: "40px 20px",
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 3D Carousel */}
        <div
          ref={boxRef}
          style={{
            width: "260px",
            height: "360px",
            position: "relative",
            transformStyle: "preserve-3d",
            transform: `perspective(1200px) rotateY(${degrees}deg)`,
            transition: "transform 1.5s",
          }}
        >
          {imageData.map((item, index) => (
            <span
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transformStyle: "preserve-3d",
                transform: `rotateY(${
                  index * ROTATE_STEP
                }deg) translateZ(380px)`,
                backfaceVisibility: "hidden",
              }}
            >
              {/* Card */}
              <div
                style={{
                  width: "260px",
                  height: "360px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,.35)",
                  padding: "10px",
                }}
              >
                <img
                  src={item.src}
                  alt={`Car ${index + 1}`}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "14px",
                    background: "#111",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </span>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "90px",
          }}
        >
          <button
            onClick={handlePrev}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.5)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              transition: "all .3s ease",
            }}
          >
            ◀
          </button>

          <button
            onClick={handleNext}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.5)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              transition: "all .3s ease",
            }}
          >
            ▶
          </button>
        </div>

        {/* Image Counter */}
        <p
          style={{
            color: "#fff",
            marginTop: "30px",
            fontSize: "14px",
            opacity: 0.8,
          }}
        >
          {currentIndex + 1} / {imageData.length}
        </p>
      </div>
    </div>
  );
};

export default Display;