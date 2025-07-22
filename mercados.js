const mercados = [
  {
    nombre: "Mercado Central de Moquegua",
    lat: -17.191842377819267,
    lng: -70.93761295242408,
    imagen: "imagenes/merc1.jpg",
    descripcion: "Principal mercado de la ciudad con variedad de productos frescos y regionales."
  },
  {
    nombre: "Mercado Carrillo",
    lat: -17.18909549778847,
    lng: -70.93383640245519,
    imagen: "imagenes/merc2.jpg",
    descripcion: "Conocido por su buena selección de carnes, frutas y abarrotes."
  },
  {
    nombre: "Mercado de Carumas - Cuchumbaya - San Cristóbal",
    lat: -17.190571438391707,
    lng: -70.93902915866241,
    imagen: "imagenes/merc3.jpg",
    descripcion: "Espacio de venta para productos traídos desde los distritos altoandinos."
  },
  {
    nombre: "Mercadillo 29 de Octubre",
    lat: -17.207974129256716,
    lng: -70.94773213107277,
    imagen: "imagenes/merc5.jpg",
    descripcion: "Mercado local con énfasis en productos económicos y de consumo diario."
  },
  {
    nombre: "Feria Altiplano Sab y Dom",
    lat: -17.206623873479504,
    lng: -70.94646881064676,
    imagen: "imagenes/merc6.jpg",
    descripcion: "Feria temporal con productos agropecuarios, textiles y artesanía altiplánica."
  },
  {
    nombre: "Feria de la Chacra a la Olla",
    lat: -17.18380661405076,
    lng: -70.93297809564407,
    imagen: "imagenes/merc7.jpg",
    descripcion: "Feria sabatina que conecta directamente al productor agrícola con el consumidor."
  }
];

const lista = document.getElementById('lista-mercados');

const map = L.map('mapa').setView([-17.194, -70.936], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const layerGroup = L.layerGroup().addTo(map);

mercados.forEach((mercado, index) => {
  // Crear tarjeta
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${mercado.imagen}" alt="${mercado.nombre}" />
    <div class="card-content">
      <h3>${mercado.nombre}</h3>
      <p>${mercado.descripcion}</p>
      <button onclick="centrarEnMapa(${mercado.lat}, ${mercado.lng})">Ver en mapa</button>
    </div>
  `;
  lista.appendChild(card);

  // Añadir marcador
  const marker = L.marker([mercado.lat, mercado.lng]).addTo(layerGroup)
    .bindPopup(`
  <div style="max-width: 200px; font-family: sans-serif;">
    <strong style="font-size: 14px;">${mercado.nombre}</strong><br>
    <img src="${mercado.imagen}" style="width: 100%; border-radius: 6px; margin: 5px 0;">
    <p style="margin: 0; font-size: 12px; line-height: 1.3;">${mercado.descripcion}</p>
  </div>
`);
  mercado.marker = marker;
});

function centrarEnMapa(lat, lng) {
  map.setView([lat, lng], 17);
  layerGroup.eachLayer(marker => {
    if (marker.getLatLng().lat === lat && marker.getLatLng().lng === lng) {
      marker.openPopup();
    }
  });

  document.getElementById("mapa").scrollIntoView({ behavior: "smooth" });
}
