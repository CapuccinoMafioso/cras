// Menu toggle para mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// Modal functionality
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h3></h3>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">
            <button class="modal-btn modal-btn-close">Fechar</button>
        </div>
    </div>
`;
document.body.appendChild(modal);

// Modal content for each service
const modalContents = {
    paif: {
        title: "Serviço de Proteção e Atendimento Integral à Família (PAIF)",
        content: `
            <img src="FOTO LONGA DE FAMILIA.png" alt="Serviço de Proteção à Família">
            <p>O PAIF é o principal serviço oferecido pelo CRAS, destinado ao atendimento de famílias em situação de vulnerabilidade social.</p>
            <h4>Objetivos:</h4>
            <ul>
                <li>Fortalecer a função protetiva das famílias</li>
                <li>Prevenir a ruptura de vínculos familiares</li>
                <li>Promover o acesso a direitos</li>
                <li>Contribuir para a melhoria da qualidade de vida</li>
            </ul>
            <h4>Como funciona:</h4>
            <p>O serviço inclui atendimentos individuais e em grupo, visitas domiciliares e articulação com a rede socioassistencial e outras políticas públicas.</p>
            <p><strong>Duração:</strong> O acompanhamento é contínuo, com avaliações periódicas a cada 3 meses.</p>
        `
    },
    criancas: {
        title: "Apoio às Crianças",
        content: `
            <img src="imagem das crianças.jpg" alt="Apoio às crianças">
            <p>Atividades desenvolvidas para crianças em situação de vulnerabilidade social, visando o desenvolvimento integral e o fortalecimento de vínculos.</p>
            <h4>Atividades oferecidas:</h4>
            <ul>
                <li>Oficinas educativas e recreativas</li>
                <li>Acompanhamento pedagógico</li>
                <li>Atividades esportivas e culturais</li>
                <li>Rodas de conversa sobre direitos da criança</li>
            </ul>
            <h4>Público-alvo:</h4>
            <p>Crianças de 6 a 12 anos em situação de vulnerabilidade social.</p>
            <p><strong>Horários:</strong> Terças e quintas, das 14h às 17h.</p>
        `
    },
    cadastro: {
        title: "Cadastro Único",
        content: `
            <img src="cadastro unico.png" alt="Cadastro Único">
            <p>O Cadastro Único é o principal instrumento para identificação e caracterização socioeconômica das famílias brasileiras de baixa renda.</p>
            <h4>Para que serve:</h4>
            <ul>
                <li>Acesso a programas sociais como Bolsa Família</li>
                <li>Tarifa Social de Energia Elétrica</li>
                <li>Isenção de taxas em concursos públicos</li>
                <li>Outros benefícios governamentais</li>
            </ul>
            <h4>Documentos necessários:</h4>
            <ul>
                <li>Documentos de identificação de todos os membros da família</li>
                <li>Comprovante de residência</li>
                <li>Comprovante de renda (se houver)</li>
            </ul>
            <p><strong>Atendimento:</strong> De segunda a sexta, das 8h às 12h e das 14h às 17h.</p>
        `
    },
    beneficios: {
        title: "Acesso a Benefícios Sociais",
        content: `
            <img src="beneficios do gov.jpg" alt="Benefícios Sociais">
            <p>Orientação e encaminhamento para os principais programas e benefícios sociais do governo federal, estadual e municipal.</p>
            <h4>Principais benefícios:</h4>
            <ul>
                <li><strong>Bolsa Família:</strong> Transferência de renda para famílias em situação de pobreza e extrema pobreza.</li>
                <li><strong>BPC (Benefício de Prestação Continuada):</strong> Para idosos a partir de 65 anos e pessoas com deficiência.</li>
                <li><strong>Tarifa Social de Energia Elétrica:</strong> Desconto na conta de luz para famílias de baixa renda.</li>
                <li><strong>ID Jovem:</strong> Documento que garante acesso a benefícios culturais e de mobilidade para jovens de 15 a 29 anos.</li>
            </ul>
            <p><strong>Requisitos:</strong> É necessário estar cadastrado no Cadastro Único.</p>
        `
    }
};

// Open modal function
function openModal(service) {
    const content = modalContents[service];
    if (!content) return;
    
    modal.querySelector('.modal-header h3').textContent = content.title;
    modal.querySelector('.modal-body').innerHTML = content.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for modal
modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.querySelector('.modal-btn-close').addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Add click events to "Saiba mais" buttons
document.querySelectorAll('.service-card .btn').forEach((btn, index) => {
    const services = ['paif', 'criancas', 'cadastro', 'beneficios'];
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(services[index]);
    });
});
