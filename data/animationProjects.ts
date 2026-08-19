// animationProjects.ts — Data for the animation projects.
// Each project has a synopsis (what the film is about) and a
// description (my role and context).

export interface AnimationProject {
  title: string;
  role: string; // short "what I did" shown on the card
  image: string;
  mediaType: "image" | "video";
  videoUrl?: string;
  synopsis: string; // what the film is about
  description: string; // my role + context
  year: string;
  director: string;
  participation: string;
  tools: string[];
}

export const animationProjects: AnimationProject[] = [
  {
    title: "Knot by Blood",
    role: "3D Animator",
    image: "/projects/animation/knot-by-blood-mini.png",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/xO6PTARJxjU",
    synopsis:
      "Knot by Blood² is a 3D-animated short film that follows a duo of space-bounty hunters on their latest mission to retrieve a weapon cache.",
    description:
      "A collaborative project where I contributed as a 3D animator to a graduation film at OCAD University, exploring exaggerated facial expressions and a switch from slow- to fast-paced sequences.",
    year: "2026",
    director: "Erin Chen",
    participation: "3D Animator",
    tools: ["Maya"],
  },
  {
    title: "Gembound",
    role: "3D Animator & Rigging",
    image: "/projects/animation/gembound-mini.jpg",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/qw6PeHz14ac",
    synopsis:
      "A trio of medieval warriors must reconcile in order to make it home for dinner.",
    description:
      "Short film created during my studies at Vancouver Film School. I was responsible for character animation and rigging, bringing characters to life with a more stylized type of animation.",
    year: "2025",
    director: "Eric Plascencia",
    participation: "3D Animator and Rigging",
    tools: ["Maya"],
  },
  {
    title: "Encore",
    role: "3D Animator, MOCAP Augmenting",
    image: "/projects/animation/encore-mini.jpg",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/Pwm3OXw4Xr0",
    synopsis: "A young warrior makes a final stand for humankind.",
    description:
      "A student film produced at Vancouver Film School. I worked as a 3D animator and augmented motion-capture data to refine and polish the character performances and physics.",
    year: "2025",
    director: "Ryan Chen",
    participation: "3D Animator, MOCAP Augmenting",
    tools: ["Maya", "Motion Builder"],
  },
  {
    title: "Kite",
    role: "3D Animator",
    image: "/projects/animation/kite-mini.jpg",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/uJqTeYBVfQs",
    synopsis:
      "\"Kite\" is a stylized 3D short film inspired by Pixar's Up and Turning Red, following the emotional bond between a father (Johnson) and his son (Dennis) across different stages of life. The film explores memory, time, and love through light, color, and movement.",
    description:
      "Created at Vancouver Film School. As a 3D animator, I focused on conveying the emotional bond between father and son through subtle, expressive movement.",
    year: "2025",
    director: "Biston Pham",
    participation: "3D Animator",
    tools: ["Maya"],
  },
  {
    title: "The Wallet",
    role: "3D Animator",
    image: "/projects/animation/the-wallet-mini.jpg",
    mediaType: "image",
    synopsis:
      "An act of good faith, like returning a wallet, can turn into a chase if we aren't careful. An action-packed comedy short.",
    description:
      "A Vancouver Film School project where I had the chance to explore an action-comedy chase sequence.",
    year: "2025",
    director: "Mai Anh",
    participation: "3D Animator",
    tools: ["Maya"],
  },
];