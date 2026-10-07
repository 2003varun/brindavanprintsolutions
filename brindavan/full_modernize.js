const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const indexHtml = fs.readFileSync('index.html', 'utf-8');
const $index = cheerio.load(indexHtml);
const headerHtml = $index('header.modern-header').parent().html() || indexHtml.match(/<header class="modern-header">[\s\S]*?<\/header>/)[0];
const footerHtml = $index('footer.modern-footer').parent().html() || indexHtml.match(/<footer class="modern-footer">[\s\S]*?<\/footer>/)[0];

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(file => {
    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);
    
    // Skip if it's already a clean HTML5 doc (no tables wrapping everything, has <!DOCTYPE html> as the only doctype)
    // Actually, we'll force rebuild for consistency.
    
    let titleText = $('title').text().replace('Brindavan Print Solutions Private Limited - ', '');
    let mainHeading = $('.company_profile').first().text().trim() || $('.title').first().text().trim() || titleText;
    
    let extractedContent = '';

    if (file === 'contact_us.html') {
        extractedContent = $('.contact-container').parent().html(); 
        if(!extractedContent) extractedContent = $('.contact-container').parent().parent().html();
    } else if (file === 'our_brands.html') {
        const logos = [];
        $('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src && !src.includes('banner') && !src.includes('bullet') && !src.includes('heading') && !src.includes('second.jpg') && !src.includes('logo') && !src.includes('img0')) {
                logos.push(`<div class="brand-logo"><img src="${src}" alt="Brand" /></div>`);
            }
        });
        extractedContent = `<div class="brands-grid">${logos.join('')}</div>`;
    } else if (file === 'products.html') {
        extractedContent = `
            <div class="products-grid">
                <a href="screen_making_chemicals.html" class="product-card">
                    <img src="images/screen_making_prod.jpg" alt="Screen Making Chemicals">
                    <div class="product_name">Screen Making Chemicals</div>
                </a>
                <a href="textile_printing_solutions.html" class="product-card">
                    <img src="images/textile_prod.jpg" alt="Textile Printing Solutions">
                    <div class="product_name">Textile Printing Solutions</div>
                </a>
                <a href="graphic_printing_solutions.html" class="product-card">
                    <img src="images/graphic_prod.jpg" alt="Graphic Printing Solutions">
                    <div class="product_name">Graphic Printing Solutions</div>
                </a>
                <a href="ceramic_printing_solutions.html" class="product-card">
                    <img src="images/ceramic_prod.jpg" alt="Ceramic Printing Solutions">
                    <div class="product_name">Ceramic Printing Solutions</div>
                </a>
            </div>`;
    } else if (file === 'thank_you.html') {
        extractedContent = `
            <div style="text-align: center; padding: 40px 0;">
                <h2>Thank You!</h2>
                <p>Your enquiry has been successfully submitted. We will get back to you shortly.</p>
                <a href="index.html" class="btn-primary mt-4">Return Home</a>
            </div>`;
    } else {
        // Generic content pages (About Us, Categories)
        const paragraphs = [];
        $('.text_font, .text, .producttext, .body_text').each((i, el) => {
            let text = $(el).text().trim();
            if (text && text.length > 3) paragraphs.push(`<p>${text}</p>`);
        });
        
        // Also capture any lists if present
        const lists = [];
        $('.modern-list li, ul li').each((i, el) => {
            let text = $(el).text().trim();
            // skip nav links
            if (text && text.length > 5 && !$(el).find('a').length && !$(el).parents('.header-nav, .footer-links').length) {
                lists.push(`<li>${text}</li>`);
            }
        });

        const images = [];
        $('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src && src.includes('_prod') && !src.includes('logo')) {
                images.push(`<img src="${src}" class="content-img" />`);
            }
        });

        let bodyHtml = images.join('');
        if (paragraphs.length > 0) {
            // Deduplicate paragraphs simply
            const uniqueP = [...new Set(paragraphs)];
            bodyHtml += uniqueP.join('');
        }
        if (lists.length > 0) {
            bodyHtml += `<ul class="modern-list">${lists.join('')}</ul>`;
        }
        
        extractedContent = bodyHtml;
    }

    if (!extractedContent || extractedContent.trim() === '') {
        // Fallback for contact_us or if logic missed something
        if (file === 'contact_us.html') {
            extractedContent = $.html('.contact-container');
        }
    }

    const finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Brindavan Print Solutions - ${mainHeading}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="home.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="brindavan_logo.png">
</head>
<body class="home-page sub-page">
${headerHtml}

<section class="section-padding">
    <div class="container">
        <h1 class="section-title" style="margin-bottom: 40px; text-align: center;">${mainHeading}</h1>
        <div class="page-content">
            ${extractedContent}
        </div>
    </div>
</section>

${footerHtml}
</body>
</html>`;

    fs.writeFileSync(file, finalHtml, 'utf-8');
    console.log(`Fully modernized ${file}`);
});
