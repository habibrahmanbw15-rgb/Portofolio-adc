/* ============================================================
   GALERI — Habib Rahman
   ─────────────────────────────────────────────────────────────
   CARA MENAMBAH KARYA:
   1. Buka file ini (assets/galery.js)
   2. Temukan array  GALERI_DATA  di bawah
   3. Salin salah satu objek karya yang sudah ada
   4. Ubah nilainya sesuai karya baru
   5. Simpan file — kartu langsung muncul tanpa perlu menyentuh HTML

   STRUKTUR DATA SATU KARYA:
   {
     id       : angka unik (int)              — wajib
     tab      : "ilustrasi" | "desain" | "coding"  — wajib
     title    : judul karya                   — wajib
     sub      : keterangan singkat / teknik   — opsional
     year     : tahun dibuat (string)         — opsional
     image    : path relatif dari root proyek — opsional (kosong = emoji placeholder)
     emoji    : emoji fallback saat tidak ada gambar
     featured : true | false                  — tampilkan bintang emas
     desc     : deskripsi panjang di lightbox
     tags     : array string (topik / style)
     tools    : array string (software / bahasa)
     link     : URL eksternal (kosong = tombol sembunyikan)
   }
   ─────────────────────────────────────────────────────────────
*/

'use strict';

/* ============================================================
   DATA — edit bagian ini untuk menambah / mengubah karya
   ============================================================ */
