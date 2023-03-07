import React from 'react'
import TutorSectionCards from "./TutorSectionCards";
import arrow from "../../../assets/images/tutorSectionSvg/tutor-arrow.svg";
import eLearning from "../../../assets/images/tutorSectionSvg/tutor-eLearning.svg";
import reports from "../../../assets/images/tutorSectionSvg/tutor-reports.svg";
import withdrawal from "../../../assets/images/tutorSectionSvg/tutor-withdrawal.svg";
import money from "../../../assets/images/tutorSectionSvg/tutor-money.svg";
import awards from "../../../assets/images/tutorSectionSvg/tutor-awards.svg";

function TutorCardsWrapper() {
  return (
    <div className="max-lg:w-full lg:w-2/4 flex gap-4 flex-wrap">
    <TutorSectionCards image={arrow} title="سازنده دوره بصری" description="کاربران به راحتی می توانند دوره ها را با کشیدن و رها کردن سیستم و رابط کاربر پسند ایجاد و مدیریت کنند." />
    <TutorSectionCards image={eLearning} title="مدیریت آموزش الکترونیکی ساده" description="شما کنترل کامل دوره، مدرسان، سیستم جوایز و هر چیزی که به پلتفرم آموزش الکترونیکی شما مربوط می شود، دارید." />
    <TutorSectionCards image={reports} title="گزارش ها و تحلیل ها" description="همه کاربران آمار خود را به طور خودکار تولید می کنند تا پیشرفت و گزارش ها را پیگیری کنند" />
    <TutorSectionCards image={withdrawal} title="گزینه های برداشت" description="تیوتر LMS چندین روش برداشت را ارائه می دهد و به کاربر امکان می دهد برداشت تمام درآمدها را مدیریت کند." />
    <TutorSectionCards image={money} title="درآمد و کمیسیون" description="با تیوتر LMS، می توانید درصد کمیسیون را تعیین کنید، کمیسیون را توزیع کنید و تمام فرآیندها را مدیریت کنید." />
    <TutorSectionCards image={awards} title="اعطای گواهینامه" description="تیوتر LMS گواهینامه های حرفه ای از پیش طراحی شده را به دانش آموزان ارائه می دهد یا می توانید گواهی سفارشی خود را ایجاد کنید." />
  </div>
  )
}

export default TutorCardsWrapper