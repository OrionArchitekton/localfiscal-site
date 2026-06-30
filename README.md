# localfiscal-site

Vite/React microsite for the `localfiscal` project page at
`https://www.danmercede.com/works/localfiscal/`.

## Role

This repo owns the marketing/presentation surface for `localfiscal`: layout,
copy, metadata, static assets, and Vercel routing/cache config. The source
project owns the Python CLI, local web entry point, Docker packaging, and
ledger behavior.

## Source Of Truth

- Product repo: `../localfiscal`
- Site copy: `constants.ts`
- Metadata: `index.html`
- Routing/cache: `vercel.json`

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Boundaries

Keep claims grounded in the source project README, pyproject metadata, Docker
files, and released behavior. Do not change localfiscal package behavior from
this repo.
