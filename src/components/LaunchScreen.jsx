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
                <div className="flex flex-col min-h-screen min-w-screen justify-between left-0 right-0 z-30 text-center bottom-20">
                    <div className="mb-8 mt-14">
                        <h1
                            className="text-white font-bold leading-normal text-[8vw] font-writing shadowed-text"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            The Wedding of
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
                            Kepada Yth.
                        </p>
                        <p className="text-3xl mb-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000" data-aos-offset="0">
                            {name}
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
