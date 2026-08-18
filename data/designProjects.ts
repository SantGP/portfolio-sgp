// designProjects.ts — Data for the design projects.

export interface DesignProject {
  title: string;
  category: string; // short label shown on the card
  thumbnail: string; // card image + main modal image
  images: string[]; // extra images shown in the modal
  description: string;
  year: string;
  client: string;
  tools: string[];
}

export const designProjects: DesignProject[] = [
  {
    title: "Adobe Banner",
    category: "Banner",
    thumbnail: "/projects/design/lighthouse-banner.png",
    images: [], // only one image
    description: "",
    year: "2026",
    client: "",
    tools: ["Adobe Illustrator"],
  },
  {
    title: "Toronto Sixers",
    category: "Logo & Presentation Card",
    thumbnail: "/projects/design/toronto-sixers/sixers-card-back.png",
    images: ["/projects/design/toronto-sixers/sixers-card-front.png"],
    description: "",
    year: "2026",
    client: "",
    tools: ["Adobe Illustrator"],
  },
];