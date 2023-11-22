import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import BottomOrnament from './BottomOrnament';
import TopOrnament from './TopOrnament';

export default function SectionStory() {
    return (
        <section className="relative p-16 pb-24 overflow-hidden min-h-[100vh]">
            <h2
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-once="true"
                className="text-[12vw] mb-12 mt-8 text-center font-bold tracking-normal font-writing"
            >
                Our Story
            </h2>

            <TopOrnament />

            <div data-aos="flip-left" data-aos-duration="2000" data-aos-once="true">
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
                    <SwiperSlide>
                        <div className="w-full px-4">
                            <h3 className="mb-1 font-semibold">25 Februari 2023</h3>
                            <p className="text-xs opacity-70">
                                Kali pertama kami bertemu, Abang kembali dari Jakarta, dua hari yang kita bagi, dalam pertemuan yang tak ternilai.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full px-4">
                            <h3 className="mb-1 font-semibold">15 April 2023</h3>
                            <p className="text-xs opacity-70">
                                Kali kedua kami bertemu, Abang kembali dari Jakarta, membangun ikatan dan keharmonisan, berbuka bersama dan merayakan
                                Lebaran Idul Fitri dalam kebahagiaan yang tak tergantikan.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full px-4">
                            <h3 className="mb-1 font-semibold">28 Juni 2023</h3>
                            <p className="text-xs opacity-70">
                                Kali ketiga kami bertemu, Abang kembali dari Jakarta,
                                <em>we&apos;re two the photos are five</em>, lima hari tak ternilai kami habiskan bersama, dan di hari itu, Abang
                                bersua dengan orangtuaku, membicarakan rencana cintanya yang akan mengikatku.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full px-4">
                            <h3 className="mb-1 font-semibold">19 Agustus 2023</h3>
                            <p className="text-xs opacity-70">
                                Kali keempat kami bertemu, Abang kembali dari Jakarta dan akan segera menetap ke bengkulu,{' '}
                                <em>lagi five days love letters</em>, lima hari tak ternilai kami habiskan bersama, dan di hari itu, dan hari Abang
                                melamar Adek.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full px-4">
                            <h3 className="mb-1 font-semibold">18 November 2023</h3>
                            <p className="text-xs opacity-70">
                                Kali kelima kami bertemu, Abang sudah menetap di Bengkulu, hari yang kami nantikan. Pernikahan.{' '}
                                <em>By fate we met, By choice we stay and love together.</em>
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <BottomOrnament />
        </section>
    );
}
