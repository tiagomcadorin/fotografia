// Dados de exemplo para o portfólio
const portfolioData = [
    {
        id: 1,
        title: 'Fotografia Gastronômica',
        category: 'food',
        image: 'https://source.unsplash.com/random/600x400/?food,gourmet',
        description: 'Fotografia profissional de pratos gourmet para restaurantes de alta gastronomia.'
    },
    {
        id: 2,
        title: 'Retrato Corporativo',
        category: 'portrait',
        image: 'https://source.unsplash.com/random/600x400/?portrait,business',
        description: 'Retratos profissionais para executivos e equipes corporativas.'
    },
    {
        id: 3,
        title: 'Evento Empresarial',
        category: 'event',
        image: 'https://source.unsplash.com/random/600x400/?event,corporate',
        description: 'Cobertura completa de eventos empresariais e conferências.'
    },
    {
        id: 4,
        title: 'Cardápio Fotográfico',
        category: 'food',
        image: 'https://source.unsplash.com/random/600x400/?menu,food',
        description: 'Fotografias para cardápios e materiais promocionais de restaurantes.'
    },
    {
        id: 5,
        title: 'Retratos Artísticos',
        category: 'portrait',
        image: 'https://source.unsplash.com/random/600x400/?portrait,artistic',
        description: 'Retratos artísticos para portfólios pessoais e profissionais.'
    },
    {
        id: 6,
        title: 'Casamento',
        category: 'event',
        image: 'https://source.unsplash.com/random/600x400/?wedding',
        description: 'Cobertura completa de casamentos e celebrações especiais.'
    },
    {
        id: 7,
        title: 'Bebidas e Coquetéis',
        category: 'food',
        image: 'https://source.unsplash.com/random/600x400/?cocktail,drink',
        description: 'Fotografia especializada em bebidas e coquetéis para bares e restaurantes.'
    },
    {
        id: 8,
        title: 'Fotografia Familiar',
        category: 'portrait',
        image: 'https://source.unsplash.com/random/600x400/?family,portrait',
        description: 'Ensaios fotográficos para famílias e grupos.'
    },
    {
        id: 9,
        title: 'Festival Cultural',
        category: 'event',
        image: 'https://source.unsplash.com/random/600x400/?festival,cultural',
        description: 'Cobertura de festivais culturais e eventos artísticos.'
    }
];

// Função para carregar o portfólio dinamicamente
function loadPortfolio() {
    const portfolioContainer = document.querySelector('.portfolio-grid');
    
    if (!portfolioContainer) return;
    
    // Limpar o container
    portfolioContainer.innerHTML = '';
    
    // Adicionar cada item do portfólio
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-img">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <a href="#" class="btn-small">Ver Projeto</a>
                </div>
            </div>
        `;
        
        portfolioContainer.appendChild(portfolioItem);
    });
}

// Carregar o portfólio quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadPortfolio);