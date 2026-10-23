"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function ProjectVideo({ video }) {
  const [loaded, setLoaded] = useState(false);
  const player = useRef(null);

  useEffect(() => {
    if (loaded) player.current?.focus({ preventScroll: true });
  }, [loaded]);

  if (!video?.src) return null;

  return (
    <figure className="project-video">
      {loaded ? (
        <video
          ref={player}
          className="project-video-player"
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={video.title}
          tabIndex={0}
        >
          <source src={video.src} type={video.type || "video/mp4"} />
          Your browser does not support embedded video. <a href={video.src}>Open the final demo</a>.
        </video>
      ) : (
        <button
          type="button"
          className="project-video-trigger"
          onClick={() => setLoaded(true)}
          aria-label={`Load ${video.title}${video.durationLabel ? `, ${video.durationLabel}` : ""}`}
        >
          {video.poster && (
            <Image
              className="project-video-poster"
              src={video.poster}
              alt=""
              width={1206}
              height={2622}
              sizes="(max-width: 767px) 85vw, 360px"
            />
          )}
          <span className="project-video-label">
            <Icon name="play" size={28} />
            <strong>Watch final demo</strong>
            <span>{video.durationLabel ? `${video.durationLabel} · ` : ""}Load video player</span>
          </span>
        </button>
      )}
      <figcaption>{video.caption || video.title}</figcaption>
    </figure>
  );
}
