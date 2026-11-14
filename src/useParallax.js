import { useEffect } from 'react';

// Moves every [data-speed] element relative to its distance from the viewport centre.
// Positive speed lags behind the scroll (feels far away); negative runs ahead (feels close).
export default function useParallax() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let frame = 0;
        const scale = () => (window.innerWidth < 820 ? 0.6 : 1);

        const update = () => {
            frame = 0;
            const mid = window.innerHeight / 2;
            const k = scale();
            document.querySelectorAll('[data-speed]').forEach((el) => {
                const shift = parseFloat(el.dataset.shift || '0');
                const r = el.getBoundingClientRect();
                if (r.bottom < -400 || r.top > window.innerHeight + 400) return;
                const centre = r.top + r.height / 2 - shift;
                const next = (mid - centre) * parseFloat(el.dataset.speed) * k;
                el.dataset.shift = String(next);
                el.style.translate = `0 ${next.toFixed(1)}px`;
            });
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        // re-measure as lazy images load and change layout
        const ro = new ResizeObserver(onScroll);
        ro.observe(document.body);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            ro.disconnect();
            cancelAnimationFrame(frame);
        };
    }, []);
}
