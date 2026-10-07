const fs = require('fs');

const indexContent = fs.readFileSync('index.html', 'utf-8');
const headerMatch = indexContent.match(/<header class="modern-header">[\s\S]*?<\/header>/);
const footerMatch = indexContent.match(/<footer class="modern-footer">[\s\S]*?<\/footer>/);

['contact_us.html', 'thank_you.html'].forEach(file => {
    if(!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf-8');
    
    // Replace old header structure
    content = content.replace(/<div id="header">[\s\S]*?<div id="logo">[\s\S]*?<\/table>\s*<\/div>\s*<hr\s*\/>/i, headerMatch[0]);
    // Try without hr /> just in case
    content = content.replace(/<div id="header">[\s\S]*?<div id="logo">[\s\S]*?<\/table>\s*<\/div>/i, headerMatch[0]);
    
    // Replace old footer
    content = content.replace(/<div id="footer">[\s\S]*?<\/div>\s*<!-- end #footer -->/i, footerMatch[0]);
    content = content.replace(/<div id="footer">[\s\S]*?<\/div>/i, footerMatch[0]);
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
});
