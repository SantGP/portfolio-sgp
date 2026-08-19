// codeProjects.ts — The list of code projects shown on the Coding page.
// Add a new object here and it appears on the page automatically.

export interface CodeProject {
  title: string;
  description: string;
  tech: string[];
  image: string; 
  github: string; // source code link
  demo: string; // live demo link
}

export const codeProjects: CodeProject[] = [
  {
    title: "Movie Randomizer",
    description:
      "A React app that helps you decide what to watch. It pulls from the OMDb API to suggest four random movies at once, so you can pick one instead of endlessly scrolling. Includes a search mode and a self-scrolling wall of featured films.",
    tech: ["Next.js", "TypeScript", "React", "OMDb API"],
    image: "/projects/code/movie-randomizer.png",
    github: "https://github.com/SantGP/assignment-2",
    demo: "https://assignment-2-two-psi.vercel.app/",
  },
  {
    title: "The Open Shelf",
    description:
      "A book search app built with vanilla TypeScript. It uses the Open Library API to search millions of books by title, author, or genre, with genre browsing, cover art, and a clean card layout. Renders results safely with createElement to avoid injection risks.",
    tech: ["TypeScript", "HTML", "CSS", "Open Library API"],
    image: "/projects/code/open-library.png",
    github: "https://github.com/SantGP/open-shelf",
    demo: "https://open-shelf-indol.vercel.app/",
  },

  // Add more projects here as objects, same shape
];