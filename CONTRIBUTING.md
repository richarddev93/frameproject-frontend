# 🤝 Guia de Contribuição - frameproject

## Como Modificar o Site

### 📝 Atualizando Conteúdo

#### 1. Alterar Projetos do Portfólio

Edite `src/app/models/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Seu Projeto',
    description: 'Descrição detalhada',
    category: 'Branding', // ou Comercial, Documentary, etc.
    thumbnailUrl: 'URL da imagem',
    videoUrl: 'URL do vídeo (YouTube embed)',
    client: 'Nome do cliente',
    year: '2026'
  },
  // Adicione mais projetos...
];
```

**URLs de imagem**: Use Unsplash, Pexels ou suas próprias imagens hospedadas.

**URLs de vídeo**: Para YouTube, use formato embed:
```
https://www.youtube.com/embed/VIDEO_ID
```

---

#### 2. Modificar Serviços

Edite `src/app/models/data.ts`:

```typescript
export const services: Service[] = [
  {
    id: '1',
    title: 'Nome do Serviço',
    description: 'Descrição do serviço',
    icon: 'Video' // Ícone do lucide-react
  }
];
```

**Ícones disponíveis**: Veja [Lucide Icons](https://lucide.dev/icons/)

Depois, adicione o ícone em `src/app/components/Services.tsx`:

```typescript
import { Video, Film, Lightbulb, SeuNovoIcone } from 'lucide-react';

const iconMap = {
  Video,
  Film,
  Lightbulb,
  SeuNovoIcone // Adicione aqui
};
```

---

#### 3. Atualizar Depoimentos

Edite `src/app/models/data.ts`:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nome do Cliente',
    role: 'Cargo',
    company: 'Empresa',
    content: 'Depoimento aqui...',
    avatarUrl: 'URL da foto (opcional)'
  }
];
```

---

#### 4. Modificar Textos da Hero Section

Edite `src/app/components/Hero.tsx`:

```typescript
<h1>frameproject</h1> {/* Altere o nome */}

<p>Transformando histórias em experiências visuais inesquecíveis</p>
{/* Altere o slogan */}
```

---

#### 5. Atualizar Seção Sobre

Edite `src/app/components/About.tsx`:

```typescript
<p>
  Seu texto de apresentação aqui...
</p>
```

---

#### 6. Modificar Informações de Contato

Edite `src/app/components/Contact.tsx`:

```typescript
<p className="text-gray-400">contato@frameproject.com</p>
<p className="text-gray-400">+55 (11) 99999-9999</p>
<p className="text-gray-400">São Paulo, SP - Brasil</p>
```

E também em `src/app/components/Footer.tsx`:

```typescript
<a href="mailto:contato@frameproject.com">
```

---

### 🎨 Modificando Estilos

#### 1. Cores Principais

As cores estão definidas com Tailwind CSS. Para mudar as cores principais:

**Purple → Green** (exemplo):

1. Procure por `purple-500` no código
2. Substitua por `green-500`

Principais arquivos:
- `src/app/components/Hero.tsx`
- `src/app/components/Services.tsx`
- `src/app/components/Contact.tsx`

**Gradientes personalizados**:

```typescript
// De:
className="bg-gradient-to-r from-purple-500 to-blue-500"

// Para:
className="bg-gradient-to-r from-green-500 to-teal-500"
```

---

#### 2. Tipografia

Para mudar a fonte, edite `src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

Fontes recomendadas:
- **Inter**: Moderna e clean
- **Poppins**: Amigável e arredondada
- **Montserrat**: Profissional
- **Space Grotesk**: Tech e futurista

---

#### 3. Animações

Para ajustar velocidade das animações:

```typescript
// Mais rápida
transition={{ duration: 0.3 }}

// Mais lenta
transition={{ duration: 1.2 }}
```

Para desabilitar animações:

```typescript
// Remova os blocos motion:
<motion.div> → <div>
```

---

### 🖼️ Adicionando Imagens

#### 1. Imagens Locais

1. Crie pasta `public/images/`
2. Adicione suas imagens
3. Use no código:

```typescript
<img src="/images/minha-foto.jpg" alt="Descrição" />
```

#### 2. Imagens Externas

