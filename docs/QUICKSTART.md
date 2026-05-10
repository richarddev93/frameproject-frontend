# ⚡ Quick Start Guide - frameproject

## 🚀 Para começar imediatamente

Este projeto está **pronto para uso** no ambiente Figma Make. Não é necessário build ou setup adicional!

---

## 📝 Primeiros Passos

### 1. Personalizar Conteúdo (5 minutos)

#### Atualizar Projetos
Edite `src/app/models/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Seu Projeto Aqui',
    description: 'Descrição do seu projeto',
    category: 'Branding',
    thumbnailUrl: 'https://images.unsplash.com/...',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    client: 'Cliente',
    year: '2026'
  }
];
```

#### Atualizar Informações Pessoais
Edite `src/app/components/About.tsx`:
```typescript
<p>
  Seu texto de apresentação aqui...
</p>
```

#### Atualizar Contato
Edite `src/app/components/Contact.tsx`:
```typescript
<p>contato@seudominio.com</p>
<p>+55 (XX) XXXXX-XXXX</p>
```

---

### 2. Personalizar Visual (10 minutos)

#### Mudar Cores
Procure e substitua no código:
- `purple-500` → sua cor preferida (ex: `green-500`)
- `blue-500` → sua cor secundária

#### Mudar Título/Branding
Edite `src/app/components/Hero.tsx` e `src/app/components/Navbar.tsx`:
```typescript
frameproject → SeuNome
```

---

### 3. Configurar Analytics (2 minutos)

1. Obtenha seu ID do Google Analytics (GA4)
2. Edite `src/app/components/Analytics.tsx`:
```typescript
const GA_MEASUREMENT_ID = 'G-SEU_ID_AQUI';
```

---

## ✅ Checklist de Personalização

### Conteúdo
- [ ] Atualizar projetos do portfólio
- [ ] Escrever texto "Sobre"
- [ ] Revisar lista de serviços
- [ ] Adicionar depoimentos reais
- [ ] Atualizar informações de contato

### Branding
- [ ] Trocar nome/logo
- [ ] Ajustar cores (se necessário)
- [ ] Trocar imagens de exemplo

### Técnico
- [ ] Configurar Google Analytics
- [ ] Atualizar meta tags/SEO
- [ ] Testar formulário de contato

---

## 🎯 Personalização por Prioridade

### ⭐ Essencial (Faça AGORA)
1. Trocar projetos mockados por seus projetos reais
2. Atualizar informações de contato
3. Escrever texto "Sobre" personalizado
4. Trocar "frameproject" pelo seu nome/marca

### ⭐⭐ Importante (Faça HOJE)
5. Configurar Google Analytics
6. Atualizar meta tags para SEO
7. Adicionar seus depoimentos reais
8. Testar todos os links e CTAs

### ⭐⭐⭐ Opcional (Faça DEPOIS)
9. Ajustar cores do tema
10. Adicionar mais projetos
11. Customizar animações
12. Adicionar mais seções

---

## 🔧 Modificações Comuns

### Adicionar novo projeto
```typescript
// src/app/models/data.ts
export const projects: Project[] = [
  // ... projetos existentes
  {
    id: '7',
    title: 'Novo Projeto',
    // ...
  }
];
```

### Adicionar novo serviço
```typescript
// src/app/models/data.ts
export const services: Service[] = [
  // ... serviços existentes
  {
    id: '7',
    title: 'Novo Serviço',
    description: 'Descrição...',
    icon: 'Sparkles' // Veja lucide.dev/icons
  }
];
```

Depois adicione o ícone em `src/app/components/Services.tsx`:
```typescript
import { Video, Film, /* ... */, Sparkles } from 'lucide-react';

const iconMap = {
  // ... outros ícones
  Sparkles
};
```

---

## 🎨 Trocar Tema de Cores

### De Purple/Blue para Green/Teal

1. **Find & Replace**:
   - `from-purple-500 to-blue-500` → `from-green-500 to-teal-500`
   - `purple-500` → `green-500`
   - `blue-500` → `teal-500`

2. **Arquivos principais**:
   - `src/app/components/Hero.tsx`
   - `src/app/components/Services.tsx`
   - `src/app/components/Contact.tsx`
   - `src/app/components/Navbar.tsx`

---

## 📸 Trocar Imagens

### Usar suas próprias imagens

1. Crie pasta `public/images/`
2. Adicione suas imagens
3. Use nos componentes:
```typescript
<img src="/images/minha-foto.jpg" alt="Descrição" />
```

### Usar imagens do Unsplash
```typescript
thumbnailUrl: 'https://images.unsplash.com/photo-XXXXXXX?w=800&h=600&fit=crop'
```

Encontre imagens em: https://unsplash.com

---

## 🎬 Conectar Vídeos do YouTube

1. Faça upload do vídeo no YouTube
2. Copie o ID do vídeo (parte após `v=` na URL)
3. Use formato embed:
```typescript
videoUrl: 'https://www.youtube.com/embed/VIDEO_ID'
```

**Exemplo**:
- URL original: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- URL embed: `https://www.youtube.com/embed/dQw4w9WgXcQ`

---

## 📧 Configurar Formulário de Contato

### Opção 1: Formspree (Mais Fácil)

1. Crie conta em https://formspree.io
2. Crie novo formulário
3. Copie o endpoint
4. Edite `src/app/viewmodels/useContactViewModel.ts`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await fetch('https://formspree.io/f/SEU_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Opção 2: Email direto (sem backend)
Use `mailto:` no formulário para abrir cliente de email.

---

## 🌐 Preparar para Deploy

### Antes de publicar:

1. ✅ Atualize `public/sitemap.xml` com sua URL real
2. ✅ Atualize `public/robots.txt`
3. ✅ Configure `.env` com variáveis reais
4. ✅ Teste em dispositivos móveis
5. ✅ Verifique todos os links
6. ✅ Teste formulário de contato

### Deploy (escolha uma):
- **Vercel** (recomendado): Mais fácil, 1 minuto
- **Netlify**: Alternativa excelente
- **Firebase Hosting**: Para projetos maiores

Veja [DEPLOY.md](./DEPLOY.md) para instruções detalhadas.

---

## ❓ FAQ

### "Como adiciono mais seções?"
1. Crie novo componente em `src/app/components/`
2. Importe e adicione em `src/app/App.tsx`

### "Posso usar outro ícone?"
Sim! Veja todos em https://lucide.dev/icons/

### "Como mudo a fonte?"
Edite `src/styles/fonts.css` e importe do Google Fonts.

### "Preciso saber React?"
Básico ajuda, mas você pode personalizar sem conhecimento profundo seguindo este guia.

---

## 🆘 Problemas Comuns

### Imagem não aparece
- ✅ Verifique se a URL está correta
- ✅ Use HTTPS, não HTTP
- ✅ Teste a URL no navegador

### Vídeo não carrega
- ✅ Use formato embed do YouTube
- ✅ Certifique-se que o vídeo é público
- ✅ Verifique o ID do vídeo

### Formulário não envia
- ✅ Configure Formspree ou backend
- ✅ Veja console do navegador para erros
- ✅ Teste conexão de internet

---

## 📚 Recursos

- **Documentação completa**: [README.md](./README.md)
- **Arquitetura**: [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Deploy**: [DEPLOY.md](./DEPLOY.md)
- **Contribuição**: [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 🎉 Pronto para começar!

Agora é só seguir os passos acima e você terá seu site personalizado em minutos!

**Boa sorte! 🚀**
