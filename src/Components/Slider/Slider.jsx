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
    <section className="w-full">
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
        {data.map((item, index) => {
          return (
            <SwiperSlide className="flex flex-col items-start gap-5 cursor-pointer" onClick={() => window.open(item.href, "_blank")} key={index}>
              <img className="rounded-[0.625rem]" src={item.image} alt={item.text} />
              <p className="text-base text-white transition-all duration-300">{item.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
