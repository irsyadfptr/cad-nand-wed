export default function SectionItsTheDay() {
    return (
        <section className="px-12 py-16 bg-[#ece5db]">
            <h2
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
                className="text-[12vw] mb-12 text-center font-bold tracking-normal font-writing"
            >
                The Day
            </h2>

            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" className="mb-8 space-y-1 text-center">
                <h3 className="text-3xl font-semibold">Senin</h3>
                <p className="text-xl opacity-80">25 December 2023</p>
            </div>

            <div className="relative" data-aos-once="true" data-aos-delay="750" data-aos="fade-up" data-aos-duration="2000">
                <div className="z-20 bg-[#4a6741] relative text-light text-center shadow-xl px-4 py-32 flex flex-col gap-24 rounded-full">
                    <div data-aos-once="true" data-aos="fade-down" data-aos-duration="1000">
                        <img src="/ring.png" width={80} className="block mx-auto mb-4" />
                        <div className="">
                            <h3 className="text-4xl">
                                Akad Nikah <br /> & <br /> Temu Manten
                            </h3>
                            <h3 className="text-2xl mt-2">(Family Only)</h3>
                            <div className="px-2 mt-4">
                                <p>
                                    25 December 2023 &#183; <br /> 10.00 &ndash; 13.30
                                </p>
                                <p>
                                    Griya Joglo, Blitar
                                    <br />
                                    Jl. Bengawan Solo No.179 kel, Tanjungsari, Sukorejo, Blitar City, East Java 66122
                                </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos-once="true" data-aos="zoom-down" data-aos-duration="1000">
                        <img src="/resepsi.png" width={80} className="block mx-auto mb-4" />
                        <div className="">
                            <h3 className="text-4xl">Resepsi</h3>
                            <div className="px-2 mt-4">
                                <p>
                                    25 December 2023 &#183; <br /> 14.30 &ndash; 17.00
                                </p>
                                <p>
                                    Griya Joglo, Blitar
                                    <br />
                                    Jl. Bengawan Solo No.179 kel, Tanjungsari, Sukorejo, Blitar City, East Java 66122
                                </p>{' '}
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">
                    <div className="absolute bottom-0">
                        <img src="/orn-flower-10.png" width={100} />
                    </div>
                </div>

                <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
                    <div className="absolute -bottom-8 left-16">
                        <img src="/orn-flower-11.png" width={100} />
                    </div>
                </div>

                <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300">
                    <div className="absolute -bottom-10 left-40">
                        <img src="/orn-flower-13.png" width={100} />
                    </div>
                </div>

                <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
                    <div className="absolute -bottom-12 left-28">
                        <img src="/orn-flower-15.png" width={100} />
                    </div>
                </div>

                <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">
                    <div className="absolute bottom-0 z-10 right-4">
                        <img src="/orn-flower-12.png" width={100} />
                    </div>
                </div>

                <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600">
                    <div className="absolute bottom-0 right-0">
                        <img src="/orn-flower-14.png" width={100} />
                    </div>
                </div>
            </div>
        </section>
    );
}
