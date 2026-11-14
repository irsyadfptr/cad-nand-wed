import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cast, scenes, bloopers, findNand, reviews, credits } from './content';
import { SittingCat, Sparkle } from './Ornaments';

gsap.registerPlugin(ScrollTrigger);

const pad = (n) => String(n).padStart(2, '0');
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
        ref.current.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
        ref.current.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
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

export function Cast() {
    return (
        <section className="cast" aria-labelledby="cast-title">
            <h2 id="cast-title" className="section-title">
                Starring
            </h2>
            <div className="cast-grid">
                {cast.map((c, i) => (
                    <Tilt key={c.name} className={`cast-card ${i ? 'is-right' : ''}`}>
                        <div className="cast-stage">
                            <img src={c.img} alt={`${c.name}, smiling`} loading="lazy" />
                        </div>
                        <div className="cast-text">
                            <p className="cast-role">{c.role}</p>
                            <h3>{c.name}</h3>
                            <p>{c.bio}</p>
                        </div>
                    </Tilt>
                ))}
            </div>
            <div className="cast-extra">
                <SittingCat />
                <p>
                    And introducing <strong>two cats</strong> as themselves
                </p>
                <SittingCat tone="red" flip />
            </div>
        </section>
    );
}

export function Scenes() {
    const section = useRef(null);
    const track = useRef(null);

    useLayoutEffect(() => {
        if (reduced()) return;
        const mm = gsap.matchMedia();
        mm.add('(min-width: 821px)', () => {
            const distance = () => track.current.scrollWidth - window.innerWidth;
            const slide = gsap.to(track.current, {
                x: () => -distance(),
                ease: 'none',
                scrollTrigger: {
                    trigger: section.current,
                    pin: true,
                    scrub: 0.8,
                    start: 'top top',
                    end: () => `+=${distance()}`,
                    invalidateOnRefresh: true,
                },
            });
            // Inside each frame the picture drifts the other way: depth inside the reel.
            gsap.utils.toArray('.frame-media > *', track.current).forEach((el) => {
                gsap.fromTo(
                    el,
                    { xPercent: 7 },
                    {
                        xPercent: -7,
                        ease: 'none',
                        scrollTrigger: { trigger: el.parentElement, containerAnimation: slide, start: 'left right', end: 'right left', scrub: true },
                    }
                );
            });
        });
        // re-measure once images have sized the track
        const t = setTimeout(() => ScrollTrigger.refresh(), 600);
        return () => {
            clearTimeout(t);
            mm.revert();
        };
    }, []);

    return (
        <section ref={section} className="scenes" aria-labelledby="scenes-title">
            <div className="reel-head">
                <h2 id="scenes-title" className="section-title">
                    Every rom-com beat, played by us
                </h2>
                <p className="reel-hint">Keep scrolling. The reel rolls sideways.</p>
            </div>
            <div className="reel">
                <ol ref={track} className="reel-track">
                    {scenes.map((s, i) => (
                        <li key={s.title} className={`frame ${s.cutout ? 'is-cutout' : ''}`}>
                            <div className="frame-media">
                                {s.cutout ? <img src={s.cutout} alt={s.alt} loading="lazy" /> : <img src={s.img} alt={s.alt} loading="lazy" />}
                            </div>
                            <div className="frame-caption">
                                <p className="frame-no">Scene {pad(i + 1)}</p>
                                <h3>{s.title}</h3>
                                <p>{s.line}</p>
                            </div>
                        </li>
                    ))}
                </ol>
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
                <img src={findNand.img} alt={findNand.alt} loading="lazy" />
                {state.mark && !state.found && <span className="find-miss" style={{ left: `${state.mark.x * 100}%`, top: `${state.mark.y * 100}%` }} />}
                {state.found && <span className="find-ring" style={{ left: `${findNand.x * 100}%`, top: `${findNand.y * 100}%` }} />}
            </button>
            <figcaption aria-live="polite">
                <strong>Find Nand</strong>
                <span>
                    {state.found ? findNand.found : state.misses ? hints[Math.min(state.misses - 1, hints.length - 1)] : 'Tap where you think she is.'}
                </span>
            </figcaption>
        </figure>
    );
}

export function Bloopers() {
    return (
        <section className="bloopers" aria-labelledby="bloopers-title">
            <h2 id="bloopers-title" className="section-title">
                Bloopers
            </h2>
            <p className="section-intro">The scenes that did not make the final cut, but should have.</p>
            <div className="board">
                <FindNand />
                {bloopers.map((b, i) => (
                    <Tilt key={b.img} className={`polaroid p${i % 4}`} max={14}>
                        <img src={b.img} alt={b.alt} loading="lazy" />
                        <p>{b.caption}</p>
                    </Tilt>
                ))}
            </div>
        </section>
    );
}

function Stars() {
    return (
        <span className="stars" aria-label="Five stars">
            {[0, 1, 2, 3, 4].map((i) => (
                <Sparkle key={i} className="star" />
            ))}
        </span>
    );
}

export function Reviews({ days }) {
    return (
        <section className="reviews" aria-labelledby="reviews-title">
            <h2 id="reviews-title" className="section-title">
                What the critics said
            </h2>
            <ul className="review-list">
                {reviews.map((r) => (
                    <li key={r.quote} className="review">
                        <Stars />
                        <blockquote>{r.quote}</blockquote>
                        <p className="review-by">{r.by}</p>
                    </li>
                ))}
            </ul>
            <dl className="rating">
                <div>
                    <dt>Rated</dt>
                    <dd>PG, for Pretty Gorgeous</dd>
                </div>
                <div>
                    <dt>Runtime</dt>
                    <dd>{days.toLocaleString('en-GB')} days and counting</dd>
                </div>
                <div>
                    <dt>Genre</dt>
                    <dd>Romance, comedy, occasional drama about dinner</dd>
                </div>
            </dl>
        </section>
    );
}

export function Credits({ her, him }) {
    return (
        <footer className="credits">
            <p className="credits-title">
                {her} &amp; {him}
            </p>
            <dl className="credits-list">
                {credits.map(([k, v]) => (
                    <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                    </div>
                ))}
            </dl>
            <div className="footer-cats" aria-hidden="true">
                <SittingCat />
                <svg className="orn footer-heart" viewBox="0 0 24 22">
                    <path d="M12 21 C 4 14 0 10 0 6 A6 6 0 0 1 12 4 A6 6 0 0 1 24 6 C24 10 20 14 12 21Z" />
                </svg>
                <SittingCat tone="red" flip />
            </div>
            <p className="credits-end">
                No cats were harmed in the making of this marriage.
                <br />
                Valid for a lifetime. Not transferable.
            </p>
        </footer>
    );
}
