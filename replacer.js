const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const dirsToProcess = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'container'),
  path.join(__dirname, 'constants'),
  path.join(__dirname, 'pages')
];

let files = [];
dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) {
    files = files.concat(walkSync(dir));
  }
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Safe Presentation -> Campaign
  content = content.replace(/(?<!\/)\bpresentation(s?)\b(?!-)/g, (m, p1) => `campaign${p1}`);
  content = content.replace(/(?<!\/)\bPresentation(s?)\b(?!-)/g, (m, p1) => `Campaign${p1}`);
  content = content.replace(/(?<!\/)\bPRESENTATION(S?)\b(?!-)/g, (m, p1) => `CAMPAIGN${p1}`);
  
  // Deck -> Funnel
  content = content.replace(/\bdeck(s?)\b/g, (m, p1) => `funnel${p1}`);
  content = content.replace(/\bDeck(s?)\b/g, (m, p1) => `Funnel${p1}`);
  
  // Slide -> Landing Page
  content = content.replace(/\bslide(s?)\b/g, (m, p1) => `landing page${p1}`);
  content = content.replace(/\bSlide(s?)\b/g, (m, p1) => `Landing page${p1}`);
  
  // Custom exact Ochi replacements
  content = content.replace(/\bOchi\b/g, 'Katalyst');
  content = content.replace(/\bOCHI\b/g, 'KATALYST');
  content = content.replace(/ochi design/gi, 'Katalyst');
  content = content.replace(/we are ochi/gi, 'we are Katalyst');
  
  fs.writeFileSync(file, content);
});

console.log('Replacement complete.');
