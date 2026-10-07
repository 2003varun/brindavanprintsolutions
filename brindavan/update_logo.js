const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldBlock = `<div class="header-logo">
            <a href="index.html">
                <span class="logo-title">Brindavan</span>
                <span class="logo-subtitle">Print Solutions</span>
            </a>
        </div>`;

const newBlock = `<div class="header-logo">
            <a href="index.html">
                <img src="brindavan_logo.png" alt="Brindavan Logo" class="logo-img" />
                <div class="logo-text">
                    <span class="logo-title">Brindavan</span>
                    <span class="logo-subtitle">Print Solutions</span>
                </div>
            </a>
        </div>`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8');
    
    // Using a regex to match the old block in case of different indentation or line endings
    const regex = /<div class="header-logo">\s*<a href="index\.html">\s*<span class="logo-title">Brindavan<\/span>\s*<span class="logo-subtitle">Print Solutions<\/span>\s*<\/a>\s*<\/div>/g;
    
    if (regex.test(content)) {
        content = content.replace(regex, newBlock);
        fs.writeFileSync(path.join(dir, file), content, 'utf-8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`Block not found in ${file}`);
    }
});
