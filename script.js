const githubLinks = {
    profile: "https://github.com/thisisraif",
    legalPdf: "https://github.com/thisisraif/Legal-PDF-Analyzer",
    phishing: "https://github.com/thisisraif/Phishing_Detection",
    phishingLive: "https://recorded-quotes-creek-completely.trycloudflare.com",
    phoneFinder: "https://github.com/thisisraif/phone-finder",
    spotify: "https://github.com/thisisraif/spotify-clone1",
    phoneFinderLive: "https://thisisraif.github.io/phone-finder"
};

const content = {
    en: {
        pageTitle: "Mohammad Raif | AI Portfolio",
        nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            research: "Research",
            projects: "Projects",
            contact: "Contact",
            resume: "Resume"
        },
        hero: {
            eyebrow: "AI • Search • Responsible Systems",
            title: "I build AI products that feel useful in the real world.",
            copy: "I am Mohammad Raif, a final-year Computer Science student focused on applied AI, information retrieval, data science, and full-stack product building.",
            primary: "See projects",
            secondary: "Download CV",
            status: "Currently focused on applied AI and intelligent search experiences",
            panelTitle: "What I care about",
            panelCopy: "I enjoy taking complex systems like semantic search, legal document analysis, object detection, or recommendation pipelines and making them feel clear, fast, and useful to real users.",
            facts: [
                { value: "3", label: "Internships completed" },
                { value: "4", label: "Public project repos" },
                { value: "2026", label: "Expected graduation" },
                { value: "1", label: "AI summit presentation" }
            ]
        },
        about: {
            kicker: "About me",
            title: "Building thoughtful AI, not just flashy demos",
            text1: "I am a final-year B.Tech Computer Science student at Jamia Hamdard with a strong interest in Artificial Intelligence, Information Retrieval, Data Science, and Responsible AI.",
            text2: "What excites me most is building systems that turn messy, real-world information into something people can actually explore and trust. That is why I enjoy working on semantic search, document understanding, intelligent recommendation, computer vision, and clean user-facing interfaces.",
            stats: [
                {
                    value: "Appolo Computers",
                    label: "AI internship where I worked on the Legal PDF Analyzer and an Indian Navy object detection project."
                },
                {
                    value: "India AI Impact Summit 2026",
                    label: "The Legal PDF Analyzer was presented here as an applied AI project."
                },
                {
                    value: "Responsible AI",
                    label: "A long-term interest covering fairness, safety, governance, and trustworthy deployment."
                }
            ]
        },
        skills: {
            kicker: "Technical toolkit",
            title: "Skills that support both the model and the product",
            groups: [
                {
                    title: "Programming",
                    items: ["Python", "SQL", "JavaScript", "C++", "HTML5", "CSS3"]
                },
                {
                    title: "AI and data",
                    items: ["Pandas", "NumPy", "Scikit-learn", "Data preprocessing", "Feature engineering", "Model evaluation"]
                },
                {
                    title: "Backend and search",
                    items: ["FastAPI", "REST APIs", "Elasticsearch", "Embedding-based search", "Semantic retrieval", "Information retrieval"]
                },
                {
                    title: "Databases and tools",
                    items: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Excel", "Jupyter Notebook"]
                }
            ]
        },
        experience: {
            kicker: "Experience",
            title: "Hands-on work across AI, backend logic, and user experience",
            items: [
                {
                    role: "AI Intern",
                    company: "Appolo Computers Pvt. Ltd., New Delhi",
                    period: "Dec 2025 - Mar 2026",
                    points: [
                        "Worked on two applied AI products: a Legal PDF Analyzer and a YOLO-based object detection system built around an Indian Navy use case.",
                        "Contributed to system architecture, data flow, retrieval, evaluation, and interface integration so that model outputs were easier to use in practice.",
                        "Focused on making AI pipelines faster, more structured, and more deployment-friendly rather than treating them as isolated experiments."
                    ]
                },
                {
                    role: "Full Stack Developer Intern",
                    company: "Cosedge",
                    period: "Aug 2025 - Oct 2025",
                    points: [
                        "Built responsive UI components with attention to frontend usability, smooth interaction flow, and clean API integration.",
                        "Worked across the product surface instead of staying limited to one layer, which improved both implementation speed and consistency."
                    ]
                },
                {
                    role: "Full Stack Intern",
                    company: "Eduexcel Global",
                    period: "Feb 2025 - Jul 2025",
                    points: [
                        "Helped build a responsive platform for international students to explore courses and connect through integrated support features.",
                        "Worked collaboratively on day-to-day development tasks and delivered features with a strong focus on reliability and finishing details."
                    ]
                }
            ]
        },
        research: {
            kicker: "Research",
            title: "Topics I like thinking about deeply",
            items: [
                {
                    title: "Bias in recommendation systems on X and YouTube",
                    copy: "I studied how ranking systems can reinforce popularity, limit diversity, and shape what users repeatedly see over time.",
                    bullets: [
                        "Looked at popularity bias, exposure bias, and preference reinforcement in large content platforms.",
                        "Focused on how engagement-driven ranking affects creator visibility, information diversity, and user discovery."
                    ]
                },
                {
                    title: "Ethical, safe, and responsible AI",
                    copy: "I am especially interested in how AI systems should be governed, evaluated, and deployed responsibly in the real world.",
                    bullets: [
                        "Presented work on AI lifecycle governance for real-world deployment in a national seminar.",
                        "Interested in trustworthy AI, safety, transparency, accountability, and deployment ethics."
                    ]
                }
            ]
        },
        projects: {
            kicker: "Featured work",
            title: "Projects explained simply, with the code linked clearly",
            intro: "I like building projects that solve a real problem, explain themselves well, and leave room for future growth.",
            profileLink: "Explore more on GitHub",
            githubLabel: "GitHub",
            liveLabel: "Live demo",
            items: [
                {
                    title: "Legal PDF Analyzer",
                    description: "A legal-tech platform that uploads court judgments, extracts and cleans the text, finds legal citations, and helps users explore how cases relate to each other through semantic search, summaries, and graph-style views.",
                    tags: ["Python", "NLP", "Elasticsearch", "Search", "Full stack"],
                    github: githubLinks.legalPdf
                },
                {
                    title: "Phishing URL Detection System",
                    description: "A machine learning project that checks whether a URL looks safe or suspicious by extracting patterns from the link and sending the prediction through a FastAPI-based backend.",
                    tags: ["Python", "FastAPI", "Machine learning", "Cybersecurity"],
                    github: githubLinks.phishing,
                    live: githubLinks.phishingLive
                },
                {
                    title: "Phone Recommendation Tool",
                    description: "A recommendation web app that reads smartphone data, matches it to user needs like budget and features, and makes the buying decision easier with simple filters and suggestions.",
                    tags: ["FastAPI", "JavaScript", "Excel data", "Recommendation"],
                    github: githubLinks.phoneFinder,
                    live: githubLinks.phoneFinderLive
                },
                {
                    title: "Spotify Clone",
                    description: "A responsive music player interface built with vanilla frontend tools, designed to recreate the feel of a familiar listening experience with dynamic playback behavior.",
                    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
                    github: githubLinks.spotify
                }
            ]
        },
        education: {
            kicker: "Education",
            title: "Academic foundation",
            degree: "B.Tech in Computer Science Engineering",
            school: "Jamia Hamdard, New Delhi",
            meta: ["Final year", "Expected 2026"],
            copy: "My academic journey has been shaped by a strong interest in intelligent systems, data-driven problem solving, and building technology that can be trusted in real use."
        },
        contact: {
            kicker: "Let us connect",
            title: "If you are building in AI, search, data, or full-stack product engineering, I would love to talk.",
            copy: "I am always interested in strong teams, meaningful products, and work that combines technical depth with real-world usefulness.",
            emailBtn: "Email me",
            linkedinBtn: "Connect on LinkedIn"
        },
        footer: {
            text: "© 2026 Mohammad Raif. Built with clarity, curiosity, and a real love for applied AI.",
            back: "Back to top"
        }
    },
    de: {
        pageTitle: "Mohammad Raif | KI-Portfolio",
        nav: {
            about: "Über mich",
            skills: "Fähigkeiten",
            experience: "Erfahrung",
            research: "Forschung",
            projects: "Projekte",
            contact: "Kontakt",
            resume: "Lebenslauf"
        },
        hero: {
            eyebrow: "KI • Suche • Verantwortungsvolle Systeme",
            title: "Ich entwickle KI-Produkte, die sich in der echten Welt wirklich nützlich anfühlen.",
            copy: "Ich bin Mohammad Raif, ein B.Tech-Student im letzten Studienjahr mit Fokus auf angewandte KI, Information Retrieval, Data Science und Full-Stack-Produktentwicklung.",
            primary: "Projekte ansehen",
            secondary: "Lebenslauf herunterladen",
            status: "Derzeit konzentriere ich mich auf angewandte KI und intelligente Sucherlebnisse",
            panelTitle: "Was mir wichtig ist",
            panelCopy: "Mich begeistert es, komplexe Systeme wie semantische Suche, juristische Dokumentenanalyse, Objekterkennung oder Empfehlungspipelines so zu gestalten, dass sie klar, schnell und für echte Nutzer hilfreich sind.",
            facts: [
                { value: "3", label: "Abgeschlossene Praktika" },
                { value: "4", label: "Öffentliche Projekt-Repositories" },
                { value: "2026", label: "Voraussichtlicher Abschluss" },
                { value: "1", label: "Präsentation auf einem KI-Summit" }
            ]
        },
        about: {
            kicker: "Über mich",
            title: "Durchdachte KI statt nur beeindruckender Demos",
            text1: "Ich bin B.Tech-Student im letzten Jahr an der Jamia Hamdard und interessiere mich besonders für Künstliche Intelligenz, Information Retrieval, Data Science und Responsible AI.",
            text2: "Am meisten begeistert mich, unübersichtliche reale Informationen in Systeme zu verwandeln, die Menschen wirklich verstehen und sinnvoll nutzen können. Deshalb arbeite ich gern an semantischer Suche, Dokumentenverständnis, intelligenten Empfehlungssystemen, Computer Vision und klaren Benutzeroberflächen.",
            stats: [
                {
                    value: "Appolo Computers",
                    label: "KI-Praktikum, in dem ich am Legal PDF Analyzer und an einem Objekterkennungsprojekt für einen Use Case der indischen Marine gearbeitet habe."
                },
                {
                    value: "India AI Impact Summit 2026",
                    label: "Dort wurde der Legal PDF Analyzer als angewandtes KI-Projekt vorgestellt."
                },
                {
                    value: "Responsible AI",
                    label: "Langfristiges Interesse an Fairness, Sicherheit, Governance und vertrauenswürdiger Einführung von KI."
                }
            ]
        },
        skills: {
            kicker: "Technisches Werkzeugset",
            title: "Fähigkeiten für Modell, Datenpipeline und Produkt",
            groups: [
                {
                    title: "Programmierung",
                    items: ["Python", "SQL", "JavaScript", "C++", "HTML5", "CSS3"]
                },
                {
                    title: "KI und Daten",
                    items: ["Pandas", "NumPy", "Scikit-learn", "Datenvorverarbeitung", "Feature Engineering", "Modellevaluierung"]
                },
                {
                    title: "Backend und Suche",
                    items: ["FastAPI", "REST APIs", "Elasticsearch", "Embedding-basierte Suche", "Semantische Suche", "Information Retrieval"]
                },
                {
                    title: "Datenbanken und Tools",
                    items: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Excel", "Jupyter Notebook"]
                }
            ]
        },
        experience: {
            kicker: "Erfahrung",
            title: "Praktische Arbeit an KI, Backend-Logik und Nutzererlebnis",
            items: [
                {
                    role: "KI-Praktikant",
                    company: "Appolo Computers Pvt. Ltd., Neu-Delhi",
                    period: "Dez 2025 - Mär 2026",
                    points: [
                        "Arbeitete an zwei angewandten KI-Produkten: einem Legal PDF Analyzer und einem YOLO-basierten Objekterkennungssystem für einen Use Case der indischen Marine.",
                        "Trug zu Systemarchitektur, Datenfluss, Retrieval, Evaluierung und Interface-Integration bei, damit Modellausgaben in der Praxis besser nutzbar werden.",
                        "Fokussierte mich darauf, KI-Pipelines schneller, strukturierter und einsatznäher zu machen statt sie nur als Experimente zu behandeln."
                    ]
                },
                {
                    role: "Full Stack Developer Intern",
                    company: "Cosedge",
                    period: "Aug 2025 - Okt 2025",
                    points: [
                        "Entwickelte responsive UI-Komponenten mit starkem Fokus auf Nutzbarkeit, saubere Interaktionen und gute API-Integration.",
                        "Arbeitete über mehrere Produktbereiche hinweg und verbesserte so sowohl Umsetzungsgeschwindigkeit als auch Konsistenz."
                    ]
                },
                {
                    role: "Full Stack Intern",
                    company: "Eduexcel Global",
                    period: "Feb 2025 - Jul 2025",
                    points: [
                        "Half beim Aufbau einer responsiven Plattform für internationale Studierende, um Studiengänge zu entdecken und über integrierte Support-Funktionen in Kontakt zu treten.",
                        "Arbeitete kollaborativ an Entwicklungsaufgaben und lieferte Features mit Fokus auf Zuverlässigkeit und saubere Ausführung."
                    ]
                }
            ]
        },
        research: {
            kicker: "Forschung",
            title: "Themen, über die ich gern tiefer nachdenke",
            items: [
                {
                    title: "Bias in Empfehlungssystemen auf X und YouTube",
                    copy: "Ich habe untersucht, wie Ranking-Systeme Popularität verstärken, Vielfalt einschränken und langfristig beeinflussen, was Nutzer immer wieder sehen.",
                    bullets: [
                        "Analysierte Popularitätsbias, Exposure Bias und Präferenzverstärkung auf großen Content-Plattformen.",
                        "Untersuchte, wie engagementgetriebene Rankings die Sichtbarkeit von Creators, Informationsvielfalt und Content-Discovery beeinflussen."
                    ]
                },
                {
                    title: "Ethische, sichere und verantwortungsvolle KI",
                    copy: "Ich interessiere mich besonders dafür, wie KI-Systeme verantwortungsvoll gesteuert, bewertet und in der realen Welt eingesetzt werden sollten.",
                    bullets: [
                        "Präsentierte Arbeit zur KI-Lifecycle-Governance für reale Deployment-Szenarien auf einem nationalen Seminar.",
                        "Interesse an vertrauenswürdiger KI, Sicherheit, Transparenz, Verantwortlichkeit und Deployment-Ethik."
                    ]
                }
            ]
        },
        projects: {
            kicker: "Ausgewählte Arbeiten",
            title: "Projekte einfach erklärt und mit klaren GitHub-Links",
            intro: "Ich mag Projekte, die ein echtes Problem lösen, sich gut erklären lassen und Raum für Weiterentwicklung haben.",
            profileLink: "Mehr auf GitHub ansehen",
            githubLabel: "GitHub",
            liveLabel: "Live-Demo",
            items: [
                {
                    title: "Legal PDF Analyzer",
                    description: "Eine Legal-Tech-Plattform, die Gerichtsentscheidungen hochlädt, den Text extrahiert und bereinigt, juristische Zitate erkennt und Beziehungen zwischen Fällen über semantische Suche, Zusammenfassungen und Graph-Ansichten sichtbar macht.",
                    tags: ["Python", "NLP", "Elasticsearch", "Suche", "Full Stack"],
                    github: githubLinks.legalPdf
                },
                {
                    title: "Phishing URL Detection System",
                    description: "Ein Machine-Learning-Projekt, das prüft, ob eine URL vertrauenswürdig oder verdächtig wirkt, indem Muster aus dem Link extrahiert und über ein FastAPI-Backend bewertet werden.",
                    tags: ["Python", "FastAPI", "Machine Learning", "Cybersecurity"],
                    github: githubLinks.phishing,
                    live: githubLinks.phishingLive
                },
                {
                    title: "Phone Recommendation Tool",
                    description: "Eine Web-App für Produktempfehlungen, die Smartphone-Daten auswertet, Nutzerwünsche wie Budget und Funktionen berücksichtigt und die Kaufentscheidung einfacher macht.",
                    tags: ["FastAPI", "JavaScript", "Excel-Daten", "Empfehlungssystem"],
                    github: githubLinks.phoneFinder,
                    live: githubLinks.phoneFinderLive
                },
                {
                    title: "Spotify Clone",
                    description: "Eine responsive Musikplayer-Oberfläche mit klassischen Frontend-Technologien, die ein vertrautes Hörerlebnis mit dynamischem Playback nachbildet.",
                    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
                    github: githubLinks.spotify
                }
            ]
        },
        education: {
            kicker: "Ausbildung",
            title: "Akademische Grundlage",
            degree: "B.Tech in Computer Science Engineering",
            school: "Jamia Hamdard, Neu-Delhi",
            meta: ["Letztes Studienjahr", "Abschluss erwartet 2026"],
            copy: "Mein Studium wurde stark durch mein Interesse an intelligenten Systemen, datengetriebener Problemlösung und Technologien geprägt, denen man im realen Einsatz vertrauen kann."
        },
        contact: {
            kicker: "Kontakt",
            title: "Wenn Sie an KI, Suche, Daten oder Full-Stack-Produktentwicklung arbeiten, würde ich mich sehr über ein Gespräch freuen.",
            copy: "Ich interessiere mich immer für starke Teams, sinnvolle Produkte und Arbeit, die technische Tiefe mit echtem Nutzen verbindet.",
            emailBtn: "E-Mail schreiben",
            linkedinBtn: "Auf LinkedIn vernetzen"
        },
        footer: {
            text: "© 2026 Mohammad Raif. Entwickelt mit Klarheit, Neugier und echter Begeisterung für angewandte KI.",
            back: "Nach oben"
        }
    }
};

