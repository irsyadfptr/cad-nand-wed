import BottomOrnament from './BottomOrnament';
import TopOrnament from './TopOrnament';

export default function SectionFin() {
    return (
        <section
            className="w-full h-[70vh] xl:h-screen bg-cover bg-center relative py-6 overflow-hidden"
            style={{
                backgroundImage:
                    "linear-gradient(180deg, rgba(236, 229, 219, 0) 0%, #ece5db  200%), linear-gradient(180deg, #ece5db 0%, rgba(236, 229, 219, 0)  20%), url('/fin-image.jpg')",
            }}
        >
            <div
                className="flex flex-col justify-end text-center h-full w-full"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="250"
                data-aos-offset="0"
            >
                <p className="text-lg opacity-70 xl:text-3xl">With Love</p>
                <h1 className="relative leading-10 xl:leading-[1rem]">
                    <span className="block text-white text-4xl font-semibold font-writing shadowed-text py-1 xl:py-4 xl:text-[4rem]">
                        Ananda &amp; Irsyad
                    </span>
                </h1>
                <p className="xl:text-3xl">#meNandakanIrsyad</p>
            </div>
        </section>
    );
}
