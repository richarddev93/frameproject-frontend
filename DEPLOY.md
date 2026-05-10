# 🚀 Guia de Deploy - frameproject

## Opções de Hospedagem

### 1. Vercel (Recomendado) ⭐

**Por que Vercel?**
- Deploy em 1 minuto
- HTTPS automático
- CDN global
- Preview deployments
- Otimizado para Next.js (criadores da plataforma)
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

4. Configure as variáveis de ambiente no dashboard Vercel

**Build Settings (automático):**
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `.next`

---

### 2. Netlify

**Passos:**

1. Crie uma conta em [netlify.com](https://netlify.com)

2. Conecte seu repositório Git ou faça upload manual

3. Configure o build:
   - Build command: `pnpm run build`
   - Publish directory: `.next`

4. Deploy automático a cada push

**Vantagens:**
- Forms integrados
- Serverless functions
- Split testing

**Nota**: Next.js requer configuração especial no Netlify. Prefira Vercel.

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
    "public": ".next/static",
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

**Nota**: Firebase é mais adequado para SPAs. Para Next.js com SSR, use Vercel.

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
    "deploy": "gh-pages -d out"
  }
}
```

3. Configure `next.config.ts` com output estático:
```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}
module.exports = nextConfig
```

4. Deploy:
```bash
pnpm run deploy
```

**Nota**: GitHub Pages só suporta sites estáticos. Use apenas se não precisar SSR.

---

## Checklist Pré-Deploy ✅

### SEO
- [ ] Substitua `https://frameproject.com` pela URL real em:
  - `src/app/page.tsx`
  - `public/sitemap.xml`
  - `public/robots.txt`

### Analytics
- [ ] Obtenha seu GA4 Measurement ID em [analytics.google.com](https://analytics.google.com)
- [ ] Substitua `G-XXXXXXXXXX` em `src/app/components/Analytics.tsx`

### Conteúdo
- [ ] Atualize projetos em `src/app/models/data.ts`
- [ ] Adicione suas imagens/vídeos reais
- [ ] Atualize informações de contato em `src/app/components/Contact.tsx`

### Directus CMS
- [ ] Configure token e URL no Render ou plataforma CMS
- [ ] Atualize `NEXT_PUBLIC_DIRECTUS_URL` e `DIRECTUS_API_TOKEN` nos secrets do Vercel

### Performance
- [ ] Teste performance com Lighthouse
- [ ] Otimize imagens (use formato WebP)
- [ ] Ative compressão gzip/brotli no host (automático no Vercel)

### Domínio Personalizado
- [ ] Registre um domínio (Namecheap, GoDaddy, etc.)
- [ ] Configure DNS para apontar para seu host
- [ ] Ative HTTPS (SSL)

---

## Variáveis de Ambiente

Criar no `.env.local` localmente (não commit):

```env
NEXT_PUBLIC_DIRECTUS_URL=https://frameproject-cms-directus.onrender.com
DIRECTUS_API_TOKEN=YOUR_TOKEN_HERE
```

**No Vercel**, adicione via Dashboard > Project Settings > Environment Variables:
- `NEXT_PUBLIC_DIRECTUS_URL`
- `DIRECTUS_API_TOKEN`

⚠️ **Importante**: Adicione `.env.local` ao `.gitignore` (já configurado)

---

## CI/CD com GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

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
- [Vercel Analytics](https://vercel.com/analytics)

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
rm -rf node_modules .next pnpm-lock.yaml
pnpm install
pnpm run build
```

### Rotas 404 no Vercel
Next.js lida automaticamente com roteamento. Se usar catch-all routes, configure em `app/[...slug]/page.tsx`

### Imagens não carregam
- Verifique paths relativos
- Use URLs absolutas para imagens externas
- Configure CORS se necessário
- Use `next/image` para otimização automática

### Diretus CMS erros
- Verifique `NEXT_PUBLIC_DIRECTUS_URL` está acessível
- Confirme token de API válido em `DIRECTUS_API_TOKEN`
- Valide permissões de leitura nas collections no Directus

---

## Custos Estimados

| Serviço | Tier Gratuito | Tier Pago |
|---------|--------------|-----------|
| Vercel | Ilimitado | $20/mês |
| Netlify | 100GB/mês | $19/mês |
| Firebase | 10GB/mês | Pay-as-you-go |
| Directus | Free | $12/mês+ |
| Domínio | - | $10-15/ano |
| Analytics | Gratuito | - |

---

## Próximos Passos

1. ✅ Deploy inicial no Vercel
2. 📊 Configure Analytics
3. 🔍 Submeta ao Google Search Console
4. 🎯 Configure campanhas de mídia
5. 📈 Monitore performance
6. 🔄 Itere baseado em dados

---

**Boa sorte com o deploy! 🚀**

Se encontrar problemas, consulte a documentação oficial:
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
