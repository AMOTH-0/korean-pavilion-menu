/**
 * Folklorama Korean Pavilion - Mobile Web App Menu
 * Highly optimized for touch targets, scanning speed, and lightweight performance.
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
    tag: "Popular",
    isSpicy: true,
    image: "assets/images/chicken_gangjeong.png"
  },
  {
    id: "bulgogi",
    name: "Bulgogi",
    price: 20.00,
    category: "main",
    ingredients: "Beef, Yellow Onion, Carrot, Green Onion, Sesame Oil, Salt, Garlic Powder, Soy Sauce, Sugar, Black Pepper",
    tag: "Signature",
    isSpicy: false,
    image: "assets/images/bulgogi.png"
  },
  {
    id: "gimbap",
    name: "Gimbap",
    price: 10.00,
    category: "snack",
    ingredients: "Rice, Seaweed, Carrots, Cucumber, Pickled Radish, Sesame Oil, Salt, Soy Sauce, Sugar or Syrup, Vinegar, Egg",
    tag: "Classic",
    isSpicy: false,
    image: "assets/images/gimbap.png"
  },
  {
    id: "japchae",
    name: "Japchae",
    price: 10.00,
    category: "snack",
    ingredients: "Sweet Potato Noodle, Carrots, Mushrooms, Spinach, Sesame Oil, Salt, Garlic Powder, Soy Sauce, Sugar, Black Pepper",
    tag: "Noodles",
    isSpicy: false,
    image: "assets/images/japchae.png"
  },
  {
    id: "kimchi",
    name: "Kimchi (500g)",
    price: 7.99,
    extraPrice: "1kg size: $12.99",
    category: "side",
    ingredients: "Napa Cabbage, Green Onion, Onion, Sugar, Salt, Chili Powder, Garlic Powder, Fish Sauce",
    tag: "Fermented",
    isSpicy: true,
    image: "assets/images/kimchi.png"
  },
  {
    id: "tteokkochi",
    name: "Tteok-ko-chi",
    price: 6.00,
    category: "snack",
    ingredients: "Rice Cake, Hot Pepper Sauce, Onion, Salt, Garlic Powder, Soy Sauce, Sugar or Syrup, Ketchup",
    tag: "Skewers",
    isSpicy: true,
    image: "assets/images/tteokkochi.png"
  },
  {
    id: "bibimbap",
    name: "Bibimbap (Veg)",
    price: 18.00,
    extraPrice: "Beef option: $20.00",
    category: "main",
    ingredients: "Rice, Carrot, Spinach, Mushroom, Hot Pepper Sauce, Sesame Oil, Garlic Powder, Salt, Soy Sauce, Sugar, Black Pepper",
    tag: "Rice Bowl",
    isSpicy: true,
    image: "assets/images/bibimbap.png"
  },
  {
    id: "mandoo",
    name: "Mandoo (5 pcs)",
    price: 10.00,
    category: "snack",
    ingredients: "Bean Noodles, Cabbage, Carrots, Mushrooms, Onion, Flour Wrap, Sesame Oil, Salt, Black Pepper, Garlic Powder",
    tag: "Dumplings",
    isSpicy: false,
    image: "assets/images/mandoo.png"
  }
];

const drinkItems = [
  {
    id: "soju",
    name: "Soju",
    description: "Clear, distilled Korean liquor.",
    icon: "fa-solid fa-glass-whiskey",
    options: [
      { serving: "Cup (30ml)", price: 4.99 }
    ]
  },
  {
    id: "cass-beer",
    name: "Cass Beer",
    description: "South Korea's top-selling light lager.",
    icon: "fa-solid fa-beer-mug-empty",
    options: [
      { serving: "Can (500ml)", price: 8.99 },
      { serving: "Bottle (330ml)", price: 6.99 }
    ]
  },
  {
    id: "makgeolli",
    name: "Makgeolli",
    description: "Traditional sweet, milky rice wine.",
    icon: "fa-solid fa-wine-glass",
    options: [
      { serving: "Cup (180ml)", price: 5.99 }
    ]
  }
];

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================

const foodListContainer = document.getElementById("foodListContainer");
const drinksListContainer = document.getElementById("drinksListContainer");
const filterChips = document.querySelectorAll(".chip");
const stickyNavTabs = document.querySelectorAll(".tab-link");
const backToTopBtn = document.getElementById("backToTopBtn");

// ==========================================================================
// RENDER FUNCTIONS
// ==========================================================================

/**
 * Renders food cards in horizontal mobile layout
 * @param {Array} items - Array of food objects
 */
