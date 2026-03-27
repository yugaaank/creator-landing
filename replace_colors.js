const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    // Avoid missing files or permissions
    try {
      const dirFile = path.join(dir, file);
      if (fs.statSync(dirFile).isDirectory()) {
        if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
          filelist = walkSync(dirFile, filelist);
        }
      } else {
        if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.css') || dirFile.endsWith('.svg')) {
          filelist.push(dirFile);
        }
      }
    } catch(e) {}
  });
  return filelist;
};

const dirsToProcess = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'container'),
  path.join(__dirname, 'public'),
  path.join(__dirname, 'pages'),
  path.join(__dirname, 'styles')
];

let files = [];
dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) {
    files = files.concat(walkSync(dir));
  }
});
files.push(path.join(__dirname, 'tailwind.config.ts'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;
  
  // Base background & foreground
  content = content.replace(/#f1f1f1/gi, '#FFF8F0');     // Cream/White
  content = content.replace(/#212121/gi, '#0C0C0C');     // Deep Black
  
  // Borders with opacity (originally from #212121) using Dark and Medium brown
  content = content.replace(/#0C0C0C55/gi, '#4B2E2B55'); // Dark Brown borders
  content = content.replace(/#0C0C0C88/gi, '#8C5A3C88'); // Medium Brown thick borders
  content = content.replace(/#0C0C0C99/gi, '#8C5A3C99'); // Medium Brown heavily visible borders
  
  // Accents & specific highlights
  content = content.replace(/#CDEA68/gi, '#F2613F');     // Bright Orange (original green accent)
  content = content.replace(/#cdea68/gi, '#F2613F'); 
  content = content.replace(/#004d43/gi, '#481E14');     // Maroon (original dark green)
  content = content.replace(/#004D43/gi, '#481E14');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

console.log('Color replacement complete.');
