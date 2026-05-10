# 🚀 frameproject - Migrado para Next.js 15

**Status**: ✅ Migração Completa | **Versão**: 0.0.1 | **Framework**: Next.js 15

Um website profissional de portfólio para videomakers e produtores audiovisuais, agora potenciado por **Next.js 15**, **React 19** e **Tailwind CSS**.

---

## 📖 Documentação de Migração

Leia a documentação completa da migração:
- **[NEXT_JS_SETUP.md](./NEXT_JS_SETUP.md)** - Sumário executivo (comece aqui!)
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Guia técnico detalhado

---

## ⚡ Quick Start

### 1. Instale as dependências
```bash
npm install
# ou com pnpm (mais rápido)
pnpm install
```

### 2. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

### 3. Customize o conteúdo
Edite `src/lib/data.ts` para adicionar seus projetos, serviços e depoimentos.

---

## 🏗️ Stack Tecnológico

| Categoria | Tecnologia | Versão |
|-----------|-----------|--------|
| **Framework** | Next.js | 15.0.0 |
| **React** | React | 19.0.0 |
| **Linguagem** | TypeScript | 5.3.3 |
| **Estilos** | Tailwind CSS | 3.4.1 |
| **Animações** | Motion | 12.23.24 |
| **Ícones** | Lucide React | 0.487.0 |
| **Forms** | React Hook Form | 7.55.0 |
| **UI** | Radix UI | Múltiplas |
| **Toast** | Sonner | 2.0.3 |

---

## 📁 Estrutura do Projeto

```
frameproject/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout do Next.js
│   │   └── page.tsx             # Página inicial
│   │
│   ├── components/              # Componentes React
│   │   ├── Navbar.tsx           # Navegação
│   │   ├── Hero.tsx             # Seção principal
│   │   ├── About.tsx            # Sobre
│   │   ├── Portfolio.tsx        # Portfólio
│   │   ├── Services.tsx         # Serviços
│   │   ├── Testimonials.tsx     # Depoimentos
│   │   ├── Contact.tsx          # Contato
│   │   ├── Footer.tsx           # Rodapé
│   │   ├── Analytics.tsx        # Google Analytics
│   │   └── SEOHead.tsx          # Meta tags SEO
│   │
│   ├── lib/                     # Lógica de negócio
│   │   ├── types.ts             # Interfaces TypeScript
│   │   ├── data.ts              # Dados mockados
│   │   ├── usePortfolioViewModel.ts
│   │   ├── useContactViewModel.ts
│   │   ├── analytics.ts         # Serviço Analytics
│   │   └── useScrollAnimation.ts
│   │
│   └── styles/
│       └── globals.css          # Estilos globais
│
├── public/                      # Arquivos estáticos
│   ├── robots.txt
│   └── sitemap.xml
│
├── next.config.ts               # Configuração Next.js
├── tailwind.config.ts           # Configuração Tailwind
├── postcss.config.ts            # Configuração PostCSS
├── tsconfig.json                # Configuração TypeScript
├── package.json                 # Dependências
└── README.md                    # Este arquivo
```

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor dev em http://localhost:3000

# Produção
npm run build        # Compila o projeto
npm run start        # Inicia servidor de produção

# Desenvolvimento
npm run lint         # Executa linter
```

---

## ✨ Funcionalidades

### 🎨 Design & UX
- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves com Motion
- ✅ Tema escuro profissional
- ✅ Transições e efeitos visuais
- ✅ Scroll animations automáticas

### 📱 Responsividade
- ✅ Desktop (> 1024px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (< 768px)

### 📊 Portfólio
- ✅ Grid responsivo de projetos
- ✅ Filtros por categoria
- ✅ Modal de visualização
- ✅ Integração YouTube
- ✅ Dados mockados prontos

### 📝 Formulário de Contato
- ✅ Validação de campos
- ✅ Estados de loading
- ✅ Feedback de sucesso/erro
- ✅ Mock de envio (pronto para backend)

### 🔍 SEO
- ✅ Meta tags completas
- ✅ Open Graph otimizado
- ✅ Schema.org estruturado
- ✅ Canonical URLs
- ✅ Sitemap e robots.txt

### 📈 Analytics
- ✅ Google Analytics (GA4)
- ✅ Rastreamento de eventos
- ✅ Cliques em CTAs
- ✅ Visualizações de projetos
- ✅ Submissões de formulário

---

## 🎯 Customização

### 1. **Informações Pessoais**
Edite `src/lib/data.ts`:
```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Seu Projeto',
    description: 'Descrição...',
    // ...
  }
];
```

### 2. **Cores do Tema**
As cores estão nos componentes com Tailwind:
- `from-purple-500 to-blue-500` - Gradiente principal
- Altere para suas cores preferidas

### 3. **Google Analytics**
Atualize em `src/components/Analytics.tsx`:
```typescript
const GA_MEASUREMENT_ID = 'G-SEU_ID_AQUI';
```

### 4. **Informações de Contato**
Edite `src/components/Contact.tsx`:
- Email: `contato@frameproject.com`
- Telefone: `+55 (11) 99999-9999`
- Localização: `São Paulo, SP - Brasil`

---

## 📚 Guias Úteis

### Adicionar Novo Projeto
```typescript
// src/lib/data.ts
export const projects: Project[] = [
  // ... projetos existentes
  {
    id: '7',
    title: 'Novo Projeto',
    description: 'Descrição do projeto',
    category: 'Branding',
    thumbnailUrl: 'https://...',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    client: 'Cliente',
    year: '2026'
  }
];
```

### Adicionar Novo Serviço
```typescript
// src/lib/data.ts
export const services: Service[] = [
  // ... serviços existentes
  {
    id: '7',
    title: 'Novo Serviço',
    description: 'Descrição...',
    icon: 'Sparkles' // https://lucide.dev/icons
  }
];
```

Depois importe o ícone em `src/components/Services.tsx`:
```typescript
import { ..., Sparkles } from 'lucide-react';
```

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

**Benefícios**:
- Deploy em 1 clique
- Builds automáticos
- Preview URLs
- CDN global
- HTTPS automático

### Netlify
```bash
npm run build
# Fazer upload da pasta 'out'
```

### Firebase Hosting
```bash
firebase init hosting
npm run build
firebase deploy
```

---

## 🔧 Troubleshooting

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já em uso
```bash
npm run dev -- -p 3001
```

### Problemas de build
```bash
npm run build -- --debug
```

---

## 📝 Documentação Adicional

- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Detalhes técnicos da migração
- **[NEXT_JS_SETUP.md](./NEXT_JS_SETUP.md)** - Sumário executivo
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitetura MVVM
- **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** - Visão geral do projeto

---

## 🤝 Contribuições

Este é um projeto pessoal. Para contribuições:

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/melhoria`)
3. Commit suas mudanças (`git commit -am 'Add feature'`)
4. Push para a branch (`git push origin feature/melhoria`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja [LICENSE](./LICENSE) para detalhes.

---

## 📧 Contato

- **Email**: contato@frameproject.com
- **Telefone**: +55 (11) 99999-9999
- **Local**: São Paulo, SP - Brasil

---

## ✅ Checklist Pós-Setup

- [ ] Executar `npm install`
- [ ] Testar com `npm run dev`
- [ ] Customizar dados em `src/lib/data.ts`
- [ ] Atualizar informações de contato
- [ ] Configurar Google Analytics
- [ ] Testar formulário de contato
- [ ] Build de produção `npm run build`
- [ ] Deploy em Vercel/Netlify

---

**Desenvolvido com ❤️ usando Next.js 15**

Última atualização: Maio 2026
