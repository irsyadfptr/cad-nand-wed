import { CopyIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import BottomOrnament from './BottomOrnament';

export default function SectionDigitalEnvelop() {
    const [copied, setCopied] = useState('');
    const [sentGift, setSentGift] = useState(false);

    useEffect(() => {
        if (!copied) return;

        let timeout;

        timeout = setTimeout(() => {
            setCopied('');
        }, 2000);

        return () => clearTimeout(timeout);
    }, [copied]);

    return (
        <section className="px-8 pt-16 pb-28 bg-[#4a6741] relative">
            <div className="relative z-10">
                <div className="flex flex-col text-center text-[#ece5db] mb-8">
                    <h2
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        className="text-[10vw] text-center font-bold tracking-normal font-writing"
                    >
                        Wedding Gift
                    </h2>

                    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                        <p className="opacity-50">
                            Your blessing is a deeply meaningful gift for us. If the gesture of giving is an expression of your love, we
                            wholeheartedly welcome and greatly appreciate the consideration of a cashless gift as a thoughtful manifestation of your
                            affection.{' '}
                        </p>
                    </div>
                </div>

                {sentGift && (
                    <div className="space-y-3">
                        <div
                            data-aos="zoom-in-left"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="rounded-lg flex items-center justify-between border p-5 bg-[#ece5db] shadow-xl"
                        >
                            <div>
                                <h3 className="mb-1.5 text-xl font-semibold">Irsyad F. Putranto</h3>
                                <p className="flex items-center gap-2 tracking-wider">
                                    0954 3011 81{' '}
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('0954301181');
                                            setCopied('bca');
                                        }}
                                        className="text-xs"
                                    >
                                        {copied === 'bca' ? 'Copied!' : <CopyIcon size={16} />}
                                    </button>
                                </p>
                            </div>
                            <img src="/bca.png" width={60} className="grayscale" />
                        </div>

                        <div
                            data-aos="zoom-in-left"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="rounded-lg flex items-center justify-between border p-5 bg-[#ece5db] shadow-xl"
                        >
                            <div>
                                <h3 className="mb-1.5 text-xl font-semibold">Irsyad F. Putranto</h3>
                                <p className="flex items-center gap-2 tracking-wider">
                                    1091 9237 8282{' '}
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('109192378282');
                                            setCopied('jago');
                                        }}
                                        className="text-xs"
                                    >
                                        {copied === 'jago' ? 'Copied!' : <CopyIcon size={16} />}
                                    </button>
                                </p>
                            </div>
                            <img src="/jago.png" width={60} className="grayscale" />
                        </div>

                        <div
                            data-aos="zoom-in-left"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="rounded-lg flex items-center justify-between border p-5 bg-[#ece5db] shadow-xl"
                        >
                            <div>
                                <h3 className="mb-1.5 text-xl font-semibold">Ananda Prabu D. A.</h3>
                                <p className="flex items-center gap-2 tracking-wider">
                                    1174 9571 67{' '}
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('1174957167');
                                            setCopied('bni');
                                        }}
                                        className="text-xs"
                                    >
                                        {copied === 'bni' ? 'Copied!' : <CopyIcon size={16} />}
                                    </button>
                                </p>
                            </div>
                            <img src="/bni.png" width={60} className="grayscale" />
                        </div>

                        <div
                            data-aos="zoom-in-left"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="rounded-lg flex items-center justify-between border p-5 bg-[#ece5db] shadow-xl"
                        >
                            <div>
                                <h3 className="mb-1.5 text-xl font-semibold">Ananda Prabu D. A.</h3>
                                <p className="flex items-center gap-2 tracking-wider">
                                    9000 0342 66727{' '}
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('9000034266727');
                                            setCopied('mandiri');
                                        }}
                                        className="text-xs"
                                    >
                                        {copied === 'mandiri' ? 'Copied!' : <CopyIcon size={16} />}
                                    </button>
                                </p>
                            </div>
                            <img src="/mandiri.png" width={60} className="grayscale" />
                        </div>
                    </div>
                )}
                <div className="flex justify-center mt-10">
                    <button
                        type="button"
                        className="text-[#52331a] shadow bg-[#e9c695] hover:bg-[#d9b788]  font-bold rounded-3xl px-5 py-2.5"
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                        data-aos-offset="0"
                        onClick={() => setSentGift(!sentGift)}
                    >
                        {!sentGift ? 'Send Gift' : 'Close'}
                    </button>
                </div>
            </div>

            <BottomOrnament withRightLeft={false} />
        </section>
    );
}
