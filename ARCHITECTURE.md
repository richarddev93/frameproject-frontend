# 🏗️ Arquitetura MVVM - frameproject

## Visão Geral

Este projeto segue o padrão arquitetural **MVVM (Model-View-ViewModel)** para separação de responsabilidades, testabilidade e manutenibilidade.

```
┌─────────────────────────────────────────────┐
│                   View                      │
│        (React Components / UI)              │
│  Hero, About, Portfolio, Services, etc.     │
└─────────────┬───────────────────────────────┘
              │
              │ Binding / Hooks
              │
┌─────────────▼───────────────────────────────┐
│                ViewModel                    │
│         (Presentation Logic)                │
│  usePortfolioViewModel, useContactVM, etc.  │
└─────────────┬───────────────────────────────┘
              │
              │ Data Access
              │
┌─────────────▼───────────────────────────────┐
│                  Model                      │
│            (Data & Types)                   │
│     types.ts, data.ts, services             │
└─────────────────────────────────────────────┘
```

---

## Camadas

### 1. Model (Modelo) 📊

**Localização**: `src/app/models/`

**Responsabilidades**:
- Definir estrutura de dados (TypeScript interfaces)
- Fornecer dados mockados ou da API
- Regras de negócio relacionadas aos dados

**Arquivos**:
- `types.ts`: Interfaces TypeScript
- `data.ts`: Dados mockados (projetos, serviços, depoimentos)

**Exemplo**:
```typescript
// types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  // ...
}

// data.ts
export const projects: Project[] = [
  { id: '1', title: 'Brand Reveal', ... }
];
```

**Quando adicionar aqui**:
- Novos tipos de dados
- Dados estáticos ou mockados
- Validações de domínio

---

### 2. ViewModel (Modelo de Apresentação) 🎮

**Localização**: `src/app/viewmodels/`

**Responsabilidades**:
- Lógica de apresentação (não visual)
- Gerenciamento de estado local
- Transformação de dados para exibição
- Handlers de eventos

**Arquivos**:
- `usePortfolioViewModel.ts`: Lógica do portfólio (filtros, seleção)
- `useContactViewModel.ts`: Lógica do formulário de contato

**Exemplo**:
```typescript
export const usePortfolioViewModel = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProjects
  };
};
```

**Quando adicionar aqui**:
- Lógica complexa de estado
- Filtros e transformações
- Validações de formulário
- Handlers que não são puramente visuais

**Benefícios**:
- Facilita testes unitários (sem dependência do DOM)
- Reutilização de lógica entre componentes
- Separação clara de responsabilidades

---

### 3. View (Visão) 🎨

**Localização**: `src/app/components/`

**Responsabilidades**:
- Renderização visual
- Interação com usuário (UI)
- Animações e efeitos visuais
- Binding com ViewModels

**Arquivos**:
- `Hero.tsx`: Seção hero
- `Portfolio.tsx`: Grid de projetos
- `Contact.tsx`: Formulário
- etc.

**Exemplo**:
```typescript
export const Portfolio = () => {
  // Usa o ViewModel
  const { filteredProjects, setSelectedCategory } = usePortfolioViewModel();

  // Apenas renderização
  return (
    <section>
      {filteredProjects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};
```

**Quando adicionar aqui**:
- Novos componentes visuais
- Layouts e estrutura HTML
- Estilos e animações
- Interações visuais diretas

---

## Camadas Auxiliares

### Services (Serviços) 🔧

**Localização**: `src/app/services/`

**Responsabilidades**:
- Comunicação com APIs externas
- Analytics e tracking
- Integrações de terceiros
- Lógica compartilhada entre ViewModels

**Arquivos**:
- `analytics.ts`: Google Analytics integration

**Exemplo**:
```typescript
export class AnalyticsService {
  static trackEvent({ eventName, category }: AnalyticsEvent) {
    if (window.gtag) {
      window.gtag('event', eventName, { event_category: category });
    }
  }
}
```

**Quando usar**:
- Chamadas HTTP/API
- Integrações externas
- Lógica reutilizável entre ViewModels

---

### Hooks (Custom Hooks) 🪝

**Localização**: `src/app/hooks/`

**Responsabilidades**:
- Lógica reutilizável de UI
- Encapsular efeitos colaterais
- Abstrair complexidade

**Arquivos**:
- `useScrollAnimation.ts`: Intersection Observer para scroll animations

**Exemplo**:
```typescript
export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(/*...*/);
    // ...
  }, [threshold]);

  return { ref, isVisible };
};
```

**Quando criar**:
- Lógica reutilizável entre componentes
- Encapsular APIs complexas (IntersectionObserver, ResizeObserver)
- Side effects recorrentes

---

## Fluxo de Dados

### 1. Dados estáticos (leitura)

```
Model (data.ts) → ViewModel → View
```

