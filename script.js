/**
 * Folklorama Korean Pavilion - Interactive Food Menu
 * Developed for premium aesthetic, accessibility, and high performance.
 */

// ==========================================================================
// MENU DATA
// ==========================================================================

const foodItems = [
  {
    id: "chicken-gangjeong",
    name: "Chicken Gangjeong",
    price: 20.00,
    category: "main",
    ingredients: "Chicken, Hot Pepper Sauce, Onion, Salt, Garlic Powder, Soy Sauce, Sugar or Syrup, Ketchup",
    tag: "Festival Favorite",
    isSpicy: true,
    image: "assets/images/chicken_gangjeong.png"
  },
  {
    id: "bulgogi",
    name: "Bulgogi",
    price: 20.00,
    category: "main",
    ingredients: "Beef, Yellow Onion, Carrot, Green Onion, Sesame Oil, Salt, Garlic Powder, Soy Sauce, Sugar, Black Pepper",
    tag: "Signature Dish",
    isSpicy: false,
    image: "assets/images/bulgogi.png"
  },
  {
    id: "gimbap",
    name: "Gimbap",
    price: 10.00,
    category: "snack",
    ingredients: "Rice, Seaweed, Carrots, Cucumber, Pickled Radish, Sesame Oil, Salt, Soy Sauce, Sugar or Syrup, Vinegar, Egg",
    tag: "Classic Street Food",
    isSpicy: false,
    image: "assets/images/gimbap.png"
  },
  {
    id: "japchae",
    name: "Japchae",
    price: 10.00,
    category: "snack",
    ingredients: "Sweet Potato Noodle, Carrots, Mushrooms, Spinach, Sesame Oil, Salt, Garlic Powder, Soy Sauce, Sugar, Black Pepper",
    tag: "Traditional Noodles",
    isSpicy: false,
    image: "assets/images/japchae.png"
  },
  {
    id: "kimchi",
    name: "Kimchi (500g)",
    price: 7.99,
    extraPrice: "1kg size option available for $12.99",
    category: "side",
    ingredients: "Napa Cabbage, Green Onion, Onion, Sugar, Salt, Chili Powder, Garlic Powder, Fish Sauce",
    tag: "Traditional Side",
    isSpicy: true,
    image: "assets/images/kimchi.png"
  },
  {
    id: "tteokkochi",
    name: "Tteok-ko-chi",
    price: 6.00,
    category: "snack",
    ingredients: "Rice Cake, Hot Pepper Sauce, Onion, Salt, Garlic Powder, Soy Sauce, Sugar or Syrup, Ketchup",
    tag: "Sweet & Spicy Skewers",
    isSpicy: true,
    image: "assets/images/tteokkochi.png"
  },
  {
    id: "bibimbap",
    name: "Bibimbap (Vegetable)",
    price: 18.00,
    extraPrice: "Optional Beef version: $20.00",
    category: "main",
    ingredients: "Rice, Carrot, Spinach, Mushroom, Hot Pepper Sauce, Sesame Oil, Garlic Powder, Salt, Soy Sauce, Sugar, Black Pepper",
    tag: "Healthy & Nutritious",
    isSpicy: true,
    image: "assets/images/bibimbap.png"
  },
  {
    id: "mandoo",
    name: "Mandoo (5 pcs)",
    price: 10.00,
    category: "snack",
    ingredients: "Bean Noodles, Cabbage, Carrots, Mushrooms, Onion, Flour Wrap, Sesame Oil, Salt, Black Pepper, Garlic Powder",
    tag: "Crispy Dumplings",
    isSpicy: false,
    image: "assets/images/mandoo.png"
  }
];

const drinkItems = [
  {
    id: "soju",
    name: "Soju",
    description: "Clear, clean, and distilled traditional Korean liquor.",
    icon: "fa-solid fa-glass-whiskey",
    options: [
      { serving: "Cup (30ml)", price: 4.99 }
    ]
  },
  {
    id: "cass-beer",
    name: "Cass Beer",
    description: "South Korea's top-selling lager. Crisp, refreshing, and light.",
    icon: "fa-solid fa-beer-mug-empty",
    options: [
      { serving: "Can (500ml)", price: 8.99 },
      { serving: "Bottle (330ml)", price: 6.99 }
    ]
  },
  {
    id: "makgeolli",
    name: "Makgeolli",
    description: "Sweet, milky, and slightly sparkling traditional Korean rice wine.",
    icon: "fa-solid fa-wine-glass",
    options: [
      { serving: "Cup (180ml)", price: 5.99 }
    ]
  }
];

// ==========================================================================
// DOM ELEMENT SELECTIONS
// ==========================================================================

