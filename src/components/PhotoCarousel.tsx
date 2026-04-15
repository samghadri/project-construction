"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type PhotoCarouselProps = {
  images: string[];
  intervalMs?: number;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function PhotoCarousel({ images, intervalMs = 4500 }: PhotoCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    if (prefersReducedMotion()) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, safeImages.length]);

  useEffect(() => {
    if (activeIndex >= safeImages.length) setActiveIndex(0);
  }, [activeIndex, safeImages.length]);

  if (safeImages.length === 0) return null;

  return (
    <section
      aria-label="Project photos carousel"
      className="card overflow-hidden"
      style={{ background: "rgba(28, 25, 22, 0.65)" }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {safeImages.map((src, idx) => (
          <div
            key={src}
            className={[
              "absolute inset-0 transition-opacity duration-700",
              idx === activeIndex ? "opacity-100" : "opacity-0",
            ].join(" ")}
            aria-hidden={idx === activeIndex ? undefined : true}
          >
            <Image
              src={src}
              alt="Recent project photo"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority={idx === activeIndex}
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold tracking-wide text-white/90">
              Recent work photos
            </p>
            <div className="flex items-center gap-1.5" aria-label="Carousel progress">
              {safeImages.map((src, idx) => (
                <button
                  key={`${src}-dot`}
                  type="button"
                  className={[
                    "h-1.5 w-1.5 rounded-full transition-all",
                    idx === activeIndex ? "bg-white/90 w-4" : "bg-white/40 hover:bg-white/60",
                  ].join(" ")}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show photo ${idx + 1} of ${safeImages.length}`}
                  aria-current={idx === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

