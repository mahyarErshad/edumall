import React from "react";
import TutorSectionCards from "./TutorSectionCards";
import arrow from "../../../assets/images/tutorSectionSvg/tutor-arrow.svg";
import eLearning from "../../../assets/images/tutorSectionSvg/tutor-eLearning.svg";
import reports from "../../../assets/images/tutorSectionSvg/tutor-reports.svg";
import withdrawal from "../../../assets/images/tutorSectionSvg/tutor-withdrawal.svg";
import money from "../../../assets/images/tutorSectionSvg/tutor-money.svg";

function TutorSection() {
  return (
    <section className="pt-32 bg-white flex flex-col max-lg:px-4 px-[10%]">
      <div className="max-md:w-full md:w-2/4 bg-transparent flex flex-col gap-8 max-md:text-center">
        <h2 className="font-medium max-md:text-3xl md:text-5xl leading-5">
          ادغام با افزونه <span className="line_after">تیوتر</span> LMS
        </h2>
        <p>اجومال با قدرتمندترین پلاگین LMS - تیوتر LMS ارائه می شود که برای مربیان فردی، سازمان های آموزشی و پلت فرم آموزش الکترونیکی تخصص دارد.</p>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-9">
        <div className="max-md:w-full md:w-2/4 flex gap-4 flex-wrap">
          <TutorSectionCards image={arrow} title="سازنده دوره بصری" description="کاربران به راحتی می توانند دوره ها را با کشیدن و رها کردن سیستم و رابط کاربر پسند ایجاد و مدیریت کنند." />
          <TutorSectionCards image={eLearning} title="مدیریت آموزش الکترونیکی ساده" description="شما کنترل کامل دوره، مدرسان، سیستم جوایز و هر چیزی که به پلتفرم آموزش الکترونیکی شما مربوط می شود، دارید." />
          <TutorSectionCards image={reports} title="گزارش ها و تحلیل ها" description="همه کاربران آمار خود را به طور خودکار تولید می کنند تا پیشرفت و گزارش ها را پیگیری کنند" />
          <TutorSectionCards image={withdrawal} title="گزینه های برداشت" description="تیوتر LMS چندین روش برداشت را ارائه می دهد و به کاربر امکان می دهد برداشت تمام درآمدها را مدیریت کند." />
        </div>
        <div className="max-md:w-full md:w-2/4"></div>
      </div>
    </section>
  );
}

export default TutorSection;
