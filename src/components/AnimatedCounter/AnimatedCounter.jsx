import { useState, useEffect, useRef } from 'react';

/**
 * Parses a stat string like '500+', '98%', '1200+', '<24h', '10K+', '∞'
 * Returns { prefix, num, suffix } — only num animates, prefix/suffix are static.
 */
const parseStatValue = (val) => {
  // These have no countable number — display as-is
  const noAnim = ['<1s', '<24h', '∞', '24/7'];
  if (noAnim.includes(val)) return { prefix: '', num: null, suffix: val };

  // Handles values like '10K+', '1M+', '10Cr+' — strip letters before matching
  const match = val.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: '', num: null, suffix: val };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
};

/**
 * AnimatedCounter — counts from 0 to `num` when scrolled into view.
 * @param {string} val   - raw stat string e.g. '500+', '98%', '1200+'
 * @param {string} className - CSS classes applied to the wrapping span
 */
const AnimatedCounter = ({ val, className = '' }) => {
  const { prefix, num, suffix } = parseStatValue(val);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (num === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600; // total ms
          const fps = 60;
          const steps = (duration / 1000) * fps;
          const increment = num / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
              setCount(num);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 1000 / fps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  // Values with no number just render as-is
  if (num === null) {
    return (
      <span ref={ref} className={className}>
        {val}
      </span>
    );
  }

  const displayNum = Number.isInteger(num) ? count : count.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayNum}{suffix}
    </span>
  );
};

export default AnimatedCounter;
