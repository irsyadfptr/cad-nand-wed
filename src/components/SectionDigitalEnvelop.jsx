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
                        Digital Envelope
                    </h2>

                    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                        <p className="opacity-50">
                            Your Blessing is a meaningful gift to us. And if giving is an expression of your love, you can give a cashless gift.
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
                                <h3 className="mb-1.5 text-xl font-semibold">Irsyad Fakhri Putranto</h3>
                                <p className="flex items-center gap-2 tracking-wider">
                                    1091 9237 8282{' '}
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('0581474350');
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
                                <h3 className="mb-1.5 text-xl font-semibold">Ananda Prabu Dian Astuti</h3>
                                <p className="flex items-center gap-2 tracking-wider">
                                    1091 9237 8282{' '}
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('0581474350');
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
