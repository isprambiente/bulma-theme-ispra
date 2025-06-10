const sass = require('sass');
const fs = require('fs');

// Legge il file package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = pkg.version; // Estrae la versione

// Funzione per aggiungere il commento al CSS
const addVersionComment = (css) => `/* Tema Bulma per ISPRA - Versione: ${version} */\n` + css;

// Standard compilation
const result = sass.compile('index.scss', {
  loadPaths: ['node_modules']
});
fs.writeFileSync('dist/bulma-theme-ispra.css', addVersionComment(result.css));

// Minified (compressed) compilation
const compressedResult = sass.compile('index.scss', {
  loadPaths: ['node_modules'],
  style: 'compressed'
});
fs.writeFileSync('dist/bulma-theme-ispra.min.css', addVersionComment(compressedResult.css));

console.log('CSS compiled successfully!');