const sass = require('sass');
const fs = require('fs');

// Standard compilation
const result = sass.compile('index.scss', {
  loadPaths: ['node_modules']
});
fs.writeFileSync('dist/bulma-theme-ispra.css', result.css);

// Minified (compressed) compilation
const compressedResult = sass.compile('index.scss', {
  loadPaths: ['node_modules'],
  style: 'compressed'
});
fs.writeFileSync('dist/bulma-theme-ispra.min.css', compressedResult.css);

console.log('CSS compiled successfully!');