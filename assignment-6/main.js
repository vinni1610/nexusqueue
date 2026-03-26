// ── DATA ──
const stories = [
  { id:1,  rank:1,  title:"Running Tesla Model 3's computer on my desk using parts from crashed cars", url:"https://xdavidhu.me", domain:"xdavidhu.me", points:453, author:"driesdep", time:"7 hours ago", comments:129, cat:"tech" },
  { id:2,  rank:2,  title:"ARC-AGI-3", url:"https://arcprize.org", domain:"arcprize.org", points:303, author:"lairv", time:"10 hours ago", comments:192, cat:"ai" },
  { id:3,  rank:3,  title:"Show HN: Robust LLM Extractor for Websites in TypeScript", url:"https://github.com/lightfeed", domain:"github.com", points:6, author:"andrew_zhong", time:"36 minutes ago", comments:0, cat:"show" },
  { id:4,  rank:4,  title:"My astrophotography in the movie Project Hail Mary", url:"https://square.site", domain:"square.site", points:759, author:"wallflower", time:"17 hours ago", comments:189, cat:"science" },
  { id:5,  rank:5,  title:"False claims in a widely-cited paper", url:"https://columbia.edu", domain:"columbia.edu", points:188, author:"qsi", time:"3 hours ago", comments:63, cat:"science" },
  { id:6,  rank:6,  title:"Two studies in compiler optimisations", url:"https://hmpcabral.com", domain:"hmpcabral.com", points:34, author:"hmpc", time:"3 hours ago", comments:1, cat:"tech" },
  { id:7,  rank:7,  title:"Earthquake scientists reveal how overplowing weakens soil at experimental farm", url:"https://washington.edu", domain:"washington.edu", points:125, author:"Brajeshwar", time:"8 hours ago", comments:50, cat:"science" },
  { id:8,  rank:8,  title:"The EU still wants to scan your private messages and photos", url:"https://fightchatcontrol.eu", domain:"fightchatcontrol.eu", points:827, author:"MrBruh", time:"8 hours ago", comments:224, cat:"law" },
  { id:9,  rank:9,  title:"90% of Claude-linked output going to GitHub repos with <2 stars", url:"https://claudescode.dev", domain:"claudescode.dev", points:218, author:"louiereederson", time:"10 hours ago", comments:130, cat:"ai" },
  { id:10, rank:10, title:"My DIY FPGA board can run Quake II", url:"https://mikhe.ch", domain:"mikhe.ch", points:88, author:"sznio", time:"6 hours ago", comments:31, cat:"tech" },
  { id:11, rank:11, title:"Supreme Court Sides with Cox in Copyright Fight over Pirated Music", url:"https://nytimes.com", domain:"nytimes.com", points:305, author:"oj2828", time:"13 hours ago", comments:243, cat:"law" },
  { id:12, rank:12, title:'"Disregard That" Attacks', url:"https://calpaterson.com", domain:"calpaterson.com", points:34, author:"leontrolski", time:"5 hours ago", comments:15, cat:"tech" },
  { id:13, rank:13, title:"Apple randomly closes bug reports unless you 'verify' the bug remains unfixed", url:"https://lapcatsoftware.com", domain:"lapcatsoftware.com", points:328, author:"zdw", time:"9 hours ago", comments:184, cat:"tech" },
  { id:14, rank:14, title:"Quantization from the Ground Up", url:"https://ngrok.com", domain:"ngrok.com", points:215, author:"samwho", time:"12 hours ago", comments:44, cat:"ai" },
  { id:15, rank:15, title:"Show HN: A plain-text cognitive architecture for Claude Code", url:"https://puga.com.br", domain:"puga.com.br", points:52, author:"marciopuga", time:"5 hours ago", comments:19, cat:"show" },
  { id:16, rank:16, title:"The truth that haunts the Ramones: 'They sold more T-shirts than records'", url:"https://elpais.com", domain:"elpais.com", points:32, author:"c420", time:"6 hours ago", comments:7, cat:"tech" },
  { id:17, rank:17, title:"Show HN: Optio – Orchestrate AI coding agents in K8s to go from ticket to PR", url:"https://github.com/jonwiggins", domain:"github.com", points:30, author:"jawiggins", time:"6 hours ago", comments:18, cat:"show" },
  { id:18, rank:18, title:"Woman who never stopped updating her lost dog's chip reunites with him after 11 years", url:"https://cbc.ca", domain:"cbc.ca", points:121, author:"gnabgib", time:"5 hours ago", comments:68, cat:"tech" },
  { id:19, rank:19, title:"Miscellanea: The War in Iran", url:"https://acoup.blog", domain:"acoup.blog", points:467, author:"decimalenough", time:"1 day ago", comments:674, cat:"tech" },
  { id:20, rank:20, title:"Rendering complex scripts in terminal and OSC 66", url:"https://thottingal.in", domain:"thottingal.in", points:22, author:"sthottingal", time:"5 hours ago", comments:3, cat:"tech" },
  { id:21, rank:21, title:"Thoughts on slowing the fuck down", url:"https://mariozechner.at", domain:"mariozechner.at", points:735, author:"jdkoeck", time:"14 hours ago", comments:351, cat:"tech" },
  { id:22, rank:22, title:"Jury finds Meta liable in case over child sexual exploitation on its platforms", url:"https://cnn.com", domain:"cnn.com", points:327, author:"billfor", time:"1 day ago", comments:443, cat:"law" },
  { id:23, rank:23, title:"VitruvianOS – Desktop Linux Inspired by the BeOS", url:"https://v-os.dev", domain:"v-os.dev", points:346, author:"felixding", time:"1 day ago", comments:207, cat:"tech" },
  { id:24, rank:24, title:"FreeCAD v1.1", url:"https://freecad.org", domain:"freecad.org", points:202, author:"sho_hn", time:"9 hours ago", comments:62, cat:"tech" },
  { id:25, rank:25, title:"The Mystery of Rennes-Le-Château, Part 1: The Priest's Treasure", url:"https://filfre.net", domain:"filfre.net", points:14, author:"ibobev", time:"5 hours ago", comments:0, cat:"tech" },
  { id:26, rank:26, title:"Sodium-ion EV battery breakthrough delivers 11-min charging and 450 km range", url:"https://electrek.co", domain:"electrek.co", points:138, author:"breve", time:"8 hours ago", comments:96, cat:"science" },
  { id:27, rank:27, title:"Updates to GitHub Copilot interaction data usage policy", url:"https://github.blog", domain:"github.blog", points:253, author:"prefork", time:"9 hours ago", comments:121, cat:"ai" },
  { id:28, rank:28, title:"Health NZ staff told to stop using ChatGPT to write clinical notes", url:"https://rnz.co.nz", domain:"rnz.co.nz", points:123, author:"billybuckwheat", time:"7 hours ago", comments:42, cat:"ai" },
  { id:29, rank:29, title:"I tried to prove I'm not AI. My aunt wasn't convinced", url:"https://bbc.com", domain:"bbc.com", points:147, author:"dabinat", time:"18 hours ago", comments:167, cat:"ai" },
  { id:30, rank:30, title:"Antimatter has been transported for the first time", url:"https://nature.com", domain:"nature.com", points:372, author:"leephillips", time:"13 hours ago", comments:170, cat:"science" },
];

