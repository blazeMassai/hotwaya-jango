/** @type {path.PlatformPath | path} */

const Path = require("path");
const pwd = process.env.PWD;

// To make tailwind can scan code in Python packages:
// export pySitePackages=$(python3 -c "import sysconfig; print(sysconfig.get_path('purelib'))")
const pySitePackages = process.env.pySitePackages;

//
// const projectPaths = [
//     Path.join(pwd, './hotwire_dj/templates/**/*.html'),
// ];

let pyPackagesPaths = []
if (pySitePackages) {
  pyPackagesPaths = [
      Path.join(pySitePackages,"./crispy_tailwind/**/*.html"),
      Path.join(pySitePackages, "./crispy_tailwind/**/*.py"),
      Path.join(pySitePackages, "./crispy_tailwind/**/*.js"),
  ]
}

// const contentPaths = ["...projectPaths"," ...pyPackagesPaths"];
// console.log(`tailwindcss will scan ${contentPaths}`)

module.exports = {
  content: ["./hotwire_dj/templates/**/*.html" ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