const GALERI_DATA = [

  /* ── ILUSTRASI ────────────────────────────────────────── */
  {
    id: 1,
    tab: 'ilustrasi',
    title: 'Evalia Vana',
    sub: 'Karakter Fantasi',
    year: '2026',
    image: 'assets/img/art/Vana.jpg',
    emoji: '🎨',
    featured: true,
    desc: 'Ilustrasi karakter utama novel Evalia Vana — gadis dengan mata ketiga yang diasingkan. Dibuat dengan gaya semi-realis menggunakan Ibis Paint.',
    tags: ['karakter', 'fantasy', 'original'],
    tools: ['Ibis Paint'],
    link: '',
  },
  {
    id: 2,
    tab: 'ilustrasi',
    title: 'Chibi Wizar',
    sub: 'Ilustrasi Chibi',
    year: '2026',
    image: 'assets/img/art/putrisihir.jpg',
    emoji: '🧙',
    featured: false,
    desc: 'Ilustrasi chibi penyihir berkostum biru dengan topi besar dan ekspresi penuh semangat. Proyek latihan gaya SD (Super-Deformed).',
    tags: ['chibi', 'fantasy', 'character'],
    tools: ['Ibis Paint'],
    link: '',
  },
  {
    id: 3,
    tab: 'ilustrasi',
    title: 'Worled Wather',
    sub: 'Ilustrasi Lingkungan',
    year: '2025',
    image: 'assets/img/art/worledwather.jpg',
    emoji: '🌊',
    featured: false,
    desc: 'Eksplorasi konsep "dunia air" — lanskap fantasi dengan lapisan bawah laut yang bercahaya dan permukaan yang tenang.',
    tags: ['landscape', 'fantasi', 'water'],
    tools: ['Ibis Paint', 'Paper Drawing'],
    link: '',
  },
  {
    id: 4,
    tab: 'ilustrasi',
    title: 'Glidt',
    sub: 'Karakter Aksi',
    year: '2025',
    image: 'assets/img/art/glidt.jpg',
    emoji: '⚡',
    featured: false,
    desc: 'Karakter Glidt — petarung dengan elemen kilat. Dirancang sebagai karakter utama untuk proyek komik pendek.',
    tags: ['karakter', 'aksi', 'komik'],
    tools: ['Ibis Paint'],
    link: '',
  },
  {
    id: 5,
    tab: 'ilustrasi',
    title: 'Dalam Air',
    sub: 'Konsep Environment',
    year: '2025',
    image: 'assets/img/art/dalamair.jpg',
    emoji: '🐠',
    featured: false,
    desc: 'Scene bawah laut penuh detail — karang bercahaya, ikan warna-warni, dan nuansa sunyi yang dramatis.',
    tags: ['environment', 'underwater', 'detail'],
    tools: ['Ibis Paint'],
    link: '',
  },
  {
    id: 6,
    tab: 'ilustrasi',
    title: 'KAidi',
    sub: 'Ilustrasi Chibi',
    year: '2026',
    image: 'assets/img/art/kaidi.jpg',
    emoji: '🎣',
    featured: false,
    desc: 'Chibi seorang nelayan tua dengan wajah lelah namun tersenyum. Dibuat sebagai latihan ekspresi wajah.',
    tags: ['chibi', 'slice of life', 'ekspresi'],
    tools: ['Ibis Paint'],
    link: '',
  },

  /* ── DESAIN ───────────────────────────────────────────── */
  {
    id: 7,
    tab: 'desain',
    title: 'Desain KAI',
    sub: 'Poster Sinematik',
    year: '2026',
    image: '',
    emoji: '🚂',
    featured: true,
    desc: 'Poster desain bertema kereta api nasional — memadukan tipografi bold, komposisi sinematik, dan palet warna coklat tua + krem.',
    tags: ['poster', 'tipografi', 'sinematik'],
    tools: ['Canva', 'Figma'],
    link: '',
  },
  {
    id: 8,
    tab: 'desain',
    title: 'Brand Identity: Studio Gelap',
    sub: 'Branding',
    year: '2026',
    image: '',
    emoji: '🖤',
    featured: false,
    desc: 'Identitas visual lengkap untuk studio kreatif fiktif bertema gelap — mencakup logo, palet warna, tipografi, dan panduan gaya.',
    tags: ['branding', 'logo', 'identity'],
    tools: ['Figma', 'Affinity Designer'],
    link: '',
  },
  {
    id: 9,
    tab: 'desain',
    title: 'Landing Page Kafe',
    sub: 'UI Design',
    year: '2026',
    image: '',
    emoji: '☕',
    featured: false,
    desc: 'Desain landing page untuk kafe fiktif bertema vintage — mengutamakan kehangatan visual, keterbacaan, dan hierarki konten yang jelas.',
    tags: ['landing page', 'UI', 'vintage'],
    tools: ['Figma'],
    link: '',
  },
  {
    id: 10,
    tab: 'desain',
    title: 'Poster Event Komunitas',
    sub: 'Desain Grafis',
    year: '2025',
    image: '',
    emoji: '📣',
    featured: false,
    desc: 'Poster promosi event komunitas kreatif lokal. Menggabungkan elemen ilustrasi tangan dan layout modern.',
    tags: ['poster', 'event', 'komunitas'],
    tools: ['Canva', 'CorelDraw'],
    link: '',
  },
  {
    id: 11,
    tab: 'desain',
    title: 'Dashboard Analitik',
    sub: 'UI/UX Design',
    year: '2026',
    image: '',
    emoji: '📊',
    featured: false,
    desc: 'Konsep desain dashboard analitik tema gelap — fokus pada keterbacaan data, hierarki visual, dan aksesibilitas warna.',
    tags: ['dashboard', 'dark mode', 'data viz'],
    tools: ['Figma'],
    link: '',
  },

  /* ── CODING ───────────────────────────────────────────── */
  {
    id: 12,
    tab: 'coding',
    title: 'Portfolio Website',
    sub: 'Web Development',
    year: '2026',
    image: '',
    emoji: '🌐',
    featured: true,
    desc: 'Website portofolio pribadi yang sedang kamu lihat sekarang — dibangun dengan HTML, CSS, dan Vanilla JS murni. Tanpa framework.',
    tags: ['portfolio', 'vanilla JS', 'responsive'],
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: '',
  },
  {
    id: 13,
    tab: 'coding',
    title: 'Galeri Interaktif',
    sub: 'Frontend Project',
    year: '2026',
    image: '',
    emoji: '🖼️',
    featured: false,
    desc: 'Sistem galeri berbasis tab dengan lightbox, data dummy, dan arsitektur data-driven — mudah diperbarui hanya lewat file JS.',
    tags: ['gallery', 'tab', 'lightbox'],
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: '',
  },
  {
    id: 14,
    tab: 'coding',
    title: 'Form Kontak Cerdas',
    sub: 'Frontend Feature',
    year: '2026',
    image: '',
    emoji: '📬',
    featured: false,
    desc: 'Form kontak dengan validasi real-time, honeypot anti-bot, cooldown pengiriman, mailto fallback, dan dukungan endpoint API.',
    tags: ['form', 'validasi', 'accessibility'],
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: '',
  },
  {
    id: 15,
    tab: 'coding',
    title: 'Marquee Goals',
    sub: 'CSS + JS Component',
    year: '2026',
    image: '',
    emoji: '✨',
    featured: false,
    desc: 'Komponen marquee scrolling otomatis tanpa library — mendukung reduced motion, data-driven dari file JS, dan gap tanpa celah.',
    tags: ['animation', 'component', 'accessibility'],
    tools: ['CSS', 'JavaScript'],
    link: '',
  },
];

