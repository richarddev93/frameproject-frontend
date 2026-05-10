# frameproject

Site profissional de portfólio para videomaker e produtor audiovisual.

## 🎯 Visão Geral

Website moderno e responsivo desenvolvido com React, Vite, TypeScript e Tailwind CSS, seguindo arquitetura MVVM (Model-View-ViewModel) para organização escalável e manutenível.

## 🏗️ Arquitetura MVVM

### Models (`src/app/models/`)
- **types.ts**: Definições de tipos TypeScript
- **data.ts**: Dados mockados (projetos, serviços, depoimentos)

### ViewModels (`src/app/viewmodels/`)
- **usePortfolioViewModel.ts**: Lógica de apresentação do portfólio
- **useContactViewModel.ts**: Lógica do formulário de contato

### Views (`src/app/components/`)
- **Hero.tsx**: Seção principal com CTA
- **About.tsx**: Apresentação pessoal
- **Portfolio.tsx**: Grid de projetos com filtros
- **Services.tsx**: Serviços oferecidos
- **Testimonials.tsx**: Depoimentos de clientes
- **Contact.tsx**: Formulário de contato
- **Footer.tsx**: Rodapé com links
- **SEOHead.tsx**: Meta tags e SEO
- **Analytics.tsx**: Google Analytics

### Services (`src/app/services/`)
- **analytics.ts**: Serviço de rastreamento de eventos

### Hooks (`src/app/hooks/`)
- **useScrollAnimation.ts**: Hook para animações no scroll

## 🚀 Tecnologias

- **React 18.3.1**: Biblioteca UI
- **TypeScript**: Tipagem estática
- **Vite**: Build tool
- **Tailwind CSS v4**: Estilização
- **Motion (Framer Motion)**: Animações
- **Lucide React**: Ícones

## ✨ Funcionalidades

### Animações
- Transições suaves entre seções
- Scroll animations com Intersection Observer
- Hover effects em cards e botões
- Loading states
- Microinterações

### SEO
- Meta tags completas
- Open Graph para redes sociais
- Schema.org structured data
- Canonical URLs
- Sitemap ready

### Analytics
- Integração Google Analytics (GA4)
- Rastreamento de eventos:
  - Cliques em CTAs
  - Visualizações de projetos
  - Submissão de formulários

### Portfólio
- Grid responsivo
- Filtros por categoria
- Modal de visualização
- Integração com vídeos (YouTube)

### Formulário de Contato
- Validação de campos
- Estados de loading
- Feedback visual (sucesso/erro)
- Mock de envio (preparado para backend)

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Design

Inspirado em: https://videohut.framer.website

Características:
- Fundo escuro (preto/zinc)
- Gradientes purple/blue
- Tipografia moderna
- Espaçamentos generosos
- Animações sutis

## 📊 Performance

- Code splitting automático (Vite)
- Lazy loading de imagens
- Otimização de animações (GPU)
- Bundle otimizado

## 🔧 Personalização

### Dados
Edite `src/app/models/data.ts` para atualizar:
- Projetos do portfólio
- Serviços oferecidos
- Depoimentos

### Cores
Cores principais no Tailwind:
- Primary: Purple (500)
- Secondary: Blue (500)
- Background: Black/Zinc

### Google Analytics
Substitua `G-XXXXXXXXXX` em `src/app/components/Analytics.tsx` pelo seu Measurement ID real.

## 📦 Estrutura de Pastas

```
src/
├── app/
│   ├── components/      # Views (UI)
│   │   ├── figma/      # Componentes Figma
│   │   └── ui/         # Componentes shadcn/ui
│   ├── models/         # Types e dados
│   ├── viewmodels/     # Lógica de apresentação
│   ├── services/       # Serviços (analytics, API)
│   ├── hooks/          # Custom hooks
│   └── App.tsx         # Componente principal
├── styles/             # CSS global
└── imports/            # Assets importados
```

## 🎯 Próximos Passos

1. **Backend Integration**
   - Conectar formulário a API real
   - Implementar CMS para gerenciar projetos
   - Adicionar autenticação (admin)

2. **Features**
   - Blog/artigos
   - Modo claro/escuro
   - Internacionalização (i18n)
   - PWA support

3. **SEO Avançado**
   - Sitemap.xml dinâmico
   - Robots.txt customizado
   - Páginas individuais para projetos

4. **Analytics**
   - Configurar GA4 real
   - Heatmaps (Hotjar)
   - A/B testing

## 📄 Licença

Todos os direitos reservados © 2026 frameproject
