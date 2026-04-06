// ===== Repo Data (matches trendshift.io live data) =====
const repos = [
  { rank:1,  name:"VoltAgent/awesome-design-md",          isNew:true,  lang:"HTML",           langColor:"#e34c26", stars:"15.7k", forks:"1.9k",   tags:[],                                                          desc:"Collection of DESIGN.md files that capture design systems from popular websites. Drop one into your project and let coding agents build matching UI.", url:"https://github.com/VoltAgent/awesome-design-md" },
  { rank:2,  name:"santifer/career-ops",                  isNew:true,  lang:"Go",             langColor:"#00add8", stars:"3.8k",  forks:"585",    tags:[],                                                          desc:"AI-powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing.", url:"https://github.com/santifer/career-ops" },
  { rank:3,  name:"ultraworkers/claw-code",               isNew:true,  lang:"Rust",           langColor:"#dea584", stars:"166.8k",forks:"101.5k", tags:["# AI agent"],                                             desc:"The repo is finally unlocked. Enjoy the party! The fastest repo in history to surpass 100K stars. Built in Rust using oh-my-codex.", url:"https://github.com/ultraworkers/claw-code" },
  { rank:4,  name:"siddharthvaddem/openscreen",           isNew:false, lang:"TypeScript",     langColor:"#3178c6", stars:"21.5k", forks:"1.5k",   tags:["# Video editing"],                                        desc:"Create stunning demos for free. Open-source, no subscriptions, no watermarks, and free for commercial use. An alternative to Screen Studio.", url:"https://github.com/siddharthvaddem/openscreen" },
  { rank:5,  name:"block/goose",                          isNew:false, lang:"Rust",           langColor:"#dea584", stars:"35.9k", forks:"3.4k",   tags:["# AI agent"],                                             desc:"An open source, extensible AI agent that goes beyond code suggestions - install, execute, edit, and test with any LLM.", url:"https://github.com/block/goose" },
  { rank:6,  name:"capcom6/android-sms-gateway",         isNew:false, lang:"Kotlin",         langColor:"#a97bff", stars:"2.1k",  forks:"375",    tags:[],                                                          desc:"The SMS Gateway for Android app enables sending and receiving SMS messages through an API accessible directly on the device or via a cloud server.", url:"https://github.com/capcom6/android-sms-gateway" },
  { rank:7,  name:"KeygraphHQ/shannon",                   isNew:false, lang:"TypeScript",     langColor:"#3178c6", stars:"35.3k", forks:"3.6k",   tags:["# AI agent","# Pentesting","# Static analysis"],          desc:"Shannon Lite is an autonomous, white-box AI pentester for web apps and APIs. It analyzes source code, identifies attack vectors, and executes real exploits.", url:"https://github.com/KeygraphHQ/shannon" },
  { rank:8,  name:"gnekt/My-Brain-Is-Full-Crew",          isNew:true,  lang:"Shell",          langColor:"#89e051", stars:"1.4k",  forks:"139",    tags:["# AI agent","# Workflow automation"],                     desc:"Built by a PhD whose memory was failing. Handles knowledge, nutrition, and mental wellness — because your brain doesn't work in isolation.", url:"https://github.com/gnekt/My-Brain-Is-Full-Crew" },
  { rank:9,  name:"abhigyanpatwari/GitNexus",             isNew:false, lang:"TypeScript",     langColor:"#3178c6", stars:"22.3k", forks:"2.6k",   tags:["# AI agent","# AI coding assistant"],                    desc:"GitNexus: The Zero-Server Code Intelligence Engine. A client-side knowledge graph creator that runs entirely in your browser with a built-in Graph RAG Agent.", url:"https://github.com/abhigyanpatwari/GitNexus" },
  { rank:10, name:"HKUDS/OpenHarness",                    isNew:true,  lang:"Python",         langColor:"#3572A5", stars:"4.4k",  forks:"774",    tags:[],                                                          desc:"OpenHarness: Open Agent Harness — a unified framework for evaluating and benchmarking AI agents across diverse tasks.", url:"https://github.com/HKUDS/OpenHarness" },
  { rank:11, name:"Arthur-Ficial/apfel",                  isNew:true,  lang:"Swift",          langColor:"#F05138", stars:"1.9k",  forks:"58",     tags:[],                                                          desc:"Apple Intelligence from the command line. On-device LLM via FoundationModels framework. No API keys, no cloud, no dependencies.", url:"https://github.com/Arthur-Ficial/apfel" },
  { rank:12, name:"msitarzewski/agency-agents",           isNew:false, lang:"Shell",          langColor:"#89e051", stars:"71.9k", forks:"11.1k",  tags:["# AI agent"],                                             desc:"A complete AI agency at your fingertips — from frontend wizards to Reddit community ninjas. Each agent is a specialized expert with personality and proven deliverables.", url:"https://github.com/msitarzewski/agency-agents" },
  { rank:13, name:"ancsemi/Haven",                        isNew:true,  lang:"JavaScript",     langColor:"#f1e05a", stars:"325",   forks:"27",     tags:["# Self-hosted"],                                           desc:"Self-hosted private chat — No cloud, no telemetry, no Big Tech. A Discord alternative that runs on your own machine.", url:"https://github.com/ancsemi/Haven" },
  { rank:14, name:"obra/superpowers",                     isNew:false, lang:"Shell",          langColor:"#89e051", stars:"135.7k",forks:"11.4k",  tags:["# AI agent","# AI coding assistant","# AI skills"],       desc:"An agentic skills framework and software development methodology that works.", url:"https://github.com/obra/superpowers" },
  { rank:15, name:"HKUDS/DeepTutor",                      isNew:false, lang:"Python",         langColor:"#3572A5", stars:"11.3k", forks:"1.5k",   tags:["# AI agent","# RAG"],                                     desc:"DeepTutor: Agent-Native Personalized Learning Assistant — adaptive tutoring powered by retrieval-augmented generation.", url:"https://github.com/HKUDS/DeepTutor" },
  { rank:16, name:"google-ai-edge/gallery",               isNew:false, lang:"Kotlin",         langColor:"#a97bff", stars:"16.3k", forks:"1.5k",   tags:["# Local LLM"],                                            desc:"A gallery that showcases on-device ML/GenAI use cases and allows people to try and use models locally.", url:"https://github.com/google-ai-edge/gallery" },
  { rank:17, name:"NVIDIA/personaplex",                   isNew:true,  lang:"Python",         langColor:"#3572A5", stars:"6.8k",  forks:"1k",     tags:["# AI voice"],                                             desc:"PersonaPlex: NVIDIA's framework for building expressive, persona-driven conversational AI agents with voice capabilities.", url:"https://github.com/NVIDIA/personaplex" },
  { rank:18, name:"tobi/qmd",                             isNew:false, lang:"TypeScript",     langColor:"#3178c6", stars:"18k",   forks:"1.1k",   tags:["# Local LLM","# RAG","# Search"],                         desc:"Mini CLI search engine for your docs, knowledge bases, and meeting notes. Tracks current SOTA approaches while staying fully local.", url:"https://github.com/tobi/qmd" },
  { rank:19, name:"Astrosp/Awesome-OSINT-For-Everything", isNew:false, lang:"Shell",          langColor:"#89e051", stars:"2.7k",  forks:"321",    tags:["# Pentesting","# Curated list"],                          desc:"OSINT tools for information gathering, cybersecurity, reverse searching, bug bounty, trust and safety, and red team operations.", url:"https://github.com/Astrosp/Awesome-OSINT-For-Everything" },
  { rank:20, name:"elebumm/RedditVideoMakerBot",          isNew:false, lang:"Python",         langColor:"#3572A5", stars:"8.4k",  forks:"2.1k",   tags:[],                                                          desc:"Create Reddit Videos with just one command.", url:"https://github.com/elebumm/RedditVideoMakerBot" },
  { rank:21, name:"NousResearch/hermes-agent",            isNew:false, lang:"Python",         langColor:"#3572A5", stars:"26.6k", forks:"3.5k",   tags:["# AI agent","# AI skills"],                               desc:"The agent that grows with you — Hermes is a general-purpose AI agent framework built for long-horizon tasks and tool use.", url:"https://github.com/NousResearch/hermes-agent" },
  { rank:22, name:"oh-my-mermaid/oh-my-mermaid",         isNew:true,  lang:"TypeScript",     langColor:"#3178c6", stars:"422",   forks:"38",     tags:["# AI coding assistant"],                                  desc:"Turn complex codebases into clear, navigable architecture diagrams with Claude Code.", url:"https://github.com/oh-my-mermaid/oh-my-mermaid" },
  { rank:23, name:"averygan/reclip",                      isNew:true,  lang:"HTML",           langColor:"#e34c26", stars:"817",   forks:"148",    tags:["# Web scraping","# Self-hosted"],                         desc:"Download videos from almost any website. Lightweight, self-hosted media downloader with a clean web UI.", url:"https://github.com/averygan/reclip" },
  { rank:24, name:"EgoAlpha/prompt-in-context-learning",  isNew:false, lang:"Jupyter Notebook",langColor:"#DA5B0B",stars:"1.7k",  forks:"102",    tags:[],                                                          desc:"Awesome resources for in-context learning and prompt engineering: mastery of LLMs such as ChatGPT, GPT-3, and FlanT5 with cutting-edge updates.", url:"https://github.com/EgoAlpha/prompt-in-context-learning" },
  { rank:25, name:"luongnv89/claude-howto",               isNew:false, lang:"Python",         langColor:"#3572A5", stars:"17.9k", forks:"2.1k",   tags:["# Programming examples"],                                 desc:"A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.", url:"https://github.com/luongnv89/claude-howto" }
];

