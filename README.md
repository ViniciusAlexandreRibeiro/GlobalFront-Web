# 🚀 Futuro do Trabalho - Global Solution

Uma Single Page Application (SPA) moderna desenvolvida com React, Vite e Tailwind CSS para conectar profissionais em uma plataforma estilo LinkedIn.

## 📋 Sobre o Projeto

Esta aplicação foi desenvolvida como parte da Global Solution sobre "O Futuro do Trabalho", criando uma plataforma interativa para visualização e conexão entre profissionais de diversas áreas. O objetivo é promover um futuro do trabalho mais justo, inclusivo e sustentável através da tecnologia.

## 👥 Integrantes do Grupo

- **Vinicius Alexandre Aureliano Ribeiro** - RM: 561606

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 7.2.2** - Build tool moderna e rápida
- **Tailwind CSS 3.4.1** - Framework CSS utility-first para estilização
- **Lucide React** - Biblioteca de ícones moderna e customizável
- **JavaScript (ES6+)** - Linguagem de programação

## 🔐 Usuários e Senhas

Esta aplicação não possui sistema de autenticação. Todos os dados são exibidos publicamente para fins demonstrativos.

## 📦 Instalação do Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório** (ou extraia o arquivo compactado)
```bash
git clone https://github.com/ViniciusAlexandreRibeiro/GlobalFront-Web.git
cd GlobalFront-Web
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
Abra seu navegador em `http://localhost:5173`

### Outros Comandos Disponíveis

```bash
# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Verificar erros de código
npm run lint
```

## ✨ Funcionalidades Implementadas

### ✅ Requisitos Funcionais Completos

1. **Listagem de Perfis**
   - Cards profissionais com foto, nome, cargo, localização e skills
   - Grid responsivo que se adapta a diferentes tamanhos de tela
   - 60 perfis fictícios com dados completos

2. **Modal de Detalhes**
   - Visualização completa do perfil ao clicar no card
   - Sistema de abas para organizar informações (Sobre, Experiência, Educação, Projetos)
   - Informações detalhadas: bio, experiências, formação, projetos, certificações, idiomas

3. **Ações Funcionais**
   - Botão "Recomendar" com feedback visual (alert + console.log)
   - Botão "Enviar Mensagem" com feedback visual (alert + console.log)
   - Ambos totalmente funcionais conforme requisito

4. **Sistema de Filtros**
   - Barra de busca por nome ou cargo
   - Filtro por Área de atuação
   - Filtro por Cidade/Localização
   - Filtro por Tecnologia/Skills
   - Indicadores visuais de filtros ativos
   - Botão para limpar todos os filtros

5. **Dark Mode**
   - Alternância entre tema claro e escuro
   - Persistência do tema em toda a aplicação
   - Transições suaves entre temas
   - Botão toggle no cabeçalho

6. **Responsividade**
   - Layout mobile-first
   - Grid adaptativo: 1 coluna (mobile) → 4 colunas (desktop)
   - Modal otimizado para telas pequenas
   - Componentes responsivos em todos os breakpoints

## 📊 Estrutura de Dados

Cada perfil contém a seguinte estrutura completa:

```javascript
{
  id: number,
  nome: string,
  foto: string,
  cargo: string,
  resumo: string,
  localizacao: string,
  area: string,
  habilidadesTecnicas: string[],
  softSkills: string[],
  experiencias: [{
    empresa: string,
    cargo: string,
    inicio: string,
    fim: string,
    descricao: string
  }],
  formacao: [{
    curso: string,
    instituicao: string,
    ano: number
  }],
  projetos: [{
    titulo: string,
    link: string,
    descricao: string
  }],
  certificacoes: string[],
  idiomas: [{
    idioma: string,
    nivel: string
  }],
  areaInteresses: string[]
}
```

## 🗂️ Estrutura de Pastas

```
futuro-trabalho/
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── ProfileCard.jsx       # Card de perfil profissional
│   │   ├── ProfileModal.jsx      # Modal com detalhes completos
│   │   ├── SearchBar.jsx         # Barra de busca e filtros
│   │   └── ErrorBoundary.jsx     # Tratamento de erros
│   ├── data/              # Dados mockados
│   │   └── mockProfiles.js       # 60 perfis fictícios
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Entry point
│   ├── index.css          # Estilos globais + Tailwind
│   └── App.css            # Estilos específicos do App
├── public/                # Arquivos estáticos
├── index.html             # HTML base
├── package.json           # Dependências do projeto
├── vite.config.js         # Configuração do Vite
├── tailwind.config.js     # Configuração do Tailwind
├── postcss.config.js      # Configuração do PostCSS
├── eslint.config.js       # Configuração do ESLint
└── README.md              # Documentação do projeto
```

## 🌐 Deploy

**Link do Deploy:** https://global-front-web.vercel.app/

*Deploy realizado na plataforma Vercel com integração contínua ao repositório GitHub.*

### Como fazer deploy na Vercel:

1. Instale a CLI da Vercel
```bash
npm i -g vercel
```

2. Execute o deploy
```bash
vercel
```

## 📂 Repositório

**Link do Repositório GitHub:** https://github.com/ViniciusAlexandreRibeiro/GlobalFront-Web

## 📝 Notas de Desenvolvimento

- O projeto utiliza `useMemo` para otimização de performance na filtragem de perfis
- Implementado ErrorBoundary para captura de erros de renderização
- Dark mode com persistência de estado
- Design 100% responsivo mobile-first
- Componentes funcionais com React Hooks
- Código totalmente comentado em português para facilitar manutenção

---

**Desenvolvido para a Global Solution 2025 - FIAP**  
**Integrante:** Vinicius Alexandre Aureliano Ribeiro - RM: 561606