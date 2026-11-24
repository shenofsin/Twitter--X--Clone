# Twitter (X) Clone

A responsive **X (formerly Twitter) homepage clone** built using HTML, Tailwind CSS, and JavaScript.

This project was created as a hands-on learning exercise to practice frontend development, responsive layouts, and UI design.

## Preview

A recreation of the X homepage featuring a dark interface and a responsive layout inspired by the original platform.

## Features

- Responsive three-column layout
- Sidebar navigation with profile section
- Mobile and tablet sidebar toggle
- Post composer UI
- Feed with post cards and images
- Trending topics section
- Who to Follow section
- Hover effects and CSS transitions
- Responsive design using Tailwind CSS

## Tech Stack

- HTML5
- Tailwind CSS v4
- JavaScript
- Material Symbols
- Node.js and npm (for Tailwind CLI)

## Project Structure

```text
Twitter--X--Clone/
├── index.html
├── script.js
├── app.js
├── images/
├── src/
│   └── input.css
├── dist/
│   └── output.css
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shenofsin/Twitter--X--Clone.git
```

### 2. Navigate to the project directory

```bash
cd Twitter--X--Clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the Tailwind CSS build process

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

This command watches your HTML and CSS files and rebuilds the compiled stylesheet whenever changes are detected.

### 5. Run the project

Open `index.html` using VS Code Live Server, or open it directly in your browser.

Make sure the Tailwind CSS build process is running so that your styles are properly generated.

## What I Learned

While building this project, I practiced:

- Structuring webpages using HTML
- Building responsive layouts with Flexbox
- Using Tailwind CSS utility classes
- Working with responsive breakpoints
- Creating hover effects and transitions
- Manipulating DOM elements using JavaScript
- Implementing a sidebar toggle
- Managing dependencies using npm
- Using Git and GitHub for version control

## Future Improvements

- Rebuild the UI using React
- Convert repeated elements into reusable components
- Improve sidebar behavior across screen sizes
- Add more interactive features
- Integrate a Node.js and Express backend
- Add database functionality in the future

## Disclaimer

This project is a personal learning exercise and is **not affiliated with, endorsed by, or
