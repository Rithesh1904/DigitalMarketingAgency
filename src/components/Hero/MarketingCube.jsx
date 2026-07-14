import React, { useRef, useState, useEffect } from 'react';

const faces = [
  { label: 'SEO', icon: '🔍', desc: 'Rank #1 on Google', from: 'from-blue-600', to: 'to-blue-900', rotate: 'rotateY(0deg)' },
  { label: 'Social Media', icon: '📱', desc: 'Engage & Grow', from: 'from-pink-500', to: 'to-rose-700', rotate: 'rotateY(90deg)' },
  { label: 'Branding', icon: '🎨', desc: 'Stand Out Always', from: 'from-purple-600', to: 'to-indigo-800', rotate: 'rotateY(180deg)' },
  { label: 'Web Development', icon: '💻', desc: 'Build modern websites', from: 'from-cyan-500', to: 'to-teal-700', rotate: 'rotateY(-90deg)' },
    { label: 'Influencer Marketing', icon: '📣', desc: 'Partner with creators to amplify brand reach and drive conversions through authentic content and partnerships.', from: 'from-cyan-500', to: 'to-teal-700', rotate: 'rotateY(-90deg)' },
  { label: 'Content Marketing', icon: '✍️', desc: 'Create content that converts', from: 'from-orange-500', to: 'to-amber-700', rotate: 'rotateX(90deg)' },
  { label: 'Google Ads', icon: '📈', desc: 'Drive ROI Fast', from: 'from-green-500', to: 'to-emerald-700', rotate: 'rotateX(-90deg)' },
];

const MarketingCube = () => {
  const containerRef = useRef(null);
  const [rotX, setRotX] = useState(-20);
  const [rotY, setRotY] = useState(30);
  const [rotZ, setRotZ] = useState(0);
  const [size, setSize] = useState(320);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const angleRef = useRef(0);

  // Ball-like auto-rotation using continuous angle; pause while dragging
  useEffect(() => {
    let last = performance.now();
    const loop = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!isDragging) {
        angleRef.current += 30 * dt; // degrees per second
        const angle = angleRef.current * (Math.PI / 180); // convert to radians
        
        // Create smooth ball-like rotation using trigonometric functions
        const x = Math.sin(angle) * 40;
        const y = Math.cos(angle * 0.8) * 50;
        const z = Math.sin(angle * 0.6) * 30;
        
        setRotX(x);
        setRotY(y);
        setRotZ(z);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDragging]);

  // Responsive size for the cube (clamped)
  useEffect(() => {
    const update = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
      const newSize = Math.min(320, Math.floor(w * 0.72));
      setSize(newSize);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Pointer-based drag handlers (works for mouse & touch)
  const onPointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
    try {
      containerRef.current?.setPointerCapture?.(e.pointerId);
    } catch (err) {}
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouse.x;
    const dy = e.clientY - lastMouse.y;
    setRotY((prev) => prev + dx * 0.6);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.6)));
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const onPointerUp = (e) => {
    setIsDragging(false);
    try {
      containerRef.current?.releasePointerCapture?.(e.pointerId);
    } catch (err) {}
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none"
      style={{ width: size + 40, height: size + 100 }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div style={{ perspective: 900, perspectiveOrigin: 'center center' }}>
        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            width: size,
            height: size,
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`,
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: isDragging ? 'none' : 'transform 0.05s linear',
          }}
        >
          {faces.map((face, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: size,
                height: size,
                transform: `${face.rotate} translateZ(${Math.floor(size / 2)}px)`,
                backfaceVisibility: 'visible',
              }}
              className={`bg-gradient-to-br ${face.from} ${face.to} rounded-3xl flex flex-col items-center justify-center shadow-2xl border border-white/10`}
            >
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl opacity-10"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.4) 30px, rgba(255,255,255,0.4) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.4) 30px, rgba(255,255,255,0.4) 31px)',
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-4 p-6 text-center">
                <span className="text-6xl drop-shadow-lg">{face.icon}</span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight drop-shadow">{face.label}</h3>
                <p className="text-white/80 text-base font-medium">{face.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-500 mt-5">Drag and rotate</p>
    </div>
  );
};

export default MarketingCube;
