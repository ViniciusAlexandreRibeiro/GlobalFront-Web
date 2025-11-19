// Lista de perfis femininos e masculinos para o sistema
const perfilsFemininos = [
  { nome: 'Ana Silva', fotoId: 1, bio: 'Apaixonada por inovação e tecnologia, busco sempre transformar desafios em oportunidades. Acredito no poder da colaboração e da aprendizagem contínua.' },
  { nome: 'Maria Oliveira', fotoId: 2, bio: 'Profissional dedicada com foco em resultados e excelência. Minha missão é fazer a diferença através do meu trabalho e inspirar outros ao longo do caminho.' },
  { nome: 'Juliana Costa', fotoId: 3, bio: 'Criativa e estratégica, adoro resolver problemas complexos com soluções simples e elegantes. O trabalho em equipe é minha maior força.' },
  { nome: 'Fernanda Lima', fotoId: 4, bio: 'Entusiasta de novas tecnologias e metodologias ágeis. Busco constantemente evoluir e contribuir para projetos que impactem positivamente a sociedade.' },
  { nome: 'Camila Rodrigues', fotoId: 5, bio: 'Especialista em transformação digital, acredito que a tecnologia deve servir às pessoas. Meu objetivo é criar experiências incríveis e inclusivas.' },
  { nome: 'Beatriz Martins', fotoId: 6, bio: 'Líder nata com visão estratégica, valorizo a diversidade e a inovação. Cada projeto é uma oportunidade de aprender e crescer.' },
  { nome: 'Amanda Carvalho', fotoId: 7, bio: 'Analítica e detalhista, minha paixão é transformar dados em insights valiosos. Acredito no poder da informação para tomada de decisões assertivas.' },
  { nome: 'Larissa Dias', fotoId: 8, bio: 'Proativa e resiliente, enfrento desafios com determinação e criatividade. Meu foco é entregar valor e superar expectativas.' },
  { nome: 'Patrícia Cardoso', fotoId: 9, bio: 'Comunicativa e empática, construo relacionamentos sólidos e duradouros. Acredito que o sucesso vem do trabalho em equipe e da confiança mútua.' },
  { nome: 'Renata Gomes', fotoId: 10, bio: 'Inovadora por natureza, estou sempre em busca de novas soluções e tecnologias. Meu propósito é contribuir para um futuro melhor e mais sustentável.' },
  { nome: 'Mariana Rocha', fotoId: 11, bio: 'Estrategista digital com paixão por crescimento e desenvolvimento. Cada meta alcançada é um passo em direção à excelência profissional.' },
  { nome: 'Bianca Correia', fotoId: 12, bio: 'Versátil e adaptável, prospero em ambientes dinâmicos e desafiadores. Minha força está na capacidade de aprender rápido e aplicar conhecimentos.' },
  { nome: 'Letícia Freitas', fotoId: 13, bio: 'Focada em impacto social e sustentabilidade. Acredito que podemos fazer a diferença através de ações conscientes e inovadoras.' },
  { nome: 'Natália Vieira', fotoId: 14, bio: 'Orientada a dados com mindset ágil. Meu objetivo é otimizar processos e gerar resultados mensuráveis para as organizações.' },
  { nome: 'Jéssica Moreira', fotoId: 15, bio: 'Curiosa e investigativa, adoro explorar novas possibilidades. Cada projeto é uma aventura de aprendizado e crescimento profissional.' },
  { nome: 'Carolina Nunes', fotoId: 16, bio: 'Comprometida com a excelência e a inovação. Busco sempre alinhar objetivos pessoais com metas organizacionais para crescimento mútuo.' },
  { nome: 'Vanessa Cunha', fotoId: 17, bio: 'Especialista em gestão de mudanças e transformação organizacional. Acredito no potencial das pessoas e na força da cultura corporativa.' },
  { nome: 'Isabela Batista', fotoId: 18, bio: 'Designer de experiências memoráveis. Minha paixão é criar soluções que encantam usuários e resolvem problemas reais.' },
  { nome: 'Tatiana Moura', fotoId: 19, bio: 'Estrategista de conteúdo com visão holística. Meu trabalho é contar histórias que conectam marcas e pessoas de forma autêntica.' },
  { nome: 'Priscila Cavalcanti', fotoId: 20, bio: 'Líder transformacional com foco em desenvolvimento de talentos. Acredito que investir em pessoas é o melhor caminho para o sucesso.' },
  { nome: 'Roberta Soares', fotoId: 21, bio: 'Analista financeira com paixão por números e estratégia. Meu objetivo é gerar valor através de decisões financeiras inteligentes.' },
  { nome: 'Paula Castro', fotoId: 22, bio: 'Educadora inovadora comprometida com a transformação do ensino. Acredito no poder da educação para mudar vidas e sociedades.' },
  { nome: 'Sabrina Ramos', fotoId: 23, bio: 'Profissional de marketing digital com foco em ROI. Minha missão é conectar marcas ao seu público de forma eficiente e criativa.' },
  { nome: 'Adriana Melo', fotoId: 24, bio: 'Engenheira de soluções que une tecnologia e negócios. Busco sempre entregar projetos que agreguem valor real aos clientes.' },
  { nome: 'Cristina Machado', fotoId: 25, bio: 'Especialista em experiência do cliente com visão centrada no usuário. Cada interação é uma oportunidade de encantar e fidelizar.' },
  { nome: 'Luciana Pires', fotoId: 26, bio: 'Gestora de projetos certificada com histórico comprovado de entregas. Meu foco é qualidade, prazo e satisfação do cliente.' },
  { nome: 'Daniela Miranda', fotoId: 27, bio: 'Profissional de recursos humanos apaixonada por pessoas. Acredito que talentos engajados são a chave para organizações de sucesso.' },
  { nome: 'Aline Borges', fotoId: 28, bio: 'Consultora de negócios com expertise em otimização de processos. Meu trabalho é identificar oportunidades e maximizar resultados.' },
  { nome: 'Elaine Andrade', fotoId: 29, bio: 'Cientista de dados entusiasta de machine learning. Transformo grandes volumes de dados em insights estratégicos acionáveis.' },
  { nome: 'Simone Guimarães', fotoId: 30, bio: 'Profissional de saúde dedicada ao bem-estar integral. Minha missão é promover qualidade de vida através de cuidados humanizados.' }
];

