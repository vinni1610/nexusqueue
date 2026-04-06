/* ── Upload / Convert ── */
const uploadBox         = document.getElementById('uploadBox');
const fileInput         = document.getElementById('fileInput');
const browseBtn         = document.getElementById('browseBtn');
const fileInfo          = document.getElementById('fileInfo');
const fileNameEl        = document.getElementById('fileName');
const removeBtn         = document.getElementById('removeBtn');
const convertBtn        = document.getElementById('convertBtn');
const progressWrap      = document.getElementById('progressWrap');
const progressFill      = document.getElementById('progressFill');
const progressLabel     = document.getElementById('progressLabel');
const doneWrap          = document.getElementById('doneWrap');
const downloadBtn       = document.getElementById('downloadBtn');
const convertAnotherBtn = document.getElementById('convertAnotherBtn');
const formatSelect      = document.getElementById('formatSelect');

let selectedFile = null;

// Prevent upload-box click from firing when clicking the Select button
browseBtn.addEventListener('click', e => { e.stopPropagation(); fileInput.click(); });
uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  if (fileInput.files.length) handleFile(fileInput.files[0]);
});

uploadBox.addEventListener('dragover', e => { e.preventDefault(); uploadBox.classList.add('drag-over'); });
uploadBox.addEventListener('dragleave', () => uploadBox.classList.remove('drag-over'));
uploadBox.addEventListener('drop', e => {
  e.preventDefault();
  uploadBox.classList.remove('drag-over');
  if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
});

function handleFile(file) {
  if (!file.name.toLowerCase().endsWith('.mp3') && file.type !== 'audio/mpeg') {
    alert('Please upload a valid .mp3 file.');
    return;
  }
  selectedFile = file;
  fileNameEl.textContent = file.name;
  uploadBox.hidden = true;
  fileInfo.hidden = false;
}

removeBtn.addEventListener('click', reset);

convertBtn.addEventListener('click', () => {
  if (!selectedFile) return;
  fileInfo.hidden = true;
  progressWrap.hidden = false;
  simulateConversion();
});

function simulateConversion() {
  let progress = 0;
  progressFill.style.width = '0%';
  progressLabel.textContent = 'Converting...';

  const interval = setInterval(() => {
    progress += Math.random() * 18 + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      progressFill.style.width = '100%';
      progressLabel.textContent = 'Done!';
      setTimeout(showDone, 400);
    } else {
      progressFill.style.width = progress + '%';
    }
  }, 200);
}

function showDone() {
  progressWrap.hidden = true;
  doneWrap.hidden = false;
  const format = formatSelect.value;
  const url = URL.createObjectURL(selectedFile);
  downloadBtn.href = url;
  downloadBtn.download = selectedFile.name.replace(/\.mp3$/i, `.${format}`);
}

convertAnotherBtn.addEventListener('click', reset);

function reset() {
  selectedFile = null;
  fileInput.value = '';
  uploadBox.hidden = false;
  fileInfo.hidden = true;
  progressWrap.hidden = true;
  doneWrap.hidden = true;
  progressFill.style.width = '0%';
}

/* ── Scroll Reveal ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Hamburger / Mobile Nav ── */
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('navDrawer');
hamburger.addEventListener('click', () => {
  navDrawer.classList.toggle('open');
  hamburger.classList.toggle('open');
});

/* ── FAQ Accordion ── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
    btn.setAttribute('aria-expanded', !isOpen);
  });
});

/* ── Cookie Banner ── */
const cookieBanner = document.getElementById('cookieBanner');
document.getElementById('cookieAccept').addEventListener('click', () => cookieBanner.classList.add('hidden'));
document.getElementById('cookieReject').addEventListener('click', () => cookieBanner.classList.add('hidden'));
