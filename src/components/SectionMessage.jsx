import axios from 'axios';
import { useEffect, useState } from 'react';
// import { supabase } from "../lib/supabase";
import toast from 'react-hot-toast';

/* eslint-disable react/prop-types */
export default function SectionMessage({ name }) {
    const [messages, setMessages] = useState([]);

    const [state, setState] = useState({
        name: name ?? '',
        message: '',
        attendance: 'hadir',
    });

    const [hasSent, setHasSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const objt = { name: state.name, message: state.message, attendance: state.attendance };

        axios.post('https://sheet.best/api/sheets/033263de-366b-4013-bbc1-84a248281dbf', objt).then(() => {
            toast.success('Berhasil terkirim!');
            setState({ name, message: '', attendance: 'hadir' });
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('hasSent')) {
                setHasSent(true);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className="px-8 py-20 flex flex-col relative  items-center overflow-hidden bg-white">
            {/* <img src="/orn-flower-1.png" alt="" className="absolute top-0 w-40 -left-8" />
            <img src="/orn-flower-3.png" alt="" className="absolute w-32 top-4 -right-8" /> */}

            <div className="z-20 flex flex-col w-full gap-4">
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true" className="flex flex-col text-center text-[#52331a]">
                    <h2 className="text-4xl">RSVP</h2>
                    <p className="opacity-50">Your wish are very mean to us.</p>
                </div>

                {hasSent ? (
                    <p className="text-[#ece5db] p-2 text-sm border border-dotted w-full opacity-50 rounded-lg">Kamu sudah mengirim pesan.</p>
                ) : (
                    <form
                        className="flex flex-col w-full gap-3 p-4 bg-[#52331a] text-[#ece5db] rounded-lg"
                        onSubmit={handleSubmit}
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <div>
                            <label htmlFor="nama" className="block mb-2 text-sm font-medium ">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="name"
                                className="bg-[#ece5db] border border-[#4a6741] text-sm rounded-lg block w-full p-2.5 focus-visible:outline-[#4a6741] outline-1 text-[#52331a]"
                                placeholder="Masukkan Nama"
                                required
                                value={state.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="ucapan" className="block mb-2 text-sm font-medium">
                                Ucapan
                            </label>
                            <textarea
                                id="ucapan"
                                name="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm bg-[#ece5db] rounded-lg border border-[#4a6741] focus-visible:outline-[#4a6741] outline-1 text-[#52331a]"
                                placeholder="Berikan ucapan dan doa restu"
                                required
                                value={state.message}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="kehadiran" className="block mb-2 text-sm font-medium">
                                Konfirmasi Kehadiran
                            </label>
                            <div className="relative">
                                <div className="absolute z-10 right-2 top-3.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 text-inherit"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                                <select
                                    id="kehadiran"
                                    name="attendance"
                                    className="relative bg-[#ece5db] border  border-[#4a6741] text-sm rounded-lg block w-full p-2.5 focus-visible:outline-[#4a6741] outline-1 appearance-none text-[#52331a]"
                                    required
                                    value={state.attendance}
                                    onChange={handleChange}
                                    placeholder="Pilih Kehadiran"
                                >
                                    <option value="hadir">Hadir</option>
                                    <option value="tidak_hadir">Tidak Hadir</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-3 text-[#ece5db] bg-[#4a6741] hover:bg-[#52331a] font-medium rounded-lg px-5 py-2 text-sm"
                        >
                            Kirim
                        </button>
                    </form>
                )}

                {messages.length > 0 && (
                    <div
                        className="overflow-y-auto max-h-[500px] self-start space-y-2 w-full"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        data-aos-once="true"
                    >
                        {messages.map((message) => (
                            <div key={message.id} className="bg-[#ece5db] p-2.5 rounded-lg w-full">
                                <div className="flex items-center justify-between gap-2 mb-1 text-xs">
                                    <h3 className="font-semibold">{message.name}</h3>
                                    {message.attendance === 'tidak_hadir' && (
                                        <span className="flex items-center gap-1  mr-1.5 text-[.65rem] opacity-75">Belum Hadir</span>
                                    )}

                                    {message.attendance === 'hadir' && (
                                        <span className="flex items-center gap-1  mr-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-3 h-3"
                                            >
                                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                <path d="m9 12 2 2 4-4" />
                                            </svg>
                                            <span className="text-[.65rem]">Hadir</span>
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs">{message.message}</p>

                                {message.reply && (
                                    <>
                                        <div className="w-full h-[1px] bg-[#ece5db] my-3"></div>

                                        <div className="flex flex-col items-end text-xs text-right max-w-[80%] ml-auto gap-1">
                                            <div className="flex gap-1">
                                                <img src="/section-1.jpg" alt="" className="object-cover w-5 h-5 rounded-full" />
                                                <h3>Ananda &amp; Irsyad</h3>
                                            </div>
                                            <p>{message.reply}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