const navbar = document.getElementById("app-navbar");
const themeToggle = document.getElementById("theme-toggle");
const langButtons = document.querySelectorAll(".lang-btn");
const currentYear = new Date().getFullYear();

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function setSelectorText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
}

function renderFacts(items) {
    const factsRoot = document.getElementById("hero-facts");
    factsRoot.innerHTML = items.map((item) => `
        <div class="fact-card">
            <span class="fact-value">${item.value}</span>
            <span class="fact-label">${item.label}</span>
        </div>
    `).join("");
}

function renderStats(items) {
    const statsRoot = document.getElementById("about-stats");
    statsRoot.innerHTML = items.map((item) => `
        <div class="stat-card reveal">
            <span class="stat-value">${item.value}</span>
            <span class="stat-label">${item.label}</span>
        </div>
    `).join("");
}

function renderSkills(groups) {
    const skillsRoot = document.getElementById("skills-grid");
    skillsRoot.innerHTML = groups.map((group) => `
        <article class="skill-card reveal">
            <h3>${group.title}</h3>
            <div class="chip-wrap">
                ${group.items.map((item) => `<span class="skill-chip">${item}</span>`).join("")}
            </div>
        </article>
    `).join("");
}

function renderExperience(items) {
    const experienceRoot = document.getElementById("experience-list");
    experienceRoot.innerHTML = items.map((item) => `
        <article class="timeline-card reveal">
            <div class="timeline-meta">
                <div>
                    <h3 class="timeline-role">${item.role}</h3>
                    <div class="timeline-company">${item.company}</div>
                </div>
                <div class="timeline-period">${item.period}</div>
            </div>
            <ul class="timeline-points">
                ${item.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
        </article>
    `).join("");
}

