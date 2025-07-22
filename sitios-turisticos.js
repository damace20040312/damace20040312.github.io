const sitiosTuristicos = [
  {
    nombre: "Museo Contisuyo",
    lat: -17.19271473695945,
    lng: -70.93469862945061,
    imagen: "imagenes/sit1.jpg",
    descripcion: "Centro cultural que conserva y exhibe restos arqueológicos de las culturas prehispánicas del valle de Moquegua, como la cultura Tiwanaku y la cultura Estuquiña."
  },
  {
    nombre: "Geoglifo Chen Chen",
    lat: -17.18734540675845,
    lng: -70.94670566033379,
    imagen: "imagenes/sit2.jpg",
    descripcion: "Antiguo geoglifo ubicado en el desierto de Chen Chen, representando figuras humanas y animales; evidencia de la cosmovisión de culturas ancestrales."
  },
  {
    nombre: "Parque Mirador Turístico Cristo Blanco",
    lat: -17.198077445945334,
    lng: -70.93002838363104,
    imagen: "imagenes/sit3.jpg",
    descripcion: "Mirador con una imponente estatua del Cristo Blanco, desde donde se obtiene una vista panorámica de la ciudad de Moquegua."
  },
  {
    nombre: "Paseo de los guardianes de la historia de Moquegua",
    lat: -17.18906311524759,
    lng: -70.9369240026635,
    imagen: "imagenes/sit4.jpg",
    descripcion: "Recorrido escultórico que representa personajes históricos y símbolos culturales de Moquegua. Ideal para caminatas y fotografías."
  },
  {
    nombre: "Plaza de Armas de Moquegua",
    lat: -17.19332691230961,
    lng: -70.93456365893293,
    imagen: "imagenes/sit5.jpg",
    descripcion: "Plaza principal de la ciudad, rodeada de arquitectura republicana y jardines bien cuidados. Punto de encuentro tradicional."
  },
  {
    nombre: "Casona Chocano - Podestá",
    lat: -17.193962373658017,
    lng: -70.93475677796543,
    imagen: "imagenes/sit6.jpg",
    descripcion: "Antigua casona de arquitectura colonial restaurada, que resalta por sus balcones y patios interiores. Forma parte del patrimonio histórico moqueguano."
  },
  {
    nombre: "Mirador Catarata Mollesaja",
    lat: -17.111221358946636,
    lng: -70.88752319101489,
    imagen: "imagenes/sit7.jpg",
    descripcion: "Mirador natural desde el cual se puede observar la hermosa caída de agua de la Catarata Mollesaja, rodeada de naturaleza y senderos."
  },
  {
    nombre: "Cerro Baul",
    lat: -17.112553980953212, 
    lng: -70.8601502168121,
    imagen: "imagenes/sit8.jpg",
    descripcion: "Importante centro ceremonial Wari con vista panorámica del valle, que data de la época preincaica y se halla sobre la cima de una meseta o cerro de acceso difícil.."
  },
  {
    nombre: "Cocatedral",
    lat: -17.193856093826838, 
    lng: -70.93371909086994,
    imagen: "imagenes/sit9.jpg",
    descripcion: "Co-catedral de Santo Domingo, es el principal templo católico en la ciudad de Moquegua. Está ubicada en la plaza de armas de Moquegua."
  },
];

const contenedor = document.getElementById("lista-lugares");

sitiosTuristicos.forEach(lugar => {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.src = lugar.imagen;
  img.alt = lugar.nombre;

  const contenido = document.createElement("div");
  contenido.className = "card-content";

  const titulo = document.createElement("h3");
  titulo.textContent = lugar.nombre;

  const descripcion = document.createElement("p");
  descripcion.textContent = lugar.descripcion;

  const boton = document.createElement("button");
boton.textContent = "Ver en el mapa";
boton.addEventListener("click", () => {
  mapa.setView([lugar.lat, lugar.lng], 16);
  L.popup()
    .setLatLng([lugar.lat, lugar.lng])
    .setContent(`
  <div style="max-width: 220px; font-size: 13px; line-height: 1.3;">
    <b>${lugar.nombre}</b><br>
    <img src="${lugar.imagen}" width="100%" style="margin-top: 5px; border-radius: 6px;"><br>
    <p style="margin-top: 5px;">${lugar.descripcion}</p>
  </div>
`)
    .openOn(mapa);
  window.scrollTo({ top: document.getElementById("mapa").offsetTop - 100, behavior: "smooth" });
});

  contenido.appendChild(titulo);
  contenido.appendChild(descripcion); // ✅ AÑADIDO
  contenido.appendChild(boton);

  card.appendChild(img);
  card.appendChild(contenido);
  contenedor.appendChild(card);
});

// Inicializar mapa
const mapa = L.map('mapa').setView([-17.193, -70.935], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

// Marcadores con popup
sitiosTuristicos.forEach(lugar => {
  L.marker([lugar.lat, lugar.lng])
    .addTo(mapa)
    .bindPopup(`
  <div style="max-width: 220px; font-size: 13px; line-height: 1.3;">
    <b>${lugar.nombre}</b><br>
    <img src="${lugar.imagen}" width="100%" style="margin-top: 5px; border-radius: 6px;"><br>
    <p style="margin-top: 5px;">${lugar.descripcion}</p>
  </div>
`)
});

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