function renderFoodList(items) {
  if (!foodListContainer) return;
  foodListContainer.innerHTML = "";

  if (items.length === 0) {
    foodListContainer.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 0.85rem;">
        No items found in this category.
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "food-card card-animation";
    card.style.animationDelay = `${index * 0.03}s`; // Fast staggered animation

    // Check for extra sizes/variations
    const extraPriceHtml = item.extraPrice
      ? `<div class="food-card-extras"><i class="fa-solid fa-circle-plus"></i> ${item.extraPrice}</div>`
      : "";

    // Spicy tag helper
    const spiceIndicator = item.isSpicy
      ? `<i class="fa-solid fa-pepper-hot" style="color: var(--color-red-light); margin-left: 4px;" title="Spicy"></i>`
      : "";

    card.innerHTML = `
      <div class="food-card-img-wrap">
        <span class="food-card-badge">${item.tag}</span>
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="food-card-info">
        <div class="food-card-header">
          <span class="food-card-name">${item.name}${spiceIndicator}</span>
          <span class="food-card-price">$${item.price.toFixed(2)}</span>
        </div>
        <div class="food-card-ingredients-box">
          <p class="food-card-ingredients-text">${item.ingredients}</p>
        </div>
        ${extraPriceHtml}
      </div>
    `;

    foodListContainer.appendChild(card);
  });
}

/**
 * Renders drinks items in card list
 * @param {Array} drinks - Array of drinks
 */
function renderDrinksList(drinks) {
  if (!drinksListContainer) return;
  drinksListContainer.innerHTML = "";

  drinks.forEach((drink) => {
    const card = document.createElement("div");
    card.className = "drink-item-card";

    let pricingRowsHtml = "";
    drink.options.forEach((opt) => {
      const isHighlighted = opt.serving.includes("500ml");
      pricingRowsHtml += `
        <div class="drink-price-row ${isHighlighted ? 'highlight' : ''}">
          <span class="drink-size">${opt.serving}</span>
          <span class="drink-cost">$${opt.price.toFixed(2)}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="drink-card-top">
        <i class="${drink.icon} drink-card-icon"></i>
        <div class="drink-card-details">
          <h3 class="drink-card-name">${drink.name}</h3>
          <p class="drink-card-desc">${drink.description}</p>
        </div>
      </div>
      <div class="drink-card-pricing">
        ${pricingRowsHtml}
      </div>
    `;

    drinksListContainer.appendChild(card);
  });
}

// ==========================================================================
// INTERACTIONS & NAVIGATION SCROLL
// ==========================================================================

// Food Filter Chip selection
filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((c) => {
      c.classList.remove("active");
      c.setAttribute("aria-pressed", "false");
    });
    chip.classList.add("active");
    chip.setAttribute("aria-pressed", "true");

    const category = chip.getAttribute("data-filter");

    // Smooth opacity filter transition
    foodListContainer.style.opacity = "0.2";
    setTimeout(() => {
      if (category === "all") {
        renderFoodList(foodItems);
      } else {
        const filtered = foodItems.filter((item) => item.category === category);
        renderFoodList(filtered);
      }
      foodListContainer.style.opacity = "1";
    }, 150);
  });
});

// Scroll Event: Back-to-Top button visibility
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Scroll Back-to-Top click handler
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Section Scroll Intersection Observer (Highlights Nav Tabs on Scroll)
const sections = document.querySelectorAll("section[id]");

if ("IntersectionObserver" in window) {
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px", // Focus tracking window around screen upper-middle section
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.getAttribute("id");
        stickyNavTabs.forEach((tab) => {
          tab.classList.remove("active");
          if (tab.getAttribute("href") === `#${currentSectionId}`) {
            tab.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sect) => observer.observe(sect));
}

// Manual active-class switch when clicking tabs (improves immediate feedback)
stickyNavTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    stickyNavTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// ==========================================================================
// DOM INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderFoodList(foodItems);
  renderDrinksList(drinkItems);
});
