import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import image1 from "../../assets/images/layout-slider/1.jpg";
import image2 from "../../assets/images/layout-slider/2.jpg";
import image3 from "../../assets/images/layout-slider/3.jpg";
import image4 from "../../assets/images/layout-slider/4.jpg";
import image5 from "../../assets/images/layout-slider/5.jpg";
import image6 from "../../assets/images/layout-slider/6.jpg";
import image7 from "../../assets/images/layout-slider/7.jpg";

export default function Slider() {
  const data = [
    {
      image: image1,
      text: "چیدمان اولیه شبکه ای",
      href: "https://edumall.thememove.com/main/courses/?course_archive_preset=01",
    },
    {
      image: image2,
      text: "چیدمان مدرن شبکه ای",
      href: "#",
    },
    {
      image: image3,
      text: "طرح بندی کامل شبکه ای",
      href: "https://edumall.thememove.com/main/courses/?course_archive_preset=02",
    },
    {
      image: image4,
      text: "طرح بندی شبکه ای با سایدبار چپ",
      href: "https://edumall.thememove.com/main/courses/?course_archive_preset=03",
    },
    {
      image: image5,
      text: "طرح بندی شبکه ای با سایدبار راست",
      href: "https://edumall.thememove.com/main/courses/?course_archive_preset=04",
    },
    {
      image: image6,
      text: "سایدبار لیستی",
      href: "https://edumall.thememove.com/main/courses/?course_archive_preset=05",
    },
    {
      image: image7,
      text: "طرح بندی لیستی",
      href: "https://edumall.thememove.com/main/courses/?course_archive_preset=06",
    },
  ];
  return (
    <section className="w-full px-4">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
}
