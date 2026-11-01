import Image from "next/image";

// The large image panel for a featured project.
export default function ProjectCover({ project, priority = false }) {
  const { panel, cover } = project;
  if (panel.kind === "phones") {
    return (
      <div className="cover cover-phones" style={{ "--tone": panel.tone }}>
        {cover.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 700px) 28vw, 230px"
            priority={priority && index === 0}
          />
        ))}
      </div>
    );
  }
  const [image] = cover;
  return (
    <div className="cover cover-browser" style={{ "--tone": panel.tone }}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 1264px) 88vw, 1060px"
        priority={priority}
      />
    </div>
  );
}
