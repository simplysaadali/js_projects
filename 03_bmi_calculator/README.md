## Live Demo
https://bmi-calculator-rust-five.vercel.app/

**Stack Used:**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## BMI Calculator

> A small, focused tool that turns height and weight into an instant Body Mass Index reading and a plain-language category.

This project is a single-page form built with vanilla HTML, CSS, and JavaScript. A user enters height in centimeters and weight in kilograms, submits the form, and gets back a calculated BMI along with a color-coded weight category and a validation message if the input isn't usable.

**Enter your numbers. Get your BMI. Know your category.**

[Quick start](#getting-started) · [How it works](#how-it-works) · [Project structure](#project-structure) · [Preview](#preview)

## The Product In One Minute

| | Capability | What it does |
|---|---|---|
| **01** | Input form | Collects height (cm) and weight (kg) |
| **02** | Validation | Blocks empty, non-numeric, or zero/negative values with an inline error |
| **03** | BMI calculation | Computes BMI from height and weight on form submit |
| **04** | Category feedback | Labels the result underweight, healthy, overweight, or obese |
| **05** | Color-coded result | Red, green, or orange text keyed to the category |
| **06** | Weight guide | Static reference card showing the BMI ranges |

### One submission, three signals

| Validation | BMI value | Category |
|---|---|---|
| Catches bad input before calculating. | Shows the exact number, to two decimal places. | Tells you what the number means, in color. |

## How It Works

```
flowchart LR
	A[Open Calculator] --> B[Enter height and weight]
	B --> C[Submit form]
	C --> D{Inputs valid?}
	D -- No --> E[Show red error message]
	D -- Yes --> F[Calculate BMI]
	F --> G[Display BMI value and category]
	classDef screen fill:#3a7d7b,color:#ffffff,stroke:#2f3e46,stroke-width:2px;
	classDef action fill:#f7e8d3,color:#2f3e46,stroke:#3a7d7b,stroke-width:2px;
	class A,C,F,G screen;
	class B,D,E action;
```

| Stage | Screen area | Responsibility |
|---|---|---|
| **1** | **Form** | Capture height and weight from the user |
| **2** | **Validation** | Reject missing, non-numeric, or non-positive values |
| **3** | **Calculation** | Apply the BMI formula: `weight / (height² / 10000)` |
| **4** | **Result panel** | Render the BMI value and category with matching color |

## What Is Included

### Input & Validation

- Text inputs for height (cm) and weight (kg)
- `preventDefault()` on submit to keep calculation client-side
- Rejects `NaN` and non-positive values with a red inline message

### Calculation

- BMI formula scaled for centimeters: `weight / ((height * height) / 10000)`
- Result rounded to two decimal places

### Result Feedback

- **Underweight** — BMI < 18.5 (red)
- **Healthy** — BMI 18.5–24.9 (green)
- **Overweight** — BMI 25–29.9 (orange)
- **Obese** — BMI ≥ 30 (red)
- A static "BMI Weight Guide" card for quick reference

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (flexbox, gradients, transitions) |
| Logic | JavaScript (ES6+, DOM APIs) |
| Fonts | Segoe UI / Roboto system stack |

## Project Structure

```
03_bmi_calculator/
├── index.html      # Form markup and results/weight-guide containers
├── style.css       # Card layout, gradient background, button states
├── script.js       # Validation, BMI formula, category logic
├── View.png        # Preview screenshot
└── README.md
```

## Getting Started

### Option 1: Open directly

Open `index.html` in your browser — no build step or dependencies required.

### Option 2: Run a local server

```
python3 -m http.server
```

Then visit:

```
http://localhost:8000
```

## Product Tour

### 1. Enter your numbers

Type your height in centimeters and weight in kilograms into the form fields.

### 2. Submit

Click **Calculate BMI**. Invalid or missing values are caught immediately with a red message.

### 3. Read your result

Your BMI appears with a category label — underweight, healthy, overweight, or obese — color-coded for quick reading.

### 4. Check the guide

The BMI Weight Guide card below the form stays visible as a reference for the ranges.

## Preview

[![BMI Calculator preview](https://github.com/simplysaadali/js_projects/raw/main/03_bmi_calculator/View.png)](https://github.com/simplysaadali/js_projects/blob/main/03_bmi_calculator/View.png)

## Learning Goals

- DOM selection and form event handling
- Input validation before running logic
- Conditional rendering of styled feedback
- Basic responsive, card-based UI design

**Built with HTML, CSS, and JavaScript.**
