const hotels = [
  {
    id: 0,
    name: "Il Sereno",
    location: "Lake Como, Italy",
    bg: "#b2bab4",
    desc: "Perched on the shores of Lake Como, Il Sereno is a study in understated luxury — floor-to-ceiling glass, private terraces over the water, and an atmosphere that feels both intimate and effortless."
  },
  {
    id: 1,
    name: "Hotel Miramalfi",
    location: "Amalfi Coast, Italy",
    bg: "#b8b2a6",
    desc: "Clinging to the cliffs above the Tyrrhenian Sea, Hotel Miramalfi captures the wild romance of the Amalfi Coast. Every room opens to an uninterrupted horizon of blue."
  },
  {
    id: 2,
    name: "Caesar Augustus",
    location: "Capri, Italy",
    bg: "#a6b0b4",
    desc: "Set 300 metres above sea level on Capri's most dramatic promontory, Caesar Augustus has been welcoming dreamers since 1949. The views are simply without equal."
  },
  {
    id: 3,
    name: "Casa Angelina",
    location: "Praiano, Italy",
    bg: "#c0bab0",
    desc: "A minimalist cliff-side retreat in Praiano, Casa Angelina strips everything back to white walls, clean lines, and the relentless blue of the sea below."
  },
  {
    id: 4,
    name: "Hotel Regency",
    location: "Florence, Italy",
    bg: "#b0a89c",
    desc: "Tucked inside a 19th-century palazzo on the edge of Piazza d'Azeglio, Hotel Regency is Florence's most discreet luxury address — antique-filled, quiet, and entirely without pretense."
  },
  {
    id: 5,
    name: "Alisal Ranch",
    location: "Solvang, California",
    bg: "#c8c2b0",
    desc: "A working cattle and horse ranch in the Santa Ynez Valley, Alisal is one of California's last great ranches. Oak-studded hills, a private lake, and a pace of life measured in sunsets."
  },
  {
    id: 6,
    name: "Hotel Cerro",
    location: "San Luis Obispo, California",
    bg: "#b8b4ac",
    desc: "Hotel Cerro sits at the heart of San Luis Obispo, steps from the farmers market and the creek walk. Modern California design meets genuine Central Coast warmth."
  },
  {
    id: 7,
    name: "Casa Chameleon",
    location: "Costa Rica",
    bg: "#acb8ac",
    desc: "Twelve jungle-cliffside casitas overlooking the Gulf of Papagayo. Casa Chameleon is raw nature made luxurious — infinity pools, howler monkeys, and nothing else for miles."
  },
  {
    id: 8,
    name: "Borgo 69",
    location: "Tuscany, Italy",
    bg: "#c2bcb4",
    desc: "A restored 15th-century borgo in the rolling hills outside Siena. Borgo 69 offers complete privacy, a private pool, and interiors that feel as though time stopped — beautifully — centuries ago."
  },
  {
    id: 9,
    name: "Casa Monti",
    location: "Rome, Italy",
    bg: "#b4aca4",
    desc: "Nestled in the Monti neighbourhood — Rome's most storied rione — Casa Monti feels more like a beautifully curated apartment than a place you're merely passing through."
  }
];

function makeHotelCard(hotel) {
  const card = document.createElement('div');
  card.className = 'hotel-card';
  card.onclick = () => showHotel(hotel.id);

  // Try loading a real photo from assets folder, fall back to color
  card.innerHTML = `
    <img
      src="assets/hotels/${hotel.id}.jpg"
      alt="${hotel.name}"
      class="hotel-card-img"
      onerror="this.style.display='none'"
    />
    <div class="hotel-card-ph" style="background: ${hotel.bg};"></div>
    <div class="hotel-card-info">
      <div class="hotel-card-name">${hotel.name}</div>
      <div class="hotel-card-loc">${hotel.location}</div>
    </div>
  `;
  return card;
}

function buildGrids() {
  const homeGrid = document.getElementById('home-grid');
  const hotelsGrid = document.getElementById('hotels-grid');

  hotels.forEach(h => {
    homeGrid.appendChild(makeHotelCard(h));
    hotelsGrid.appendChild(makeHotelCard(h));
  });
}

function showHotel(id) {
  const h = hotels[id];
  const detail = document.getElementById('hotel-detail');

  detail.innerHTML = `
    <button class="back-btn" onclick="showPage('hotels')">&#8592; All Hotels</button>

    <div class="detail-hero">
      <div class="detail-hero-ph" style="background: ${h.bg};">
        <img
          src="assets/hotels/${h.id}.jpg"
          alt="${h.name}"
          style="width:100%; height:100%; object-fit:cover; display:block;"
          onerror="this.style.display='none'"
        />
      </div>
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-text">
        <p class="detail-hero-loc">${h.location}</p>
        <h1 class="detail-hero-name">${h.name}</h1>
      </div>
    </div>

    <div class="detail-body">
      <div class="detail-meta">
        <div class="detail-meta-item">
          <label>Property</label>
          <span>${h.name}</span>
        </div>
        <div class="detail-meta-item">
          <label>Location</label>
          <span>${h.location}</span>
        </div>
        <div class="detail-meta-item">
          <label>Category</label>
          <span>Hotel</span>
        </div>
      </div>
      <p class="detail-desc">${h.desc}</p>
    </div>

    <div class="detail-gallery">
      ${[1,2,3,4,5,6].map(n => `
        <div class="gallery-cell" style="background: ${h.bg}; filter: brightness(${0.78 + n * 0.04});">
          <img
            src="assets/hotels/${h.id}-${n}.jpg"
            alt="${h.name} photo ${n}"
            style="width:100%; height:100%; object-fit:cover;"
            onerror="this.parentElement.style.display='flex'"
          />
        </div>
      `).join('')}
    </div>
  `;

  showPage('hotel');
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo(0, 0);
}

buildGrids();
