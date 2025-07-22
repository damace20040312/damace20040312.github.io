const bodegas = [
  {
    nombre: "Bodega Biondi",
    lat: -17.232484775545192, 
    lng: -70.98242999043833,
    imagen: "imagenes/exc1.jpg",
    descripcion: "Famosa por su pisco aromático y no aromático de variedades como Italia, Moscatel, Quebranta y más. Ubicada a 6.5 km de Moquegua en la Panamericana Sur."
  },
  {
    nombre: "Bodega Villegas",
    lat: -17.191729476749835, 
    lng: -70.92994682106809,
    imagen: "imagenes/exc2.jpg",
    descripcion: "Una de las bodegas más antiguas de la región. Se encuentra cerca de la plaza central, en la calle Ayacucho."
  },
  {
    nombre: "Bodega ATENCIO TAPIA",
    lat: -17.212693720802655, 
    lng: -70.92306406744522,
    imagen: "imagenes/exc3.jpg",
    descripcion: "Más de 24 años de tradición, bodega de vinos y piscos en Moquegua. Ofreciendo calidad y experiencias inolvidables que perduran en el tiempo.."
  },
  {
    nombre: "Bodega Rayito de Sol",
    lat: -17.179816186234106, 
    lng: -70.94584635994595,
    imagen: "imagenes/exc4.jpg",
    descripcion: "Famosa por sus macerados de fruta, cremas de pisco, vinos, pisco: quebranta, italia y acholado."
  },
  {
    nombre: "Bodega DON CAMILO",
    lat: -17.17743954483688, 
    lng: -70.92456745313483,
    imagen: "imagenes/exc5.jpg",
    descripcion: "Es conocida por sus vinos, piscos, mistela y coñac de alta calidad elaborados a partir de uvas cultivadas en la región."
  },
  {
    nombre: "Bodega Viejo Molino",
    lat: -17.172188742653045, 
    lng: -70.92359491449706,
    imagen: "imagenes/exc6.jpg",
    descripcion: "Centro turístico y productor vitivinícola, que nace como exponente de la tradición moqueguana como productor de derivados"
  },
  {
    nombre: "Bodega El Mocho",
    lat: -17.158083430900685, 
    lng: -70.92634149629262,
    imagen: "imagenes/exc7.jpg",
    descripcion: "Con una producción artesanal, esta bodega familiar, situada en Estuquiña, lleva 34 años dedicada a la elaboración de vinos secos y semisecos, así como a la creación de piscos y macerados que reflejan la esencia de esta tierra."
  }
];

const contenedor = document.getElementById("lista-excursion");

bodegas.forEach(bodega => {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.src = bodega.imagen;
  img.alt = bodega.nombre;

  const contenido = document.createElement("div");
  contenido.className = "card-content";

  const titulo = document.createElement("h3");
  titulo.textContent = bodega.nombre;

  const descripcion = document.createElement("p");
  descripcion.textContent = bodega.descripcion;

  const boton = document.createElement("button");
  boton.textContent = "Ver en el mapa";
  boton.addEventListener("click", () => {
    mapa.setView([bodega.lat, bodega.lng], 16);
    L.popup()
      .setLatLng([bodega.lat, bodega.lng])
      .setContent(`
  <div style="text-align:center; max-width:200px;">
    <h4>${bodega.nombre}</h4>
    <img src="${bodega.imagen}" alt="${bodega.nombre}" style="width:100%; border-radius:8px; margin-top:5px;" />
    <p style="font-size: 0.9em; margin-top: 5px;">${bodega.descripcion}</p>
  </div>
`)
      .openOn(mapa);
    window.scrollTo({ top: document.getElementById("mapa").offsetTop - 100, behavior: "smooth" });
  });

  contenido.appendChild(titulo);
  contenido.appendChild(descripcion);
  contenido.appendChild(boton);

  card.appendChild(img);
  card.appendChild(contenido);

  contenedor.appendChild(card);
});

// Inicializar mapa
const mapa = L.map('mapa').setView([-17.192, -70.935], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

bodegas.forEach(bodega => {
  L.marker([bodega.lat, bodega.lng]).addTo(mapa).bindPopup(`
    <div style="text-align:center; max-width:200px;">
      <h4>${bodega.nombre}</h4>
      <img src="${bodega.imagen}" alt="${bodega.nombre}" style="width:100%; border-radius:8px; margin-top:5px;" />
      <p style="font-size: 0.9em; margin-top: 5px;">${bodega.descripcion}</p>
    </div>
  `);
});

