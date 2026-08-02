"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({ image, title }: { image: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden card-gold-border bg-obsidian-light">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] select-none cursor-ew-resize"
        onMouseDown={(e) => {
          dragging.current = true;
          updatePosition(e.clientX);
        }}
        onMouseMove={(e) => dragging.current && updatePosition(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
        onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
        role="slider"
        aria-label={`${title} öncesi ve sonrası karşılaştırma kaydırıcısı`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
        }}
      >
        <div className="absolute inset-0">
          <Image src={image} alt={`${title} - sonra`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          <span className="absolute top-3 right-3 text-[10px] tracking-widest bg-gold text-obsidian px-2.5 py-1 rounded-full font-semibold">
            SONRA
          </span>
        </div>
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div className="relative h-full" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
            <Image src={image} alt={`${title} - önce`} fill className="object-cover grayscale contrast-75 brightness-75" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <span className="absolute top-3 left-3 text-[10px] tracking-widest bg-obsidian/80 text-gold px-2.5 py-1 rounded-full font-semibold border border-gold/40">
            ÖNCE
          </span>
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gold"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-9 h-9 rounded-full bg-gold text-obsidian flex items-center justify-center shadow-gold">
            <MoveHorizontal size={16} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-ivory font-medium text-sm">{title}</p>
      </div>
    </div>
  );
}
