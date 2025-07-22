const restaurantes = [
  { nombre: "Rest. La tía camucha", lat: -17.1789, lng: -70.9375, imagen: "imagenes/rest1.jpg", descripcion: "Comida tradicional moqueguana en un ambiente acogedor." },
  { nombre: "Restaurante Campestre Mamalina", lat: -17.1773, lng:-70.9373, imagen: "imagenes/rest2.jpg", descripcion: "Ambiente natural ideal para disfrutar en familia." },
  { nombre: "Rest. Cuyeria Doña Kity", lat: -17.184326242496056, lng:-70.93429233792712, imagen: "imagenes/rest3.jpg", descripcion: "Especialidad en cuy chactado y platos regionales." },
  { nombre: "Carrieles Restaurante", lat: -17.186204510294555, lng: -70.93267389002845, imagen: "imagenes/rest4.jpg", descripcion: "Delicias gourmet y cocina fusión en el centro de la ciudad." },
  { nombre: "Púlpito del sabor", lat: -17.18876693972706, lng:-70.9366435593576, imagen: "imagenes/rest5.jpg", descripcion: "Mariscos frescos y platos marinos bien servidos." },
  { nombre: "Parrilladas Porkys", lat: -17.188889935425085, lng:-70.93215890608172, imagen: "imagenes/rest6.jpg", descripcion: "Carnes a la parrilla con sabor intenso y buena atención." },
  { nombre: "Moraly restaurante", lat: -17.19318062560497, lng:-70.93648546033381, imagen: "imagenes/rest7.jpg", descripcion: "Restaurante moderno con opciones para toda la familia." },
  { nombre: "Brasa Viva", lat: -17.195025508823047, lng:-70.93792312424243, imagen: "imagenes/rest8.jpg", descripcion: "Parrillas, anticuchos y cocina criolla con sazón casera." },
  { nombre: "Paila Anta", lat: -17.192770649060257, lng: -70.9335886748463, imagen: "imagenes/rest9.jpg", descripcion: "Comida tradicional con ingredientes locales de calidad." },
  { nombre: "NAUTICA RESTOMAR", lat: -17.193590601241976, lng: -70.93298786007854, imagen: "imagenes/rest10.jpg", descripcion: "Especialidad en pescados y mariscos en ambiente marino." },
  { nombre: "12 Sabores Restaurante", lat: -17.19474084508858, lng:-70.92558198994463, imagen: "imagenes/rest11.jpg", descripcion: "Platos variados con sazón internacional y nacional." },
  { nombre: "Rest Campestre Fundo Chaparral Chen Chen", lat: -17.20878187547896, lng:-70.9199815381973, imagen: "imagenes/rest12.jpg", descripcion: "Zona campestre amplia con platos típicos y naturaleza." },
  { nombre: "Restaurante D Mil Sabores", lat: -17.202453352134324, lng: -70.92081802666358, imagen: "imagenes/rest13.jpg", descripcion: "Opciones para todos los gustos, desde pastas hasta parrillas." }
];

const lista = document.getElementById('lista-restaurantes');

const map = L.map('mapa').setView([-17.1926, -70.9333], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const layerGroup = L.layerGroup().addTo(map);

restaurantes.forEach((rest, index) => {
  // Crear tarjeta
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${rest.imagen}" alt="${rest.nombre}" />
    <div class="card-content">
      <h3>${rest.nombre}</h3>
      <p>${rest.descripcion}</p>
      <button onclick="centrarEnMapa(${rest.lat}, ${rest.lng})">Ver en mapa</button>
    </div>
  `;
  lista.appendChild(card);

  // Añadir marcador
  const marker = L.marker([rest.lat, rest.lng]).addTo(layerGroup)
  .bindPopup(`
    <div style="max-width: 200px; text-align: center;">
      <h4>${rest.nombre}</h4>
      <img src="${rest.imagen}" alt="${rest.nombre}" style="width:100%; border-radius:8px; margin-top:5px;" />
      <p style="font-size: 0.9em; margin-top: 5px;">${rest.descripcion}</p>
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