const perfisMasculinos = [
  { nome: 'Carlos Santos', fotoId: 1, bio: 'Desenvolvedor full stack apaixonado por criar soluções escaláveis. Acredito no poder da tecnologia para resolver problemas reais do mundo.' },
  { nome: 'João Pereira', fotoId: 2, bio: 'Líder técnico com experiência em arquitetura de software. Meu foco é construir sistemas robustos e equipes de alta performance.' },
  { nome: 'Pedro Alves', fotoId: 3, bio: 'Empreendedor nato com visão de futuro. Busco constantemente inovação e novas oportunidades de negócio no mercado digital.' },
  { nome: 'Rafael Souza', fotoId: 4, bio: 'Especialista em DevOps e cloud computing. Minha missão é automatizar processos e garantir entregas contínuas de qualidade.' },
  { nome: 'Lucas Ferreira', fotoId: 5, bio: 'Product Manager orientado a resultados. Meu trabalho é transformar ideias em produtos que as pessoas amam usar.' },
  { nome: 'Gabriel Ribeiro', fotoId: 6, bio: 'Designer UX/UI focado em experiências intuitivas. Acredito que design é sobre resolver problemas, não apenas estética.' },
  { nome: 'Felipe Araújo', fotoId: 7, bio: 'Engenheiro de dados especializado em big data. Transformo caos em ordem através de pipelines eficientes e análises profundas.' },
  { nome: 'Thiago Mendes', fotoId: 8, bio: 'Scrum Master certificado com paixão por metodologias ágeis. Meu objetivo é facilitar a colaboração e maximizar o valor entregue.' },
  { nome: 'Bruno Barbosa', fotoId: 9, bio: 'Arquiteto de soluções cloud com visão estratégica. Projeto infraestruturas modernas que suportam o crescimento dos negócios.' },
  { nome: 'Diego Castro', fotoId: 10, bio: 'Especialista em segurança da informação e compliance. Protejo ativos digitais e garanto conformidade com as melhores práticas.' },
  { nome: 'Rodrigo Almeida', fotoId: 11, bio: 'Analista de negócios com foco em transformação digital. Conecto tecnologia e estratégia para gerar valor competitivo.' },
  { nome: 'Gustavo Pinto', fotoId: 12, bio: 'Desenvolvedor mobile apaixonado por criar apps inovadores. Cada linha de código é uma oportunidade de melhorar a vida das pessoas.' },
  { nome: 'Mateus Teixeira', fotoId: 13, bio: 'Tech lead com expertise em microservices. Construo arquiteturas distribuídas que escalam e performam sob pressão.' },
  { nome: 'Marcelo Azevedo', fotoId: 14, bio: 'Consultor de TI especializado em otimização de infraestrutura. Meu trabalho é garantir eficiência e redução de custos operacionais.' },
  { nome: 'André Monteiro', fotoId: 15, bio: 'Gerente de projetos certificado PMP. Entrego resultados dentro do prazo, escopo e orçamento através de gestão disciplinada.' },
  { nome: 'Leonardo Campos', fotoId: 16, bio: 'Analista de sistemas focado em integração. Conecto sistemas legados e modernos para criar ecossistemas tecnológicos coesos.' },
  { nome: 'Ricardo Santana', fotoId: 17, bio: 'Especialista em inteligência artificial e deep learning. Desenvolvo modelos que aprendem e evoluem com os dados.' },
  { nome: 'Fábio Rezende', fotoId: 18, bio: 'Engenheiro de software com paixão por clean code. Acredito que código bem escrito é a base para sistemas sustentáveis.' },
  { nome: 'Alexandre Nascimento', fotoId: 19, bio: 'CTO com visão estratégica de tecnologia e negócios. Alinhar inovação tecnológica com objetivos corporativos é minha expertise.' },
  { nome: 'Vitor Barros', fotoId: 20, bio: 'Desenvolvedor blockchain e entusiasta de web3. Construo o futuro descentralizado através de contratos inteligentes.' },
  { nome: 'Eduardo Lopes', fotoId: 21, bio: 'Analista de QA focado em qualidade total. Cada bug encontrado é um passo em direção à excelência do produto.' },
  { nome: 'Daniel Fernandes', fotoId: 22, bio: 'Growth hacker com mindset data-driven. Meu foco é crescimento exponencial através de experimentação e otimização.' },
  { nome: 'Henrique Duarte', fotoId: 23, bio: 'Engenheiro de machine learning especializado em NLP. Ensino máquinas a entender e processar linguagem humana.' },
  { nome: 'Vinícius Torres', fotoId: 24, bio: 'Desenvolvedor frontend apaixonado por performance web. Crio interfaces rápidas, acessíveis e responsivas.' },
  { nome: 'Roberto Costa', fotoId: 25, bio: 'Diretor de tecnologia com histórico de transformação digital. Lidero equipes rumo à inovação e excelência técnica.' },
  { nome: 'Marcos Nogueira', fotoId: 26, bio: 'Especialista em IoT e sistemas embarcados. Conecto o mundo físico ao digital através de sensores inteligentes.' },
  { nome: 'Tiago Farias', fotoId: 27, bio: 'Engenheiro de confiabilidade de sites (SRE). Garanto disponibilidade, latência e performance em ambientes críticos.' },
  { nome: 'Igor Ribas', fotoId: 28, bio: 'Cientista de dados focado em analytics avançado. Descubro padrões ocultos e gero insights que impulsionam decisões.' },
  { nome: 'Fabiano Cruz', fotoId: 29, bio: 'Arquiteto de software enterprise com visão holística. Desenho soluções complexas que atendem requisitos de negócio.' },
  { nome: 'Otávio Sampaio', fotoId: 30, bio: 'Especialista em automação e RPA. Libero tempo valioso das equipes automatizando processos repetitivos.' }
];

