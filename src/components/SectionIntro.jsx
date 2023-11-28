import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef } from 'react';

export default function SectionIntro({}) {
    const timer = useRef();
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 2000,
        slidesPerView: 3,
        controls: false,
        spacing: 10,
    });

    useEffect(() => {
        timer.current = setInterval(() => {
            slider.next();
        }, 3000);
        return () => {
            clearInterval(timer.current);
        };
    });

    return (
        <section className="h-[100vh] flex flex-col items-center overflow-hidden">
            <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "linear-gradient(180deg, rgba(236, 229, 219, 0) 0%, #ece5db 100%), linear-gradient(180deg, #ece5db 0%, rgba(236, 229, 219, 0) 80%), url('/intro-2.jpg')",
                }}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <h1 className="mt-[6vh] leading-10 text-center -top-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <div className="text-[6vw] shadowed-text">Wedding Invitation</div>
                    <div className="mt-8 block mt-1 text-white text-[16vw] font-bold font-writing leading-[15vw] shadowed-text">
                        Ananda <br /> &amp; <br /> Irsyad
                    </div>
                    <div className="mt-8 text-[5vw] font-writing shadowed-text mx-[16vw] leading-6 text-white shadowed-text">
                        Life is better with your best friend that's why I married mine!
                    </div>
                </h1>
            </div>

            <div id="container" className="absolute top-[95vh] w-[85vw] z-50"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-once="true">
                <div ref={sliderRef} className="keen-slider">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div
                            key={index + 1}
                            className={`keen-slider__slide number-slide${index + 1} rounded-lg bg-cover bg-no-repeat bg-center`}
                            style={{ backgroundImage: `url('/carousel/${index + 1}.jpg')` }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
