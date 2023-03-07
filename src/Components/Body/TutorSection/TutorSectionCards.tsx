import React from "react";
import arrow from "../../../assets/images/tutorSectionSvg/tutor-arrow.svg";

interface IProps{
  image: string;
  title: string;
  description: string;
}

function TutorSectionCards() {
  return (
    <figure className="bg-transparent flex flex-col gap-4 justify-start lg:w-[47%] max-lg:w-full">
      <img className="w-12" src={arrow} alt="arrow" />
      <h3 className="text-2xl font-medium">سازنده دوره بصری</h3>
      <p className="font-normal text-sm">کاربران به راحتی می توانند دوره ها را با کشیدن و رها کردن سیستم و رابط کاربر پسند ایجاد و مدیریت کنند.</p>
    </figure>
  );
}

export default TutorSectionCards;
