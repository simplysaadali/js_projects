# QR Code Generator

A simple web app that generates QR codes from text or URLs and lets users download the generated image.

## Features

- Enter text or a URL
- Generate a QR code instantly
- Download the QR code as a PNG image
- Clean, responsive card-style UI

## Screenshot

![QR Code Generator Screenshot](QR-Code.png)

## Tech Stack

- HTML
- CSS
- JavaScript
- QR Server API for QR code generation

## How to Use

1. Open `index.html` in your browser.
2. Type any text or URL in the input field.
3. Click the "Generate QR Code" button.
4. The QR code will appear on the page.
5. Click "Download QR Code" to save it as a PNG file.

## Project Structure

```bash
01_qr_code_generator/
├── index.html
├── style.css
├── script.js
├── QR-Code.png
└── README.md
```

## Run Locally

Because this is a front-end project, you can open the HTML file directly in a browser. If you prefer a local server, run:

```bash
python3 -m http.server
```

Then open:

```bash
http://localhost:8000
```

## Notes

This project uses the public QR code generation service from `api.qrserver.com` to create the QR image dynamically. Which helps all the people to generate the QR-code for free.
