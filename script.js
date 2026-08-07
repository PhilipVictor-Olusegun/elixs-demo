// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  // store preference
  const isDark = document.documentElement.classList.contains('dark');
  try { localStorage.setItem('elixs-dark', isDark ? '1' : '0'); } catch(e){}
});
// restore theme
try {
  if (localStorage.getItem('elixs-dark') === '1') document.documentElement.classList.add('dark');
} catch(e){}

// Cart logic (simple, in-memory + localStorage)
const cartCountEl = document.getElementById('cartCount');
let cart = {};
try {
  const saved = localStorage.getItem('elixs-cart');
  if (saved) cart = JSON.parse(saved);
} catch(e){ cart = {}; }
const updateCartUI = () => {
  const count = Object.values(cart).reduce((s,n) => s + n, 0);
  cartCountEl.textContent = count;
  try { localStorage.setItem('elixs-cart', JSON.stringify(cart)); } catch(e){}
};
updateCartUI();

// Add to cart buttons
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const id = card.dataset.id;
    cart[id] = (cart[id] || 0) + 1;
    showToast(`${card.dataset.name} added to cart`);
    updateCartUI();
  });
});

// small toast for feedback
function showToast(msg){
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position:'fixed',right:'1rem',bottom:'1rem',background:'#111827',color:'#fff',padding:'.5rem .75rem',
    borderRadius:'6px',boxShadow:'0 6px 18px rgba(0,0,0,0.2)',zIndex:9999,fontSize:'0.95rem'
  });
  document.body.appendChild(t);
  setTimeout(()=> t.style.opacity = '0', 1800);
  setTimeout(()=> t.remove(), 2200);
}

// footer year
document.getElementById('year').textContent = new Date().getFullYear();