const PAGE_SIZE = 15;
let currentPage = 1;
let activeFilter = 'all';
let searchQuery = '';
let voted = new Set();

// ── RENDER ──
function getFiltered() {
  return stories.filter(s => {
    const matchCat = activeFilter === 'all' || s.cat === activeFilter;
    const matchSearch = !searchQuery || s.title.toLowerCase().includes(searchQuery) || s.domain.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });
}

function renderStories(reset = false) {
  const list = document.getElementById('storyList');
  const filtered = getFiltered();
  const slice = filtered.slice(0, currentPage * PAGE_SIZE);

  if (reset) list.innerHTML = '';

  const existing = list.querySelectorAll('.story-item').length;
  slice.slice(existing).forEach((s, i) => {
    const li = document.createElement('li');
    li.className = 'story-item';
    li.dataset.id = s.id;
    li.style.animationDelay = (i * 30) + 'ms';

    const catBadge = s.cat !== 'tech' && s.cat !== 'all'
      ? `<span class="cat-badge ${s.cat}">${s.cat === 'show' ? 'Show HN' : s.cat}</span>`
      : '';

    const commentText = s.comments === 0 ? 'discuss' : `${s.comments} comment${s.comments !== 1 ? 's' : ''}`;

    li.innerHTML = `
      <span class="story-rank">${s.rank}.</span>
      <div class="vote-col">
        <button class="vote-btn ${voted.has(s.id) ? 'voted' : ''}" data-id="${s.id}" title="upvote">▲</button>
        <span class="vote-count" id="pts-${s.id}">${s.points}</span>
      </div>
      <div class="story-body">
        <div class="story-title-row">
          <a href="${s.url}" target="_blank" rel="noopener" class="story-title">${s.title}</a>
          <a href="${s.url}" target="_blank" rel="noopener" class="story-domain">${s.domain}</a>
          ${catBadge}
        </div>
        <div class="story-meta">
          <span>${s.points} points</span>
          <span class="meta-sep">·</span>
          <span>by <a href="#">${s.author}</a></span>
          <span class="meta-sep">·</span>
          <span>${s.time}</span>
          <span class="meta-sep">·</span>
          <a href="#" class="comments-link">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            ${commentText}
          </a>
          <a href="#" class="comments-link" style="margin-left:4px">hide</a>
        </div>
      </div>`;
    list.appendChild(li);
  });

  // Show/hide load more
  document.getElementById('loadMore').style.display =
    slice.length < filtered.length ? 'inline-block' : 'none';
}

