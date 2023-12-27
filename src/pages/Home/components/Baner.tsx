import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import LaxuaryImage from "../../../assets/images/laxuary.jpg";
import SleekImage from "../../../assets/images/sleek.webp";
import WorkImage from "../../../assets/images/work.jpg";

export default function Baner() {
    return (
        <div className="baner">
            <div className="container px-4 pt-4">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="baner__slide">
                            <h3 className="baner__slide--caption text-muted">
                                Sleek Online Solutions
                            </h3>
                            <img
                                src={SleekImage}
                                alt=""
                                className="baner__slide--image"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="baner__slide">
                            <h3 className="baner__slide--caption text-white">
                                Luxury Websites
                            </h3>
                            <img
                                src={LaxuaryImage}
                                alt=""
                                className="baner__slide--image"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="baner__slide">
                            <h3 className="baner__slide--caption text-white">
                                Steady Advancement
                            </h3>
                            <img
                                src={WorkImage}
                                alt=""
                                className="baner__slide--image"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
