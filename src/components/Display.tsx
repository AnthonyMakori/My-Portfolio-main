// components/Display.tsx
import React, { useEffect, useRef, useState } from 'react';
import { ChefHat, Sparkles } from 'lucide-react';

const imageData = [
  { src: '/src/assets/cars/blue f.jpg' },
  { src: '/src/assets/cars/blue s.jpeg' },
  { src: '/src/assets/cars/dark.jpg', },
  { src: '/src/assets/cars/front.jpg' },
  { src: '/src/assets/cars/green.jpg'},
  { src: '/src/assets/cars/grey.jpg'},
  { src: '/src/assets/cars/lambo1.jpg' },
  { src: '/src/assets/cars/lambos.jpg' },
  { src: '/src/assets/cars/large.jpg' },
  { src: '/src/assets/cars/red f.jpg'},
  { src: '/src/assets/cars/red3.jpg' },
  { src: '/src/assets/cars/redone.jpeg' },
  { src: '/src/assets/cars/sport blue.jpg' },
  { src: '/src/assets/cars/sport g.jpg' },
  { src: '/src/assets/cars/white f.jpg' },
  { src: '/src/assets/cars/wine.jpg' },
  { src: '/src/assets/cars/white.jpg' }
];

const Display: React.FC = () => {
  const [degrees, setDegrees] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDegrees((prev) => prev - 45);
      setCurrentIndex((prev) => (prev + 1) % imageData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
    }
  }, [degrees]);

  const handleNext = () => {
    setDegrees((d) => d - 45);
    setCurrentIndex((i) => (i + 1) % imageData.length);
  };

  const handlePrev = () => {
    setDegrees((d) => d + 45);
    setCurrentIndex((i) => (i - 1 + imageData.length) % imageData.length);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const boxStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: `perspective(1000px) rotateY(${degrees}deg)`,
    transition: 'transform 1.5s'
  };

  const btnsStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '30px'
  };

  const btnStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    border: '2px solid #fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative'
  };

  const arrowBase: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    width: '15%',
    height: '15%',
    borderTop: '3px solid #fff',
    borderRight: '3px solid #fff'
  };

  const nextArrow = {
    ...arrowBase,
    transform: 'rotate(45deg) translate(-2.5px, 2.5px)'
  };

  const prevArrow = {
    ...arrowBase,
    transform: 'rotate(225deg) translate(-2.5px, 2.5px)'
  };

  return (
    <div
      className="w-full px-4"
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        background: `url('src/assets/back/back.jpg') no-repeat center center`,
        backgroundSize: 'cover',
        transformStyle: 'preserve-3d',
        overflow: 'hidden'
      }}
    >
      {/* Carousel Section */}
      <div style={containerStyle}>
        <div ref={boxRef} style={boxStyle}>
          {imageData.map((item, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transformOrigin: 'center',
                transformStyle: 'preserve-3d',
                transform: `rotateY(${(i + 1) * 45}deg) translateZ(300px)`,
                WebkitBoxReflect: 'below 0px linear-gradient(transparent, #0004)'
              }}
            >
              <img
                src={item.src}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  userSelect: 'none'
                }}
              />
            </span>
          ))}
        </div>

        {/* Buttons */}
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