const foodGrid = document.getElementById("foodGrid");
const drinksGrid = document.getElementById("drinksGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const mainHeader = document.getElementById("mainHeader");
const backToTopBtn = document.getElementById("backToTop");
const mobileNavToggle = document.getElementById("mobileNavToggle");
const primaryNav = document.getElementById("primaryNav");
const navLinks = document.querySelectorAll(".nav-link");

// ==========================================================================
// RENDER FUNCTIONS
// ==========================================================================

/**
 * Renders food cards into the menu grid
 * @param {Array} items - Array of food objects to render
 */
function renderFoodGrid(items) {
  if (!foodGrid) return;
  foodGrid.innerHTML = "";

  if (items.length === 0) {
    foodGrid.innerHTML = `
      <div class="noscript-warning" style="border-color: var(--border-color); background: transparent;">
        No items found in this category.
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    // Generate card element
    const card = document.createElement("div");
    card.className = "food-card card-animation";
    // Stagger animation timing slightly for premium render effect
    card.style.animationDelay = `${index * 0.05}s`;

    // Extra option tag if present
    const extraPriceHtml = item.extraPrice 
      ? `<div class="food-card-extra-price">
          <i class="fa-solid fa-circle-plus"></i> ${item.extraPrice}
         </div>`
      : "";

    // Spicy tag icon helper
    const spiceIcon = item.isSpicy 
      ? ` <i class="fa-solid fa-pepper-hot" style="color: var(--color-secondary-light); margin-left: 5px;" title="Spicy"></i>` 
      : "";

    card.innerHTML = `
      <div class="food-card-img-container">
        <span class="food-card-tag">${item.tag}</span>
        <span class="food-card-price-badge">$${item.price.toFixed(2)}</span>
        <img src="${item.image}" alt="Delicious fresh plate of ${item.name}" loading="lazy">
      </div>
      <div class="food-card-body">
        <span class="food-card-category">${item.category} dish</span>
        <h3 class="food-card-title">${item.name}${spiceIcon}</h3>
        <div class="food-card-divider"></div>
        <div class="food-card-ingredients">
          <span class="ingredients-title">
            <i class="fa-solid fa-list-check"></i> Ingredients
          </span>
          <span class="ingredients-list">${item.ingredients}</span>
        </div>
        ${extraPriceHtml}
      </div>
    `;

    foodGrid.appendChild(card);
  });
}

/**
 * Renders drink cards into the drinks section grid
 * @param {Array} drinks - Array of drink objects to render
 */
function renderDrinksGrid(drinks) {
  if (!drinksGrid) return;
  drinksGrid.innerHTML = "";

  drinks.forEach((drink) => {
    const card = document.createElement("div");
    card.className = "drink-card";

    // Generate pricing options rows
    let pricingHtml = "";
    drink.options.forEach((opt) => {
      // Highlight Cass Can since it's the premium volume
      const isHighlighted = opt.serving.includes("500ml");
      pricingHtml += `
        <div class="drink-price-row ${isHighlighted ? 'highlight' : ''}">
          <span class="drink-option-name">
            <i class="fa-solid fa-caret-right" style="color: var(--color-primary)"></i> ${opt.serving}
          </span>
          <span class="drink-price-val">$${opt.price.toFixed(2)}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div>
        <div class="drink-icon">
          <i class="${drink.icon}"></i>
        </div>
        <div class="drink-header">
          <span class="drink-serving-label">Korean Spirits</span>
          <h3 class="drink-title">${drink.name}</h3>
        </div>
        <p class="drink-desc">${drink.description}</p>
      </div>
      <div class="drink-pricing-options">
        ${pricingHtml}
      </div>
    `;

    drinksGrid.appendChild(card);
  });
}

// ==========================================================================
// EVENT HANDLERS & ROUTING LOGIC
// ==========================================================================

// Category Filter Handling
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Toggle active state for button
    filterButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    const category = btn.getAttribute("data-filter");

    // Fade grid out, filter items, and fade back in
    if (foodGrid) {
      foodGrid.style.opacity = "0.3";
      
      setTimeout(() => {
        if (category === "all") {
          renderFoodGrid(foodItems);
        } else {
          const filtered = foodItems.filter((item) => item.category === category);
          renderFoodGrid(filtered);
        }
        foodGrid.style.opacity = "1";
      }, 200);
    }
  });
});

// Scroll Behaviors (Sticky nav bar, Back-to-top floating button)
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // Header Sticky state
  if (scrollTop > 50) {
    mainHeader.classList.add("scrolled");
  } else {
    mainHeader.classList.remove("scrolled");
  }

  // Floating button visible threshold
  if (scrollTop > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Back to Top button click
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Mobile Menu Navigation toggle
if (mobileNavToggle) {
  mobileNavToggle.addEventListener("click", () => {
    const isExpanded = mobileNavToggle.getAttribute("aria-expanded") === "true";
    mobileNavToggle.setAttribute("aria-expanded", !isExpanded);
    primaryNav.classList.toggle("open");
    
    // Toggle icon class between bars and Xmark
    const icon = mobileNavToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  });
}

// Close mobile navigation on menu item click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (primaryNav.classList.contains("open")) {
      primaryNav.classList.remove("open");
      mobileNavToggle.setAttribute("aria-expanded", "false");
      const icon = mobileNavToggle.querySelector("i");
      if (icon) {
        icon.className = "fa-solid fa-bars";
      }
    }
  });
});

// Section highlighting in Nav menu on scroll (using IntersectionObserver)
const sections = document.querySelectorAll("section[id]");

if ("IntersectionObserver" in window) {
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Highlight nav item when section covers viewport center
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// ==========================================================================
// INITIAL SETUP ON DOM LOAD
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderFoodGrid(foodItems);
  renderDrinksGrid(drinkItems);
});
