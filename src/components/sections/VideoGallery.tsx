"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { videoGalleryItems } from "@/lib/site-data";
import { withBasePath } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";

function VideoCard({
  title,
  video,
  poster,
  index,
}: {
  title: string;
  video: string;
  poster: string;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      setStarted(true);
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
      className="card-gold-border rounded-2xl overflow-hidden bg-obsidian-light group"
    >
      <button
        onClick={togglePlay}
        className="relative w-full aspect-[9/16] block outline-none"
        aria-label={playing ? `${title} videosunu duraklat` : `${title} videosunu oynat`}
      >
        {!started && (
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
            loading="lazy"
          />
        )}
        <video
          ref={videoRef}
          src={withBasePath(video)}
          poster={withBasePath(poster)}
          preload="none"
          playsInline
          muted
          loop
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          className={`absolute inset-0 w-full h-full object-cover ${started ? "block" : "hidden"}`}
        />

        <div
          className={`absolute inset-0 flex items-center justify-center bg-obsidian/30 transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <span className="w-14 h-14 rounded-full bg-gold/90 text-obsidian flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-obsidian/90 to-transparent pointer-events-none">
          <p className="text-ivory text-xs font-medium text-left">{title}</p>
        </div>
      </button>
    </motion.div>
  );
}

export default function VideoGallery() {
  if (videoGalleryItems.length === 0) return null;

  return (
    <section className="relative py-24 md:py-32 bg-obsidian">
      <div className="container">
        <SectionHeading
          eyebrow="Video Galeri"
          title="Çalışmalarımızı İzleyin"
          description="Gerçek projelerimizden kısa görüntüler — izlemek için bir videoya tıklayın."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {videoGalleryItems.map((item, i) => (
            <VideoCard key={item.video} title={item.title} video={item.video} poster={item.poster} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
