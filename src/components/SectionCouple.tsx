import React from 'react';

export default function SectionCouple() {
    const handleContextMenu = (e) => {
        e.preventDefault(); // Prevent the context menu from appearing
    };

    return (
        <section className="bg-[#ece5db] sm:bg-white text-center relative overflow-hidden mt-0 sm:mt-10 xl:mt-20">
            <div
                className="absolute z-20 -left-8 top-[17rem]"
                data-aos="fade-down-left"
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos-once="true"
                data-aos-offset="0"
            >
                <img src="/orn-flower-1.png" alt="" className="w-28" />
            </div>
            <div
                className="absolute z-20 -right-8 top-[17rem]"
                data-aos="fade-down-right"
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos-once="true"
                data-aos-offset="0"
            >
                <img src="/orn-flower-1.png" alt="" className="w-28 -scale-x-100" />
            </div>

            <div className="my-16 px-8" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="700" data-aos-once="true" data-aos-offset="0">
                <h2 className="text-[9vw] font-bold tracking-normal font-writing">The Wedding</h2>
                <p className="mt-6 text-sm md:text-lg xl:text-2xl opacity-50">
                    In the dawn of our new journey, the moment has arrived to count down the days until our blissful day. We would like to extend an
                    invitation for you to be part of this special moment, physically or through the warmth of your heartfelt prayers and wishes.
                </p>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center bg-white">
                <div
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-delay="1000"
                    data-aos-once="true"
                    data-aos-offset="0"
                    className="relative flex flex-col items-center w-full"
                >
                    <div className="mt-10 relative h-[375px] w-[250px] xl:h-[469px] xl:w-[313px] rounded-xl overflow-hidden">
                        <div
                            style={{
                                animation: 'nanda-image 8s infinite alternate',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                            className="object-cover rounded-tl-full rounded-tr-full border-4 shadow-xl pointer-events-none"
                        />
                    </div>
                    <div className="my-8">
                        <h2 className="text-[10vw] lg:text-4xl xl:text-5xl font-writing font-bold leading-[3rem] md:leading-[5rem]">
                            Ananda Prabu <br /> Dian Astuti
                        </h2>
                        <p className="mt-6 px-6 text-sm md:text-xl">
                            <span className="">Daughter of</span> <br /> Mr. Miranu Triantoro
                            <br />&<br />
                            Mrs. Farida Nursusanti
                        </p>
                    </div>
                </div>

                <div className="w-full bg-white flex justify-center my-4 lg:hidden">
                    <div className="vertical" />
                </div>

                {/* <div
                    className="w-screen py-20 text-5xl font-writing border-y-2 "
                    // data-aos="zoom-in"
                    // data-aos-duration="2000"
                    // data-aos-delay="1000"
                    // data-aos-once="true"
                >
                    With
                </div> */}

                <div
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-delay="1000"
                    data-aos-once="true"
                    data-aos-offset="0"
                    className="relative flex flex-col lg:flex-col-reverse items-center bg-white w-full mb-10"
                >
                    <div className="mt-10">
                        <h2 className="text-[10vw] lg:text-4xl xl:text-5xl font-writing font-bold leading-[3rem] md:leading-[5rem]">
                            Irsyad Fakhri <br /> Putranto
                        </h2>
                        <p className="mt-6 px-6 text-sm md:text-xl">
                            <span className="">Son of</span> <br /> Mr. Fachrurrodji
                            <br />&<br />
                            Mrs. Sari Muktiningrum
                        </p>
                    </div>

                    <div className="mt-10 relative h-[375px] w-[250px] xl:h-[469px] xl:w-[313px] rounded-xl overflow-hidden">
                        <div
                            style={{
                                animation: 'irsyad-image 8s infinite alternate',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                            className="object-cover rounded-tl-full rounded-tr-full border-4 shadow-xl pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
