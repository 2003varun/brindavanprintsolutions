const fs = require('fs');

const titles = {
    'about_us.html': 'Company Profile',
    'ceramic_printing_solutions.html': 'Ceramic Printing Solutions',
    'contact_us.html': 'Contact Us',
    'graphic_printing_solutions.html': 'Graphic Printing Solutions',
    'our_brands.html': 'Our Brands',
    'products.html': 'Products',
    'screen_making_chemicals.html': 'Screen Making Chemicals and Accessories',
    'textile_printing_solutions.html': 'Textile Printing Solutions',
    'thank_you.html': 'Thank You'
};

Object.keys(titles).forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf-8');
    
    // Fix H1
    content = content.replace(/<h1 class="section-title"[^>]*>.*?<\/h1>/i, `<h1 class="section-title" style="margin-bottom: 40px; text-align: center; color: var(--primary);">${titles[file]}</h1>`);
    // Fix <title>
    content = content.replace(/<title>.*?<\/title>/i, `<title>Brindavan Print Solutions - ${titles[file]}</title>`);
    
    // Fix image layouts inside page-content
    // Wrap consecutive images in a flex container
    const imgRegex = /(<img[^>]+class="content-img"[^>]*>)+/g;
    content = content.replace(imgRegex, (match) => {
        return `<div style="display: flex; gap: 20px; margin-bottom: 30px; flex-wrap: wrap; justify-content: center;">${match}</div>`;
    });
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Restored title for ${file}`);
});
