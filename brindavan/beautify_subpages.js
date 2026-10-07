const fs = require('fs');

const files = [
    'about_us.html',
    'ceramic_printing_solutions.html',
    'contact_us.html',
    'graphic_printing_solutions.html',
    'our_brands.html',
    'products.html',
    'screen_making_chemicals.html',
    'textile_printing_solutions.html',
    'thank_you.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf-8');
    
    // 1. Remove the old inline H1 title from inside the container
    // It looks like: <h1 class="section-title" style="margin-bottom: 40px; text-align: center; color: var(--primary);">Title</h1>
    const titleMatch = content.match(/<h1 class="section-title"[^>]*>(.*?)<\/h1>/);
    let pageTitle = "Brindavan Print Solutions";
    if (titleMatch) {
        pageTitle = titleMatch[1];
        content = content.replace(titleMatch[0], '');
    }

    // 2. Add a beautiful Page Hero Section right after the modern header
    if (!content.includes('page-hero')) {
        const heroHtml = `
<section class="page-hero" style="background: linear-gradient(135deg, #111827 0%, #1e3a8a 100%); padding: 80px 0; color: white; text-align: center; margin-bottom: 50px; position: relative;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('images/banner1.jpg') center/cover; opacity: 0.15; z-index: 1;"></div>
    <div class="container" style="position: relative; z-index: 2;">
        <h1 style="font-size: 48px; font-weight: 800; margin: 0; letter-spacing: -1px; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">${pageTitle}</h1>
        <div style="width: 60px; height: 4px; background: #3b82f6; margin: 20px auto 0; border-radius: 2px;"></div>
    </div>
</section>
`;
        content = content.replace(/<\/header>\s*(<section[^>]*>)/, '</header>\n' + heroHtml + '\n$1');
        
        // Also add bg-light to the main section to make the white cards pop
        content = content.replace(/<section class="section-padding">/, '<section class="section-padding bg-light">');
    }

    // 3. Upgrade the .main-content div (or .page-content if no sidebar) to look like a premium card
    if (content.includes('class="main-content"')) {
        content = content.replace(
            /class="main-content" style="flex: 1; min-width: 300px;"/, 
            'class="main-content" style="flex: 1; min-width: 300px; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.02);"'
        );
    } else {
        // For contact_us.html or thank_you.html without sidebar
        content = content.replace(
            /class="page-content" style="/,
            'class="page-content" style="background: white; padding: 50px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.02); '
        );
    }
    
    // For contact_us.html, we need to make sure contact-container is a grid
    if (file === 'contact_us.html' && !content.includes('grid-template-columns')) {
        content = content.replace(/class="contact-container"/, 'class="contact-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;"');
        content = content.replace(/class="contact-info"/, 'class="contact-info" style="background: #f8fafc; padding: 30px; border-radius: 12px;"');
        content = content.replace(/class="contact-form"/, 'class="contact-form" style="background: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #eee;"');
        
        // Form styling
        content = content.replace(/<form /g, '<form style="display: flex; flex-direction: column; gap: 15px;" ');
        content = content.replace(/class="form-group"/g, 'class="form-group" style="display: flex; flex-direction: column; gap: 8px;"');
        content = content.replace(/<input /g, '<input style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; width: 100%; font-family: inherit;" ');
        content = content.replace(/<textarea /g, '<textarea style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; width: 100%; font-family: inherit;" ');
        content = content.replace(/type="submit"/, 'type="submit" style="background: #1e3a8a; color: white; border: none; padding: 15px 30px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: 0.3s; margin-top: 10px;"');
    }

    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Beautified ${file}`);
});