**Exemplo**: Listar projetos

```typescript
// Model
export const projects = [/*...*/];

// ViewModel
const filteredProjects = projects.filter(/*...*/);

// View
{filteredProjects.map(p => <Card {...p} />)}
```

---

### 2. Interação do usuário (escrita)

```
View (evento) → ViewModel (handler) → Model/Service (atualização)
```

**Exemplo**: Enviar formulário

```typescript
// View
<form onSubmit={handleSubmit}>

// ViewModel
const handleSubmit = async (e) => {
  e.preventDefault();
  await ContactService.send(formData);
  setSubmitStatus('success');
};

// Service
export class ContactService {
  static async send(data: ContactFormData) {
    return fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  }
}
```

---

## Padrões de Código

### Nomenclatura

**ViewModels**:
- Sempre prefixado com `use` (hook)
- Sufixo `ViewModel`
- Exemplo: `usePortfolioViewModel`, `useContactViewModel`

**Models**:
- Interfaces em PascalCase
- Dados em camelCase
- Exemplo: `Project`, `projects`

**Views**:
- PascalCase
- Nomes descritivos
- Exemplo: `Hero`, `ContactForm`, `ProjectCard`

**Services**:
- PascalCase
- Sufixo `Service`
- Métodos estáticos
- Exemplo: `AnalyticsService.trackEvent()`

---

### Organização de Imports

```typescript
// 1. React e hooks
import { useState, useEffect } from 'react';

// 2. Bibliotecas externas
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

// 3. ViewModels
import { usePortfolioViewModel } from '../viewmodels/usePortfolioViewModel';

// 4. Models
import { projects } from '../models/data';
import { Project } from '../models/types';

// 5. Services
import { AnalyticsService } from '../services/analytics';

// 6. Hooks
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// 7. Componentes locais
import { ProjectCard } from './ProjectCard';
```

---

## Testabilidade

### Testando ViewModels

ViewModels são **facilmente testáveis** porque não dependem do DOM:

```typescript
import { renderHook, act } from '@testing-library/react-hooks';
import { usePortfolioViewModel } from './usePortfolioViewModel';

test('filtra projetos por categoria', () => {
  const { result } = renderHook(() => usePortfolioViewModel());

  expect(result.current.filteredProjects.length).toBe(6); // 'all'

  act(() => {
    result.current.setSelectedCategory('Branding');
  });

  expect(result.current.filteredProjects.length).toBe(1);
});
```

### Testando Views

Views devem ser testadas com foco em **renderização e interação**:

```typescript
import { render, screen } from '@testing-library/react';
import { Portfolio } from './Portfolio';

test('renderiza projetos', () => {
  render(<Portfolio />);
  expect(screen.getAllByRole('article')).toHaveLength(6);
});
```

---

## Quando usar cada camada?

### Use Model quando:
- ✅ Definir estrutura de dados
- ✅ Adicionar dados mockados
- ✅ Criar validações de domínio

### Use ViewModel quando:
- ✅ Gerenciar estado complexo
- ✅ Implementar filtros/transformações
- ✅ Criar lógica reutilizável de apresentação
- ✅ Handlers de formulários

### Use View quando:
- ✅ Criar componentes visuais
- ✅ Implementar layouts
- ✅ Adicionar animações
- ✅ Gerenciar interações diretas

### Use Service quando:
- ✅ Integrar APIs externas
- ✅ Compartilhar lógica entre ViewModels
- ✅ Abstrair funcionalidades de terceiros

### Use Hook quando:
- ✅ Reutilizar lógica de UI
- ✅ Encapsular side effects
- ✅ Abstrair APIs nativas (Intersection Observer, etc.)

---

## Migração Futura

### Para adicionar backend real:

1. **Criar serviços de API**:
```typescript
// src/app/services/api.ts
export class ProjectsAPI {
  static async getAll(): Promise<Project[]> {
    const res = await fetch('/api/projects');
    return res.json();
  }
}
```

2. **Atualizar ViewModels**:
```typescript
export const usePortfolioViewModel = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    ProjectsAPI.getAll().then(setProjects);
  }, []);

  // resto do código permanece igual
};
```

3. **Views não mudam!** 🎉

---

## Benefícios desta Arquitetura

✅ **Separação de responsabilidades**: Cada camada tem um propósito claro

✅ **Testabilidade**: ViewModels testáveis sem DOM

✅ **Reutilização**: Lógica compartilhada entre componentes

✅ **Manutenibilidade**: Fácil localizar e modificar código

✅ **Escalabilidade**: Estrutura cresce organicamente

✅ **Substituição de backend**: Views não mudam ao trocar de API

---

## Referências

- [MVVM Pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
- [React Hooks Best Practices](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

---

**Mantenha esta arquitetura ao adicionar novas features!** 🚀
