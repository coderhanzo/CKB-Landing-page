import { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    // "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    // "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    // "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
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
    // Set an interval to automatically change the active image every 3 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carouselExampleSlidesOnly" className="relative w-full h-screen">
      <div className="relative w-full h-full overflow-hidden">
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
    </div>
  );
};

export default Carousel;
