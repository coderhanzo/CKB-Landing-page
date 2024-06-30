import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";

function VerticalSlider() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper h-screen w-full"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="path-to-your-image1"
            alt="slide1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              Miérèle Beauty
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl mt-4">
              new way of service
            </p>
            <button className="mt-8 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded">
              Book Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="path-to-your-image2"
            alt="slide2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              Miérèle Beauty
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl mt-4">
              new way of service
            </p>
            <button className="mt-8 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded">
              Book Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
}

export default VerticalSlider;