const todosPerfis = [...perfilsFemininos, ...perfisMasculinos];

// Capas personalizadas por área profissional
const capasPorArea = {
  'TI': [
    'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=200&fit=crop)',
  ],
  'Saúde': [
    'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=200&fit=crop)',
  ],
  'Design': [
    'url(https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1558403194-611308249627?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=200&fit=crop)',
  ],
  'Marketing': [
    'url(https://images.unsplash.com/photo-1432888622747-4eb9a8f2c0e9?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=200&fit=crop)',
  ],
  'Finanças': [
    'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=200&fit=crop)',
  ],
  'Educação': [
    'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=200&fit=crop)',
  ],
  'Engenharia': [
    'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=200&fit=crop)',
  ],
  'Recursos Humanos': [
    'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=200&fit=crop)',
    'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=200&fit=crop)',
  ]
};

const cargos = {
  'TI': [
    'Desenvolvedor Full Stack', 'Engenheiro de Software', 'Tech Lead', 'DevOps Engineer',
    'Arquiteto de Soluções', 'Cientista de Dados', 'Analista de Sistemas', 'UX Designer',
    'Product Manager', 'Scrum Master', 'QA Engineer', 'DBA', 'Desenvolvedor Mobile'
  ],
  'Saúde': [
    'Médico Generalista', 'Enfermeiro(a)', 'Fisioterapeuta', 'Nutricionista',
    'Farmacêutico(a)', 'Psicólogo(a)', 'Biomédico(a)', 'Dentista', 'Terapeuta Ocupacional'
  ],
  'Design': [
    'Designer Gráfico', 'UI/UX Designer', 'Product Designer', 'Motion Designer',
    'Designer de Interfaces', 'Diretor de Arte', 'Designer de Produto', 'Ilustrador(a)'
  ],
  'Marketing': [
    'Analista de Marketing Digital', 'Gerente de Marketing', 'Social Media Manager',
    'Growth Hacker', 'Content Strategist', 'SEO Specialist', 'Analista de Performance'
  ],
  'Finanças': [
    'Analista Financeiro', 'Controller', 'Gerente de Investimentos', 'Consultor Financeiro',
    'Auditor', 'Analista de Crédito', 'Tesoureiro', 'Contador'
  ],
  'Educação': [
    'Professor(a)', 'Coordenador Pedagógico', 'Designer Instrucional', 'Tutor EAD',
    'Orientador Educacional', 'Pedagogo(a)', 'Diretor Escolar'
  ],
  'Engenharia': [
    'Engenheiro Civil', 'Engenheiro Mecânico', 'Engenheiro de Produção', 'Engenheiro Elétrico',
    'Engenheiro Ambiental', 'Engenheiro de Qualidade', 'Engenheiro de Automação'
  ],
  'Recursos Humanos': [
    'Analista de RH', 'Gerente de Talentos', 'Recrutador', 'Business Partner',
    'Analista de Desenvolvimento', 'Especialista em Remuneração', 'Consultor de RH'
  ]
};

