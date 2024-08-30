import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";

const VerticalSlider = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 5500, disableOnInteraction: false }}
      mousewheel={{ forceToAxis: true }}
      modules={[Pagination, Navigation, Autoplay, Mousewheel]}
      className="mySwiper h-screen w-full"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="/src/assets/CBK-imgs/04.jpeg"
            alt="slide1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              CBK Beauty Appointments
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl mt-4">
              Book a service
            </p>
            <a
              href="https://www.fresha.com/a/cbk-beauty-flagship-salon-accra-agostinho-neto-road-umdarsv9"
              className="mt-8 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
              target="_blank"
            >
              Book Now
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="/src/assets/CBK-imgs/01.jpeg"
            alt="slide2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              CBK Beauty Store
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl mt-4">
              Browse Our Store
            </p>
            <a
              href="https://www.coloursbyk.com/"
              target="_blank"
              className="mt-8 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
}

export default VerticalSlider;
