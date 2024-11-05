import { useState, useEffect } from "react";
import "./service.css";

const Carousel = () => {
  const images = [
    "/src/assets/CBK-imgs/01.jpeg",
    "/src/assets/CBK-imgs/02.jpeg",
    "/src/assets/CBK-imgs/03.jpeg",
    "/src/assets/CBK-imgs/04.jpeg",
    "/src/assets/CBK-imgs/05.jpeg",
    "/src/assets/CBK-imgs/06.jpeg",
    "/src/assets/CBK-imgs/07.jpeg",
    "/src/assets/CBK-imgs/08.jpeg",
    "/src/assets/CBK-imgs/09.jpeg",
    "/src/assets/CBK-imgs/10.jpeg",
    "/src/assets/CBK-imgs/11.jpeg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div id="carouselExampleSlidesOnly" className="relative w-full h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === activeIndex ? 10 : 0 }}
          >
            <img
              src={image}
              className="block w-full h-full object-cover"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Static Centered Overlay with Blur Effect */}
      <div className="centered-popup-container z-20">
        <h2 className="message">Welcome to Our Service</h2>
        <div className="buttons-container">
          <button className="action-button">Shop</button>
          <button className="action-button">Book Services</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
