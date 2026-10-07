const fs = require('fs');
const path = require('path');

const indexContent = fs.readFileSync('index.html', 'utf-8');
const headerMatch = indexContent.match(/<header class="modern-header">[\s\S]*?<\/header>/);
const footerMatch = indexContent.match(/<footer class="modern-footer">[\s\S]*?<\/footer>/);

if (!headerMatch || !footerMatch) {
    console.log("Could not find header or footer in index.html");
    process.exit(1);
}

const headerHtml = headerMatch[0];
const footerHtml = footerMatch[0];

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    
    // The old structure has <div id="header">...</div> <div id="logo">...</div> <hr>
    // First, remove <div id="header"> ... </div>
    content = content.replace(/<div id="header">[\s\S]*?<!-- end #header -->/i, '');
    
    // Then replace <div id="logo"> ... </div> with the modern header
    content = content.replace(/<div id="logo">[\s\S]*?<!-- end #logo -->/i, headerHtml);
    
    // In case there is an <hr> immediately after logo
    content = content.replace(/<hr>/gi, '');
    
    // Replace old footer
    content = content.replace(/<div id="footer">[\s\S]*?<!-- end #footer -->/i, footerHtml);
    
    // Ensure home.css is included
    if (!content.includes('home.css')) {
        content = content.replace('</head>', '<link href="home.css" rel="stylesheet" type="text/css" media="screen" />\n</head>');
    }
    
    // Change body class
    content = content.replace(/<body[^>]*>/i, '<body class="home-page sub-page">');
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
});
