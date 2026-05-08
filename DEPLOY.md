# 🚀 Guia de Deploy - frameproject

## Opções de Hospedagem

### 1. Vercel (Recomendado) ⭐

**Por que Vercel?**
- Deploy em 1 minuto
- HTTPS automático
- CDN global
- Preview deployments
- Otimizado para React/Vite
- 100% gratuito para projetos pessoais

**Passos:**

1. Crie uma conta em [vercel.com](https://vercel.com)

2. Instale a CLI (opcional):
```bash
npm i -g vercel
```

3. Deploy via CLI:
```bash
vercel
```

Ou conecte seu repositório GitHub diretamente no dashboard da Vercel.

4. Configure as variáveis de ambiente (se necessário):
   - `VITE_GA_MEASUREMENT_ID`: Seu ID do Google Analytics

**Build Settings:**
- Framework Preset: Vite
- Build Command: `vite build`
- Output Directory: `dist`

---

### 2. Netlify

**Passos:**

1. Crie uma conta em [netlify.com](https://netlify.com)

2. Conecte seu repositório Git ou faça upload manual

3. Configure o build:
   - Build command: `pnpm run build`
   - Publish directory: `dist`

4. Deploy automático a cada push

**Vantagens:**
- Forms integrados
- Serverless functions
- Split testing

---

### 3. Firebase Hosting

**Passos:**

1. Instale Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Inicialize Firebase:
```bash
firebase login
firebase init hosting
```

3. Configure `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. Build e deploy:
```bash
pnpm run build
firebase deploy --only hosting
```

---

### 4. GitHub Pages

**Passos:**

1. Instale gh-pages:
```bash
pnpm add -D gh-pages
```

2. Adicione scripts ao `package.json`:
```json
{
  "scripts": {
    "predeploy": "pnpm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configure `vite.config.ts`:
```ts
export default defineConfig({
  base: '/frameproject/', // Nome do repositório
  // ...
})
```

4. Deploy:
```bash
pnpm run deploy
```

---

## Checklist Pré-Deploy ✅

### SEO
- [ ] Substitua `https://frameproject.com` pela URL real em:
  - `src/app/components/SEOHead.tsx`
  - `public/sitemap.xml`
  - `public/robots.txt`

### Analytics
- [ ] Obtenha seu GA4 Measurement ID em [analytics.google.com](https://analytics.google.com)
- [ ] Substitua `G-XXXXXXXXXX` em `src/app/components/Analytics.tsx`

### Conteúdo
- [ ] Atualize projetos em `src/app/models/data.ts`
- [ ] Adicione suas imagens/vídeos reais
- [ ] Atualize informações de contato em `src/app/components/Contact.tsx`

### Performance
- [ ] Teste performance com Lighthouse
- [ ] Otimize imagens (use formato WebP)
- [ ] Ative compressão gzip/brotli no host

### Domínio Personalizado
- [ ] Registre um domínio (Namecheap, GoDaddy, etc.)
- [ ] Configure DNS para apontar para seu host
- [ ] Ative HTTPS (SSL)

---

## Variáveis de Ambiente

Crie arquivo `.env.local`:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://seusite.com
VITE_CONTACT_EMAIL=contato@frameproject.com
```

⚠️ **Importante**: Adicione `.env.local` ao `.gitignore`

---

## CI/CD com GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8

    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'pnpm'

    - name: Install dependencies
      run: pnpm install

    - name: Build
      run: pnpm run build

    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

---

## Monitoramento Pós-Deploy

### Analytics
- Google Analytics 4
- Google Search Console
- Hotjar (heatmaps)

### Performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Uptime
- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)

---

## Troubleshooting

### Build falha
```bash
# Limpe cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Rotas 404
Configure rewrites para SPA:
```json
{
  "rewrites": [
    { "source": "**", "destination": "/index.html" }
  ]
}
```

### Imagens não carregam
- Verifique paths relativos
- Use URLs absolutas para imagens externas
- Configure CORS se necessário

---

## Custos Estimados

| Serviço | Tier Gratuito | Tier Pago |
|---------|--------------|-----------|
| Vercel | Ilimitado | $20/mês |
| Netlify | 100GB/mês | $19/mês |
| Firebase | 10GB/mês | Pay-as-you-go |
| Domínio | - | $10-15/ano |
| Analytics | Gratuito | - |

---

## Próximos Passos

1. ✅ Deploy inicial
2. 📊 Configure Analytics
3. 🔍 Submeta ao Google Search Console
4. 🎯 Configure campanhas de mídia
5. 📈 Monitore performance
6. 🔄 Itere baseado em dados

---

**Boa sorte com o deploy! 🚀**

Se encontrar problemas, consulte a documentação oficial:
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
