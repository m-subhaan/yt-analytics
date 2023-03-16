import {useState, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper/core";

import "swiper/css";
import "swiper/css/autoplay";

import ClientCard from "../../components/ClientCard";

SwiperCore.use([Autoplay]);

function TrustedBy() {
    const swiperRef = useRef(null);
    const [swiperIndex, setSwiperIndex] = useState(0);

    const handleSlideChange = swiper => {
        setSwiperIndex(swiper.activeIndex);
    };

    const handleRotateSlides = () => {
        const swiperInstance = swiperRef.current.swiper;
        swiperInstance.slideNext();
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
            <h1 className="text-textColor text-3xl md:text-4xl font-bold">Trusted By</h1>
            <p className="text-textColor w-96 mx-auto leading-normal font-bold mb-12">Read What Others Have to Say</p>
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{delay: 2000}}
                onSlideChange={handleSlideChange}
                onAutoplay={handleRotateSlides}
                loop={true}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50
                    }
                }}
            >
                <SwiperSlide>
                    <ClientCard name="Ahsan Javed" />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard name="Hamza Javed" />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard name="Salman Javed" />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard name="Subhan Javed" />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard name="Rafey Javed" />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard name="Bilal Javed" />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard name="Usama Javed" />
                </SwiperSlide>
                {/* add more SwiperSlides with similar structure */}
            </Swiper>
        </div>
    );
}

export default TrustedBy;
