/** @type {path.PlatformPath | path} */

// const Path = require("path");
// const pwd = process.env.PWD;
//
// const projectPaths = [
//     Path.join(pwd, './hotwire_dj/templates/**/*.html'),
// ];
//
// const contentPaths = [...projectPaths];
// console.log(`tailwindcss will scan ${contentPaths}`)

module.exports = {
  content: ["./hotwire_dj/templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