Use serviços como:
- [Unsplash](https://unsplash.com) (gratuito)
- [Pexels](https://pexels.com) (gratuito)
- Cloudinary (CDN profissional)

**Otimização**: Use WebP quando possível (menor tamanho).

---

### 📊 Configurando Google Analytics

1. Crie conta no [Google Analytics](https://analytics.google.com)
2. Crie uma propriedade GA4
3. Copie o **Measurement ID** (formato: `G-XXXXXXXXXX`)
4. Edite `src/app/components/Analytics.tsx`:

```typescript
const GA_MEASUREMENT_ID = 'G-SEU_ID_AQUI';
```

5. Teste no console do navegador:
```javascript
console.log(window.gtag); // Deve retornar função
```

---

### 🔌 Integrando Backend Real

#### 1. Formulário de Contato

**Opção A: Formspree** (mais fácil)

```typescript
// src/app/viewmodels/useContactViewModel.ts
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

**Opção B: Backend próprio**

```typescript
// src/app/services/api.ts
export class ContactAPI {
  static async send(data: ContactFormData) {
    const response = await fetch('https://api.seusite.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}

// src/app/viewmodels/useContactViewModel.ts
import { ContactAPI } from '../services/api';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    await ContactAPI.send(formData);
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

#### 2. Portfólio Dinâmico (CMS)

**Opção A: Contentful** (Headless CMS)

1. Crie conta no [Contentful](https://contentful.com)
2. Crie Content Model para "Project"
3. Instale SDK:
```bash
pnpm add contentful
```
4. Crie serviço:

```typescript
// src/app/services/contentful.ts
import { createClient } from 'contentful';

const client = createClient({
  space: 'SEU_SPACE_ID',
  accessToken: 'SEU_ACCESS_TOKEN'
});

export class ContentfulService {
  static async getProjects(): Promise<Project[]> {
    const entries = await client.getEntries({ content_type: 'project' });
    return entries.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      // ...mapear campos
    }));
  }
}
```

5. Use no ViewModel:

```typescript
// src/app/viewmodels/usePortfolioViewModel.ts
const [projects, setProjects] = useState<Project[]>([]);

useEffect(() => {
  ContentfulService.getProjects().then(setProjects);
}, []);
```

**Opção B: Sanity CMS**

Similar ao Contentful, mas com mais controle.

---

### 🧪 Adicionando Testes

#### 1. Instalar dependências

```bash
pnpm add -D vitest @testing-library/react @testing-library/react-hooks @testing-library/jest-dom
```

#### 2. Testar ViewModels

```typescript
// src/app/viewmodels/__tests__/usePortfolioViewModel.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { usePortfolioViewModel } from '../usePortfolioViewModel';

describe('usePortfolioViewModel', () => {
  test('filtra projetos por categoria', () => {
    const { result } = renderHook(() => usePortfolioViewModel());

    expect(result.current.filteredProjects).toHaveLength(6);

    act(() => {
      result.current.setSelectedCategory('Branding');
    });

    expect(result.current.filteredProjects).toHaveLength(1);
  });
});
```

#### 3. Testar Componentes

```typescript
// src/app/components/__tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

test('renderiza título', () => {
  render(<Hero />);
  expect(screen.getByText('frameproject')).toBeInTheDocument();
});
```

---

### 🚀 Features Avançadas

#### 1. Blog com MDX

```bash
pnpm add @mdx-js/rollup remark-gfm
```

Configure Vite para MDX e crie posts em `src/content/blog/`.

#### 2. Internacionalização (i18n)

```bash
pnpm add react-i18next i18next
```

Crie traduções em `src/locales/`.

#### 3. Dark/Light Mode

```typescript
// src/app/hooks/useTheme.ts
const [theme, setTheme] = useState('dark');

const toggleTheme = () => {
  setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  document.documentElement.classList.toggle('dark');
};
```

---

## 📂 Estrutura de Commits

Use Conventional Commits:

```
feat: adiciona novo projeto ao portfólio
fix: corrige scroll suave no Safari
docs: atualiza README com instruções de deploy
style: ajusta espaçamento da seção Hero
refactor: extrai lógica de formulário para ViewModel
test: adiciona testes para useContactViewModel
```

---

## 🐛 Reportando Bugs

Encontrou um problema?

1. Verifique se já não existe issue aberta
2. Crie issue com:
   - Descrição do problema
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots (se aplicável)
   - Navegador e sistema operacional

---

## 💡 Sugerindo Features

Tem uma ideia?

1. Abra uma issue com tag `enhancement`
2. Descreva:
   - Problema que resolve
   - Solução proposta
   - Alternativas consideradas

---

## 📞 Suporte

- **Documentação**: Veja `README.md`, `ARCHITECTURE.md`, `DEPLOY.md`
- **Dúvidas**: Abra uma issue
- **Email**: contato@frameproject.com

---

**Happy coding! 🚀**
