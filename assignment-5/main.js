
/* SCROLL REVEAL */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible') });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* NAVBAR SCROLL */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 10);
});

/* SETUP TOGGLE */
document.querySelectorAll('.setup-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.setup-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const setup = btn.dataset.setup;
    document.querySelectorAll('.plan-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + setup).classList.add('active');
  });
});

/* BILLING TOGGLE */
const toggle = document.getElementById('billingToggle');
const saveBadge = document.getElementById('saveBadge');
const lblMonthly = document.getElementById('lbl-monthly');
const lblAnnual = document.getElementById('lbl-annual');

toggle.addEventListener('change', () => {
  const isAnnual = toggle.checked;
  saveBadge.style.opacity = isAnnual ? '1' : '0';
  lblMonthly.classList.toggle('active', !isAnnual);
  lblAnnual.classList.toggle('active', isAnnual);

  document.querySelectorAll('.price-period').forEach(el => {
    if(el.id) return;
    el.textContent = isAnnual ? '/month (billed annually)' : '/month';
  });

  document.querySelectorAll('[data-monthly]').forEach(el => {
    el.textContent = isAnnual ? el.dataset.annual : el.dataset.monthly;
  });
});

/* FAQ ACCORDION */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});

/* WHAT'S INCLUDED TOGGLE */
function toggleIncluded(btn) {
  const list = btn.nextElementSibling;
  const arrow = btn.querySelector('.wi-arrow');
  const isOpen = btn.classList.contains('open');

  if (isOpen) {
    list.style.maxHeight = '0';
    list.style.overflow = 'hidden';
    arrow.textContent = '▾';
    btn.classList.remove('open');
  } else {
    list.style.maxHeight = list.scrollHeight + 'px';
    list.style.overflow = 'visible';
    arrow.textContent = '▴';
    btn.classList.add('open');
  }
}

/* Init: collapse non-open feature lists, expand open ones */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.whats-included-toggle').forEach(btn => {
    const list = btn.nextElementSibling;
    if (btn.classList.contains('open')) {
      list.style.maxHeight = list.scrollHeight + 'px';
    } else {
      list.style.maxHeight = '0';
      list.style.overflow = 'hidden';
    }
  });
});
