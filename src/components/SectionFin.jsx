import BottomOrnament from './BottomOrnament';
import TopOrnament from './TopOrnament';

export default function SectionFin() {
    return (
        <section className="relative py-32 bg-[#4a6741] overflow-hidden">
            <div className="text-center text-[#ece5db] space-y-4">
                <p className="text-xl opacity-70" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true" data-aos-offset="0">
                    Wedding Invitation
                </p>
                <h1
                    className="relative leading-10"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    data-aos-delay="250"
                    data-aos-offset="0"
                >
                    <span className="block text-[#d9b788] text-5xl font-bold font-writing">Ananda &amp; Irsyad</span>
                </h1>
                <p
                    className="text-lg opacity-70"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    data-aos-delay="500"
                    data-aos-offset="0"
                >
                    25 December 2023
                </p>

                <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="750">
                    #meNandakanIrsyad
                </p>
            </div>

            <div className="absolute top-0 left-0 right-0 rotate-180 -scale-x-100">
                <BottomOrnament />
            </div>

            <div className="absolute bottom-0 left-0 right-0 rotate-180 -scale-x-100">
                <TopOrnament />
            </div>
        </section>
    );
}