const cidades = [
  'São Paulo/SP', 'Rio de Janeiro/RJ', 'Belo Horizonte/MG', 'Brasília/DF',
  'Curitiba/PR', 'Porto Alegre/RS', 'Salvador/BA', 'Fortaleza/CE',
  'Recife/PE', 'Florianópolis/SC', 'Campinas/SP', 'Goiânia/GO',
  'Manaus/AM', 'Vitória/ES', 'João Pessoa/PB', 'Natal/RN'
];

const habilidadesTecnicasPorArea = {
  'TI': ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'TypeScript', 'Docker', 'Kubernetes', 
         'AWS', 'Azure', 'MongoDB', 'PostgreSQL', 'Git', 'CI/CD', 'Microservices', 'REST API'],
  'Saúde': ['Atendimento ao Paciente', 'Diagnóstico Clínico', 'Prescrição Médica', 'Primeiros Socorros',
            'Gestão Hospitalar', 'Prontuário Eletrônico', 'Farmacologia', 'Anatomia'],
  'Design': ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'After Effects', 
             'Design Thinking', 'Prototipagem', 'UI Design', 'UX Research'],
  'Marketing': ['Google Analytics', 'SEO', 'SEM', 'Copywriting', 'Facebook Ads', 'Google Ads',
                'E-mail Marketing', 'Inbound Marketing', 'Automação de Marketing', 'CRM'],
  'Finanças': ['Excel Avançado', 'Power BI', 'Análise de Investimentos', 'Controladoria',
               'SAP', 'Planejamento Financeiro', 'Auditoria', 'Contabilidade Gerencial'],
  'Educação': ['Metodologias Ativas', 'EAD', 'Moodle', 'Didática', 'Avaliação Educacional',
               'Google Classroom', 'Tecnologias Educacionais', 'Currículo'],
  'Engenharia': ['AutoCAD', 'SolidWorks', 'MS Project', 'Lean Manufacturing', 'Six Sigma',
                 'Gestão de Projetos', 'Análise de Riscos', 'Processos Industriais'],
  'Recursos Humanos': ['Recrutamento e Seleção', 'Treinamento e Desenvolvimento', 'Gestão de Performance',
                       'People Analytics', 'Employee Experience', 'TOTVS', 'ADP', 'Folha de Pagamento']
};

