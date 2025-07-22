const hoteles = [
  { 
    nombre: "Casa Andina Select Moquegua", 
    lat: -17.19659935500667, 
    lng: -70.96040234049697, 
    imagen: "imagenes/hotel1.jpg",
    descripcion: "Moderno hotel con todas las comodidades, ideal para viajeros de negocios y turistas."
  },
  { 
    nombre: "Gran Marquez Hotel - Moquegua", 
    lat: -17.190977576211687, 
    lng: -70.95840275368737, 
    imagen: "imagenes/hotel2.jpg",
    descripcion: "Elegante hotel con restaurante, habitaciones amplias y excelente ubicación."
  },
  { 
    nombre: "Hotel Villa Luna", 
    lat: -17.19035822050053, 
    lng: -70.94985652027101, 
    imagen: "imagenes/hotel3.jpg",
    descripcion: "Hotel tranquilo con ambiente acogedor y atención personalizada."
  },
  { 
    nombre: "Las Torres - Hotel Boutique", 
    lat: -17.19080920052468, 
    lng: -70.94899821345989, 
    imagen: "imagenes/hotel4.jpg",
    descripcion: "Boutique hotel con diseño contemporáneo y atención exclusiva."
  },
  { 
    nombre: "Valle Sur Hotel Moquegua", 
    lat: -17.191075688204556, 
    lng: -70.9484188563624, 
    imagen: "imagenes/hotel5.jpg",
    descripcion: "Cómodo alojamiento con fácil acceso al centro de Moquegua."
  },
  { 
    nombre: "Hotel San Lorenzo", 
    lat: -17.193556055137105, 
    lng: -70.94766783790267, 
    imagen: "imagenes/hotel6.jpg",
    descripcion: "Hotel céntrico con habitaciones funcionales y buen servicio."
  },
  { 
    nombre: "Hotel Piedra Santa", 
    lat: -17.195421433172104, 
    lng: -70.94638037768601, 
    imagen: "imagenes/hotel7.jpg",
    descripcion: "Alojamiento tradicional con precios accesibles y buena ubicación."
  },
  { 
    nombre: "Hotel Tierra del Sol - Moquegua", 
    lat: -17.18883880128794, 
    lng: -70.93908636105752, 
    imagen: "imagenes/hotel8.jpg",
    descripcion: "Hotel con vista panorámica, ideal para una estancia relajante."
  },
  { 
    nombre: "Cálido Hostal", 
    lat: -17.190150750906994, 
    lng: -70.93363611257311, 
    imagen: "imagenes/hotel9.jpg",
    descripcion: "Hostal económico con ambiente familiar y atención amable."
  },
  { 
    nombre: "Hostal Montalvo", 
    lat: -17.193635571907073, 
    lng: -70.93803493498007, 
    imagen: "imagenes/hotel10.jpg",
    descripcion: "Hostal sencillo pero cómodo, cerca del centro histórico."
  },
  { 
    nombre: "Hostal Columbia", 
    lat: -17.195623940386074, 
    lng: -70.93603937164423, 
    imagen: "imagenes/hotel11.jpg",
    descripcion: "Alojamiento práctico para estancias cortas y viajes de paso."
  },
  { 
    nombre: "Hospedaje Kelita", 
    lat: -17.19410704265295, 
    lng: -70.93554584522784, 
    imagen: "imagenes/hotel12.jpg",
    descripcion: "Hospedaje tranquilo con excelente relación calidad-precio."
  },
  { 
    nombre: "Antawa Hotel", 
    lat: -17.194824495832357, 
    lng: -70.93519715808581, 
    imagen: "imagenes/hotel13.jpg",
    descripcion: "Hotel moderno con atención cálida y buena conectividad."
  },
  { 
    nombre: "Hotel Costa Sol", 
    lat: -17.194132666028636, 
    lng: -70.93272952600387, 
    imagen: "imagenes/hotel14.jpg",
    descripcion: "Hotel confortable cerca de zonas turísticas y comerciales."
  }
];

const lista = document.getElementById('lista-hoteles');

const map = L.map('mapa').setView([-17.1926, -70.9333], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const layerGroup = L.layerGroup().addTo(map);

hoteles.forEach((hotel, index) => {
  // Crear tarjeta
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${hotel.imagen}" alt="${hotel.nombre}" />
    <div class="card-content">
      <h3>${hotel.nombre}</h3>
      <p>${hotel.descripcion}</p>
      <button onclick="centrarEnMapa(${hotel.lat}, ${hotel.lng})">Ver en mapa</button>
    </div>
  `;
  lista.appendChild(card);

  // Añadir marcador
  const marker = L.marker([hotel.lat, hotel.lng]).addTo(layerGroup)
    .bindPopup(`
  <div style="max-width: 200px; font-family: sans-serif;">
    <strong style="font-size: 14px;">${hotel.nombre}</strong><br>
    <img src="${hotel.imagen}" style="width: 100%; border-radius: 6px; margin: 5px 0;">
    <p style="margin: 0; font-size: 12px; line-height: 1.3;">${hotel.descripcion}</p>
  </div>
`);
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

// Intentar obtener la ubicación del usuario
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Añadir un marcador o círculo en la ubicación del usuario
      const userMarker = L.circleMarker([lat, lng], {
        radius: 8,
        color: 'blue',
        fillColor: '#3f51b5',
        fillOpacity: 0.7
      }).addTo(map).bindPopup("Estás aquí").openPopup();

      // Centrar el mapa en la ubicación del usuario
      map.setView([lat, lng], 15);
    },
    (error) => {
      console.warn("No se pudo obtener la ubicación del usuario:", error.message);
    }
  );
} else {
  console.warn("Geolocalización no soportada por este navegador.");
}
