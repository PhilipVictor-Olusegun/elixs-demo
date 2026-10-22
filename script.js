// Sample product data with variants
const products = [
  {
    id: 'p1',
    name: 'Wireless Earbuds Pro',
    category: 'electronics',
    price: 15500,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598331668925-cfeeab035b85?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1625508286734-7436c49c0f12?w=600&h=600&fit=crop'
    ],
    description: 'Premium wireless earbuds with active noise cancellation, crystal-clear sound quality, and up to 30 hours of battery life. IPX4 water resistance makes them perfect for workouts and outdoor activities.',
    colors: ['#000000', '#ffffff', '#1e3a8a', '#dc2626'],
    sizes: ['Standard', 'Large Tips', 'Small Tips'],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'p2',
    name: 'Smart Watch Series 5',
    category: 'gadgets',
    price: 28000,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=600&h=600&fit=crop'
    ],
    description: 'Track your fitness, monitor your health, and stay connected with this advanced smartwatch. Features include heart rate monitoring, GPS tracking, sleep analysis, and smartphone notifications.',
    colors: ['#000000', '#e5e7eb', '#3b82f6', '#ec4899'],
    sizes: ['40mm', '44mm'],
    rating: 4.9,
    reviews: 342
  },
  {
    id: 'p3',
    name: 'Designer Leather Bag',
    category: 'fashion',
    price: 22000,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=600&fit=crop'
    ],
    description: 'Handcrafted from premium genuine leather with elegant design and attention to detail. Features multiple compartments, adjustable strap, and timeless style that complements any outfit.',
    colors: ['#92400e', '#000000', '#7c2d12', '#525252'],
    sizes: ['Medium', 'Large'],
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'p4',
    name: 'Portable Power Bank',
    category: 'gadgets',
    price: 8500,
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1635161966768-e441d5a57e71?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609592043316-f5e89c72b98f?w=600&h=600&fit=crop'
    ],
    description: '20,000mAh high-capacity power bank with fast charging support for multiple devices. Dual USB ports and USB-C input/output. LED display shows remaining battery percentage.',
    colors: ['#000000', '#ffffff', '#3b82f6', '#ec4899'],
    sizes: ['20000mAh'],
    rating: 4.6,
    reviews: 267
  },
  {
    id: 'p5',
    name: 'Premium Sunglasses',
    category: 'fashion',
    price: 12000,
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop'
    ],
    description: 'UV400 protection with polarized lenses to reduce glare. Lightweight frame design for all-day comfort. Comes with protective case and cleaning cloth.',
    colors: ['#000000', '#92400e', '#3b82f6', '#6b7280'],
    sizes: ['Standard'],
    rating: 4.5,
    reviews: 156
  },
  {
    id: 'p6',
    name: 'Wireless Keyboard & Mouse',
    category: 'electronics',
    price: 18500,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop'
    ],
    description: 'Ergonomic wireless keyboard and mouse combo with whisper-quiet keys and precise tracking. 2.4GHz wireless connection with up to 10m range. Battery life up to 18 months.',
    colors: ['#000000', '#ffffff', '#6b7280'],
    sizes: ['Full Size'],
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'p7',
    name: 'Essential Oil Diffuser',
    category: 'daily',
    price: 9500,
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1591825373155-38a8837cf910?w=600&h=600&fit=crop'
    ],
    description: 'Ultrasonic aromatherapy diffuser with color-changing LED lights. 300ml capacity runs up to 10 hours. Auto shut-off when water runs out. Create a relaxing atmosphere at home.',
    colors: ['#ffffff', '#f3f4f6', '#fef3c7'],
    sizes: ['300ml', '500ml'],
    rating: 4.8,
    reviews: 423
  },
  {
    id: 'p8',
    name: 'Bluetooth Speaker',
    category: 'electronics',
    price: 13500,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507634198260-bcc78d8484ce?w=600&h=600&fit=crop'
    ],
    description: 'Waterproof portable Bluetooth speaker with 360° surround sound and deep bass. 12-hour battery life. Perfect for outdoor adventures, pool parties, and travel.',
    colors: ['#000000', '#dc2626', '#3b82f6', '#10b981'],
    sizes: ['Standard'],
    rating: 4.9,
    reviews: 531
  },
  {
    id: 'p9',
    name: 'Premium Water Bottle',
    category: 'daily',
    price: 6000,
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588012886650-1c6a2dce4e5e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&h=600&fit=crop'
    ],
    description: 'Double-wall insulated stainless steel bottle keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof lid, BPA-free, and eco-friendly. Stay hydrated in style.',
    colors: ['#000000', '#ffffff', '#3b82f6', '#ec4899', '#10b981'],
    sizes: ['500ml', '750ml', '1000ml'],
    rating: 4.7,
    reviews: 678
  },
  {
    id: 'p10',
    name: 'Laptop Stand',
    category: 'gadgets',
    price: 7500,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop'
    ],
    description: 'Adjustable aluminum laptop stand for better ergonomics and posture. Compatible with all laptops 10-17 inches. Improves airflow to keep your device cool.',
    colors: ['#9ca3af', '#000000', '#ef4444'],
    sizes: ['Standard'],
    rating: 4.6,
    reviews: 234
  },
  {
    id: 'p11',
    name: 'Designer Sneakers',
    category: 'fashion',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop'
    ],
    description: 'Limited edition designer sneakers with premium materials and exceptional comfort. Breathable upper, cushioned sole, and timeless style for everyday wear.',
    colors: ['#ffffff', '#000000', '#dc2626', '#3b82f6'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    rating: 4.8,
    reviews: 445
  },
  {
    id: 'p12',
    name: 'LED Desk Lamp',
    category: 'daily',
    price: 11000,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522883892833-0e2e8a3b0c7c?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1550985543-f47f38aeee65?w=600&h=600&fit=crop'
    ],
    description: 'Adjustable LED desk lamp with multiple brightness levels and color temperatures. Built-in USB charging port. Touch control and memory function. Perfect for reading and working.',
    colors: ['#ffffff', '#000000', '#6b7280'],
    sizes: ['Standard'],
    rating: 4.7,
    reviews: 312
  }
];

