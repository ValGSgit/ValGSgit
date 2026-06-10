---
layout: project
title: "UNIQA Conversion Coach"
description: "🥈 2nd place at the Zero One Supercomputing Hackathon - AI conversion coach for an insurance funnel"
github_url: "https://github.com/ValGSgit/ZeroOneHack-PromptCorn-Sub"
language: "Python"
language_color: "#3572A5"
tech_stack:
  - Python
  - Gradient Boosting
  - FastAPI
  - scikit-learn
key_features:
  - Trained gradient-boosting classifier blended with transparent hard rules
  - Per-segment intervention logic grounded in segmentation config
  - Online conversion lifted from ~4.8% to ~17.3% (×3.6) on held-out journeys
  - Trigger precision 72% / recall 86%
  - Every fire is logged with its trigger reason — fully auditable
  - Out-of-scope users cleanly routed to an advisor
file_structure: |
  SubRepo/
  ├── leonardo_sim/     # Funnel, coach, training, evaluation, personas
  │   ├── coach/        # Funnel + coach + features + response model
  │   ├── artifacts/    # Trained model, eval metrics + plots
  │   └── *.py / *.sh   # Simulator, trainer, evaluator, runners
  ├── demo/             # FastAPI app with live coach + evidence showcases
  ├── README.md         # Architecture + technical doc
  └── REPORT.md         # Honest evaluation, assumptions, disclosures
---

# 🥈 UNIQA Conversion Coach — Zero One Supercomputing Hackathon

**2nd place** at the Zero One Hack_01 (Insurance/UNIQA track) — the result that earned me my internship.

An AI **Conversion Coach** that detects when a visitor is about to abandon UNIQA's online private-doctor health-insurance calculator and fires a **per-segment** intervention to keep them converting online — instead of dropping off at the two price cliffs (66% at the initial price, 78% at the final price, against a ~5.6% baseline online conversion).

## Why it stands out

It is **not an LLM wrapper**. Detection is a trained gradient-boosting classifier blended with transparent hard rules; the decision layer is per-segment logic grounded in UNIQA's segmentation config. Every fire is logged with its trigger reason, so the whole coach is auditable.

## Results

On identical held-out journeys, online conversion goes from **~4.8% → ~17.3% (×3.6)**, with trigger precision **72%** and recall **86%**. Out-of-scope users (hospital / family / advisory-only tariffs) are cleanly routed to an advisor — a correct exit, never counted as a conversion.
