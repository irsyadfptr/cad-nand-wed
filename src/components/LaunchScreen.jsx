export default function LaunchScreen({ name, onOpenInvitation }) {
    const handleContextMenu = (e) => {
        e.preventDefault(); // Prevent the context menu from appearing
    };

    return (
        <>
            <section
                id="launch-screen"
                className="relative h-[100svh] fillable-height flex flex-col items-center justify-center overflow-hidden md:hidden"
            >
                <div className="absolute inset-0">
                    <div className="absolute z-10 -bottom-16 -left-24">
                        <img src="/orn-flower-1.png" alt="" className="pointer-events-none w-72" onContextMenu={handleContextMenu} />
                    </div>
                    <div className="absolute bottom-0 z-20 -left-4 animate-right-left">
                        <img
                            src="/orn-flower-4.png"
                            alt=""
                            className="pointer-events-none w-28"
                            data-aos="fade-up-right"
                            data-aos-duration="2000"
                            data-aos-offset="0"
                            data-aos-delay="800"
                            onContextMenu={handleContextMenu}
                        />
                    </div>

                    <div className="absolute z-20 -bottom-16 -right-0">
                        <img src="/orn-flower-3.png" alt="" className="pointer-events-none w-36" onContextMenu={handleContextMenu} />
                    </div>
                    <div className="absolute bottom-0 z-10 -right-4 animate-left-right">
                        <img
                            src="/orn-flower-2.png"
                            alt=""
                            className="w-28 scale-x-[-1] pointer-events-none"
                            data-aos="fade-up-left"
                            data-aos-duration="2000"
                            data-aos-offset="0"
                            data-aos-delay="800"
                            onContextMenu={handleContextMenu}
                        />
                    </div>
                </div>

                <div className="flex flex-col min-h-screen min-w-screen justify-between left-0 right-0 z-30 text-center bottom-20">
                    <div className="mb-8 mt-14">
                        <h1
                            className="text-white font-bold leading-normal text-[8vw] font-writing shadowed-text"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Wedding of
                        </h1>
                        <h1
                            className="text-white font-bold leading-normal text-[13vw] font-writing shadowed-text"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Ananda &amp; Irsyad
                        </h1>
                        <h1
                            className="text-white font-bold leading-normal text-[6vw] font-writing shadowed-text"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            25 December 2023
                        </h1>
                    </div>

                    <div className="mb-20">
                        <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000" data-aos-offset="0">
                            Halo, {name}
                        </p>
                        <button
                            type="button"
                            className="text-[#52331a] shadow bg-[#e9c695] hover:bg-[#d9b788]  font-bold rounded-3xl px-5 py-2.5"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="2000"
                            data-aos-offset="0"
                            onClick={onOpenInvitation}
                        >
                            Open Invitation
                        </button>
                    </div>
                </div>
            </section>
            <section
                id="launch-screen-desktop"
                className="relative h-[100svh] fillable-height flex flex-col items-center justify-center overflow-hidden hidden md:block"
            >
                <div className="background-desktop flex flex-col min-h-screen min-w-screen justify-between left-0 right-0 z-30 text-center bottom-20">
                    <div className="overlay absolute inset-0 bg-gradient-to-b from-transparent to-[#fff1de]"></div>

                    <div className="mb-8 mt-20 z-20">
                        <h1
                            className="text-white font-bold leading-normal text-[8vw] lg:text-[4vw] font-writing shadowed-text"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Wedding of
                        </h1>
                        <h1
                            className="text-white font-bold leading-normal text-[13vw] lg:text-[8vw] font-writing shadowed-text"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Ananda &amp; Irsyad
                        </h1>
                        <h1
                            className="text-white font-bold leading-normal text-[6vw] lg:text-[4vw] font-writing shadowed-text"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            25 December 2023
                        </h1>
                    </div>
                    <div className="mb-20 z-20">
                        <p
                            className="text-[4vw] lg:text-[2vw] font-writing text-white shadowed-text mb-8"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="2000"
                            data-aos-offset="0"
                        >
                            Halo, {name}
                        </p>
                        <button
                            type="button"
                            className="text-[#52331a] shadow bg-[#e9c695] hover:bg-[#d9b788]  font-bold rounded-3xl px-5 py-2.5"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="2000"
                            data-aos-offset="0"
                            onClick={onOpenInvitation}
                        >
                            Open Invitation
                        </button>
                    </div>
                    {/* Background overlay */}
                </div>
            </section>
        </>
    );
}
