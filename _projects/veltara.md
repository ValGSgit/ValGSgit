---
layout: project
title: "Veltara"
description: "Online world game - a full-stack social platform centered around a shared Three.js planet"
github_url: "https://github.com/ValGSgit/Veltara"
language: "TypeScript"
language_color: "#3178c6"
tech_stack:
  - TypeScript
  - Three.js
  - TailwindCSS
  - Cloudflare Workers
  - Durable Objects
  - Supabase
  - Stripe
key_features:
  - Shared 3D planet rendered with Three.js
  - Real-time region multiplayer via Durable Objects
  - AI-powered world features with Workers AI
  - Developer API + embeddable SDK (@veltara/sdk)
  - Developer portal with docs, keys, usage, and playground
  - Stripe subscriptions and credit packs
file_structure: |
  Veltara/
  ├── apps/
  │   ├── web/            # Main immersive app (Three.js + Tailwind)
  │   ├── workers/        # Cloudflare Workers + Durable Objects backend
  │   ├── sdk/            # Embeddable npm package (@veltara/sdk)
  │   └── portal/         # Developer portal
  ├── packages/shared/    # Shared types, protocol, constants, utils
  ├── supabase/migrations/
  └── docs/
---

# 🌍 Veltara — Online World Game

A full-stack social platform centered around a shared Three.js planet, with real-time region multiplayer, AI-powered world features, and a developer API + SDK ecosystem.

## Architecture

A pnpm monorepo with four apps sharing a common contracts package:

- **apps/web** — the main immersive app (Three.js + vanilla JS + Tailwind)
- **apps/workers** — Cloudflare Workers and Durable Object backend
- **apps/sdk** — embeddable npm package (@veltara/sdk)
- **apps/portal** — developer portal for docs, keys, usage, and playground

## Tech Stack

**Frontend**: Vite, vanilla JavaScript, TailwindCSS, Three.js
**Backend**: Cloudflare Workers, Durable Objects, KV, R2, Workers AI
**Data**: Supabase Postgres + pgvector
**Billing**: Stripe subscriptions and credit packs