const softSkills = [
  'Comunicação', 'Trabalho em Equipe', 'Liderança', 'Criatividade', 'Resolução de Problemas',
  'Pensamento Crítico', 'Adaptabilidade', 'Gestão de Tempo', 'Inteligência Emocional',
  'Colaboração', 'Proatividade', 'Organização', 'Empatia', 'Resiliência', 'Negociação'
];

const empresas = [
  'Tech Solutions Brasil', 'Inovare Tecnologia', 'NextGen Software', 'Digital Ventures',
  'Hospital São Lucas', 'Clínica Vida Saudável', 'MedCare', 'Saúde Integral',
  'Creative Studio', 'Design House', 'Pixel Perfect', 'Arte & Conceito',
  'Marketing Pro', 'Digital Growth', 'Estratégia Digital', 'Brand Makers',
  'Investimentos Prime', 'Consultoria Financeira', 'Capital Partners', 'Grupo Financeiro',
  'Escola do Futuro', 'Instituto de Educação', 'Universidade Virtual', 'EduTech',
  'Construtora Alicerce', 'Engenharia & Projetos', 'Industrial Solutions', 'Tech Engineering',
  'RH Estratégico', 'People First', 'Talentos & Cia', 'Human Capital'
];

const cursos = {
  'TI': ['Ciência da Computação', 'Engenharia de Software', 'Sistemas de Informação', 'Análise e Desenvolvimento de Sistemas'],
  'Saúde': ['Medicina', 'Enfermagem', 'Fisioterapia', 'Nutrição', 'Farmácia', 'Psicologia'],
  'Design': ['Design Gráfico', 'Design de Produto', 'Design Digital', 'Artes Visuais'],
  'Marketing': ['Marketing', 'Publicidade e Propaganda', 'Comunicação Social', 'Administração'],
  'Finanças': ['Administração', 'Economia', 'Contabilidade', 'Finanças'],
  'Educação': ['Pedagogia', 'Licenciatura em Letras', 'Licenciatura em Matemática', 'Educação'],
  'Engenharia': ['Engenharia Civil', 'Engenharia Mecânica', 'Engenharia de Produção', 'Engenharia Elétrica'],
  'Recursos Humanos': ['Gestão de RH', 'Psicologia', 'Administração', 'Gestão de Pessoas']
};

const instituicoes = [
  'USP', 'UNICAMP', 'UFRJ', 'UFMG', 'PUC-SP', 'FGV', 'Insper',
  'UFPR', 'UFRGS', 'UnB', 'UFC', 'UFPE', 'Mackenzie', 'ESPM'
];

const certificacoes = {
  'TI': ['AWS Certified Solutions Architect', 'Google Cloud Professional', 'Scrum Master Certified',
         'MongoDB Certified Developer', 'Oracle Certified Professional', 'Microsoft Azure Certified'],
  'Saúde': ['ACLS', 'BLS', 'Especialização em UTI', 'Título de Especialista', 'Certificação Internacional'],
  'Design': ['Adobe Certified Expert', 'UX Design Certificate', 'Design Thinking Practitioner'],
  'Marketing': ['Google Analytics Certified', 'HubSpot Certified', 'Facebook Blueprint Certified'],
  'Finanças': ['CFA', 'CPA-20', 'CFP', 'CNPI', 'Certificação ANBIMA'],
  'Educação': ['Certificação em Metodologias Ativas', 'Google Educator', 'Certificação em EAD'],
  'Engenharia': ['PMP', 'Six Sigma Black Belt', 'Lean Manufacturing', 'AutoCAD Certified'],
  'Recursos Humanos': ['SHRM-CP', 'PHR', 'Certificação em Coaching', 'People Analytics Certificate']
};

