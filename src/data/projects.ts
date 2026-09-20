import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Maze Visualizer",
    description:
      "A website for visualizing the generation and solving of two-dimensional 'perfect' mazes.",
    image: "images/projects/placeholder.svg",
    imageAlt: "Screenshot of Project One",
    githubUrl: "https://github.com/SanderHHansen/maze-visualizer",
    liveUrl: "https://sanderhhansen.github.io/maze-visualizer/",
    tags: ["TypeScript", "Tailwind CSS"],
  },
  {
    name: "Project Two",
    description:
      "Placeholder description. Explain what the project does, the problem it solves and your role.",
    image: "images/projects/placeholder.svg",
    imageAlt: "Screenshot of Project Two",
    githubUrl: "https://github.com/example/project-two",
    liveUrl: "https://example.com/project-two",
    tags: ["C#", "React", "PostgreSQL"],
  },
];
