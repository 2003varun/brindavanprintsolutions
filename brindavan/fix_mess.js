const fs = require('fs');
const cheerio = require('cheerio');

const indexHtml = fs.readFileSync('index.html', 'utf-8');

const headerStart = indexHtml.indexOf('<header class="modern-header">');
const headerEnd = indexHtml.indexOf('</header>') + 9;
const trueHeader = indexHtml.substring(headerStart, headerEnd);

const footerStart = indexHtml.indexOf('<footer class="modern-footer">');
const footerEnd = indexHtml.indexOf('</footer>') + 9;
const trueFooter = indexHtml.substring(footerStart, footerEnd);

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(file => {
    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);
    
    const titleText = $('title').first().text().replace('Brindavan Print Solutions - ', '');
    const mainHeading = $('.section-title').first().text() || titleText;
    const contentHtml = $('.page-content').html();
    
    if (!contentHtml) {
        console.log(`Skipping ${file} - no page-content found`);
        return;
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

${trueHeader}

<section class="section-padding">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
        <h1 class="section-title" style="margin-bottom: 40px; text-align: center; color: var(--primary);">${mainHeading}</h1>
        <div class="page-content" style="font-size: 18px; line-height: 1.8; color: var(--text-dark);">
            ${contentHtml.trim()}
        </div>
    </div>
</section>

${trueFooter}

</body>
</html>`;

    fs.writeFileSync(file, finalHtml, 'utf-8');
    console.log(`Fixed ${file}`);
});
