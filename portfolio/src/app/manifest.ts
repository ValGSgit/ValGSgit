import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Valentino Garcia Susini - Portfolio",
    short_name: "VGS Portfolio",
    description:
      "Full-stack software developer specializing in systems programming and web technologies",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#10b981",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
