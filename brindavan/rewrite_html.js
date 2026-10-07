const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(__dirname, file), 'utf-8');
    
    // We only want to rebuild #page, preserving #header, #logo, #footer
    const $ = cheerio.load(content);
    
    // Check if the page has a sidebar table structure
    const sidebar = $('#sidebar').length > 0 ? $('#sidebar').html() : null;
    const isIndex = file === 'index.html';
    const isBrands = file === 'our_brands.html';
    const isProducts = file === 'products.html';
    
    if (isIndex) {
        // Rewrite index.html tables
        const title = $('.post').html();
        const flashObj = $('object').parent().html();
        const textContent = $('.text_font').html();
        const visitorCounter = $('a[href="http://www.easycounter.com/"]').parent().parent().parent().html();
        
        $('#page').html(`
            <div class="page-container">
                <div class="post">${title || ''}</div>
                <div class="index-layout">
                    <div class="index-media">
                        ${flashObj || ''}
                    </div>
                    <div class="index-content">
                        ${textContent || ''}
                        <div class="visitor-counter">
                            <a href="#"><img src="http://www.easycounter.com/counter.php?brindavan" border="0" alt="Hit Counter" /></a>
                        </div>
                    </div>
                </div>
            </div>
        `);
    } 
    else if (isBrands) {
        // our_brands.html
        const title = $('.post').html();
        const logos = [];
        $('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src && !src.includes('banner1') && !src.includes('img02') && !src.includes('q-dat')) {
                logos.push(`<div class="brand-logo"><img src="${src}" alt="Brand Logo" /></div>`);
            }
        });
        
        $('#page').html(`
            <div class="page-container">
                <div class="post">${title || ''}</div>
                <div class="brands-grid">
                    ${logos.join('\n')}
                </div>
            </div>
        `);
    }
    else if (isProducts) {
        // products.html
        const title = $('.post').html();
        const products = [];
        $('.product_name').each((i, el) => {
            const link = $(el).attr('href');
            const name = $(el).text();
            // find nearest image
            let img = '';
            // Since parsing the exact table is messy, we'll manually extract the known 4 products
            products.push({link, name});
        });
        // We know the 4 products from the HTML structure
        const productGrid = `
            <div class="products-grid">
                <a href="screen_making_chemicals.html" class="product-card">
                    <img src="images/screen_making_prod.jpg" alt="Screen Making Chemicals" />
                    <div class="product_name">Screen Making Chemicals and Accessories</div>
                </a>
                <a href="textile_printing_solutions.html" class="product-card">
                    <img src="images/textile_prod.jpg" alt="Textile Printing Solutions" />
                    <div class="product_name">Textile Printing Solutions</div>
                </a>
                <a href="graphic_printing_solutions.html" class="product-card">
                    <img src="images/graphic_prod.jpg" alt="Graphic Printing Solutions" />
                    <div class="product_name">Graphic Printing Solutions</div>
                </a>
                <a href="ceramic_printing_solutions.html" class="product-card">
                    <img src="images/ceramic_prod.jpg" alt="Ceramic Printing Solutions" />
                    <div class="product_name">Ceramic Printing Solutions</div>
                </a>
            </div>
        `;

        $('#page').html(`
            <div class="page-layout">
                <aside id="sidebar">${sidebar || ''}</aside>
                <main id="content">
                    <div class="post">${title || ''}</div>
                    ${productGrid}
                </main>
            </div>
        `);
    }
    else {
        // General page with sidebar (about_us, screen_making, textile, graphic, ceramic)
        let mainContentHtml = '';
        
        if ($('#content').length > 0) {
            // Find what is inside content but ignore sidebar
            mainContentHtml = $('#content').html();
        } else {
            // If no #content ID, just get all text elements
            mainContentHtml = $('.text_font, .text, .producttext').parent().html() || '';
        }
        
        // Ensure we preserve the main image headers or lists
        const images = [];
        $('#page img').each((i, el) => {
            const src = $(el).attr('src');
            // skip layout/sidebar images
            if (src && !src.includes('second.jpg') && !src.includes('img06') && !src.includes('heading.jpg') && !src.includes('bullet.jpg') && !src.includes('banner')) {
                images.push(`<img src="${src}" class="content-img" />`);
            }
        });

        // Special handling for pages with lists (ceramic, graphic, screen)
        const listItems = [];
        $('.producttext').each((i, el) => {
            const text = $(el).text().trim();
            if (text) {
                listItems.push(`<li>${text}</li>`);
            }
        });

        let specificContent = '';
        if (listItems.length > 0) {
            specificContent = `<ul class="modern-list">${listItems.join('\n')}</ul>`;
        }

        const heading = $('.company_profile, .post .title').first().html();

        $('#page').html(`
            <div class="page-layout">
                <aside id="sidebar">${sidebar || ''}</aside>
                <main id="content">
                    ${heading ? `<h2 class="title">${heading}</h2>` : ''}
                    <div class="content-body">
                        ${images.join('\n')}
                        ${listItems.length > 0 ? specificContent : mainContentHtml}
                    </div>
                </main>
            </div>
        `);
    }

    // Clean up unnecessary tables in header/logo if any missed
    $('table[width="901"]').each((i, el) => {
        // If it wraps #wrapper, replace with children
        if ($(el).find('#wrapper').length > 0) {
            $(el).replaceWith($(el).find('#wrapper'));
        }
    });

    fs.writeFileSync(path.join(__dirname, file), $.html(), 'utf-8');
    console.log('Processed:', file);
});
