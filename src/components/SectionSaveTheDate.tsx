import React, { useEffect, useState } from 'react';

export default function SectionSaveTheDate({ name, event }) {
    const targetDate = event !== 'syukuran' ? new Date('2023-12-25T14:30:00').getTime() : new Date('2023-12-30T11:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    const invitationLink =
        event !== 'syukuran'
            ? `https://calendar.google.com/calendar/u/0/r/eventedit?text=Ananda+%26+Irsyad+Wedding&dates=20231225T143000/20231225T170000&location=Griya+Joglo,+Jl.+Bengawan+Solo+No.179+kel,+Tanjungsari,+Sukorejo,+Blitar+City,+East+Java+66122=Assalammu'alaikum,+We+invite+you,+${name}+for+attending+our+marriage.`
            : `https://calendar.google.com/calendar/u/0/r/eventedit?text=Ananda+%26+Irsyad+Wedding&dates=20231225T143000/20231225T170000&location=Jl.+Palem+Raja+No.55,+RT.02%2FRW.02,+Bubulak,+Kec.+Bogor+Bar.,+Kota+Bogor,+Jawa+Barat+16113=Assalammu'alaikum,+We+invite+you,+${name}+for+attending+our+marriage.`;
    const mapLink = event !== 'syukuran' ? 'https://maps.app.goo.gl/ZgfxQLfvKAaDDhQr8' : `https://maps.app.goo.gl/Hdc2R9PoEEb79SaN7`;

    function calculateTimeRemaining() {
        const currentTime = new Date().getTime();
        const timeDiff = targetDate - currentTime;

        if (timeDiff <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-8 flex relative items-center overflow-hidden bg-white">
            {/* <img src="/orn-flower-1.png" alt="" className="absolute top-0 w-40 -left-8" />
            <img src="/orn-flower-3.png" alt="" className="absolute w-32 top-4 -right-8" /> */}
            <div
                className="rounded-2xl shadow-xl relative bg-[#ece5db] text-center w-full overflow-hidden mt-10"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="4000"
                data-aos-once="true"
            >
                <div
                    id="savethedate-photo"
                    className="relative"
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    <img src="/section-1.jpg" alt="" className="h-[300px] lg:h-[500px] w-full object-cover" />
                </div>

                <div className="flex flex-col gap-6 p-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {event !== 'syukuran' ? (
                        <div className="space-y-1">
                            <h3 className="text-3xl tracking-normal">Save The Date</h3>
                            <p className="tracking-wide opacity-60">25 December 2023</p>
                            <p className="tracking-wide opacity-60">Griya Joglo</p>
                        </div>
                    ) : (
                        <div className="space-y-1">
                            <h3 className="text-3xl tracking-normal">Save The Date</h3>
                            <p className="tracking-wide opacity-60">30 December 2023</p>
                            <p className="tracking-wide opacity-60">Jln. Palemraja No.30, Bubulak, Bogor</p>
                        </div>
                    )}

                    <div className="grid grid-cols-4">
                        <div className="flex flex-col gap-1">
                            <h4 className="text-4xl">{timeRemaining.days}</h4>
                            <p className="text-sm opacity-60">Days</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h4 className="text-4xl">{timeRemaining.hours}</h4>
                            <p className="text-sm opacity-60">Hours</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h4 className="text-4xl">{timeRemaining.minutes}</h4>
                            <p className="text-sm opacity-60">Minutes</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h4 className="text-4xl">{timeRemaining.seconds}</h4>
                            <p className="text-sm opacity-60">Seconds</p>
                        </div>
                    </div>

                    <div>
                        <a
                            href={invitationLink}
                            target="__blank"
                            className="self-center text-sm lg:text-lg px-4 py-2 border-b hover:rounded-lg hover:bg-[#ece5db] hover:text-[#822223]"
                        >
                            Add to Calendar
                        </a>
                        <a
                            href={mapLink}
                            target="__blank"
                            className="self-center text-sm lg:text-lg px-4 py-2 border-b hover:rounded-lg hover:bg-[#ece5db] hover:text-[#822223]"
                        >
                            Open Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
