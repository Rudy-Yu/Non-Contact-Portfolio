// Project data
const projectData = [
    {
        title: "ZUVANA Digital Invitation App",
        description: "An exclusive platform designed to invite potential contributors to ZUVANA projects. Features include unique tokens, identity validation, digital NDA, personal watermark, and activity logging.",
        image: "./images/Zuvana Invitation.png",
        technologies: ["Next.js", "Tailwind", "Firebase"],
        demoLink: "#",
        githubLink: "https://github.com/Rudy-Yu/zuvana-invitation-app.git",
        status: "Development",
        lang_keys: {
            title_en: "ZUVANA Digital Invitation App",
            description_en: "An exclusive platform designed to invite potential contributors to ZUVANA projects. Features include unique tokens, identity validation, digital NDA, personal watermark, and activity logging.",
            title_id: "Aplikasi Undangan Digital ZUVANA",
            description_id: "Platform eksklusif yang dirancang untuk mengundang kontributor potensial ke proyek ZUVANA. Fitur meliputi token unik, validasi identitas, NDA digital, watermark pribadi, dan pencatatan aktivitas."
        }
    },
    {
        title: "Webnovel Platform",
        description: "An MVP platform inspired by JJWXC, featuring a complete end-to-end architecture. Built with React frontend, Express backend, and MongoDB database. Includes user authentication, content management, and monetization features.",
        image: "./images/Webnovel.png",
        technologies: ["React", "Express", "MongoDB", "JWT"],
        demoLink: "#",
        githubLink: "#",
        status: "Development",
        lang_keys: {
            title_en: "Webnovel Platform",
            description_en: "An MVP platform inspired by JJWXC, featuring a complete end-to-end architecture. Built with React frontend, Express backend, and MongoDB database. Includes user authentication, content management, and monetization features.",
            title_id: "Platform Webnovel",
            description_id: "Platform MVP yang terinspirasi dari JJWXC, menampilkan arsitektur end-to-end lengkap. Dibangun dengan frontend React, backend Express, dan database MongoDB. Termasuk autentikasi pengguna, manajemen konten, dan fitur monetisasi."
        }
    },
    {
        title: "Data Cleaner Automation",
        description: "A practical data cleaning tool that evolved from Excel VBA to a lightweight Streamlit web app. Perfect for small businesses and data analysts who need to clean and format their data efficiently. Features include batch processing and custom cleaning rules.",
        image: "./images/DCA.png",
        technologies: ["Python", "Streamlit", "Excel VBA"],
        demoLink: "#",
        githubLink: "#",
        status: "Completed",
        lang_keys: {
            title_en: "Data Cleaner Automation",
            description_en: "A practical data cleaning tool that evolved from Excel VBA to a lightweight Streamlit web app. Perfect for small businesses and data analysts who need to clean and format their data efficiently. Features include batch processing and custom cleaning rules.",
            title_id: "Otomatisasi Pembersih Data",
            description_id: "Alat pembersihan data praktis yang berkembang dari Excel VBA menjadi aplikasi web Streamlit ringan. Cocok untuk bisnis kecil dan analis data yang perlu membersihkan dan memformat data mereka secara efisien. Fitur meliputi pemrosesan batch dan aturan pembersihan kustom."
        }
    },
    {
        title: "SENSA Landing Page",
        description: "Korean-style product page for diet food brand",
        image: "./images/Sensa.png",
        technologies: ["HTML/CSS", "JavaScript", "Tailwind"],
        demoLink: "#",
        githubLink: "#",
        status: "Completed",
        lang_keys: {
            title_en: "SENSA Landing Page",
            description_en: "Korean-style product page for diet food brand",
            title_id: "Halaman Landing SENSA",
            description_id: "Halaman produk bergaya Korea untuk merek makanan diet"
        }
    },
    {
        title: "AppSheet Inventory Tracker",
        description: "Stock management application based on Google Sheet + AppSheet for warehouse monitoring",
        image: "./images/appsheet inventory.jpg",
        technologies: ["AppSheet", "Google Sheet"],
        demoLink: "#",
        githubLink: "#",
        status: "Completed",
        lang_keys: {
            title_en: "AppSheet Inventory Tracker",
            description_en: "Stock management application based on Google Sheet + AppSheet for warehouse monitoring",
            title_id: "Pelacak Inventaris AppSheet",
            description_id: "Aplikasi manajemen stok berbasis Google Sheet + AppSheet untuk monitoring gudang"
        }
    },
    {
        title: "Simple Attendance Application",
        description: "A simple attendance tracking application built with AppSheet.",
        image: "./images/appsheet absensi.jpg",
        technologies: ["AppSheet", "Google Sheet"],
        demoLink: "#",
        githubLink: "#",
        status: "Completed",
        lang_keys: {
            title_en: "Simple Attendance Application",
            description_en: "A simple attendance tracking application built with AppSheet.",
            title_id: "Aplikasi Absensi Sederhana",
            description_id: "Aplikasi sederhana untuk melacak kehadiran peserta kelas yang dibangun dengan Apssheet dan google sheet."
        }
    },
    {
        title: "Rental Companion",
        description: "Web application for renting companions with various services such as chat, phone calls, video calls, and offline dates.",
        image: "./images/Kosong.png",
        technologies: [
            "React.js", "Vite", "Tailwind CSS", "React Router", "Axios",
            "Python", "Flask", "SQLAlchemy", "JWT", "MySQL"
        ],
        demoLink: "#",
        githubLink: "#",
        status: "Development",
        lang_keys: {
            title_en: "Rental Companion",
            description_en: "Web application for renting companions with various services such as chat, phone calls, video calls, and offline dates.",
            title_id: "Rental Companion",
            description_id: "Aplikasi web untuk menyewa pendamping dengan berbagai layanan seperti chat, panggilan telepon, panggilan video, dan kencan offline."
        }
    },
    {
        title: "UMKM Bisnis Lite",
        description: "Aplikasi web sederhana untuk pencatatan keuangan, stok, pelanggan, hutang/piutang, dan analitik bisnis UMKM. 100% berjalan di browser (frontend only, LocalStorage), mudah digunakan, dan cocok untuk demo, edukasi, atau operasional UMKM skala kecil.",
        image: "./images/UMKM Bisnis Lite.png",
        technologies: ["HTML/CSS", "JavaScript", "LocalStorage"],
        demoLink: "https://rudy-yu.github.io/UMKM-Bisnis-Lite",
        githubLink: "https://github.com/Rudy-Yu/UMKM-Bisnis-Lite",
        status: "Completed",
        lang_keys: {
            title_en: "UMKM Bisnis Lite",
            description_en: "A simple web app for MSME business management: finance, stock, customers, receivables/payables, and analytics. 100% browser-based (frontend only, LocalStorage), easy to use, perfect for demo, education, or small-scale MSME operations.",
            title_id: "UMKM Bisnis Lite",
            description_id: "Solusi Mudah Manajemen Bisnis UMKM. Aplikasi web sederhana untuk pencatatan keuangan, stok, pelanggan, hutang/piutang, dan analitik bisnis UMKM. 100% berjalan di browser (frontend only, LocalStorage), mudah digunakan, dan cocok untuk demo, edukasi, atau operasional UMKM skala kecil."
        }
    },
    {
        title: "Online Exam App",
        description: "Aplikasi ujian online berbasis web dengan fitur auto-save, timer sinkronisasi server, dan panel admin.",
        image: "./images/Kosong.png",
        technologies: ["React.js", "Go", "PostgreSQL", "Redis", "JWT"],
        demoLink: "#",
        githubLink: "https://github.com/Rudy-Yu/Exam",
        status: "Development",
        lang_keys: {
            title_en: "Online Exam App",
            description_en: "A web-based online exam application with auto-save, server-synced timer, and admin panel.",
            title_id: "Aplikasi Ujian Online",
            description_id: "Aplikasi ujian online berbasis web dengan fitur auto-save, timer sinkronisasi server, dan panel admin."
        }
    }
];

