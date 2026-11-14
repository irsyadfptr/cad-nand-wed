import { useEffect, useMemo, useRef, useState } from 'react';
import { WEDDING_DATE, names, hero, chapters, quiz, TICKETS_PER_ANSWER, letter, film } from './content';

const DAY = 86400000;
const pad = (n, len) => String(n).padStart(len, '0');

function useNow(interval = 1000) {
    const [now, setNow] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), interval);
        return () => clearInterval(id);
    }, [interval]);
    return now;
}

function anniversaryInfo(now) {
    const wedding = new Date(WEDDING_DATE);
    const daysTogether = Math.floor((now - wedding) / DAY) + 1; // the wedding day is day 1
    const thisYear = new Date(wedding);
    thisYear.setFullYear(now.getFullYear());
    const sameDay =
        now.getFullYear() > wedding.getFullYear() && now.getMonth() === wedding.getMonth() && now.getDate() === wedding.getDate();
    let next = thisYear;
    if (now > thisYear && !sameDay) next = new Date(new Date(thisYear).setFullYear(now.getFullYear() + 1));
    const years = next.getFullYear() - wedding.getFullYear();
    const diff = Math.max(0, next - now);
    return {
        daysTogether,
        sameDay,
        years,
        next,
        left: {
            days: Math.floor(diff / DAY),
            hours: Math.floor((diff % DAY) / 3600000),
            minutes: Math.floor((diff % 3600000) / 60000),
            seconds: Math.floor((diff % 60000) / 1000),
        },
    };
}

const ordinal = (n) => {
    const words = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
    return words[n] || `${n}th`;
};

function Hero() {
    const now = useNow();
    const a = anniversaryInfo(now);
    const nextLabel = a.next.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <header className="hero">
            <div className="slot" aria-hidden="true" />
            <article className="ticket hero-ticket">
                <figure className="hero-photo">
                    <img src={hero.photo} alt={`${names.her} and ${names.him} laughing by the window`} />
                </figure>

                <div className="hero-body">
                    <p className="ticket-kind">Admit two</p>
                    <h1>
                        {names.her}
                        <span className="amp">&amp;</span>
                        {names.him}
                    </h1>
                    <p className="hero-line">{hero.line}</p>
                    <div className="serial">
                        <span className="serial-label">Day</span>
                        <span className="serial-num">{pad(a.daysTogether, 4)}</span>
                        <span className="serial-label">of us, since 25 December 2023</span>
                    </div>
                </div>

                <div className="stub">
                    {a.sameDay ? (
                        <>
                            <p className="stub-big">Today</p>
                            <p className="stub-small">Happy {ordinal(a.years)} anniversary, {names.herShort}.</p>
                        </>
                    ) : (
                        <>
                            <p className="stub-big">{a.left.days}</p>
                            <p className="stub-small">
                                days to our {ordinal(a.years)}
                                <br />
                                {nextLabel}
                            </p>
                            <p className="stub-clock" aria-label="Hours, minutes and seconds left">
                                {pad(a.left.hours, 2)}:{pad(a.left.minutes, 2)}:{pad(a.left.seconds, 2)}
                            </p>
                        </>
                    )}
                </div>
            </article>
            <a className="scroll-cue" href="#story">
                Start from the beginning
            </a>
        </header>
    );
}

function Chapter({ chapter, index }) {
    const many = chapter.photos.length > 1;
    return (
        <li className={`chapter ${index % 2 ? 'flip' : ''}`}>
            <div className="chapter-text">
                <p className="chapter-no">No. {pad(index + 1, 2)}</p>
                <p className="chapter-date">{chapter.date}</p>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
            </div>
            <div className={`chapter-photos ${many ? `grid-${chapter.photos.length}` : ''}`}>
                {chapter.photos.map((p) => (
                    <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
                ))}
            </div>
        </li>
    );
}

function Story() {
    return (
        <section id="story" className="story" aria-labelledby="story-title">
            <h2 id="story-title" className="section-title">
                Every ticket we kept
            </h2>
            <ol className="roll">
                {chapters.map((c, i) => (
                    <Chapter key={c.title} chapter={c} index={i} />
                ))}
            </ol>
        </section>
    );
}