function renderResearch(items) {
    const researchRoot = document.getElementById("research-grid");
    researchRoot.innerHTML = items.map((item) => `
        <article class="research-card reveal">
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
            <ul class="research-list">
                ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
        </article>
    `).join("");
}

function renderProjects(section) {
    const projectsRoot = document.getElementById("projects-grid");
    projectsRoot.innerHTML = section.items.map((item) => `
        <article class="project-card reveal">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="project-tags">
                ${item.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
            </div>
            <div class="project-actions">
                <a class="project-link primary" href="${item.github}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github"></i>
                    ${section.githubLabel}
                </a>
                ${item.live ? `
                    <a class="project-link" href="${item.live}" target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        ${section.liveLabel}
                    </a>
                ` : ""}
            </div>
        </article>
    `).join("");
}

function renderEducation(section) {
    const educationRoot = document.getElementById("education-card");
    educationRoot.innerHTML = `
        <article class="education-card">
            <h3>${section.degree}</h3>
            <p>${section.school}</p>
            <div class="education-meta">
                ${section.meta.map((item) => `<span>${item}</span>`).join("")}
            </div>
            <p class="mt-3 mb-0">${section.copy}</p>
        </article>
    `;
}

function updateFooterText(text) {
    setText("footer-text", text.replace("2026", String(currentYear > 2026 ? currentYear : 2026)));
}

