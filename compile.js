const sass = require('sass');
const fs = require('fs');

// Legge il file package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const description = pkg.description; // Estrae la descrizione
const version = pkg.version; // Estrae la versione
const license = pkg.license; // Estrae la licenza
const homepage = pkg.homepage; // Estrae la homepage
const authors = pkg.author; // Estrae l'autore

// Funzione per aggiungere il commento al CSS
const addVersionComment = (css) => `/*!\n  ${description} v${version}\n  ${authors}\n  ${license}\n  ${homepage}\n*/\n\n` + css;
const addVersionCommentMin = (css) => `/*! ${description} v${version} | ${authors} | ${license} | ${homepage} */` + css;

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
fs.writeFileSync('dist/bulma-theme-ispra.min.css', addVersionCommentMin(compressedResult.css));

console.log('CSS compiled successfully!');