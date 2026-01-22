# Experiment 01 – React SPA Navigation (Without Router)

This experiment demonstrates how to build a simple **Single Page Application (SPA)** in React **without using any routing library**.  
Navigation between pages is handled using **React state and conditional rendering**.

---

## 📌 Objective

- Understand how SPAs work internally
- Learn state-based navigation in React
- Practice component communication using props
- Avoid external routing libraries for clarity

## 🛠️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS (Vanilla)
- Node.js & npm

## 📂 Project Structure
experiment01/
├─ src/
│ ├─ components/
│ │ └─ Navbar.jsx
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ About.jsx
│ │ └─ Contact.jsx
│ ├─ App.jsx
│ └─ main.jsx
├─ public/
├─ index.html
├─ vite.config.js
└─ package.json

## ⚙️ How It Works

- The current page is stored in a React `useState` hook.
- The `Navbar` component updates the page state via props.
- The `App` component conditionally renders pages based on the state.
- No URL changes occur (no router is used).