function renderLanguage(lang) {
    const data = content[lang];

    document.documentElement.lang = lang;
    document.title = data.pageTitle;

    setText("nav-about", data.nav.about);
    setText("nav-skills", data.nav.skills);
    setText("nav-experience", data.nav.experience);
    setText("nav-research", data.nav.research);
    setText("nav-projects", data.nav.projects);
    setText("nav-contact", data.nav.contact);
    setText("hero-eyebrow", data.hero.eyebrow);
    setText("hero-title", data.hero.title);
    setText("hero-copy", data.hero.copy);
    setText("hero-primary", data.hero.primary);
    setText("hero-secondary", data.hero.secondary);
    setText("hero-status", data.hero.status);
    setText("hero-panel-title", data.hero.panelTitle);
    setText("hero-panel-copy", data.hero.panelCopy);

    setText("about-kicker", data.about.kicker);
    setText("about-title", data.about.title);
    setText("about-text-1", data.about.text1);
    setText("about-text-2", data.about.text2);

    setText("skills-kicker", data.skills.kicker);
    setText("skills-title", data.skills.title);
    setText("experience-kicker", data.experience.kicker);
    setText("experience-title", data.experience.title);
    setText("research-kicker", data.research.kicker);
    setText("research-title", data.research.title);
    setText("projects-kicker", data.projects.kicker);
    setText("projects-title", data.projects.title);
    setText("projects-intro", data.projects.intro);
    setText("education-kicker", data.education.kicker);
    setText("education-title", data.education.title);
    setText("contact-kicker", data.contact.kicker);
    setText("contact-title", data.contact.title);
    setText("contact-copy", data.contact.copy);
    setText("footer-back", data.footer.back);

    const navResumeLabel = document.querySelector("#nav-resume span");
    if (navResumeLabel) {
        navResumeLabel.textContent = data.nav.resume;
    }

    setSelectorText("#projects-profile-link span", data.projects.profileLink);
    setSelectorText("#contact-email-btn span", data.contact.emailBtn);
    setSelectorText("#contact-linkedin-btn span", data.contact.linkedinBtn);

    renderFacts(data.hero.facts);
    renderStats(data.about.stats);
    renderSkills(data.skills.groups);
    renderExperience(data.experience.items);
    renderResearch(data.research.items);
    renderProjects(data.projects);
    renderEducation(data.education);
    updateFooterText(data.footer.text);

    localStorage.setItem("portfolio-language", lang);
    langButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    setupRevealAnimations();
}

function applyTheme(theme) {
    document.body.classList.toggle("theme-dark", theme === "dark");
    themeToggle.innerHTML = theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("portfolio-theme", theme);
}

function setupRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealElements.forEach((element) => {
        element.classList.remove("is-visible");
        observer.observe(element);
    });
}

function setupSmoothScroll() {
    const collapseRoot = document.getElementById("navbarNav");
    document.querySelectorAll(".nav-jump").forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();
            const navOffset = navbar.offsetHeight + 16;
            const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
            window.scrollTo({ top, behavior: "smooth" });

            if (collapseRoot.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(collapseRoot).hide();
            }
        });
    });
}

function setupNavbarState() {
    const updateNavbar = () => {
        navbar.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => renderLanguage(button.dataset.lang));
});

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(nextTheme);
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    const savedLanguage = localStorage.getItem("portfolio-language") || "en";

    applyTheme(savedTheme);
    renderLanguage(savedLanguage);
    setupSmoothScroll();
    setupNavbarState();
});
