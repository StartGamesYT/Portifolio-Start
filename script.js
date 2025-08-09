document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('is-active');
        menuToggle.classList.toggle('is-active');
    });

    // Fecha o menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-active');
            menuToggle.classList.remove('is-active');
        });
    });


    // --- LÓGICA DO HEADER AO ROLAR ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- LÓGICA DO INDICADOR DE SEÇÃO ATIVA ---
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // O 150 é um offset, ajuste se necessário
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });


    // --- LÓGICA DA ANIMAÇÃO FADE-IN (EXISTENTE) ---
    const elementsToFadeIn = document.querySelectorAll('section > .container, .portfolio-card, .skill-item');
    elementsToFadeIn.forEach(el => el.classList.add('fade-in'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    elementsToFadeIn.forEach(element => observer.observe(element));

});