document.addEventListener('DOMContentLoaded', function() {
    // Variáveis
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const backToTop = document.querySelector('.back-to-top');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const contactForm = document.getElementById('contactForm');
    
    // Navegação fixa ao rolar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('show');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('show');
        }
    });
    
    // Menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('show');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('show');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Animação do menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Filtro do portfólio
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Slider de depoimentos
    const depoimentosSlider = document.querySelector('.depoimentos-slider');
    const depoimentoItems = document.querySelectorAll('.depoimento-item');
    const depoimentosDots = document.querySelector('.depoimentos-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    // Criar dots para cada depoimento
    depoimentoItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        depoimentosDots.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Função para ir para um slide específico
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // Função para atualizar o slider
    function updateSlider() {
        depoimentoItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Ir para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % depoimentoItems.length;
        updateSlider();
    }
    
    // Ir para o slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + depoimentoItems.length) % depoimentoItems.length;
        updateSlider();
    }
    
    // Event listeners para os botões de navegação
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Inicializar o slider
    updateSlider();
    
    // Auto-play do slider (opcional)
    let sliderInterval = setInterval(nextSlide, 5000);
    
    // Parar o auto-play quando o mouse estiver sobre o slider
    depoimentosSlider.addEventListener('mouseenter', () => {
        clearInterval(sliderInterval);
    });
    
    // Retomar o auto-play quando o mouse sair do slider
    depoimentosSlider.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(nextSlide, 5000);
    });
    
    // Formulário de contato
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const formData = new FormData(this);
            const formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            // Aqui você adicionaria o código para enviar os dados para um servidor
            console.log('Dados do formulário:', formValues);
            
            // Feedback visual
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulação de resposta do servidor
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Animação suave ao clicar nos links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada dos elementos ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.servico-card, .sobre-img, .sobre-text, .processo-step, .portfolio-item, .depoimento-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Executar a animação ao carregar a página
    animateOnScroll();
    
    // Executar a animação ao rolar a página
    window.addEventListener('scroll', animateOnScroll);
});