const fs = require('fs');

const sidebarHtml = `
<aside class="modern-sidebar">
    <h3 class="sidebar-title">Our Products</h3>
    <ul class="sidebar-nav">
        <li><a href="screen_making_chemicals.html">Screen Making Chemicals</a></li>
        <li><a href="textile_printing_solutions.html">Textile Printing</a></li>
        <li><a href="graphic_printing_solutions.html">Graphic Printing</a></li>
        <li><a href="ceramic_printing_solutions.html">Ceramic Printing</a></li>
    </ul>
</aside>
`;

const files = [
    'about_us.html',
    'ceramic_printing_solutions.html',
    'graphic_printing_solutions.html',
    'products.html',
    'screen_making_chemicals.html',
    'textile_printing_solutions.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf-8');
    
    // Check if sidebar already exists
    if (content.includes('modern-sidebar')) return;
    
    // We want to wrap <div class="page-content">...</div> inside a flex layout
    const flexWrapStart = `<div class="page-layout" style="display: flex; gap: 40px; flex-wrap: wrap;">
        ${sidebarHtml}
        <div class="main-content" style="flex: 1; min-width: 300px;">`;
    
    const flexWrapEnd = `</div></div>`;
    
    content = content.replace('<div class="page-content"', flexWrapStart + '\n<div class="page-content"');
    
    // We need to close the main-content div after page-content closes.
    // The structure is: 
    // <div class="page-content" ...>
    //   ...
    // </div>
    // </div> (container)
    
    // A safer regex replacement:
    content = content.replace(/<\/div>\s*<\/div>\s*<\/section>/, '</div>\n' + flexWrapEnd + '\n</div>\n</section>');
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Injected sidebar into ${file}`);
});
