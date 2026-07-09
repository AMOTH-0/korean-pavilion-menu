/**
 * Folklorama Korean Pavilion - Mobile QR-Code Menu App
 * Optimized for one-hand scrolling, visual clarity under festival lighting, and fast loading.
 */

// ==========================================================================
// FOOD & DRINKS DATABASE
// ==========================================================================

const foodItems = [
  {
    id: "bulgogi",
    name: "Bulgogi",
    price: 20.00,
    category: "meals",
    shortDesc: "Sweet & savory thin-sliced marinated beef.",
    ingredients: "Beef, Yellow Onion, Carrot, Green Onion, Sesame Oil, Salt, Garlic Powder, Soy Sauce, Sugar, Black Pepper",
    tag: "Signature",
    isPopular: true,
    image: "assets/images/bulgogi.png"
  },
  {
    id: "chicken-gangjeong",
    name: "Chicken Gangjeong",
    price: 20.00,
    category: "meals",
    shortDesc: "Crispy sweet & spicy glaze fried chicken.",
    ingredients: "Chicken, Hot Pepper Sauce, Onion, Salt, Garlic Powder, Soy Sauce, Sugar or Syrup, Ketchup",
    tag: "Best Seller",
    isPopular: true,
    image: "assets/images/chicken_gangjeong.png"
  },
  {
    id: "bibimbap",
    name: "Bibimbap (Vegetable)",
    price: 18.00,
    extraPrice: "Beef option: $20.00",
    category: "meals",
    shortDesc: "Rice bowl with assorted seasoned vegetables & egg.",
    ingredients: "Rice, Carrot, Spinach, Mushroom, Hot Pepper Sauce, Sesame Oil, Garlic Powder, Salt, Soy Sauce, Sugar, Black Pepper",
    tag: "Healthy",
    isPopular: true,
    image: "assets/images/bibimbap.png"
  },
  {
    id: "gimbap",
    name: "Gimbap",
    price: 10.00,
    category: "snacks",
    shortDesc: "Sesame rice and vegetable seaweed roll.",
    ingredients: "Rice, Seaweed, Carrots, Cucumber, Pickled Radish, Sesame Oil, Salt, Soy Sauce, Sugar or Syrup, Vinegar, Egg",
    tag: "Classic",
    isPopular: true,
    image: "assets/images/gimbap.png"
  },
  {
    id: "japchae",
    name: "Japchae",
    price: 10.00,
    category: "snacks",
    shortDesc: "Stir-fried sweet potato glass noodles.",
    ingredients: "Sweet Potato Noodle, Carrots, Mushrooms, Spinach, Sesame Oil, Salt, Garlic Powder, Soy Sauce, Sugar, Black Pepper",
    tag: "Noodles",
    isPopular: false,
    image: "assets/images/japchae.png"
  },
  {
    id: "tteokkochi",
    name: "Tteok-ko-chi",
    price: 6.00,
    category: "snacks",
    shortDesc: "Fried skewered rice cakes with sweet chili sauce.",
    ingredients: "Rice Cake, Hot Pepper Sauce, Onion, Salt, Garlic Powder, Soy Sauce, Sugar or Syrup, Ketchup",
    tag: "Street Skewer",
    isPopular: false,
    image: "assets/images/tteokkochi.png"
  },
  {
    id: "mandoo",
    name: "Mandoo (5 pcs)",
    price: 10.00,
    category: "snacks",
    shortDesc: "Crispy pan-fried vegetable & noodle dumplings.",
    ingredients: "Bean Noodles, Cabbage, Carrots, Mushrooms, Onion, Flour Wrap, Sesame Oil, Salt, Black Pepper, Garlic Powder",
    tag: "Crispy Bite",
    isPopular: false,
    image: "assets/images/mandoo.png"
  },
  {
    id: "kimchi",
    name: "Kimchi (500g)",
    price: 7.99,
    extraPrice: "1kg pack: $12.99",
    category: "sides",
    shortDesc: "Traditional fermented spicy cabbage side.",
    ingredients: "Napa Cabbage, Green Onion, Onion, Sugar, Salt, Chili Powder, Garlic Powder, Fish Sauce",
    tag: "Fermented",
    isPopular: false,
    image: "assets/images/kimchi.png"
  }
];

const drinkItems = [
  {
    id: "soju",
    name: "Soju",
    description: "Clear, clean distilled liquor.",
    icon: "fa-solid fa-glass-whiskey",
    options: [
      { serving: "Cup (30ml)", price: 4.99 }
    ]
  },
  {
    id: "cass-beer",
    name: "CASS Beer",
    description: "South Korea's top crisp lager.",
    icon: "fa-solid fa-beer-mug-empty",
    options: [
      { serving: "Can (500ml)", price: 8.99 },
      { serving: "Bottle (330ml)", price: 6.99 }
    ]
  },
  {
    id: "makgeolli",
    name: "Makgeolli",
    description: "Traditional milky sparkling rice wine.",
    icon: "fa-solid fa-wine-glass",
    options: [
      { serving: "Cup (180ml)", price: 5.99 }
    ]
  }
];

// ==========================================================================
// RENDER FUNCTIONS
// ==========================================================================

/**
 * Builds HTML for a single food card with an accordion
 */
