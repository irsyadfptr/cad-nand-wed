import { useEffect, useMemo, useRef, useState } from 'react';
import { WEDDING_DATE, names, hero, quiz, letter, film } from './content';
import { PeekingCat, SittingCat, SleepingCat, Rosette, Sparkle, PawTrail, Fish, Yarn } from './Ornaments';
import { MeetTheCats, Moments, Catastrophes, Numbers, CatWalk, Finale } from './Sections';
import useParallax from './useParallax';

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
            <div className="scene">
                <div className="scene-glow" data-speed="0.1" aria-hidden="true" />
                <p className="scene-tag" data-speed="0.2">{hero.kicker}</p>
                <h1 className="scene-type" data-speed="0.32">
                    <span className="name">
                        {names.her}
                        <SittingCat tone="red" className="name-cat" />
                    </span>
                    <span className="amp">&amp;</span>
                    <span className="name">
                        {names.him}
                        <SittingCat flip className="name-cat" />
                    </span>
                </h1>

                <Sparkle className="s1" data-speed="-0.5" />
                <Sparkle className="s2" data-speed="-0.25" />
                <Sparkle className="s3" data-speed="-0.6" />
                <Sparkle className="s4" data-speed="0.2" />
                <div className="float f1" data-speed="-0.45"><Fish /></div>
                <div className="float f2" data-speed="-0.7"><Yarn /></div>
                <div className="float f3" data-speed="-0.3"><Rosette /></div>

                <img className="scene-couple" src={hero.cutout} alt={`${names.her} and ${names.him} laughing together`} data-speed="0.06" />
            </div>

            <article className="ticket hero-ticket">
                <PeekingCat className="peek-hero" />
                <PeekingCat tone="red" className="peek-hero-2" />
                <div className="hero-body">
                    <p className="ticket-kind">Our anniversary</p>
                    <p className="ticket-show">Three years of us</p>
                    <p className="hero-line">{hero.line}</p>
                    <div className="serial">
                        <span className="serial-label">Day</span>
                        <span className="serial-num">{a.daysTogether.toLocaleString('en-GB')}</span>
                        <span className="serial-label">of being married to you, since 25 December 2023</span>
                    </div>
                </div>

                <div className="stub">
                    {a.sameDay ? (
                        <>
                            <p className="stub-big">Today</p>
                            <p className="stub-small">Happy {ordinal(a.years)} anniversary, {names.her}.</p>
                        </>
                    ) : (
                        <>
                            <p className="stub-big">{a.left.days}</p>
                            <p className="stub-small">
                                days to our {ordinal(a.years)} anniversary
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
            <a className="scroll-cue" href="#meet">
                Meet the cats
            </a>
        </header>
    );
}

function FeedTheCats({ onOpen, opened }) {
    const [step, setStep] = useState(0);
    const [wrong, setWrong] = useState(null);
    const [splash, setSplash] = useState(0);
    const done = step >= quiz.length;

    const pick = (i) => {
        if (i === quiz[step].answer) {
            setWrong(null);
            setStep((s) => s + 1);
            setSplash((n) => n + 1);
        } else {
            setWrong(i);
        }
    };

    const current = quiz[step];
    const mood = done ? 'Full and very happy' : step >= 3 ? 'Purring' : step >= 1 ? 'Interested' : 'Hungry';

    return (
        <section className="feed" aria-labelledby="feed-title">
            <h2 id="feed-title" className="section-title">
                Feed the cats
            </h2>
            <p className="section-intro">Every right answer drops a fish in the bowl. Five fish and the cats will hand over your letter.</p>

            <div className="feeder">
                <div className="feeder-stage" aria-live="polite">
                    <SittingCat tone="red" className={`feeder-cat ${splash ? 'is-happy' : ''}`} key={`l${splash}`} />
                    <div className="bowl-wrap">
                        <div className="bowl-fish">
                            {quiz.map((_, i) => (
                                <Fish key={i} className={i < step ? 'is-in' : 'is-empty'} />
                            ))}
                        </div>
                        <svg className="bowl" viewBox="0 0 200 70" aria-hidden="true">
                            <path d="M8 10 H192 C186 50 160 66 100 66 C40 66 14 50 8 10 Z" />
                            <path className="bowl-rim" d="M8 10 H192" />
                        </svg>
                        <p className="feeder-mood">
                            {step} of {quiz.length} fish. Mood: {mood}
                        </p>
                    </div>
                    <SittingCat flip className={`feeder-cat ${splash ? 'is-happy' : ''}`} key={`r${splash}`} />
                    {splash > 0 && (
                        <svg className="feeder-heart" key={`h${splash}`} viewBox="0 0 24 22" aria-hidden="true">
                            <path d="M12 21 C 4 14 0 10 0 6 A6 6 0 0 1 12 4 A6 6 0 0 1 24 6 C24 10 20 14 12 21Z" />
                        </svg>
                    )}
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
                                    {wrong === i && <span className="option-note">The cats disagree. Try again.</span>}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="question done">
                        <p className="question-text">Five fish. The cats are full and you know us by heart.</p>
                        {!opened && (
                            <button type="button" className="redeem" onClick={onOpen}>
                                Open your letter
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
                A letter for you
            </h2>
            {!open ? (
                <div className="envelope" aria-label="A sealed letter">
                    <p>Sealed until the cats have had five fish.</p>
                </div>
            ) : (
                <article className="letter">
                    <img className="letter-rings" src="cutouts/rings.webp" alt="" aria-hidden="true" />
                    <p className="letter-greeting">{letter.greeting}</p>
                    {letter.paragraphs.map((p) => (
                        <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                    <p className="letter-closing">{letter.closing}</p>
                    <p className="letter-signature">{letter.signature}</p>
                    <SleepingCat className="cat-letter" />
                </article>
            )}
        </section>
    );
}

function Film() {
    const [src, setSrc] = useState(null);
    useEffect(() => {
        const isVideo = (url) =>
            fetch(url, { method: 'HEAD' })
                .then((r) => r.ok && (r.headers.get('content-type') || '').startsWith('video'))
                .catch(() => false);
        isVideo(film.own).then((own) => (own ? setSrc(film.own) : isVideo(film.rendered).then((t) => setSrc(t ? film.rendered : false))));
    }, []);

    return (
        <section className="film" aria-labelledby="film-title">
            <h2 id="film-title" className="section-title">
                A little film for you
            </h2>
            <div className="screen">
                {src ? (
                    <video src={src} poster={film.poster} controls playsInline preload="metadata" />
                ) : (
                    <div className="screen-empty" style={{ backgroundImage: `url(${film.poster})` }}>
                        <p>{src === null ? 'Loading the film' : 'Still in the edit. Showing soon.'}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

function MusicToggle() {
    const audio = useMemo(() => {
        const a = new Audio('bg-music.mp3');
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
    const [opened, setOpened] = useState(false);
    const days = anniversaryInfo(new Date()).daysTogether;
    useParallax();
    return (
        <>
            <Hero />
            <main>
                <div id="meet">
                    <MeetTheCats />
                </div>
                <CatWalk tone="red" />
                <Moments />
                <Catastrophes />
                <CatWalk reverse />
                <Numbers days={days} />
                <PawTrail />
                <FeedTheCats onOpen={() => setOpened(true)} opened={opened} />
                <Letter open={opened} />
                <PawTrail className="trail-right" />
                <Film />
            </main>
            <Finale her={names.her} him={names.him} />
            <MusicToggle />
        </>
    );
}
