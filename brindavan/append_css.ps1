/* =========================================
   MODERN HOMEPAGE REDESIGN (B2B INDUSTRIAL)
   ========================================= */

/* Base & Utilities */
.home-page {
    background: #ffffff;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
.section-padding {
    padding: 80px 0;
}
.bg-light { background-color: #f8fafc; }
.bg-dark { background-color: #111827; }
.bg-primary { background-color: var(--primary); }
.text-white { color: #ffffff !important; }
.text-center { text-align: center; }
.mt-4 { margin-top: 30px; }

/* Buttons */
.btn-primary, .btn-secondary {
    display: inline-block;
    padding: 14px 32px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
}
.btn-primary {
    background: var(--primary);
    color: #ffffff;
    border: 2px solid var(--primary);
}
.btn-primary:hover {
    background: var(--primary-hover);
    border-color: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(234, 143, 0, 0.3);
}
.btn-secondary {
    background: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
}
.btn-secondary:hover {
    background: #ffffff;
    color: var(--text-dark);
    transform: translateY(-2px);
}

/* 1. Header */
.modern-header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    padding: 15px 0;
}
.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo-title {
    display: block;
    font-size: 24px;
    font-weight: 800;
    color: var(--primary);
    line-height: 1.1;
}
.logo-subtitle {
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-light);
    letter-spacing: 1px;
    text-transform: uppercase;
}
.modern-header a { text-decoration: none; }
.header-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 30px;
}
.header-nav a {
    color: var(--text-dark);
    font-weight: 600;
    font-size: 15px;
    transition: color 0.3s;
}
.header-nav a:hover { color: var(--primary); }

/* 2. Hero Section */
.hero-section {
    position: relative;
    background: url('images/banner1.jpg') center/cover no-repeat;
    padding: 120px 0;
    min-height: 500px;
    display: flex;
    align-items: center;
}
.hero-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90deg, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.6) 100%);
    z-index: 1;
}
.hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
}
.hero-content h1 {
    color: #ffffff;
    font-size: 54px;
    line-height: 1.1;
    margin-bottom: 20px;
    letter-spacing: -1px;
}
.hero-content p {
    color: #e5e7eb;
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: 300;
}
.hero-buttons {
    display: flex;
    gap: 20px;
}

/* Sections Common */
.section-subtitle {
    color: var(--primary);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
}
.section-title {
    font-size: 36px;
    color: var(--text-dark);
    margin-bottom: 20px;
    letter-spacing: -0.5px;
}
.section-header p {
    font-size: 18px;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto 50px;
}

/* 3. Intro Section */
.intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
.intro-text p {
    font-size: 18px;
    margin-bottom: 25px;
}
.check-list {
    list-style: none;
    padding: 0;
}
.check-list li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    font-weight: 500;
    color: var(--text-dark);
}
.check-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
}
.intro-image img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* 4. Product Categories */
.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}
.category-card {
    background: #ffffff;
    padding: 40px 30px;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,0.05);
    text-decoration: none;
    transition: all 0.3s ease;
    display: block;
}
.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
    border-color: var(--primary);
}
.category-icon {
    font-size: 40px;
    margin-bottom: 20px;
}
.category-card h3 {
    color: var(--text-dark);
    margin-bottom: 15px;
    font-size: 22px;
}
.category-card p {
    color: var(--text-light);
    font-size: 15px;
    line-height: 1.6;
}

/* 5. Industries */
.industries-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}
.industry-tag {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 15px 25px;
    border-radius: 50px;
    font-weight: 600;
    color: var(--text-dark);
    font-size: 16px;
    transition: all 0.3s;
}
.industry-tag:hover {
    background: var(--primary);
    color: #ffffff;
    border-color: var(--primary);
    transform: scale(1.05);
}

/* 6 & 8. Solutions & One Stop */
.solutions-text, .large-text {
    font-size: 24px;
    font-weight: 300;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

/* 7. Quality */
.quality-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}
.quality-card {
    background: #ffffff;
    padding: 40px;
    border-radius: 12px;
    border-left: 4px solid var(--primary);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.quality-card h3 {
    font-size: 24px;
    margin-bottom: 15px;
}

/* 9. Vision */
.vision-text {
    font-size: 36px;
    font-weight: 600;
    color: var(--text-dark);
    font-style: italic;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.4;
}

/* 11. Footer */
.modern-footer {
    background: #111827;
    color: rgba(255,255,255,0.7);
    padding: 60px 0 0;
}
.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 60px;
    margin-bottom: 40px;
}
.modern-footer h3, .modern-footer h4 {
    color: #ffffff;
    margin-bottom: 20px;
}
.footer-about p { margin-bottom: 10px; }
.footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footer-links li { margin-bottom: 10px; }
.footer-links a {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: color 0.3s;
}
.footer-links a:hover { color: var(--primary); }
.footer-contact p { margin-bottom: 10px; }
.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
}

/* Responsive */
@media (max-width: 900px) {
    .header-nav { display: none; } /* Simple approach for now */
    .hero-content h1 { font-size: 40px; }
    .intro-grid { grid-template-columns: 1fr; }
    .quality-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr; gap: 40px; }
    .vision-text { font-size: 24px; }
    .solutions-text, .large-text { font-size: 18px; }
}
