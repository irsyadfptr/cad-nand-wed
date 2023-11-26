export default function SectionIntro({ name }) {
    return (
        <section className="h-screen flex flex-col items-center overflow-hidden">
            <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                    backgroundImage: "linear-gradient(180deg, rgba(236, 229, 219, 0) 0%, #4a6741  125%), linear-gradient(180deg, #4a6741 0%, rgba(236, 229, 219, 0)  80%), url('/intro-2.jpg')",
                }}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <h1 className="mt-[12vh] leading-10 text-center -top-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <div className="text-[6vw] text-white shadowed-text">Wedding Invitation</div>
                    <div className="mt-8 block mt-1 text-white text-[16vw] font-bold font-writing leading-[15vw] shadowed-text">
                        Ananda <br /> &amp; <br /> Irsyad
                    </div>
                    <div className="mt-8 text-[5vw] font-writing shadowed-text mx-[16vw] leading-6 text-white shadowed-text">
                        Life is better with your best friend that's why I married mine!
                    </div>
                </h1>
            </div>

            <div id="container" className="absolute">
      
    </div>
        </section>
    );
}
