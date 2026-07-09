# Folklorama Korean Pavilion Food Menu Website

Welcome to the digital food menu website for the Folklorama Korean Pavilion! This website is built with clean, modern, semantic HTML5, custom CSS3, and lightweight vanilla JavaScript. It is fully responsive, high-performance, and ready for deployment on GitHub Pages.

## Features

- **Modern Korean Theme:** Sleek dark design with rich gold and crimson accents, dynamic animations, and traditional Korean lattice design patterns.
- **Dynamic Category Filter:** Interactive tabs that filter between All, Main Dishes, Snacks, and Side Dishes with smooth fading animations.
- **Festival Specials & Combos:** A designated highlight section for combo items, highlighting savings and convenience.
- **Traditional Drinks Menu:** A dedicated section showcasing Korean drinks (Soju, Beer, Makgeolli) with serving sizes and pricing details.
- **Ingredients & Allergen Guide:** Transparency section for customers containing common Korean condiments and quick allergen warnings.
- **Mobile First & Accessible:** Clean navigation, large buttons, responsive layouts, keyboard accessibility, and optimized reading contrasts.

## Files Structure

```
├── index.html          # Main HTML5 semantic file
├── styles.css          # Core stylesheet containing the styling system & responsive queries
├── script.js           # JavaScript code containing menu data and DOM interaction logic
└── assets/
    └── images/         # High-quality realistic food images
        ├── bibimbap.png
        ├── bulgogi.png
        ├── chicken_gangjeong.png
        ├── gimbap.png
        ├── japchae.png
        ├── kimchi.png
        ├── mandoo.png
        └── tteokkochi.png
```

## Running Locally

Since this is a fully static website, you can run it easily:

1. Double-click `index.html` to open it directly in any modern browser.
2. Alternatively, run a local development server for the best experience (e.g., using VS Code's "Live Server" extension, or via python):
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

## Deploying to GitHub Pages (Hosting)

Hosting on GitHub Pages is free and takes just a few steps:

1. **Create a GitHub Repository:**
   - Log in to your GitHub account.
   - Click **New** to create a new repository.
   - Name it (e.g., `korean-pavilion-menu`).
   - Keep the repository **Public**.
   - Leave "Initialize this repository with a README" unchecked, and click **Create repository**.

2. **Upload Website Files:**
   - On your computer, open a terminal in the folder containing these files.
   - Initialize git, commit, and push to GitHub:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of Folklorama Korean Pavilion Food Menu"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/korean-pavilion-menu.git
     git push -u origin main
     ```
     *(Be sure to replace `YOUR_USERNAME` with your actual GitHub username!)*

3. **Enable GitHub Pages:**
   - Go to your repository settings page on GitHub.
   - In the left sidebar under "Code and automation", click **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)` and click **Save**.
   - Within 1–2 minutes, your website will be live at `https://YOUR_USERNAME.github.io/korean-pavilion-menu/`!

## How to Update Prices or Ingredients (For Non-Developers)

All food items and drinks are stored in a simple, readable array at the top of the [script.js](file:///c:/Users/USER/OneDrive%20-%20University%20of%20Manitoba/Desktop/Projects/Korean_Pavillion_%20Food/script.js) file. 

### To Update a Price:
1. Open `script.js` in a text editor.
2. Find the food item (e.g., Bulgogi).
3. Change the number next to `price:`. E.g., to make Bulgogi $22, change:
   ```javascript
   price: 20.00,
   ```
   to:
   ```javascript
   price: 22.00,
   ```
4. Save the file.

### To Update Ingredients:
1. Find the food item in `script.js`.
2. Edit the text inside the double quotes next to `ingredients:`.
3. Save the file.