// Skills data
const skillData = {
    frontend: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "Golang", level: 65 },
        { name: "JWT Auth", level: 75 },
        { name: "REST API", level: 80 },
        { name: "PHP", level: 70 }
    ],
    database: [
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Supabase", level: 60 },
        { name: "PostgreSQL", level: 60 },
        { name: "MySQL", level: 60 }
    ],
    tools: [
        { name: "AppSheet", level: 90 },
        { name: "Python", level: 75 },
        { name: "Excel VBA", level: 80 },
        { name: "Joomla", level: 70 },
        { name: "WordPress", level: 75 },
        { name: "Blogger", level: 65 }
    ]
};

// Translations object
const translations = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        hero_greeting: "Hi, I'm Rudy",
        hero_role: "Fullstack Developer | No-Code Builder | Creative Technologist",
        hero_subtitle: "Building digital solutions with passion and precision",
        hero_location_text: "📍 Indonesia (Remote-friendly)",
        hero_language_text: "🌐 Indonesia, English (basic/intermediate)",
        hero_cta_button: "View My Work",
        about_title: "About Me",
        about_paragraph_1: "I'm a web developer passionate about building complete solutions—from concept to deployment. While new to freelancing, I bring hands-on experience creating AppSheet automation tools, React-based web apps, and fullstack systems using Node.js and Firebase. These started as personal projects, but are now refined with client-ready quality.",
        about_paragraph_2: "What sets me apart is my approach: I apply professional standards to every project, focusing on practical problem-solving and writing clean, maintainable code. I thrive on crafting tools that solve real-world needs—for both users and businesses. Let's collaborate to bring your vision to life with a solution that delivers real value. Ready to discuss your project? Let's turn your ideas into reality.",
        skills_title: "Core Skills",
        skill_category_frontend: "Frontend",
        skill_category_backend: "Backend",
        skill_category_database: "Database",
        skill_category_tools: "Tools & Automation",
        projects_title: "My Projects",
        contact_title: "Get in Touch",
        contact_description: "I'm open to freelance remote projects and collaborations. Let's create something amazing together!",
        contact_email: "rudyyu1984@gmail.com",
        contact_location: "Indonesia (Remote-friendly)",
        form_name_placeholder: "Your Name",
        form_email_placeholder: "Your Email",
        form_whatsapp_placeholder: "+62 812-3456-7890",
        form_message_placeholder: "Your Message",
        form_submit_button: "Send Message",
        project_demo: "Live Demo",
        project_github: "GitHub",
        status_development: "Development",
        status_completed: "Completed",
        status_coming_soon: "Coming Soon",
        status_live: "Live",
        status_redesign: "Redesign",
        status_maintenance: "Maintenance",
        footer_text: "© 2024 Rudy Yu. All Rights Reserved."
    },
    id: {
        home: "Beranda",
        about: "Tentang",
        projects: "Proyek",
        contact: "Kontak",
        hero_greeting: "Halo, saya Rudy",
        hero_role: "Pengembang Fullstack | Pembangun No-Code | Teknolog Kreatif",
        hero_subtitle: "Membangun solusi digital dengan semangat dan presisi",
        hero_location_text: "📍 Indonesia (Bersedia Remote)",
        hero_language_text: "🌐 Indonesia, Inggris (dasar/menengah)",
        hero_cta_button: "Lihat Karya Saya",
        about_title: "Tentang Saya",
        about_paragraph_1: "Saya adalah seorang pengembang web yang antusias dalam membangun solusi lengkap—mulai dari konsep hingga siap diluncurkan. Meskipun saya baru memulai perjalanan sebagai freelancer, saya memiliki pengalaman langsung dalam membuat alat otomatisasi menggunakan AppSheet, aplikasi web berbasis React, serta sistem fullstack dengan Node.js dan Firebase. Semua berawal dari proyek pribadi, namun kini telah saya sempurnakan dengan standar kualitas yang siap untuk klien.",
        about_paragraph_2: "Yang membedakan saya adalah pendekatan kerja saya: saya menerapkan standar profesional dalam setiap proyek, fokus pada pemecahan masalah yang praktis, serta menulis kode yang bersih dan mudah dirawat. Saya menikmati proses menciptakan alat yang benar-benar berguna—baik untuk pengguna maupun kebutuhan bisnis. Mari bekerja sama untuk mewujudkan visi Anda menjadi solusi digital yang benar-benar bernilai. Siap mendiskusikan proyek Anda? Ayo wujudkan ide Anda menjadi kenyataan.",
        skills_title: "Keahlian Inti",
        skill_category_frontend: "Frontend",
        skill_category_backend: "Backend",
        skill_category_database: "Database",
        skill_category_tools: "Alat & Otomatisasi",
        projects_title: "Proyek Saya",
        contact_title: "Hubungi Saya",
        contact_description: "Saya terbuka untuk proyek remote freelance dan kolaborasi. Mari kita ciptakan sesuatu yang luar biasa bersama!",
        contact_email: "rudyyu1984@gmail.com",
        contact_location: "Indonesia (Bersedia Remote)",
        form_name_placeholder: "Nama Anda",
        form_email_placeholder: "Email Anda",
        form_whatsapp_placeholder: "+62 812-3456-7890",
        form_message_placeholder: "Pesan Anda",
        form_submit_button: "Kirim Pesan",
        project_demo: "Demo Langsung",
        project_github: "GitHub",
        status_development: "Dalam Pengembangan",
        status_completed: "Selesai",
        status_coming_soon: "Segera Hadir",
        status_live: "Aktif",
        status_redesign: "Desain Ulang",
        status_maintenance: "Pemeliharaan",
        footer_text: "© 2024 Rudy Yu. Semua Hak Dilindungi Undang-Undang."
    }
};

