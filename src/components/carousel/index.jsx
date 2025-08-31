import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "./slides/slide1.jpg";
import slide2 from "./slides/slide2.jpg";
import slide3 from "./slides/slide3.jpg";
import slide4 from "./slides/slide4.jpg";
import slide5 from "./slides/slide5.jpg";
import slide6 from "./slides/slide6.jpg";
import slide7 from "./slides/slide7.jpg";
import slide8 from "./slides/slide8.jpg";
import slide9 from "./slides/slide9.jpg";

const CoverflowCarousel = () => {
  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="w-64 h-80">
            <img
              src={src}
              alt={`slide-${i}`}
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoverflowCarousel;