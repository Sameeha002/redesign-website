import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="testimonail-container">
      <h2>
        What Students Are
        <br /> Saying About
        <br /> Internee.pk
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p>
            {" "}
            "internee.pk is all about helping us grow our
            careers. May ALLAH give them more achivements
            and success on their journey. "
          </p>
          <h4>Nagina Asif</h4>
          <p>Karachi,Pakistan</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            {" "}
            "internee.pk is all about helping us grow our
            careers. May ALLAH give them more achivements
            and success on their journey. "
          </p>
          <h4>Nagina Asif</h4>
          <p>Karachi,Pakistan</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            {" "}
            "internee.pk is all about helping us grow our
            careers. May ALLAH give them more achivements
            and success on their journey. "
          </p>
          <h4>Nagina Asif</h4>
          <p>Karachi,Pakistan</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            {" "}
            "internee.pk is all about helping us grow our
            careers. May ALLAH give them more achivements
            and success on their journey. "
          </p>
          <h4>Nagina Asif</h4>
          <p>Karachi,Pakistan</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            {" "}
            "internee.pk is all about helping us grow our
            careers. May ALLAH give them more achivements
            and success on their journey. "
          </p>
          <h4>Nagina Asif</h4>
          <p>Karachi,Pakistan</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            {" "}
            "internee.pk is all about helping us grow our
            careers. May ALLAH give them more achivements
            and success on their journey. "
          </p>
          <h4>Nagina Asif</h4>
          <p>Karachi,Pakistan</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