// Sample reviews
const productReviews = [
  { name: 'Chioma A.', rating: 5, text: 'Absolutely love this product! Quality is top-notch and delivery was super fast. Highly recommended!', date: '2 days ago' },
  { name: 'Tunde K.', rating: 5, text: 'Exceeded my expectations. Worth every naira. The free delivery was a nice bonus!', date: '1 week ago' },
  { name: 'Amara N.', rating: 4, text: 'Great product overall. Minor issue with packaging but customer service resolved it quickly.', date: '2 weeks ago' },
  { name: 'Ibrahim S.', rating: 5, text: 'Best purchase I\'ve made this year. The quality is exceptional and it looks even better in person.', date: '3 weeks ago' },
  { name: 'Grace O.', rating: 5, text: 'Fast shipping, excellent quality, and the bonus gift was amazing! Will definitely shop here again.', date: '1 month ago' }
];

// Bonus items
const bonusItems = [
  { id: 'b1', name: 'Premium Phone Case', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop' },
  { id: 'b2', name: 'Wireless Charging Pad', image: 'https://images.unsplash.com/photo-1591290619762-d2c9154c81a2?w=300&h=300&fit=crop' },
  { id: 'b3', name: 'Stylish Notebook Set', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop' },
  { id: 'b4', name: 'Premium Pen', image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=300&h=300&fit=crop' }
];

// Services
const services = [
  { id: 's1', name: 'AC Repair & Maintenance', icon: '❄️', description: 'Professional air conditioning installation, repair, and servicing', rating: 4.8, distance: '2.5 km' },
  { id: 's2', name: 'Auto Mechanic', icon: '🔧', description: 'Expert car repair and maintenance services', rating: 4.9, distance: '1.8 km' },
  { id: 's3', name: 'Fashion Designer', icon: '✂️', description: 'Custom tailoring and fashion design services', rating: 4.7, distance: '3.2 km' },
  { id: 's4', name: 'Event Planner', icon: '🎉', description: 'Professional event planning and coordination', rating: 4.9, distance: '4.1 km' },
  { id: 's5', name: 'Electrician', icon: '💡', description: 'Licensed electrical installation and repair', rating: 4.6, distance: '1.5 km' },
  { id: 's6', name: 'Plumber', icon: '🚰', description: 'Professional plumbing services and repairs', rating: 4.8, distance: '2.9 km' },
  { id: 's7', name: 'House Cleaning', icon: '🧹', description: 'Professional home cleaning and organization', rating: 4.7, distance: '3.5 km' },
  { id: 's8', name: 'Photographer', icon: '📸', description: 'Professional photography for events and portraits', rating: 4.9, distance: '2.2 km' }
];

// State
let cart = {};
let selectedBonus = null;
let currentPage = 1;
const itemsPerPage = 12;
let currentCategory = 'all';
let isLoading = false;

// Load cart from localStorage
try {
  const savedCart = localStorage.getItem('elixs-cart');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) { cart = {}; }

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  try { localStorage.setItem('elixs-theme', newTheme); } catch (e) {}
});

// Restore theme
try {
  const savedTheme = localStorage.getItem('elixs-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
} catch (e) {}

// Format currency
function formatPrice(price) {
  return '₦' + price.toLocaleString('en-NG');
}

// Render products with infinite scroll
function renderProducts(category = 'all', append = false) {
  const grid = document.getElementById('productsGrid');
  const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

  const start = append ? (currentPage - 1) * itemsPerPage : 0;
  const end = currentPage * itemsPerPage;
  const productsToShow = filteredProducts.slice(start, end);

  const html = productsToShow.map(product => `
    <div class="product-card" data-id="${product.id}" onclick="openProductDetail('${product.id}')">
      <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description.substring(0, 80)}...</p>
        <div class="product-footer">
          <div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <span class="free-delivery-badge">Free Delivery</span>
          </div>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${product.id}')">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (append) {
    grid.innerHTML += html;
  } else {
    grid.innerHTML = html;
  }

  isLoading = false;
}

// Infinite scroll
window.addEventListener('scroll', () => {
  if (isLoading) return;

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 500) {
    const filteredProducts = currentCategory === 'all' ? products : products.filter(p => p.category === currentCategory);

    if (currentPage * itemsPerPage < filteredProducts.length) {
      isLoading = true;
      currentPage++;
      renderProducts(currentCategory, true);
    }
  }
});

// Render services
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map(service => `
    <div class="service-card" data-id="${service.id}">
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-name">${service.name}</h3>
      <p class="service-description">${service.description}</p>
      <div class="service-meta">
        <span class="service-rating">⭐ ${service.rating}</span>
        <span class="service-distance">📍 ${service.distance}</span>
      </div>
    </div>
  `).join('');
}

// Category filtering
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    currentCategory = card.dataset.category;
    currentPage = 1;
    renderProducts(currentCategory);
  });
});

// Product detail modal
function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');

  // Set main image
  document.getElementById('mainProductImage').src = product.images[0];
  document.getElementById('mainProductImage').alt = product.name;

  // Set thumbnails
  document.getElementById('thumbnailStrip').innerHTML = product.images.map((img, idx) => `
    <img src="${img}" alt="${product.name} view ${idx + 1}" class="thumbnail ${idx === 0 ? 'active' : ''}"
         onclick="changeMainImage('${img}', this)">
  `).join('');

  // Set product details
  document.getElementById('detailCategory').textContent = product.category;
  document.getElementById('detailName').textContent = product.name;
  document.getElementById('detailPrice').textContent = formatPrice(product.price);
  document.getElementById('detailDescription').textContent = product.description;
  document.getElementById('ratingCount').textContent = `(${product.reviews} reviews)`;

  // Set color options
  document.getElementById('colorOptions').innerHTML = product.colors.map((color, idx) => `
    <div class="color-option ${idx === 0 ? 'selected' : ''}" style="background: ${color}"
         onclick="selectOption(this, 'color')" data-value="${color}"></div>
  `).join('');

  // Set size options
  document.getElementById('sizeOptions').innerHTML = product.sizes.map((size, idx) => `
    <div class="size-option ${idx === 0 ? 'selected' : ''}" onclick="selectOption(this, 'size')"
         data-value="${size}">${size}</div>
  `).join('');

  // Reset quantity
  document.getElementById('productQty').value = 1;

  // Set add to cart button
  document.getElementById('addToCartFromDetail').onclick = () => {
    const qty = parseInt(document.getElementById('productQty').value);
    addToCart(productId, qty);
  };

  // Load reviews
  document.getElementById('reviewsList').innerHTML = productReviews.map(review => `
    <div class="review-item">
      <div class="review-header">
        <span class="reviewer-name">${review.name}</span>
        <span class="review-date">${review.date}</span>
      </div>
      <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
      <p class="review-text">${review.text}</p>
    </div>
  `).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeMainImage(imageSrc, thumbnail) {
  document.getElementById('mainProductImage').src = imageSrc;
  document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
  thumbnail.classList.add('active');
}

function selectOption(element, type) {
  const parent = element.parentElement;
  parent.querySelectorAll(type === 'color' ? '.color-option' : '.size-option')
    .forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
}

// Quantity controls in detail modal
document.getElementById('increaseQty').addEventListener('click', () => {
  const input = document.getElementById('productQty');
  input.value = Math.min(99, parseInt(input.value) + 1);
});

document.getElementById('decreaseQty').addEventListener('click', () => {
  const input = document.getElementById('productQty');
  input.value = Math.max(1, parseInt(input.value) - 1);
});

// Close product modal
document.getElementById('closeProduct').addEventListener('click', () => {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
});

document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target.id === 'productModal') {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Add to cart
function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (cart[productId]) {
    cart[productId].quantity += quantity;
  } else {
    cart[productId] = { ...product, quantity };
  }

  updateCart();
  showToast(`${product.name} added to cart`);
}

// Update cart
function updateCart() {
  try { localStorage.setItem('elixs-cart', JSON.stringify(cart)); } catch (e) {}

  const count = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = count;

  renderCartItems();
  updateCartSummary();
}

// Render cart items
function renderCartItems() {
  const container = document.getElementById('cartItems');
  const items = Object.values(cart);

  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${item.images[0]}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-controls">
          <div class="quantity-controls">
            <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Update quantity
function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  if (cart[productId]) {
    cart[productId].quantity = newQuantity;
    updateCart();
  }
}

// Remove from cart
function removeFromCart(productId) {
  delete cart[productId];
  updateCart();
  showToast('Item removed from cart');
}

// Update cart summary
function updateCartSummary() {
  const items = Object.values(cart);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('cartTotal').textContent = formatPrice(subtotal);

  const promoContainer = document.getElementById('cartPromo');
  const bonusSection = document.getElementById('bonusSection');

  if (subtotal >= 10000) {
    promoContainer.innerHTML = '🎉 You qualify for a FREE bonus item! Choose one below.';
    bonusSection.style.display = 'block';
    renderBonusItems();
  } else {
    const remaining = 10000 - subtotal;
    promoContainer.innerHTML = `Add ${formatPrice(remaining)} more to get a FREE bonus item!`;
    bonusSection.style.display = 'none';
  }
}

// Render bonus items
function renderBonusItems() {
  const container = document.getElementById('bonusItems');
  container.innerHTML = bonusItems.map(item => `
    <div class="bonus-item ${selectedBonus === item.id ? 'selected' : ''}" onclick="selectBonus('${item.id}')">
      <img src="${item.image}" alt="${item.name}" class="bonus-item-image">
      <span class="bonus-item-name">${item.name}</span>
    </div>
  `).join('');
}

// Select bonus item
function selectBonus(bonusId) {
  selectedBonus = bonusId;
  renderBonusItems();
}

// Cart modal controls
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');

cartBtn.addEventListener('click', () => {
  cartModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  updateCart();
});

closeCart.addEventListener('click', () => {
  cartModal.classList.remove('active');
  document.body.style.overflow = '';
});

cartModal.addEventListener('click', (e) => {
  if (e.target === cartModal) {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Checkout
document.getElementById('checkoutBtn').addEventListener('click', () => {
  const items = Object.values(cart);
  if (items.length === 0) {
    showToast('Your cart is empty');
    return;
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (subtotal >= 10000 && !selectedBonus) {
    showToast('Please select your free bonus item');
    return;
  }

  showToast('Checkout feature coming soon!');
});

// Location detection with better error handling
document.getElementById('locateBtn').addEventListener('click', () => {
  const input = document.getElementById('locationInput');

  if (!navigator.geolocation) {
    showToast('Geolocation is not supported by your browser');
    return;
  }

  showToast('Detecting your location...');
  input.value = 'Locating...';

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      // In a real app, you'd reverse geocode this to get address
      input.value = `Location detected: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      showToast('✓ Location detected successfully!');

      // Update service distances based on location (simulated)
      services.forEach(service => {
        const randomDist = (Math.random() * 5 + 0.5).toFixed(1);
        service.distance = `${randomDist} km`;
      });
      renderServices();
    },
    (error) => {
      let message = 'Unable to detect location. ';
      switch(error.code) {
        case error.PERMISSION_DENIED:
          message += 'Please allow location access in your browser settings.';
          break;
        case error.POSITION_UNAVAILABLE:
          message += 'Location information is unavailable.';
          break;
        case error.TIMEOUT:
          message += 'Location request timed out.';
          break;
        default:
          message += 'Please enter manually.';
      }
      showToast(message);
      input.value = '';
      input.placeholder = 'Enter your location manually';
    },
    options
  );
});

// Toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    background: 'var(--text-primary)',
    color: 'var(--bg-primary)',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    zIndex: 10000,
    fontSize: '0.938rem',
    fontWeight: '600',
    maxWidth: '320px',
    animation: 'slideInRight 0.3s ease',
    opacity: '1',
    transition: 'opacity 0.3s ease'
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Initialize
renderProducts();
renderServices();
updateCart();
document.getElementById('year').textContent = new Date().getFullYear();