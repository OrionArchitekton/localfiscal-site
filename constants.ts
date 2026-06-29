import { ProductData } from './types';

const GITHUB = 'https://github.com/OrionArchitekton/localfiscal';
const RELEASE = 'https://github.com/OrionArchitekton/localfiscal/releases/tag/v0.2.0';

/**
 * Single source of truth for the localfiscal microsite.
 *
 * All install/usage/demo content is GROUNDED in the real tool repo
 * (README.md, CHANGELOG.md, cli.py, report.py, pyproject.toml, Dockerfile as of v0.2.0).
 * Demo output strings are the tool's literal output. Primary distribution is
 * GitHub + Docker (build-from-source by design; PyPI not published).
 */
export const PRODUCT_DATA: ProductData = {
  name: 'localfiscal',
  tagline:
    'Local-first, private receipt + invoice + ledger for solopreneurs and small businesses — money is exact, amounts are never invented, exports import cleanly.',
  credibility:
    'Open source (MIT) · Local-first sqlite · Exact money (never floats) · Optional local Ollama vision · One-command Docker.',
  canonical: 'https://www.danmercede.com/works/localfiscal/',
  metaDescription:
    'localfiscal is a local-first, MIT-licensed tool for solopreneurs and small businesses: ingest receipts locally (optional local vision), keep a private sqlite ledger, generate invoices and signed income/expense/net reports, and export real CSV/OFX for your accountant. Exact integer money, no SaaS, no data exfil.',

  problem: {
    heading: 'The problem',
    body:
      'Solopreneurs and small teams drown in paper and digital receipts, manual categorization, invoice chasing, and painful tax prep. Existing tools are either dated desktop apps, heavy self-hosted platforms, or cloud SaaS that lock you in and exfiltrate your data. And the ones that handle money often do it with floats — so the numbers quietly disagree. localfiscal stays on your machine and gets the boring, important parts right.',
  },

  whatItDoes: {
    heading: 'What it does',
    body:
      'A local-first Python CLI + minimal web UI that runs entirely on your machine. Ingest receipts (images/PDFs) with a locale-aware heuristic parser (and optional local Ollama vision) — amounts are stored as exact integer minor units with an explicit currency, and a receipt it cannot read is flagged needs-review rather than given a fabricated amount. Keep a private sqlite ledger, generate invoice PDFs, produce signed income / expense / net reports, and export real CSV (RFC-4180) and OFX/QFX. One-command Docker, non-root, loopback-only by default. Nothing leaves your device unless you explicitly export.',
  },

  cta: {
    primaryLabel: 'View on GitHub',
    primaryUrl: GITHUB,
    secondaryLabel: 'Read the v0.2.0 release',
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
          '# open http://127.0.0.1:8080  (binds loopback only)',
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
          'localfiscal add 2026-06-28 "Acme Co" 1200 --income',
          'localfiscal report --fmt md',
        ].join('\n'),
      },
    ],
  },

  // Grounded in localfiscal/cli.py subcommands (v0.2.0)
  commands: [
    {
      name: 'ingest',
      description:
        'Read a receipt image/PDF. A locale-aware parser extracts vendor / amount / date / category into the ledger; an unreadable amount is flagged needs-review, never invented. Optional local Ollama vision with --vision.',
    },
    {
      name: 'add',
      description:
        'Manually add a transaction to the private sqlite ledger (--income for income, otherwise expense). Amounts are parsed exactly to integer minor units.',
    },
    {
      name: 'list-tx',
      description:
        'List recent transactions from the local ledger (newest first).',
    },
    {
      name: 'invoice',
      description:
        'Generate a clean professional invoice PDF for a client.',
    },
    {
      name: 'report',
      description:
        'Produce signed income / expense / net reports per currency (Markdown, JSON, or CSV) — all derived from one exact integer source, so they always agree.',
    },
    {
      name: 'export',
      description:
        'Export the full ledger as real CSV (RFC-4180) or OFX/QFX for your accountant or accounting software.',
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
      'Ingest or add entries, generate invoices on demand, and produce signed reports — everything stays in your local sqlite file.',
    lines: [
      { kind: 'comment', text: '# 1. Ingest a receipt (or use the web UI)' },
      {
        kind: 'command',
        text: 'localfiscal ingest ~/Downloads/coffee-receipt.jpg',
      },
      { kind: 'output', text: 'INGESTED: 1 | 2026-06-28 | Demo Cafe | $12.50 | meals' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 2. Add income, then list (newest first)' },
      {
        kind: 'command',
        text: 'localfiscal add 2026-06-28 "Acme Client" 1200 --income',
      },
      { kind: 'output', text: 'ADDED: 2 | $1,200.00 | income' },
      {
        kind: 'command',
        text: 'localfiscal list-tx --limit 2',
      },
      { kind: 'output', text: '2 | 2026-06-28 | Acme Client | $1,200.00 | general | income' },
      { kind: 'output', text: '1 | 2026-06-28 | Demo Cafe | $12.50 | meals | expense' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 3. Invoice + signed report (income / expense / net — never a false total)' },
      {
        kind: 'command',
        text: 'localfiscal invoice "Acme Client" 1200 --out invoice.pdf',
      },
      { kind: 'output', text: 'INVOICE: invoice.pdf' },
      {
        kind: 'command',
        text: 'localfiscal report --fmt md',
      },
      { kind: 'output', text: 'REPORT: data/report-now.md' },
      { kind: 'output', text: '## USD', tone: 'muted' },
      { kind: 'output', text: '- **Income:** $1,200.00', tone: 'muted' },
      { kind: 'output', text: '- **Expenses:** $12.50', tone: 'muted' },
      { kind: 'output', text: '- **Net:** $1,187.50', tone: 'muted' },
    ],
  },

  differentiators: {
    heading: 'Why it is different',
    points: [
      {
        title: 'Truly local-first & private',
        body:
          'Everything lives in a single sqlite file on your machine. Optional local Ollama vision for better receipt OCR is off by default — with no endpoint configured there is no network call, ever. Data never leaves unless you explicitly export.',
      },
      {
        title: 'Correct & honest about money',
        body:
          'Amounts are exact integer minor units with an explicit ISO-4217 currency — never floats. Markdown, JSON, and CSV reports always agree to the cent, and mixed currencies are reported separately instead of summed into a false total.',
      },
      {
        title: 'Honest by construction',
        body:
          'A receipt it cannot parse is flagged needs-review, never given an invented amount, and the web upload is path-traversal-safe. The v0.2 "harden & honest" release makes every claim on this page true and tested — exports included.',
      },
      {
        title: 'Solopreneur & SMB friendly',
        body:
          'Simple CLI + web. One-command, non-root Docker. Real CSV and OFX/QFX exports accountants actually use. No subscriptions, no vendor lock-in, no data hostage situation.',
      },
    ],
  },

  links: [
    { label: 'GitHub repository', url: GITHUB, primary: true },
    { label: 'v0.2.0 release', url: RELEASE, primary: true },
    { label: 'Dan Mercede', url: 'https://www.danmercede.com' },
  ],

  footerNote: 'MIT licensed. Built by Dan Mercede.',
};
