PUBLICATION FIGURES
===================

Figures are served from public/publications/. Project figures live in
public/projects/. Use lowercase, hyphenated filenames.

For one image, set the publication or project data in data/portfolioData.js:

  figure: "/publications/example.svg",
  figureAlt: "Describe the figure",

For multiple images on a featured tab, use:

  figures: [
    { src: "/publications/example.webp", alt: "Describe the figure", label: "Overview" },
  ],

The update API also imports portfolioData.js. Keep these paths as URL strings
so the module can be loaded directly by Node.
