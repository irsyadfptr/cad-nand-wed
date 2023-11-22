import { CopyIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import BottomOrnament from './BottomOrnament';

export default function SectionInstagramFilter() {
    const [copied, setCopied] = useState('');

    useEffect(() => {
        if (!copied) return;

        let timeout;

        timeout = setTimeout(() => {
            setCopied('');
        }, 2000);

        return () => clearTimeout(timeout);
    }, [copied]);

    return (
        <section className="px-8 pt-24 pb-28 bg-[#822223] relative">
            <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="flex flex-col text-center text-[#ece5db] mb-8">
                    <h2
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        className="text-[9vw] text-center font-bold tracking-normal font-writing"
                    >
                        Instagram Wedding Filter
                    </h2>

                    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                        <p className="opacity-50">Make a story. Capture your best moment while attending our wedding.</p>
                    </div>
                </div>

                <img
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    src="/wedding-filter.jpeg"
                    alt=""
                    className="aspect-[9/16] rounded-xl"
                />

                <a
                    href="https://www.instagram.com/ar/310441375266237/"
                    target="__blank"
                    className="self-center text-white text-sm px-4 py-2 border-b hover:rounded-lg hover:bg-[#ece5db] hover:text-[#822223]"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-once="true"
                >
                    Use Filter
                </a>
            </div>

            <div className="absolute top-0 left-0 right-0 w-full rotate-180 -scale-x-100">
                <BottomOrnament withRightLeft={false} />
            </div>
        </section>
    );
}