let currentLanguage = localStorage.getItem('lang') || 'id'; // Default to Indonesian
let currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark

// Function to set the language
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang; // Set lang attribute on <html>
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-lang-placeholder-key]').forEach(input => {
        const key = input.getAttribute('data-lang-placeholder-key');
        if (translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });
    
    // Update active language button state
    document.querySelectorAll('.language-toggle-button').forEach(button => {
        if (button.getAttribute('data-lang-code') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Re-render projects to update status and button text
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
        projectGrid.innerHTML = ''; // Clear existing projects
        loadProjects();
    }
}

// Function to set the theme
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    } else {
        body.classList.remove('dark-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }
}

// Load skills
function loadSkills() {
    const frontendSkillsGrid = document.getElementById('frontend-skills');
    const backendSkillsGrid = document.getElementById('backend-skills');
    const databaseSkillsGrid = document.getElementById('database-skills');
    const toolsSkillsGrid = document.getElementById('tools-skills');

    if (frontendSkillsGrid) {
        skillData.frontend.forEach(skill => {
            frontendSkillsGrid.appendChild(createSkillItem(skill));
        });
    }
    if (backendSkillsGrid) {
        skillData.backend.forEach(skill => {
            backendSkillsGrid.appendChild(createSkillItem(skill));
        });
    }
    if (databaseSkillsGrid) {
        skillData.database.forEach(skill => {
            databaseSkillsGrid.appendChild(createSkillItem(skill));
        });
    }
    if (toolsSkillsGrid) {
        skillData.tools.forEach(skill => {
            toolsSkillsGrid.appendChild(createSkillItem(skill));
        });
    }
}

// Create skill item element
function createSkillItem(skill) {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="skill-percentage">${skill.level}%</div>
        <div class="skill-bar-container">
            <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
        </div>
    `;
    return skillItem;
}

// Load projects
function loadProjects() {
    console.log('loadProjects function called.');
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) {
        console.error('projectGrid element not found!');
        return;
    }
    console.log('projectGrid element found:', projectGrid);

    try {
        projectData.forEach(project => {
            const projectCard = createProjectCard(project);
            projectGrid.appendChild(projectCard);
            console.log('Project card appended:', project.title);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        projectGrid.innerHTML = '<p class="error-message">Failed to load projects. Please try again later.</p>';
    }
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const technologies = project.technologies ? 
        project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('') : '';
    
    const statusKey = `status_${project.status.toLowerCase().replace(/\s/g, '_')}`;
    const translatedStatus = translations[currentLanguage][statusKey] || project.status;

    const translatedTitle = project.lang_keys[`title_${currentLanguage}`] || project.title;
    const translatedDescription = project.lang_keys[`description_${currentLanguage}`] || project.description;

    // Ensure image path is correct
    const imagePath = project.image.startsWith('./') ? project.image : `./${project.image}`;

    // Base64 encoded placeholder image (1x1 transparent pixel)
    const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

    card.innerHTML = `
        <div class="project-image-container">
            <img src="${imagePath}" 
                 alt="${translatedTitle}" 
                 class="project-image" 
                 onerror="this.onerror=null; this.src='${placeholderImage}'; this.style.backgroundColor='#f0f0f0'; this.style.padding='20px';">
        </div>
        <div class="project-info">
            <div class="project-header">
                <h3>${translatedTitle}</h3>
                <span class="status status-${project.status.toLowerCase().replace(/\s/g, '-')}">${translatedStatus}</span>
            </div>
            <p>${translatedDescription}</p>
            ${technologies ? `<div class="tech-stack">${technologies}</div>` : ''}
            <div class="project-links">
                ${project.demoLink && project.demoLink !== "" ? `
                    <a href="${project.demoLink}" target="_blank" class="demo-link">
                        <i class="fas fa-external-link-alt"></i> ${translations[currentLanguage].project_demo}
                    </a>
                ` : ''}
                ${project.githubLink && project.githubLink !== "" ? `
                    <a href="${project.githubLink}" target="_blank" class="github-link">
                        <i class="fab fa-github"></i> ${translations[currentLanguage].project_github}
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Loading Screen
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
});

// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced Mobile Menu
function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            menuButton.classList.toggle('active');
            
            // Update aria-expanded
            const isExpanded = navLinks.classList.contains('show');
            menuButton.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuButton.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('show');
                menuButton.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                menuButton.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

// Enhanced Scroll Animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.about, .projects, .skill-category, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation
                if (entry.target.classList.contains('project-card')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const menuButton = document.querySelector('.mobile-menu-button');
        if (navLinks && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            menuButton.classList.remove('active');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    }
});

// Back to top button functionality
function setupBackToTop() {
    console.log('Setting up back to top button...');
    const backToTopButton = document.getElementById('back-to-top');
    
    if (!backToTopButton) {
        console.error('Back to top button not found!');
        return;
    }
    console.log('Back to top button found:', backToTopButton);

    // Show button when page is scrolled down
    window.addEventListener('scroll', () => {
        console.log('Scroll position:', window.scrollY);
        if (window.scrollY > 100) { // Reduced threshold for earlier appearance
            console.log('Adding visible class');
            backToTopButton.classList.add('visible');
        } else {
            console.log('Removing visible class');
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        console.log('Back to top button clicked');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show button immediately if page is already scrolled
    if (window.scrollY > 100) {
        console.log('Page already scrolled, showing button');
        backToTopButton.classList.add('visible');
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    // Initialize language and theme from localStorage or defaults
    setTheme(currentTheme);
    setLanguage(currentLanguage);

    loadProjects();
    loadSkills();
    handleScrollAnimations();
    setupMobileMenu();
    setupBackToTop();
    console.log('Initialization complete');

    // Language toggle event listeners
    document.getElementById('language-toggle-id').addEventListener('click', () => setLanguage('id'));
    document.getElementById('language-toggle-en').addEventListener('click', () => setLanguage('en'));

    // Theme toggle event listener
    document.getElementById('theme-toggle').addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}); 