const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    try {
      const dirFile = path.join(dir, file);
      if (fs.statSync(dirFile).isDirectory()) {
        if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
          filelist = walkSync(dirFile, filelist);
        }
      } else {
        if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.css')) {
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
  path.join(__dirname, 'pages'),
  path.join(__dirname, 'styles')
];

let files = [];
dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) {
    files = files.concat(walkSync(dir));
  }
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;
  
  // Replace custom tailwind classes with arbitrary HEX values to completely bypass caching
  // 'about' was Lime Green, now Bright Orange
  content = content.replace(/\bbg-about\b/g, 'bg-[#F2613F]');
  content = content.replace(/\btext-about\b/g, 'text-[#F2613F]');
  content = content.replace(/\bborder-about\b/g, 'border-[#F2613F]');
  
  // 'marquee' was Dark Green, now Maroon
  content = content.replace(/\bbg-marquee\b/g, 'bg-[#481E14]');
  content = content.replace(/\btext-marquee\b/g, 'text-[#481E14]');
  content = content.replace(/\bborder-marquee\b/g, 'border-[#481E14]');

  // 'secondry' was Dark Gray, now Deep Black from palette
  content = content.replace(/\bbg-secondry\b/g, 'bg-[#0C0C0C]');
  content = content.replace(/\btext-secondry\b/g, 'text-[#0C0C0C]');
  content = content.replace(/\bborder-secondry\b/g, 'border-[#0C0C0C]');

  // 'background' was Light Gray, now Cream White from palette
  content = content.replace(/\bbg-background\b/g, 'bg-[#FFF8F0]');
  content = content.replace(/\btext-background\b/g, 'text-[#FFF8F0]');
  content = content.replace(/\bborder-background\b/g, 'border-[#FFF8F0]');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

console.log('Arbitrary HEX replacement complete.');
