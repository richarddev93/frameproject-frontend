# 📁 Project Overview - frameproject

## 🎯 Visão Rápida

**frameproject** é um website profissional de portfólio para videomaker, desenvolvido com React, TypeScript, Tailwind CSS e arquitetura MVVM.

---

## 📂 Estrutura de Diretórios

```
frameproject/
├── src/
│   ├── app/
│   │   ├── components/          # 🎨 Views (UI Components)
│   │   │   ├── Hero.tsx         # Seção principal
│   │   │   ├── About.tsx        # Sobre
│   │   │   ├── Portfolio.tsx    # Grid de projetos
│   │   │   ├── Services.tsx     # Serviços
│   │   │   ├── Testimonials.tsx # Depoimentos
│   │   │   ├── Contact.tsx      # Formulário
│   │   │   ├── Navbar.tsx       # Navegação
│   │   │   ├── Footer.tsx       # Rodapé
│   │   │   ├── SEOHead.tsx      # Meta tags
│   │   │   └── Analytics.tsx    # GA4
│   │   │
│   │   ├── viewmodels/          # 🎮 Presentation Logic
│   │   │   ├── usePortfolioViewModel.ts
│   │   │   └── useContactViewModel.ts
│   │   │
│   │   ├── models/              # 📊 Data & Types
│   │   │   ├── types.ts         # TypeScript interfaces
│   │   │   └── data.ts          # Mock data
│   │   │
│   │   ├── services/            # 🔧 External Services
│   │   │   └── analytics.ts     # Google Analytics
│   │   │
│   │   ├── hooks/               # 🪝 Custom Hooks
│   │   │   └── useScrollAnimation.ts
│   │   │
│   │   └── App.tsx              # 🏠 Main Component
│   │
│   ├── styles/                  # 🎨 Global Styles
│   │   ├── theme.css
│   │   ├── globals.css
│   │   ├── tailwind.css
│   │   └── fonts.css
│   │
│   └── imports/                 # 📦 Figma Assets
│
├── public/                      # 🌐 Public Assets
│   ├── sitemap.xml
│   └── robots.txt
│
├── docs/                        # 📚 Documentation
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── DEPLOY.md
│   ├── CONTRIBUTING.md
│   ├── CHANGELOG.md
│   └── PROJECT_OVERVIEW.md (este arquivo)
│
└── config files                 # ⚙️ Configuration
    ├── package.json
    ├── vite.config.ts
    ├── postcss.config.mjs
    ├── .env.example
    └── .gitignore
```

---

## 🧩 Componentes Principais

### 1. Hero Section
- **Arquivo**: `src/app/components/Hero.tsx`
- **Features**:
  - Background animado com gradiente
  - Título com gradient text
  - CTA principal ("Vamos conversar")
  - Scroll indicator animado
  - Animação de entrada suave

### 2. Navbar
- **Arquivo**: `src/app/components/Navbar.tsx`
- **Features**:
  - Sticky navbar com blur
  - Menu desktop e mobile
  - Smooth scroll para seções
  - Animação ao scrollar

### 3. Portfolio
- **Arquivo**: `src/app/components/Portfolio.tsx`
- **ViewModel**: `src/app/viewmodels/usePortfolioViewModel.ts`
- **Features**:
  - Grid responsivo
  - Filtros por categoria
  - Hover effects
  - Modal de visualização
  - Integração com YouTube

### 4. Contact
- **Arquivo**: `src/app/components/Contact.tsx`
- **ViewModel**: `src/app/viewmodels/useContactViewModel.ts`
- **Features**:
  - Formulário com validação
  - Loading states
  - Success/Error feedback
  - Informações de contato

---

## 🎨 Design System

### Cores Principais
```css
/* Gradientes */
Purple: #a855f7 → #3b82f6
Blue: #3b82f6

/* Background */
Black: #000000
Zinc-950: #09090b
Zinc-900: #18181b

/* Text */
White: #ffffff
Gray-300: #d4d4d8
Gray-400: #a1a1aa
```

### Tipografia
- Font: System fonts (Inter-like)
- Scale: text-base, text-lg, text-xl, text-2xl, etc.
- Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 900 (black)

### Spacing
- Sections: py-32 (128px vertical padding)
- Containers: max-w-7xl (1280px max width)
- Gaps: gap-4, gap-8, gap-16

