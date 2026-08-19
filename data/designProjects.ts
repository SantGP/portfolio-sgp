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
    {
    title: "Personal Branding",
    category: "Brand Identity",
    thumbnail: "/projects/design/personal-branding/personal-branding-01.jpg",
    images: [
      "/projects/design/personal-branding/personal-branding-02.jpg",
      "/projects/design/personal-branding/personal-branding-03.jpg",
      "/projects/design/personal-branding/personal-branding-04.jpg",
      "/projects/design/personal-branding/personal-branding-05.jpg",
      "/projects/design/personal-branding/personal-branding-06.jpg",
      "/projects/design/personal-branding/personal-branding-07.jpg",
    ],
    description:
      "My personal brand identity, built around a lighthouse that combines my initials, S and G. The maritime theme reflects guidance and direction, with a palette of deep navy, amber, and cream, paired with a clear typographic system. This identity carries across my entire portfolio.",
    year: "2026",
    client: "",
    tools: ["Adobe Illustrator"],
  },


];