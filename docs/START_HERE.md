# 🚀 Bem-vindo ao frameproject (Next.js)

## ⚡ 3 Passos para Começar

### 1️⃣ Instale as dependências
```bash
npm install
```

### 2️⃣ Inicie o servidor
```bash
npm run dev
```

### 3️⃣ Abra no navegador
```
http://localhost:3000
```

---

## 📚 Próximas Leituras

1. **[NEXT_JS_SETUP.md](./NEXT_JS_SETUP.md)** ← Comece aqui!
2. **[README_NEXTJS.md](./README_NEXTJS.md)** - Documentação completa
3. **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Detalhes técnicos
4. **[TASK_SUMMARY.md](./TASK_SUMMARY.md)** - Resumo da migração

---

## 🎯 O que foi feito?

✅ Migrado de **Vite** para **Next.js 15**  
✅ Atualizado React para versão **19**  
✅ Reorganizado código seguindo padrões Next.js  
✅ Mantida 100% da funcionalidade  
✅ Criada documentação completa  

---

## �� Stack

- **Next.js 15** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript 5.3** - Tipagem
- **Tailwind CSS 3** - Estilos
- **Motion 12** - Animações
- **Lucide React** - Ícones

---

## 🔧 Comandos Importantes

```bash
# Desenvolvimento
npm run dev          # 🚀 Servidor local (http://localhost:3000)

# Produção
npm run build        # 📦 Compilar para produção
npm run start        # 🏃 Iniciar servidor de produção

# Qualidade de código
npm run lint         # 🔍 Linter
```

---

## 🎨 Customizar Seu Projeto

### Adicionar Projetos ao Portfólio
Edite `src/lib/data.ts`:
```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Seu Projeto',
    description: 'Descrição...',
    category: 'Branding',
    // ... mais campos
  }
];
```

### Atualizar Informações de Contato
Edite `src/components/Contact.tsx`:
- Email
- Telefone
- Endereço

### Configurar Google Analytics
Edite `src/components/Analytics.tsx`:
```typescript
const GA_MEASUREMENT_ID = 'G-SEU_ID_AQUI';
```

---

## 🚀 Deploy (Recomendado: Vercel)

### Vercel (1 clique)
```bash
npm i -g vercel
vercel
```

### Alternativas
- Netlify
- Firebase Hosting
- Railway
- AWS Amplify

---

## ❓ Dúvidas?

- Verifique **[README_NEXTJS.md](./README_NEXTJS.md)** para guias completos
- Leia **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** para detalhes técnicos
- Consulte **[TASK_SUMMARY.md](./TASK_SUMMARY.md)** para entender o que mudou

---

## ✅ Checklist Rápido

- [ ] `npm install` executado
- [ ] `npm run dev` testado
- [ ] Navegador acessou http://localhost:3000
- [ ] Você customizou os dados em `src/lib/data.ts`
- [ ] Atualizou o contato
- [ ] Configurou Google Analytics (opcional)
- [ ] Fez build com `npm run build`
- [ ] Deploy em Vercel/Netlify (opcional)

---

## 🎉 Você está pronto!

**Agora é só começar a usar. Boa sorte! 🚀**

---

Desenvolvido com ❤️ usando Next.js 15
