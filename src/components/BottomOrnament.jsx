/* eslint-disable react/prop-types */
export default function BottomOrnament({ withRightLeft = true }) {
    return (
        <div className="absolute bottom-0 left-0 right-0 z-0 flex overflow-hidden h-[100px]">
            {withRightLeft && (
                <>
                    <div data-aos="zoom-in-right" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true">
                        <img src="/orn-flower-7.png" className="w-12 animate-left-right" />
                    </div>
                    <div
                        className="absolute left-0 -bottom-4"
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        data-aos-offset="0"
                        data-aos-once="true"
                    >
                        <img src="/orn-flower-16.png" className="w-12" />
                    </div>
                    <div
                        className="relative right-4 top-8"
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-offset="0"
                        data-aos-once="true"
                    >
                        <img src="/orn-flower-17.png" className="w-12 " />
                    </div>

                    <div
                        className="absolute right-0 -bottom-4"
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                        data-aos-offset="0"
                        data-aos-once="true"
                    >
                        <img src="/orn-flower-16.png" className="w-12" />
                    </div>
                    <div
                        className="absolute right-8 top-8 -scale-x-100"
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        data-aos-offset="0"
                        data-aos-once="true"
                    >
                        <img src="/orn-flower-17.png" className="w-12" />
                    </div>
                    <div
                        className="absolute right-0 -bottom-8"
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-offset="0"
                        data-aos-once="true"
                    >
                        <img src="/orn-flower-8.png" className="w-12 animate-right-left" />
                    </div>
                </>
            )}

            <div data-aos="fade" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0" data-aos-once="true">
                <div className="absolute right-[50%] translate-x-[50%] -bottom-14 z-10">
                    <img src="/orn-flower-15.png" className="w-28 " />
                </div>
                <div className="absolute right-[70%] translate-x-[50%] -bottom-10">
                    <img src="/orn-flower-6.png" className="w-28" />
                </div>
                <div className="absolute right-[30%] translate-x-[50%] -bottom-14">
                    <img src="/orn-flower-5.png" className="w-28" />
                </div>
            </div>
        </div>
    );
}
