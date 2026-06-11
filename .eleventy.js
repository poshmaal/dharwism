module.exports = function (eleventyConfig) {
  // Copy assets straight through to the build output
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

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
