---
layout: project
title: "Transcendence"
description: "Full-stack social gaming platform with a 3D Alpaca Farm game - 42 School final project"
github_url: "https://github.com/ValGSgit/AlpacaParty-ft_transcendence"
language: "JavaScript"
language_color: "#f1e05a"
tech_stack:
  - Vue 3
  - Three.js
  - Node.js
  - Express.js
  - Socket.io
  - PostgreSQL
  - Docker
  - Nginx
key_features:
  - Interactive 3D Alpaca Farm game built with Three.js
  - Secure authentication (JWT + OAuth 2.0 + 2FA/TOTP)
  - Real-time chat system with Socket.io
  - Dual-database architecture (SQLite/PostgreSQL)
  - Fully containerized with Docker Compose
  - Nginx reverse proxy with SSL
  - Comprehensive test coverage with Jest and Supertest
file_structure: |
  AlpacaParty-ft_transcendence/
  ├── frontend/           # Vue 3 + Vite + Three.js app
  │   ├── src/
  │   └── public/
  ├── backend/            # Node.js + Express API
  │   ├── routes/
  │   ├── auth/           # JWT, OAuth, 2FA
  │   └── sockets/        # Real-time chat & game events
  ├── nginx/              # Reverse proxy + SSL config
  ├── docker-compose.yml
  └── Makefile
---

# 🦙 Transcendence — AlpacaParty

**42 School Final Project** — a real-world full-stack web application built as a team of 4-5 people.

A comprehensive social gaming platform combining an interactive 3D Alpaca Farm game with social networking features: friends, real-time chat, profiles, and match history.

## Key Achievements

- 🎮 Built a 3D game environment using Three.js
- 🔐 Implemented secure authentication (JWT + OAuth 2.0 with Google/GitHub + 2FA)
- 💬 Developed a real-time chat system with Socket.io
- 🐳 Containerized the full stack with Docker and Docker Compose
- 🗄️ Designed a dual-database architecture (SQLite/PostgreSQL)
- 🧪 Achieved comprehensive test coverage with Jest and Supertest
- 🔧 Configured an Nginx reverse proxy with SSL

## Tech Stack

**Frontend**: Vue 3 (Composition API), Vite, Three.js, Pinia, Socket.io Client
**Backend**: Node.js, Express.js, Passport.js, JWT
**Database**: PostgreSQL 16, SQLite
**DevOps**: Docker, Docker Compose, Nginx
**Testing**: Jest, Supertest
