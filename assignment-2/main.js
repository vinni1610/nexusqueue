/* ── ANIMATED COUNTERS ── */
const counterEls = document.querySelectorAll('.impact-stat-num');
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
    counterObs.unobserve(el);
  });
}, { threshold: 0.4 });
counterEls.forEach(el => counterObs.observe(el));

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // staggered delay for siblings
      const siblings = Array.from(e.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(e.target);
      e.target.style.transitionDelay = (idx * 0.08) + 's';
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => revealObs.observe(el));

/* ── HERO TABS ── */
document.querySelectorAll('.hero-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.hero-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ── CODE TABS ── */
document.querySelectorAll('.code-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.codetab;
    const wrap = btn.closest('.code-box');
    wrap.querySelectorAll('.code-tab').forEach(b => b.classList.remove('active'));
    wrap.querySelectorAll('.code-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById('tab-' + tabId);
    if (panel) panel.classList.add('active');
  });
});

/* ── FAQ ACCORDION ── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── HERO DOC COUNTER ── */
(function () {
  let count = 0;
  const el = document.getElementById('doc-counter');
  if (!el) return;
  function tick() {
    count += Math.floor(Math.random() * 3) + 1;
    el.textContent = count.toLocaleString();
    setTimeout(tick, Math.random() * 1100 + 500);
  }
  tick();
})();

/* ── NAVBAR SHADOW ON SCROLL ── */
const nav = document.querySelector('.site-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'rgba(11,90,219,0.1)';
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)';
  } else {
    nav.style.borderBottomColor = '';
    nav.style.boxShadow = 'none';
  }
}, { passive: true });

/* ── ORANGE CURSOR GLOW (subtle) ── */
(function () {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;pointer-events:none;z-index:9999;
    width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle,rgba(11,90,219,0.05) 0%,transparent 65%);
    transform:translate(-50%,-50%);
    transition:left 0.12s ease,top 0.12s ease;
    left:-999px;top:-999px;
  `;
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
})();