function createFoodCardHtml(item, isPopularList = false) {
  const extraBadgeHtml = item.extraPrice
    ? `<span class="food-card-extras"><i class="fa-solid fa-circle-plus"></i> ${item.extraPrice}</span>`
    : "";

  return `
    <div class="food-card card-animation ${isPopularList ? 'popular-card' : ''}">
      <div class="food-card-img-wrap">
        <span class="food-card-badge">${item.tag}</span>
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="food-card-info">
        <div class="food-card-header">
          <span class="food-card-name">${item.name}</span>
          <span class="food-card-price">$${item.price.toFixed(2)}</span>
        </div>
        <p style="font-size: 0.76rem; color: var(--text-muted); font-weight: 300; margin-top: 2px;">${item.shortDesc}</p>
        ${extraBadgeHtml}
        
        <!-- Collapsible Accordion Button -->
        <button class="ingredient-toggle" aria-expanded="false" data-target="ingredients-${item.id}">
          View ingredients <i class="fa-solid fa-chevron-down"></i>
        </button>
        
        <!-- Collapsible Content Wrapper -->
        <div class="ingredients-content" id="ingredients-${item.id}">
          <p class="ingredients-text">${item.ingredients}</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders Popular Picks tray
 */
function renderPopularPicks() {
  const popularGrid = document.getElementById("popularGrid");
  if (!popularGrid) return;
  
  const populars = foodItems.filter(item => item.isPopular);
  popularGrid.innerHTML = populars.map(item => createFoodCardHtml(item, true)).join("");
}

/**
 * Renders categorical food sections (Meals, Snacks, Sides)
 */
function renderFoodLists() {
  const mealsList = document.getElementById("mealsList");
  const snacksList = document.getElementById("snacksList");
  const sidesList = document.getElementById("sidesList");

  if (mealsList) {
    const meals = foodItems.filter(item => item.category === "meals");
    mealsList.innerHTML = meals.map(item => createFoodCardHtml(item)).join("");
  }
  if (snacksList) {
    const snacks = foodItems.filter(item => item.category === "snacks");
    snacksList.innerHTML = snacks.map(item => createFoodCardHtml(item)).join("");
  }
  if (sidesList) {
    const sides = foodItems.filter(item => item.category === "sides");
    sidesList.innerHTML = sides.map(item => createFoodCardHtml(item)).join("");
  }
}

/**
 * Renders drinks items panel list
 */
function renderDrinks() {
  const drinksList = document.getElementById("drinksList");
  if (!drinksList) return;

  drinksList.innerHTML = drinkItems.map((drink) => {
    let priceRows = drink.options.map((opt) => {
      const is500ml = opt.serving.includes("500ml");
      return `
        <div class="drink-price-item ${is500ml ? 'highlight' : ''}">
          <span class="drink-serving">${opt.serving}</span>
          <span class="drink-price-val">$${opt.price.toFixed(2)}</span>
        </div>
      `;
    }).join("");

    return `
      <div class="drink-card">
        <div class="drink-top-row">
          <i class="${drink.icon} drink-icon"></i>
          <div class="drink-title-wrap">
            <h3 class="drink-name">${drink.name}</h3>
            <p class="drink-desc">${drink.description}</p>
          </div>
        </div>
        <div class="drink-pricing-list">
          ${priceRows}
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// INTERACTIVE LOGIC & ACCORDIONS
// ==========================================================================

// Global Event Delegation for Accordion Toggles
document.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest(".ingredient-toggle");
  if (!toggleBtn) return;

  const card = toggleBtn.closest(".food-card");
  if (!card) return;

  const accordion = card.querySelector(".ingredients-content");
  if (!accordion) return;

  const isExpanded = accordion.classList.toggle("expanded");
  toggleBtn.setAttribute("aria-expanded", isExpanded);

  if (isExpanded) {
    toggleBtn.innerHTML = `Hide ingredients <i class="fa-solid fa-chevron-up"></i>`;
  } else {
    toggleBtn.innerHTML = `View ingredients <i class="fa-solid fa-chevron-down"></i>`;
  }
});

// Category pills auto-highlight and scrolling synchronization
const sections = document.querySelectorAll(".menu-section");
const pillLinks = document.querySelectorAll(".pill-link");
const pillsScrollWrapper = document.querySelector(".pills-scroll-wrapper");

if ("IntersectionObserver" in window) {
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -65% 0px", // Window tracking viewport middle-upper region
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        
        pillLinks.forEach((pill) => {
          pill.classList.remove("active");
          if (pill.getAttribute("href") === `#${id}`) {
            pill.classList.add("active");
            
            // Scroll active pill into center of horizontal category bar
            if (pillsScrollWrapper) {
              const wrapperWidth = pillsScrollWrapper.offsetWidth;
              const pillLeft = pill.offsetLeft;
              const pillWidth = pill.offsetWidth;
              pillsScrollWrapper.scrollTo({
                left: pillLeft - (wrapperWidth / 2) + (pillWidth / 2),
                behavior: "smooth"
              });
            }
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sect) => observer.observe(sect));
}

// Click overrides to highlight pills instantly on tap
pillLinks.forEach((pill) => {
  pill.addEventListener("click", () => {
    pillLinks.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
  });
});

// Bottom Bar Shortcuts Scrolling overrides
const bottomNavTop = document.getElementById("bottomNavTop");
if (bottomNavTop) {
  bottomNavTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Close and clear hash navigations
document.querySelectorAll(".bottom-nav-item, .pill-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId !== "#") {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});

// ==========================================================================
// DOM LOADING
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderPopularPicks();
  renderFoodLists();
  renderDrinks();
});
