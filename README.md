# JavaScript Projects Collection

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Browser-Based-App-FF6B6B?style=for-the-badge" alt="Browser App" />
</div>

<p align="center">
  A curated mini-portfolio of beginner-friendly frontend projects built with plain HTML, CSS, and JavaScript.
</p>

---

## Overview

This workspace contains a set of small interactive web apps designed to practice core frontend skills like DOM manipulation, event handling, styling, and user input validation.

Each project is self-contained and can be opened directly in the browser or served locally with a tiny HTTP server.

---

## Project Showcase

### 1) QR Code Generator

A utility that turns text or a URL into a QR code image and lets users download it.

- Generates QR quickly from user input
- Uses a public QR code API
- Downloadable output
- Clean card-based interface

Directory: [01_qr_code_generator](01_qr_code_generator)

### 2) Random Color Generator

A playful app that creates random hex colors and lets users copy the code instantly.

- Random color generation
- Live color preview
- Clipboard copy support
- Starter-friendly UI

Directory: [02_random_color_generator](02_random_color_generator)

### 3) BMI Calculator

A practical health tool that calculates BMI from height and weight and gives a category result.

- Input validation for height and weight
- BMI value calculation
- Weight category feedback
- Responsive form layout

Directory: [03_bmi_calculator](03_bmi_calculator)

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)

### Browser APIs Used
- DOM manipulation
- Event listeners
- Form validation
- Clipboard API
- Fetch/URL-based API use for QR generation

### Tools
- VS Code
- Git
- Local browser preview

---

## Folder Structure

```bash
js_projects/
├── README.md
├── 01_qr_code_generator/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── README.md
│   └── QR-Code.png
├── 02_random_color_generator/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── README.md
│   ├── Generating.png
│   └── Copied_message.png
└── 03_bmi_calculator/
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
```

---

## Run Any Project

### Option 1: Open directly
Open the project folder and launch the HTML file in your browser.

### Option 2: Run a local server
From the root folder, use:

```bash
python3 -m http.server
```

Then visit:

```bash
http://localhost:8000
```

---

## Learning Goals

These mini-projects help build skills in:

- JavaScript fundamentals
- DOM selection and updates
- Event-driven programming
- Responsive UI design
- Basic form validation
- Real-world UI interactions

---

## Quick Notes

This collection is intentionally simple and beginner-focused, making it ideal for:

- learning JavaScript step by step
- practicing front-end interactions
- building a small portfolio of web apps
- understanding how browser-based apps work

---

## Next Up

You can extend these projects by adding:

- dark mode toggles
- animations and micro-interactions
- local storage persistence
- improved validations
- stronger UI/UX polish

<p align="center">
  <strong>Built with curiosity, HTML, CSS, and JavaScript.</strong>
</p>