function TicketCounter({ onRedeem, redeemed }) {
    const goal = quiz.length * TICKETS_PER_ANSWER;
    const [step, setStep] = useState(0);
    const [tickets, setTickets] = useState(0);
    const [wrong, setWrong] = useState(null);
    const [shown, setShown] = useState(0);
    const done = step >= quiz.length;

    // Count the display up so the tickets feel dispensed, not just added.
    useEffect(() => {
        if (shown === tickets) return;
        const id = setTimeout(() => setShown((s) => Math.min(tickets, s + 2)), 28);
        return () => clearTimeout(id);
    }, [shown, tickets]);

    const pick = (i) => {
        if (i === quiz[step].answer) {
            setTickets((t) => t + TICKETS_PER_ANSWER);
            setWrong(null);
            setStep((s) => s + 1);
        } else {
            setWrong(i);
        }
    };

    const current = quiz[step];

    return (
        <section className="counter-section" aria-labelledby="counter-title">
            <h2 id="counter-title" className="section-title">
                The ticket counter
            </h2>
            <p className="section-intro">
                Answer right and the machine pays out {TICKETS_PER_ANSWER} tickets. Collect {goal} to redeem your prize.
            </p>

            <div className="machine">
                <div className="machine-display" aria-live="polite">
                    <span className="display-num">{pad(shown, 3)}</span>
                    <span className="display-goal">/ {goal} tickets</span>
                </div>

                <div className="ribbon" aria-hidden="true">
                    <div className="ribbon-strip" style={{ width: `${(shown / goal) * 100}%` }} />
                </div>

                {!done ? (
                    <div className="question" key={step}>
                        <p className="question-count">
                            Question {step + 1} of {quiz.length}
                        </p>
                        <p className="question-text">{current.q}</p>
                        <div className="options">
                            {current.options.map((o, i) => (
                                <button
                                    key={o}
                                    type="button"
                                    className={`option ${wrong === i ? 'is-wrong' : ''}`}
                                    onClick={() => pick(i)}
                                    disabled={wrong === i}
                                >
                                    {o}
                                    {wrong === i && <span className="option-note">Not this one, try again</span>}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="question done">
                        <p className="question-text">Jackpot. You know us by heart.</p>
                        {!redeemed && (
                            <button type="button" className="redeem" onClick={onRedeem} disabled={shown < goal}>
                                Redeem {goal} tickets
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

function Letter({ open }) {
    const ref = useRef(null);
    useEffect(() => {
        if (open) ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [open]);

    return (
        <section ref={ref} className={`letter-section ${open ? 'is-open' : ''}`} aria-labelledby="letter-title">
            <h2 id="letter-title" className="section-title">
                Your prize
            </h2>
            {!open ? (
                <div className="envelope" aria-label="A sealed letter">
                    <p>Sealed until the counter reaches 150.</p>
                </div>
            ) : (
                <article className="letter">
                    <p className="letter-greeting">{letter.greeting}</p>
                    {letter.paragraphs.map((p) => (
                        <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                    <p className="letter-closing">{letter.closing}</p>
                    <p className="letter-signature">{letter.signature}</p>
                </article>
            )}
        </section>
    );
}

function Film() {
    const [available, setAvailable] = useState(null);
    useEffect(() => {
        fetch(film.src, { method: 'HEAD' })
            .then((r) => setAvailable(r.ok && (r.headers.get('content-type') || '').startsWith('video')))
            .catch(() => setAvailable(false));
    }, []);

    return (
        <section className="film" aria-labelledby="film-title">
            <h2 id="film-title" className="section-title">
                Our film
            </h2>
            <div className="screen">
                {available ? (
                    <video src={film.src} poster={film.poster} controls playsInline preload="metadata" />
                ) : (
                    <div className="screen-empty" style={{ backgroundImage: `url(${film.poster})` }}>
                        <p>{available === null ? 'Loading the reel' : 'Still in the edit. Showing soon.'}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

function MusicToggle() {
    const audio = useMemo(() => {
        const a = new Audio('/bg-music.mp3');
        a.loop = true;
        return a;
    }, []);
    const [playing, setPlaying] = useState(false);
    useEffect(() => () => audio.pause(), [audio]);

    const toggle = () => {
        if (playing) audio.pause();
        else audio.play().catch(() => {});
        setPlaying(!playing);
    };

    return (
        <button type="button" className={`music ${playing ? 'is-playing' : ''}`} onClick={toggle} aria-pressed={playing}>
            <span className="music-dot" aria-hidden="true" />
            {playing ? 'Pause our song' : 'Play our song'}
        </button>
    );
}

export default function App() {
    const [redeemed, setRedeemed] = useState(false);
    return (
        <>
            <Hero />
            <main>
                <Story />
                <TicketCounter onRedeem={() => setRedeemed(true)} redeemed={redeemed} />
                <Letter open={redeemed} />
                <Film />
            </main>
            <footer className="footer">
                <p>
                    Valid for a lifetime. Not transferable.
                    <br />
                    For {names.herShort}, from {names.him}.
                </p>
            </footer>
            <MusicToggle />
        </>
    );
}