### Border Radius
- Cards: rounded-2xl (16px)
- Buttons: rounded-full
- Images: rounded-2xl

---

## 🔄 Fluxo de Dados (MVVM)

### Exemplo: Filtro de Portfólio

```
1. User clicks category filter (View)
   ↓
2. onClick → setSelectedCategory() (ViewModel)
   ↓
3. useMemo recomputes filteredProjects (ViewModel)
   ↓
4. View re-renders with new data
```

**Arquivos envolvidos**:
- View: `Portfolio.tsx`
- ViewModel: `usePortfolioViewModel.ts`
- Model: `data.ts` (projects)

---

## 📊 Analytics Events

### Eventos Rastreados
1. **CTA Click**: Hero, Navbar, Services
2. **Project View**: Quando modal de projeto abre
3. **Form Submit**: Envio do formulário de contato

### Implementação
```typescript
// src/app/services/analytics.ts
AnalyticsService.trackCTAClick('hero_cta');
AnalyticsService.trackProjectView(projectId, projectTitle);
AnalyticsService.trackFormSubmit('contact_form');
```

---

## 🚀 Performance

### Otimizações Implementadas
- ✅ Code splitting automático (Vite)
- ✅ Lazy loading com Intersection Observer
- ✅ Debounced scroll events
- ✅ useMemo para cálculos pesados
- ✅ AnimatePresence para animações eficientes

### Métricas Alvo
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

## 🔍 SEO Implementado

### Meta Tags
- Title
- Description
- Keywords
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URL
- Theme color

### Structured Data
- Schema.org: ProfessionalService
- JSON-LD para Google

### Files
- `sitemap.xml`: Todas as seções
- `robots.txt`: Permite crawling

---

## 📱 Responsividade

### Breakpoints
```css
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

### Grid System
```typescript
// Mobile: 1 coluna
grid-cols-1

// Tablet: 2 colunas
md:grid-cols-2

// Desktop: 3 colunas
lg:grid-cols-3
```

---

## 🧪 Testabilidade

### ViewModels (Fácil de testar)
```typescript
// Sem dependência do DOM
const { result } = renderHook(() => usePortfolioViewModel());
expect(result.current.filteredProjects).toHaveLength(6);
```

### Views (Testing Library)
```typescript
// Testes de renderização
render(<Portfolio />);
expect(screen.getByText('Portfólio')).toBeInTheDocument();
```

---

## 🔐 Segurança

### Implementado
- ✅ Sanitização de inputs
- ✅ Validação client-side
- ✅ HTTPS ready
- ✅ No inline scripts

### TODO
- [ ] Rate limiting no backend
- [ ] CAPTCHA no formulário
- [ ] CSP (Content Security Policy)

---

## 🌍 Internacionalização (Futuro)

### Estrutura Proposta
```
src/
  locales/
    pt-BR.json
    en-US.json
```

### Implementation
```typescript
import i18n from 'i18next';

i18n.t('hero.title'); // frameproject
i18n.t('hero.subtitle'); // Transformando histórias...
```

---

## 📦 Dependências Principais

| Package | Versão | Uso |
|---------|--------|-----|
| react | 18.3.1 | UI Library |
| typescript | - | Type Safety |
| vite | 6.3.5 | Build Tool |
| tailwindcss | 4.1.12 | Styling |
| motion | 12.23.24 | Animations |
| lucide-react | 0.487.0 | Icons |

---

## 🔄 CI/CD (Futuro)

### Pipeline Proposto
1. Push to main
2. Run tests
3. Build
4. Deploy to Vercel/Netlify
5. Notify Slack

---

## 📈 Roadmap

### v1.1 (Q2 2026)
- [ ] Blog com MDX
- [ ] Dark mode toggle
- [ ] Backend real (Supabase)

### v1.2 (Q3 2026)
- [ ] CMS integration (Contentful)
- [ ] i18n (PT/EN)
- [ ] PWA support

### v2.0 (Q4 2026)
- [ ] Admin dashboard
- [ ] E-commerce (vendas de presets)
- [ ] Live chat

---

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes.

---

## 📞 Contato

- **Email**: contato@frameproject.com
- **Instagram**: @frameproject
- **LinkedIn**: /in/frameproject

---

## 📄 Licença

Todos os direitos reservados © 2026 frameproject

---

**Última atualização**: 2026-04-28
**Versão**: 1.0.0