// ===== Render Repos =====
function renderRepos(list) {
  const container = document.getElementById('repoList');
  if (!list.length) {
    container.innerHTML = '<p class="no-results">No repositories found for this filter.</p>';
    return;
  }
  container.innerHTML = list.map((r, i) => `
    <div class="repo-card" style="animation-delay:${i * 0.04}s" onclick="window.open('${r.url}','_blank')">
      <div class="repo-rank">${r.rank}</div>
      <div class="repo-body">
        <div class="repo-title-row">
          <a class="repo-name" href="${r.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${r.name}</a>
          ${r.isNew ? '<span class="repo-badge">NEW 2026</span>' : ''}
          <span class="repo-lang">
            <span class="lang-dot" style="background:${r.langColor}"></span>${r.lang}
          </span>
          <span class="repo-stat">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${r.stars}
          </span>
          <span class="repo-stat">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
            ${r.forks}
          </span>
          <a class="repo-github" href="${r.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            GitHub
          </a>
        </div>
        ${r.tags.length ? `<div class="repo-tags">${r.tags.map(t => `<span class="repo-tag">${t}</span>`).join('')}</div>` : ''}
        <p class="repo-desc">${r.desc}</p>
      </div>
    </div>
  `).join('');
}

// ===== Filter =====
document.getElementById('langFilter').addEventListener('change', function () {
  const val = this.value;
  renderRepos(val ? repos.filter(r => r.lang === val) : repos);
});

// ===== Init =====
window.addEventListener('load', () => {
  renderRepos(repos);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1900);
});
