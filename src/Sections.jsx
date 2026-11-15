import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cats, moments, bloopers, findNand, numbers } from './content';
import { CatFace, PeekingCat, SittingCat, WalkingCat, Paw, Sparkle, Yarn } from './Ornaments';

gsap.registerPlugin(ScrollTrigger);

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Card that leans toward the pointer in 3D.
export function Tilt({ className = '', children, max = 10 }) {
    const ref = useRef(null);
    const move = (e) => {
        if (reduced() || e.pointerType === 'touch') return;
        const r = ref.current.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        ref.current.style.setProperty('--ry', `${x * max}deg`);
        ref.current.style.setProperty('--rx', `${-y * max}deg`);
    };
    const leave = () => {
        ref.current.style.setProperty('--ry', '0deg');
        ref.current.style.setProperty('--rx', '0deg');
    };
    return (
        <div ref={ref} className={`tilt ${className}`} onPointerMove={move} onPointerLeave={leave}>
            {children}
        </div>
    );
}

// A cat strolls across the page as you scroll past.
export function CatWalk({ tone = 'ink', reverse = false }) {
    const lane = useRef(null);
    const cat = useRef(null);
    useLayoutEffect(() => {
        if (reduced()) return;
        const tween = gsap.fromTo(
            cat.current,
            { x: reverse ? '100vw' : '-30vw' },
            {
                x: reverse ? '-30vw' : '100vw',
                ease: 'none',
                scrollTrigger: { trigger: lane.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
            }
        );
        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [reverse]);
    return (
        <div ref={lane} className={`cat-lane ${reverse ? 'is-reverse' : ''}`} aria-hidden="true">
            <div ref={cat} className="cat-walker">
                <WalkingCat tone={tone} />
            </div>
        </div>
    );
}

export function MeetTheCats() {
    return (
        <section className="meet" aria-labelledby="meet-title">
            <h2 id="meet-title" className="section-title">
                Meet the cats
            </h2>
            <p className="section-intro">Two cats, one house, three years. Neither of them will admit who started it.</p>
            <div className="meet-grid">
                {cats.map((c) => (
                    <Tilt key={c.name} className={`cat-card tone-${c.tone}`}>
                        <div className="ear-frame">
                            <img src={c.photo} alt={c.alt} />
                        </div>
                        <CatFace tone={c.tone} className="cat-card-badge" />
                        <div className="cat-card-text">
                            <h3>{c.name}</h3>
                            <p className="cat-breed">{c.breed}</p>
                            <dl>
                                <div>
                                    <dt>Likes</dt>
                                    <dd>{c.likes}</dd>
                                </div>
                                <div>
                                    <dt>Dislikes</dt>
                                    <dd>{c.dislikes}</dd>
                                </div>
                            </dl>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
}

export function Moments() {
    // three columns that drift at different speeds as you scroll
    const cols = [[], [], []];
    moments.forEach((m, i) => cols[i % 3].push({ ...m, i }));
    const speeds = ['0.04', '-0.06', '0.1'];
    return (
        <section className="moments" aria-labelledby="moments-title">
            <h2 id="moments-title" className="section-title">
                Purr-fect moments
            </h2>
            <p className="section-intro">Three years of the good stuff, sweet and silly in equal parts.</p>
            <div className="moment-cols">
                {cols.map((col, c) => (
                    <div key={c} className="moment-col" data-speed={speeds[c]}>
                        {col.map((m) => (
                            <figure key={m.img} className={`moment r${m.i % 4}`}>
                                {m.i % 4 === 1 && <PeekingCat tone={m.i % 8 === 1 ? 'red' : 'ink'} className="moment-peek" />}
                                {m.i === 6 && <Paw className="moment-paw" />}
                                <img src={m.img} alt={m.alt} />
                                <figcaption>{m.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

function FindNand() {
    const [state, setState] = useState({ found: false, misses: 0, mark: null });
    const click = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        const d = Math.hypot((x - findNand.x) * (r.width / r.height), y - findNand.y);
        if (d < findNand.radius) setState((s) => ({ ...s, found: true, mark: null }));
        else setState((s) => ({ ...s, misses: s.misses + 1, mark: { x, y } }));
    };
    const hints = ['Not there. Try again.', 'Warmer. Look for glasses.', 'She is behind the tiny houses, on the right.'];
    return (
        <figure className="find-nand">
            <button type="button" className={`find-photo ${state.found ? 'is-found' : ''}`} onClick={click} disabled={state.found} aria-label="Tap where you think Nand is">
                <img src={findNand.img} alt={findNand.alt} />
                {state.mark && !state.found && <span className="find-miss" style={{ left: `${state.mark.x * 100}%`, top: `${state.mark.y * 100}%` }} />}
                {state.found && <span className="find-ring" style={{ left: `${findNand.x * 100}%`, top: `${findNand.y * 100}%` }} />}
            </button>
            <figcaption aria-live="polite">
                <strong>Find Nand</strong>
                <span>
                    {state.found ? findNand.found : state.misses ? hints[Math.min(state.misses - 1, hints.length - 1)] : 'Tap where you think she is.'}
                </span>
            </figcaption>
            <PeekingCat tone="red" className="find-peek" />
        </figure>
    );
}

export function Catastrophes() {
    return (
        <section className="bloopers" aria-labelledby="bloopers-title">
            <h2 id="bloopers-title" className="section-title">
                Cat-astrophes
            </h2>
            <p className="section-intro">The photos we were told to delete. We did not.</p>
            <div className="board">
                <FindNand />
                {bloopers.map((b, i) => (
                    <Tilt key={b.img} className={`polaroid p${i % 4}`} max={14}>
                        <img src={b.img} alt={b.alt} />
                        <p>{b.caption}</p>
                    </Tilt>
                ))}
                <Yarn className="board-yarn" />
            </div>
        </section>
    );
}

export function Numbers({ days }) {
    const all = [{ value: days.toLocaleString('en-GB'), label: 'days married, and counting', live: true }, ...numbers];
    return (
        <section className="numbers" aria-labelledby="numbers-title">
            <h2 id="numbers-title" className="section-title">
                Three years in numbers
            </h2>
            <ul className="number-list">
                {all.map((n) => (
                    <li key={n.label} className={n.live ? 'is-live' : ''}>
                        <span className="number-value">{n.value}</span>
                        <span className="number-label">{n.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export function Finale({ her, him }) {
    return (
        <footer className="finale">
            <Sparkle className="fin-s1" />
            <Sparkle className="fin-s2" />
            <p className="finale-kicker">25 December 2026</p>
            <p className="finale-title">
                Happy 3rd anniversary, <span>{her}</span>
            </p>
            <div className="finale-cats" aria-hidden="true">
                <SittingCat tone="red" />
                <svg className="orn footer-heart" viewBox="0 0 24 22">
                    <path d="M12 21 C 4 14 0 10 0 6 A6 6 0 0 1 12 4 A6 6 0 0 1 24 6 C24 10 20 14 12 21Z" />
                </svg>
                <SittingCat flip />
            </div>
            <p className="finale-sign">
                Here is to nine more lives together.
                <br />
                Love, {him}
            </p>
        </footer>
    );
}
