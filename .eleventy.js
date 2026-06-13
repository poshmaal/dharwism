module.exports = function (eleventyConfig) {
  // Copy assets straight through to the build output
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // The per-ghazal notes markdown files are loaded as DATA (see _data/notes.js),
  // not rendered as their own pages — so ignore them as templates.
  eleventyConfig.ignores.add("src/ghazals/notes/*.md");

  // Trig filters used by the raga time-dial SVG (degrees handled in template)
  eleventyConfig.addFilter("cos", (rad) => Math.cos(rad));
  eleventyConfig.addFilter("sin", (rad) => Math.sin(rad));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
