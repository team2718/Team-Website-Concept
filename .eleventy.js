module.exports = function(eleventyConfig) {
  // Tell 11ty to directly copy your CSS and images to the output folder
  eleventyConfig.addPassthroughCopy("src/css"); 
  eleventyConfig.addPassthroughCopy("src/images"); 
  eleventyConfig.addPassthroughCopy("src/about/images"); 

  return {
    dir: {
      input: "src", // omit this line if you choose Option A
      output: "_site"
    }
  };
};