const idiomas = [
  { idioma: 'Inglês', nivel: 'Fluente' },
  { idioma: 'Inglês', nivel: 'Avançado' },
  { idioma: 'Inglês', nivel: 'Intermediário' },
  { idioma: 'Espanhol', nivel: 'Fluente' },
  { idioma: 'Espanhol', nivel: 'Intermediário' },
  { idioma: 'Francês', nivel: 'Básico' },
  { idioma: 'Alemão', nivel: 'Intermediário' }
];

const areasInteresses = [
  'Inteligência Artificial', 'Sustentabilidade', 'Inovação', 'Transformação Digital',
  'Saúde Mental', 'Educação Corporativa', 'Gestão de Projetos', 'Empreendedorismo',
  'Tecnologia Educacional', 'Análise de Dados', 'Cloud Computing', 'Metodologias Ágeis',
  'Design Thinking', 'Marketing Digital', 'Experiência do Cliente', 'Diversidade e Inclusão'
];

// Função auxiliar para selecionar itens aleatórios de um array
const randomItems = (arr, min = 1, max = arr.length) => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Função auxiliar para obter um item aleatório
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Função para gerar um perfil completo
const generateProfile = (id) => {
  const areas = Object.keys(cargos);
  const area = randomItem(areas);
  const cargo = randomItem(cargos[area]);
  
  // Seleciona um perfil da lista (alternando entre feminino e masculino)
  const perfilSelecionado = todosPerfis[id % todosPerfis.length];
  const nome = perfilSelecionado.nome;
  const fotoId = perfilSelecionado.fotoId;
  const bio = perfilSelecionado.bio;
  
  // Determina o gênero baseado no array de origem
  const isFeminino = perfilsFemininos.some(p => p.nome === nome);
  const genero = isFeminino ? 'women' : 'men';
  const foto = `https://randomuser.me/api/portraits/${genero}/${fotoId}.jpg`;
  
  // Gerar experiências (2-4 experiências)
  const numExperiencias = Math.floor(Math.random() * 3) + 2;
  const experiencias = [];
  let anoAtual = 2024;
  
  const descricoesExperiencia = [
    'Liderança de equipes multidisciplinares em projetos de alta complexidade, garantindo entregas no prazo e dentro do orçamento. Implementação de metodologias ágeis que aumentaram a produtividade em 40%.',
    'Desenvolvimento e execução de estratégias inovadoras que resultaram em crescimento significativo de KPIs. Colaboração direta com stakeholders C-level para alinhamento de objetivos.',
    'Gestão end-to-end de iniciativas estratégicas, desde concepção até implementação. Foco em otimização de processos e redução de custos operacionais.',
    'Responsável por transformação digital e modernização de sistemas legados. Condução de workshops e treinamentos para capacitação de equipes internas.',
    'Análise profunda de métricas de negócio e apresentação de insights acionáveis para a diretoria. Criação de dashboards e relatórios executivos.',
    'Implementação de soluções tecnológicas que automatizaram processos manuais, gerando economia de tempo e recursos. Mentoria de profissionais júnior.',
    'Coordenação de projetos internacionais com equipes distribuídas globalmente. Gestão de orçamentos multimilionários e fornecedores estratégicos.',
    'Desenvolvimento de políticas e procedimentos que elevaram os padrões de qualidade da organização. Participação ativa em comitês de inovação.',
    'Criação e implementação de roadmaps estratégicos alinhados com a visão de longo prazo da empresa. Negociação com parceiros e clientes-chave.',
    'Otimização de fluxos de trabalho através de análise de dados e feedback contínuo. Promoção de cultura de melhoria contínua e excelência operacional.'
  ];
  
  for (let i = 0; i < numExperiencias; i++) {
    const duracaoAnos = Math.floor(Math.random() * 4) + 1;
    const anoFim = i === 0 ? 'Atual' : anoAtual.toString();
    const anoInicio = i === 0 ? (anoAtual - duracaoAnos).toString() : (anoAtual - duracaoAnos).toString();
    
    experiencias.push({
      empresa: randomItem(empresas),
      cargo: i === 0 ? cargo : randomItem(cargos[area]),
      inicio: `${anoInicio}-01`,
      fim: i === 0 ? anoFim : `${anoFim}-12`,
      descricao: randomItem(descricoesExperiencia)
    });
    
    if (i < numExperiencias - 1) {
      anoAtual -= duracaoAnos;
    }
  }

  // Gerar formação (1-2 cursos)
  const numCursos = Math.random() > 0.5 ? 2 : 1;
  const formacao = [];
  
  for (let i = 0; i < numCursos; i++) {
    formacao.push({
      curso: randomItem(cursos[area]),
      instituicao: randomItem(instituicoes),
      ano: 2024 - Math.floor(Math.random() * 10) - (i * 4)
    });
  }

  // Gerar projetos (2-3 projetos)
  const numProjetos = Math.floor(Math.random() * 2) + 2;
  const projetos = [];
  
  const titulosProjetos = [
    'Plataforma de Analytics Avançado',
    'Sistema de Automação Inteligente',
    'Portal de Gestão Unificada',
    'Aplicativo Mobile Multi-plataforma',
    'Dashboard de BI em Tempo Real',
    'Framework de Microserviços',
    'Solução de Machine Learning',
    'API Gateway Escalável',
    'Ferramenta de Monitoramento 24/7',
    'Sistema de Recomendação Personalizado',
    'Plataforma de E-commerce Completa',
    'Hub de Integração de Dados',
    'Aplicação Serverless Cloud-Native',
    'Chatbot Inteligente com NLP',
    'Sistema de Segurança Avançado'
  ];
  
  const descricoesProjetos = [
    'Arquitetura moderna utilizando tecnologias de ponta, com foco em escalabilidade e performance. Implementação de CI/CD e testes automatizados garantindo qualidade.',
    'Solução end-to-end que integra múltiplos sistemas legados, proporcionando visão única de dados. Redução de 60% no tempo de processamento de informações críticas.',
    'Plataforma desenvolvida com metodologia ágil, entregas incrementais e feedback contínuo dos usuários. Alcançou mais de 10 mil usuários ativos nos primeiros 3 meses.',
    'Projeto open-source que ganhou reconhecimento da comunidade tech. Mais de 500 stars no GitHub e contribuições de desenvolvedores globais.',
    'Sistema robusto com arquitetura de alta disponibilidade (99.9% uptime). Processamento de milhões de transações diárias com latência mínima.',
    'Implementação de design patterns e clean architecture, facilitando manutenção e evolução. Documentação completa e código altamente testável.',
    'Solução inovadora que utiliza IA para otimizar processos de negócio. Resultados mensuráveis em ROI e satisfação do cliente.',
    'Migração completa de infraestrutura on-premise para cloud, com redução de 45% em custos operacionais. Zero downtime durante a transição.',
    'Ferramenta desenvolvida com foco em UX/UI excepcional. Premiada em competições de design e inovação tecnológica.',
    'Plataforma que processa big data em tempo real utilizando stream processing. Insights acionáveis disponibilizados em dashboards interativos.'
  ];
  
  for (let i = 0; i < numProjetos; i++) {
    projetos.push({
      titulo: randomItem(titulosProjetos),
      link: `https://github.com/projeto-${id}-${i}`,
      descricao: randomItem(descricoesProjetos)
    });
  }

  return {
    id,
    nome,
    foto,
    capa: randomItem(capasPorArea[area]),
    cargo,
    resumo: bio,
    localizacao: randomItem(cidades),
    area,
    habilidadesTecnicas: randomItems(habilidadesTecnicasPorArea[area], 4, 8),
    softSkills: randomItems(softSkills, 4, 7),
    experiencias,
    formacao,
    projetos,
    certificacoes: randomItems(certificacoes[area], 1, 3),
    idiomas: randomItems(idiomas, 1, 3),
    areaInteresses: randomItems(areasInteresses, 3, 6)
  };
};

// Gerar 60 perfis
export const mockProfiles = Array.from({ length: 60 }, (_, i) => generateProfile(i + 1));

// Exportar listas únicas para uso nos filtros
export const uniqueAreas = [...new Set(mockProfiles.map(p => p.area))].sort();
export const uniqueCidades = [...new Set(mockProfiles.map(p => p.localizacao))].sort();
export const uniqueSkills = [...new Set(mockProfiles.flatMap(p => p.habilidadesTecnicas))].sort();
