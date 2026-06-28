import { ProductData } from './types';

const GITHUB = 'https://github.com/OrionArchitekton/localfiscal';
const RELEASE = 'https://github.com/OrionArchitekton/localfiscal/releases/tag/v0.1.0';

/**
 * Single source of truth for the localfiscal microsite.
 *
 * All install/usage/demo content is GROUNDED in the real tool repo
 * (README.md, cli.py, pyproject.toml, Dockerfile as of v0.1.0).
 * Primary distribution is GitHub + Docker (PyPI not yet published).
 */
export const PRODUCT_DATA: ProductData = {
  name: 'localfiscal',
  tagline:
    'Ambitious local-first, private receipt + invoice + ledger intelligence for solopreneurs and small businesses.',
  credibility:
    'Open source (MIT) · Local-first (sqlite) · Optional local LLM vision · Docker one-command.',
  canonical: 'https://www.danmercede.com/works/localfiscal/',
  metaDescription:
    'localfiscal is a local-first, MIT-licensed tool for solopreneurs and small businesses: ingest receipts locally (with optional LLM vision), maintain a private ledger, generate invoices and reports, and export for tax/accountants — no SaaS, no data exfil.',

  problem: {
    heading: 'The problem',
    body:
      'Solopreneurs and small teams drown in paper and digital receipts, manual categorization, invoice chasing, and painful tax prep. Existing tools are either dated desktop apps, heavy self-hosted platforms, or cloud SaaS that lock you in and exfiltrate your data. No polished, ambitious, fully local working OSS solution existed that just works.',
  },

  whatItDoes: {
    heading: 'What it does',
    body:
      'A local-first Python CLI + simple web UI that runs entirely on your machine. Ingest receipts (images/PDFs) with local extraction (heuristic + optional Ollama vision), store everything in a private sqlite ledger, generate clean invoice PDFs, produce P&L/category reports, and export CSV/OFX. One-command Docker. Nothing leaves your device unless you explicitly export.',
  },

  cta: {
    primaryLabel: 'View on GitHub',
    primaryUrl: GITHUB,
    secondaryLabel: 'Read the v0.1.0 release',
    secondaryUrl: RELEASE,
  },

  quickstart: {
    heading: 'Quickstart',
    intro:
      'Run via Docker (recommended) or install from source. Core has no mandatory external services.',
    blocks: [
      {
        title: 'Docker (easiest)',
        command: [
          'git clone https://github.com/OrionArchitekton/localfiscal',
          'cd localfiscal',
          'docker compose up --build',
          '# open http://localhost:8080',
        ].join('\n'),
      },
      {
        title: 'Install from source (Python 3.11+)',
        command: [
          'git clone https://github.com/OrionArchitekton/localfiscal',
          'cd localfiscal',
          'python -m venv .venv && source .venv/bin/activate',
          "pip install -e '.[dev]'",
          'localfiscal --help',
        ].join('\n'),
      },
      {
        title: 'Ingest a receipt + generate report (CLI)',
        command: [
          'localfiscal ingest receipt.jpg',
          'localfiscal add 2026-06-28 "Acme Co" 1200 --category income',
          'localfiscal report --period now --fmt md',
        ].join('\n'),
      },
    ],
  },

  // Grounded in localfiscal/cli.py subcommands (v0.1.0)
  commands: [
    {
      name: 'ingest',
      description:
        'Upload or point to a receipt image/PDF. Local extraction (vendor, amount, date, category suggestion) into the ledger.',
    },
    {
      name: 'add',
      description:
        'Manually add a transaction to the private sqlite ledger.',
    },
    {
      name: 'list-tx',
      description:
        'List recent transactions from the local ledger.',
    },
    {
      name: 'invoice',
      description:
        'Generate a clean professional invoice PDF for a client.',
    },
    {
      name: 'report',
      description:
        'Produce P&L and category reports (Markdown or JSON/CSV).',
    },
    {
      name: 'health',
      description:
        'Quick health check and DB status.',
    },
  ],

  demo: {
    heading: 'Demo flow',
    intro:
      'Ingest or add entries, generate invoices on demand, and produce reports — everything stays in your local sqlite file.',
    lines: [
      { kind: 'comment', text: '# 1. Ingest a receipt (or use web UI)' },
      {
        kind: 'command',
        text: 'localfiscal ingest ~/Downloads/coffee-receipt.jpg',
      },
      { kind: 'output', text: 'INGESTED: 1 | 2026-06-28 | Demo Cafe | 12.50 | meals' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 2. Add manual entry and list' },
      {
        kind: 'command',
        text: 'localfiscal add 2026-06-28 "Acme Client" 1200 --category income',
      },
      {
        kind: 'command',
        text: 'localfiscal list-tx --limit 3',
      },
      { kind: 'output', text: '2 | 2026-06-28 | Acme Client | 1200.00 | income' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 3. Generate invoice + report' },
      {
        kind: 'command',
        text: 'localfiscal invoice "Acme Client" 1200 --description "Consulting" --out invoice.pdf',
      },
      {
        kind: 'command',
        text: 'localfiscal report --period now --fmt md',
      },
      { kind: 'output', text: 'REPORT: data/report-now.md' },
      { kind: 'output', text: '# localfiscal Report now', tone: 'muted' },
      { kind: 'output', text: '**Total:** $1212.50', tone: 'muted' },
    ],
  },

  differentiators: {
    heading: 'Why it is different',
    points: [
      {
        title: 'Truly local-first & private',
        body:
          'Everything lives in a single sqlite file on your machine. Optional local Ollama vision for better receipt OCR — data never leaves unless you explicitly export.',
      },
      {
        title: 'Ambitious but shipped',
        body:
          'Not another half-baked script. Full vertical: receipt extraction, ledger, invoice PDFs, reports, web UI, Docker — all in one clean, testable package with CI.',
      },
      {
        title: 'Solopreneur & SMB friendly',
        body:
          'Simple CLI + web. One-command Docker. Exports accountants actually want (CSV/OFX). No subscriptions, no vendor lock-in, no data hostage situation.',
      },
      {
        title: 'Extensible without complexity',
        body:
          'The architecture is deliberately small and clear so you (or local agents) can add rules, better vision models, or bank import later without fighting a giant platform.',
      },
    ],
  },

  links: [
    { label: 'GitHub repository', url: GITHUB, primary: true },
    { label: 'v0.1.0 release', url: RELEASE, primary: true },
    { label: 'Dan Mercede', url: 'https://www.danmercede.com' },
  ],

  footerNote: 'MIT licensed. Built by Dan Mercede.',
};