// ── VOTE ──
document.getElementById('storyList').addEventListener('click', e => {
  const btn = e.target.closest('.vote-btn');
  if (!btn) return;
  const id = +btn.dataset.id;
  const story = stories.find(s => s.id === id);
  if (!story) return;

  if (voted.has(id)) {
    voted.delete(id);
    story.points--;
    btn.classList.remove('voted');
  } else {
    voted.add(id);
    story.points++;
    btn.classList.add('voted');
  }
  document.getElementById('pts-' + id).textContent = story.points;
});

// ── FILTER ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.cat;
    currentPage = 1;
    renderStories(true);
  });
});

// ── LOAD MORE ──
document.getElementById('loadMore').addEventListener('click', () => {
  currentPage++;
  renderStories();
});

// ── SEARCH ──
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');

searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) searchInput.focus();
});
searchClose.addEventListener('click', () => {
  searchBar.classList.remove('open');
  searchInput.value = '';
  searchQuery = '';
  currentPage = 1;
  renderStories(true);
});
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  currentPage = 1;
  renderStories(true);
});

// ── SIDEBAR: TAG CLOUD ──
const tags = ['LLM', 'AI', 'Open Source', 'Privacy', 'Linux', 'Rust', 'Python', 'Security', 'WebAssembly', 'Compilers', 'Hardware', 'Science'];
const tagCloud = document.getElementById('tagCloud');
tags.forEach(tag => {
  const pill = document.createElement('button');
  pill.className = 'tag-pill';
  pill.textContent = tag;
  pill.addEventListener('click', () => {
    searchInput.value = tag;
    searchQuery = tag.toLowerCase();
    searchBar.classList.add('open');
    currentPage = 1;
    renderStories(true);
  });
  tagCloud.appendChild(pill);
});

// ── SIDEBAR: TOP DOMAINS ──
const domainCounts = {};
stories.forEach(s => { domainCounts[s.domain] = (domainCounts[s.domain] || 0) + 1; });
const topDomains = Object.entries(domainCounts).sort((a, b) => b[1] - a[1]).slice(0, 7);
const domainList = document.getElementById('domainList');
topDomains.forEach(([domain, count]) => {
  const li = document.createElement('li');
  li.className = 'domain-item';
  li.innerHTML = `<a href="#" class="domain-name">${domain}</a><span class="domain-count">${count}</span>`;
  domainList.appendChild(li);
});

// ── INIT ──
renderStories(true);
