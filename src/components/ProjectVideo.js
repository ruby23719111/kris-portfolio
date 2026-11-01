"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

// The video only downloads after the visitor asks for it.
export default function ProjectVideo({ video }) {
  const [loaded, setLoaded] = useState(false);
  const player = useRef(null);

  useEffect(() => {
    if (loaded) player.current?.play().catch(() => {});
  }, [loaded]);

  if (!video?.src) return null;

  return (
    <figure className="video">
      <div className="video-stage">
        {loaded ? (
          <video ref={player} controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}>
            <source src={video.src} type="video/mp4" />
            <a href={video.src}>Open the demo video</a>
          </video>
        ) : (
          <button
            type="button"
            className="video-trigger"
            onClick={() => setLoaded(true)}
            aria-label={`Play ${video.title}, ${video.duration}`}
          >
            <Image src={video.poster} alt="" width={552} height={1200} sizes="280px" />
            <span className="video-play">
              <Icon name="play" size={28} />
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <strong>Final demo, {video.duration}.</strong> {video.caption}
      </figcaption>
    </figure>
  );
}
