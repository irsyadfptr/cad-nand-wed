import React from 'react';

export default function SectionCouple() {
    const handleContextMenu = (e) => {
        e.preventDefault(); // Prevent the context menu from appearing
    };

    return (
        <section className="bg-[#ece5db] text-center relative overflow-hidden">
            <div
                className="absolute z-20 -left-8 -top-0"
                data-aos="fade-down-left"
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos-once="true"
                data-aos-offset="0"
            >
                <img src="/orn-flower-1.png" alt="" className="w-28" />
            </div>
            <div
                className="absolute z-20 -right-8 -top-0"
                data-aos="fade-down-right"
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos-once="true"
                data-aos-offset="0"
            >
                <img src="/orn-flower-1.png" alt="" className="w-28 -scale-x-100" />
            </div>

            <div className="my-16" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="700" data-aos-once="true" data-aos-offset="0">
                <h2 className="text-[9vw] font-bold tracking-normal font-writing">The Wedding</h2>
                <p className="mt-6 text-sm opacity-50">
                    We have come to our new life, we want to share the joy of our marriage with all the families and friends. We write this invitation
                    to invite all of you to share the joy with us on our wedding.
                </p>
            </div>

            <div className="relative flex flex-col items-center bg-[#4a6741]">
                <div
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-delay="1000"
                    data-aos-once="true"
                    data-aos-offset="0"
                    className="relative flex flex-col items-center text-[#ece5db] w-full"
                >
                    <div className="mt-10 relative h-[375px] w-[250px] rounded-xl overflow-hidden">
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
                        <h2 className="text-[10vw] font-writing font-bold leading-[3rem]">
                            Ananda Prabu <br /> Dian Astuti
                        </h2>
                        <p className="mt-6 px-6">
                            Daughter of <br /> Mr. Miranu & Mrs. Farida
                        </p>
                    </div>
                </div>

                <div className="w-full bg-[#4a6741] flex justify-center my-4">
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
                    className="relative flex flex-col items-center bg-[#4a6741] text-[#ece5db] w-full mb-10"
                >
                    <div className="mt-10">
                        <h2 className="text-[10vw] font-writing font-bold leading-[3rem]">
                            Irsyad Fakhri <br /> Putranto
                        </h2>
                        <p className="mt-6 px-6">
                            Son of <br /> Mr. Fachrurrodji & Mrs. Sari
                        </p>
                    </div>

                    <div className="mt-10 relative h-[375px] w-[250px] rounded-xl overflow-hidden">
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