/* ============================================================
   KONFIGURASI TAMPILAN
   Ubah di sini jika ingin mengganti teks badge per tab.
   ============================================================ */
const TAB_CONFIG = {
  ilustrasi : { label: 'Ilustrasi', emoji: '🎨' },
  desain    : { label: 'Desain',    emoji: '✏️'  },
  coding    : { label: 'Coding',    emoji: '💻'  },
};

/* ============================================================
   COUNTS — jumlah karya per kategori, dibagikan ke index.html
   Akses dari halaman lain: window.GALERI_COUNTS.ilustrasi, dll.
   Otomatis terupdate saat karya ditambah/dihapus dari GALERI_DATA.
   ============================================================ */
window.GALERI_COUNTS = {
  ilustrasi : GALERI_DATA.filter(d => d.tab === 'ilustrasi').length,
  desain    : GALERI_DATA.filter(d => d.tab === 'desain').length,
  coding    : GALERI_DATA.filter(d => d.tab === 'coding').length,
  total     : GALERI_DATA.length,
};

/* ============================================================
   ENGINE — jangan ubah kecuali ingin modifikasi logika
   ============================================================ */
(function () {

  /* ── helpers ── */
  function esc(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ── state ── */
  let activeTab   = 'ilustrasi';
  let lbItems     = [];   // karya di tab aktif (untuk navigasi lightbox)
  let lbIndex     = 0;    // index item yang sedang dibuka di lightbox

  /* ── DOM refs ── */
  const tabButtons  = document.querySelectorAll('.gl-tab');
  const indicator   = document.getElementById('glTabIndicator');
  const lightbox    = document.getElementById('glLightbox');
  const lbBackdrop  = document.getElementById('glLbBackdrop');
  const lbClose     = document.getElementById('glLbClose');
  const lbPrev      = document.getElementById('glLbPrev');
  const lbNext      = document.getElementById('glLbNext');
  const lbImg       = document.getElementById('glLbImg');
  const lbPlaceholder = document.getElementById('glLbPlaceholder');
  const lbTitle     = document.getElementById('lbTitle');
  const lbBadge     = document.getElementById('glLbBadge');
  const lbYear      = document.getElementById('glLbYear');
  const lbDesc      = document.getElementById('glLbDesc');
  const lbTags      = document.getElementById('glLbTags');
  const lbTools     = document.getElementById('glLbTools');
  const lbLink      = document.getElementById('glLbLink');

  /* ── render one tab ── */
  function renderTab(tabKey) {
    const items   = GALERI_DATA.filter(d => d.tab === tabKey);
    const grid    = document.getElementById('grid-' + tabKey);
    const empty   = document.getElementById('empty-' + tabKey);
    const countEl = document.getElementById('count-' + tabKey);

    if (countEl) countEl.textContent = items.length;
    if (!grid)   return;

    if (!items.length) {
      grid.innerHTML = '';
      if (empty) empty.style.display = 'flex';
      return;
    }
    if (empty) empty.style.display = 'none';

    grid.setAttribute('role', 'list');
    grid.innerHTML = items.map(item => buildCard(item)).join('');
  }

  /* ── build card HTML ── */
  function buildCard(item) {
    const featuredBadge = item.featured
      ? `<div class="gl-card-featured" title="Karya Unggulan" aria-label="Unggulan">⭐</div>`
      : '';

    const thumbContent = item.image
      ? `<img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
         <div class="gl-card-thumb-placeholder" style="display:none;">
           <span>${esc(item.emoji || '🖼️')}</span>
           <span>No Image</span>
         </div>`
      : `<div class="gl-card-thumb-placeholder">
           <span>${esc(item.emoji || '🖼️')}</span>
         </div>`;

    return `
      <article class="gl-card" role="listitem"
        data-id="${item.id}"
        aria-label="${esc(item.title)}"
        tabindex="0">
        <div class="gl-card-thumb">
          ${thumbContent}
          ${featuredBadge}
          <div class="gl-card-overlay">
            <span class="gl-card-overlay-text">Lihat Detail</span>
          </div>
        </div>
        <div class="gl-card-info">
          <h3 class="gl-card-title">${esc(item.title)}</h3>
          ${item.sub  ? `<p class="gl-card-sub">${esc(item.sub)}</p>` : ''}
          ${item.year ? `<p class="gl-card-year">${esc(item.year)}</p>` : ''}
        </div>
      </article>`;
  }

  /* ── render all tabs & update counts ── */
  function renderAll() {
    Object.keys(TAB_CONFIG).forEach(renderTab);
  }

  /* ── tab switching ── */
  function switchTab(tabKey) {
    activeTab = tabKey;

    /* panels */
    document.querySelectorAll('.gl-panel').forEach(panel => {
      if (panel.id === 'panel-' + tabKey) {
        panel.hidden = false;
        panel.style.animation = 'none';
        void panel.offsetWidth;
        panel.style.animation = '';
      } else {
        panel.hidden = true;
      }
    });

    /* tab buttons */
    tabButtons.forEach(btn => {
      const isActive = btn.dataset.tab === tabKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    moveIndicator();
  }

  /* ── sliding indicator position ── */
  function moveIndicator() {
    const activeBtn = document.querySelector(`.gl-tab[data-tab="${activeTab}"]`);
    if (!activeBtn || !indicator) return;
    indicator.style.left  = activeBtn.offsetLeft  + 'px';
    indicator.style.width = activeBtn.offsetWidth + 'px';
  }

  /* ── lightbox ── */
  function openLightbox(itemId) {
    lbItems = GALERI_DATA.filter(d => d.tab === activeTab);
    lbIndex = lbItems.findIndex(d => d.id === itemId);
    if (lbIndex === -1) return;
    paintLightbox(lbItems[lbIndex]);
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function paintLightbox(item) {
    /* image */
    if (item.image) {
      lbImg.src = item.image;
      lbImg.alt = item.title;
      lbImg.style.display = 'block';
      lbPlaceholder.style.display = 'none';
      lbImg.onerror = () => {
        lbImg.style.display = 'none';
        lbPlaceholder.style.display = 'flex';
        lbPlaceholder.textContent = item.emoji || '🖼️';
      };
    } else {
      lbImg.style.display = 'none';
      lbPlaceholder.style.display = 'flex';
      lbPlaceholder.textContent = item.emoji || '🖼️';
    }

    /* text */
    lbTitle.textContent = item.title;
    lbBadge.textContent = TAB_CONFIG[item.tab]?.label || item.tab;
    lbYear.textContent  = item.year ? '📅 ' + item.year : '';
    lbDesc.textContent  = item.desc || '';

    /* tags */
    lbTags.innerHTML = (item.tags || [])
      .map(t => `<span class="gl-lb-tag">#${esc(t)}</span>`)
      .join('');

    /* tools */
    lbTools.innerHTML = (item.tools || [])
      .map(t => `<span class="gl-lb-tool">🔧 ${esc(t)}</span>`)
      .join('');

    /* link */
    if (item.link) {
      lbLink.href = item.link;
      lbLink.style.display = 'inline-flex';
    } else {
      lbLink.style.display = 'none';
    }

    /* prev/next buttons */
    lbPrev.disabled = lbIndex <= 0;
    lbNext.disabled = lbIndex >= lbItems.length - 1;
    lbPrev.style.opacity = lbPrev.disabled ? '0.3' : '1';
    lbNext.style.opacity = lbNext.disabled ? '0.3' : '1';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  function navigateLightbox(dir) {
    const next = lbIndex + dir;
    if (next < 0 || next >= lbItems.length) return;
    lbIndex = next;
    paintLightbox(lbItems[lbIndex]);
  }

  /* ── event wiring ── */
  function bindEvents() {

    /* tab clicks */
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    /* card clicks — delegation per grid */
    document.querySelectorAll('.gl-grid').forEach(grid => {
      grid.addEventListener('click', e => {
        const card = e.target.closest('[data-id]');
        if (!card) return;
        openLightbox(parseInt(card.dataset.id, 10));
      });

      /* keyboard: Enter / Space on card */
      grid.addEventListener('keydown', e => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest('[data-id]');
        if (!card) return;
        e.preventDefault();
        openLightbox(parseInt(card.dataset.id, 10));
      });
    });

    /* lightbox controls */
    lbClose.addEventListener('click', closeLightbox);
    lbBackdrop.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => navigateLightbox(-1));
    lbNext.addEventListener('click', () => navigateLightbox(1));

    /* keyboard navigation */
    document.addEventListener('keydown', e => {
      if (lightbox.style.display !== 'flex') return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   navigateLightbox(-1);
      if (e.key === 'ArrowRight')  navigateLightbox(1);
    });

    /* resize → re-position indicator */
    window.addEventListener('resize', moveIndicator);
  }

  /* ── init ── */
  function init() {
    /* Hanya jalankan galeri engine jika elemen galeri ada di halaman ini */
    if (!document.getElementById('grid-ilustrasi')) return;
    renderAll();
    bindEvents();
    switchTab('ilustrasi');   /* default tab */
  }

  document.addEventListener('DOMContentLoaded', init);

})();
