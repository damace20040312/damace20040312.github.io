
// Crear el mapa y establecer la vista inicial en Moquegua
const map = L.map('mapa').setView([-17.1926, -70.9333], 14);

// Cargar una capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Grupo de capas para poder limpiar los marcadores luego
const currentLayerGroup = L.layerGroup().addTo(map);

// Función auxiliar para limpiar los marcadores anteriores
function clearMap() {
  currentLayerGroup.clearLayers();
}

const restaurantes = [
  { nombre: "Rest. La tía camucha", lat: -17.178959619010396, lng: -70.93754455529594, imagen: "imagenes/rest1.jpg" },
  { nombre: "Restaurante Campestre Mamalina", lat: -17.177395873374493, lng:-70.93736522516689, imagen: "imagenes/rest2.jpg" },
  { nombre: "Rest. Cuyeria Doña Kity", lat: -17.184326242496056, lng:-70.93429233792712, imagen: "imagenes/rest3.jpg" },
  { nombre: "Carrieles Restaurante", lat: -17.186204510294555, lng: -70.93267389002845, imagen: "imagenes/rest4.jpg" },
  { nombre: "púlpito del sabor", lat: -17.18876693972706, lng:-70.9366435593576, imagen: "imagenes/rest5.jpg" },
  { nombre: "Parrilladas Porkys", lat: -17.188889935425085, lng:-70.93215890608172, imagen: "imagenes/rest6.jpg" }

  ,
  { nombre: "Moraly restaurante", lat: -17.19318062560497, lng:-70.93648546033381, imagen: "imagenes/rest7.jpg" },
  { nombre: "Brasa Viva", lat: -17.195025508823047, lng:-70.93792312424243, imagen: "imagenes/rest8.jpg" },
  { nombre: "Paila Anta", lat: -17.192770649060257, lng: -70.9335886748463, imagen: "imagenes/rest9.jpg" },
  { nombre: "NAUTICA RESTOMAR", lat: -17.193590601241976, lng: -70.93298786007854, imagen: "imagenes/rest10.jpg" },
  { nombre: "12 Sabores Restaurante", lat: -17.19474084508858, lng:-70.92558198994463, imagen: "imagenes/rest11.jpg" },

  { nombre: "Rest Campestre Fundo Chaparral Chen Chen", lat: -17.20878187547896, lng:-70.9199815381973, imagen: "imagenes/rest12.jpg" },
  { nombre: "Restaurante D Mil Sabores", lat: -17.202453352134324, lng: -70.92081802666358, imagen: "imagenes/rest13.jpg" },
];

const mercados = [
  { nombre: "Mercado central de Moquegua", lat: -17.191842377819267, lng: -70.93761295242408, imagen: "imagenes/merc1.jpg" },
  { nombre: "Mercado Carrillo", lat: -17.18909549778847, lng: -70.93383640245519, imagen: "imagenes/merc2.jpg" },
  { nombre: "Mercado de Carumas - Cuchumbaya - San Cristóbal", lat: -17.190571438391707, lng: -70.93902915866241, imagen: "imagenes/merc3.jpg" },
  { nombre: "HIPER MERCADO MOQUEGUA", lat: -17.18565159064365, lng: -70.9374842064024, imagen: "imagenes/merc4.jpg" },
  { nombre: "Mercadillo 29 de Octubre", lat: -17.207974129256716, lng: -70.94773213107277, imagen: "imagenes/merc5.jpg" },
  { nombre: "Feria Altiplano Sab y Dom", lat: -17.206623873479504, lng: -70.94646881064676, imagen: "imagenes/merc6.jpg" },
  { nombre: "Feria de la Chacra a la Olla", lat: -17.18380661405076, lng: -70.93297809564407, imagen: "imagenes/merc7.jpg" }

];

const hoteles = [
  { nombre: "Casa Andina Select Moquegua", lat: -17.19659935500667, lng: -70.96040234049697, imagen: "imagenes/hotel1.jpg" },
  { nombre: "Gran Marquez Hotel - Moquegua", lat: -17.190977576211687, lng: -70.95840275368737, imagen: "imagenes/hotel2.jpg" },
  { nombre: "Hotel Villa Luna", lat: -17.19035822050053, lng: -70.94985652027101, imagen: "imagenes/hotel3.jpg" },
  { nombre: "Las Torres - Hotel Boutique", lat: -17.19080920052468, lng: -70.94899821345989, imagen: "imagenes/hotel4.jpg" },
  { nombre: "Valle Sur Hotel Moquegua", lat: -17.191075688204556, lng: -70.9484188563624, imagen: "imagenes/hotel5.jpg" },
  { nombre: "Hotel San Lorenzo", lat: -17.193556055137105, lng: -70.94766783790267, imagen: "imagenes/hotel6.jpg" },
  { nombre: "Hotel Piedra Santa", lat: -17.195421433172104, lng: -70.94638037768601, imagen: "imagenes/hotel7.jpg" },
  { nombre: "Hotel Tierra del Sol - Moquegua", lat: -17.18883880128794, lng: -70.93908636105752, imagen: "imagenes/hotel8.jpg" },
  { nombre: "Cálido Hostal", lat: -17.190150750906994, lng:-70.93363611257311, imagen: "imagenes/hotel9.jpg" },
  { nombre: "Hostal Montalvo", lat: -17.193635571907073, lng: -70.93803493498007, imagen: "imagenes/hotel10.jpg" },
  { nombre: "Hostal Columbia", lat: -17.195623940386074, lng: -70.93603937164423, imagen: "imagenes/hotel11.jpg"},
  { nombre: "Hospedaje Kelita", lat: -17.19410704265295, lng: -70.93554584522784, imagen: "imagenes/hotel12.jpg" },
  { nombre: "Antawa Hotel", lat: -17.194824495832357, lng: -70.93519715808581, imagen: "imagenes/hotel13.jpg" },
  { nombre: "Hotel Costa Sol", lat: -17.194132666028636, lng: -70.93272952600387, imagen: "imagenes/hotel14.jpg"},
];

const sitiosTuristicos = [
  { nombre: "Museo Contisuyo", lat: -17.19271473695945, lng: -70.93469862945061,  imagen: "imagenes/sit1.jpg" },
  { nombre: "Geoglifo Chen Chen", lat: -17.18734540675845, lng: -70.94670566033379,  imagen: "imagenes/sit2.jpg"  },
  { nombre: "Parque Mirador Turístico Cristo Blanco", lat: -17.198077445945334, lng: -70.93002838363104,  imagen: "imagenes/sit3.jpg" },
  { nombre: "Paseo de los guardianes de la historia de Moquegua", lat: -17.18906311524759, lng: -70.9369240026635,  imagen: "imagenes/sit4.jpg" },
  { nombre: "Plaza de Armas de Moquegua", lat: -17.19332691230961, lng: -70.93456365893293,  imagen: "imagenes/sit5.jpg" },
  { nombre: "Casona Chocano - Podestá", lat: -17.193962373658017, lng: -70.93475677796543,  imagen: "imagenes/sit6.jpg" },
  { nombre: "Mirador Catarata Mollesaja", lat: -17.111221358946636, lng: -70.88752319101489,  imagen: "imagenes/sit7.jpg" }
  
];

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const violetIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function mostrarRestaurantes() {
  clearMap();
  const bounds = L.latLngBounds([]);

  restaurantes.forEach(lugar => {
    const contenidoPopup = `
      <div style="text-align:center">
        <b>${lugar.nombre}</b><br/>
        <img src="${lugar.imagen}" alt="${lugar.nombre}" style="width:150px;height:auto;border-radius:8px;margin-top:5px;" />
      </div>
    `;
    const marker = L.marker([lugar.lat, lugar.lng], { icon: greenIcon })
      .bindPopup(contenidoPopup)
      .addTo(currentLayerGroup);
    bounds.extend([lugar.lat, lugar.lng]);
  });

  if (restaurantes.length) {
    map.fitBounds(bounds);
  }
}


function mostrarMercados() {
  clearMap();
  const bounds = L.latLngBounds([]);

  mercados.forEach(lugar => {
    const contenidoPopup = `
      <div style="text-align:center">
        <b>${lugar.nombre}</b><br/>
        <img src="${lugar.imagen}" alt="${lugar.nombre}" style="width:150px;height:auto;border-radius:8px;margin-top:5px;" />
      </div>
    `;
    const marker = L.marker([lugar.lat, lugar.lng], { icon: blueIcon })
      .bindPopup(contenidoPopup)
      .addTo(currentLayerGroup);
    bounds.extend([lugar.lat, lugar.lng]);
  });

  if (mercados.length) {
    map.fitBounds(bounds);
  }
}


function mostrarHoteles() {
  clearMap();
  const bounds = L.latLngBounds([]);

  hoteles.forEach(hotel => {
    const contenidoPopup = `
      <div style="text-align:center">
        <b>${hotel.nombre}</b><br/>
        <img src="${hotel.imagen}" alt="${hotel.nombre}" style="width:150px;height:auto;border-radius:8px;margin-top:5px;" />
      </div>
    `;
    const marker = L.marker([hotel.lat, hotel.lng], { icon: redIcon }) // rojo para hoteles
      .bindPopup(contenidoPopup)
      .addTo(currentLayerGroup);
    bounds.extend([hotel.lat, hotel.lng]);
  });

  if (hoteles.length) {
    map.fitBounds(bounds);
  }
}




function mostrarSitiosTuristicos() {
  clearMap();
  const bounds = L.latLngBounds([]);

  sitiosTuristicos.forEach(sitio => {
    const popupContent = `
      <div style="text-align:center">
        <b>${sitio.nombre}</b><br/>
        <img src="${sitio.imagen}" alt="${sitio.nombre}" style="width:150px;height:auto;border-radius:8px;margin-top:5px;" />
      </div>
    `;
    const marker = L.marker([sitio.lat, sitio.lng], { icon: blueIcon })
      .bindPopup(popupContent)
      .addTo(currentLayerGroup);
    bounds.extend([sitio.lat, sitio.lng]);
  });

  if (sitiosTuristicos.length) {
    map.fitBounds(bounds);
  }
}

function scrollToMapa() {
  const mapaElemento = document.getElementById("mapa");
  if (mapaElemento) {
    mapaElemento.scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("btn-restaurantes").onclick = () => {
  mostrarRestaurantes();
  scrollToMapa();
};

document.getElementById("btn-mercados").onclick = () => {
  mostrarMercados();
  scrollToMapa();
};

document.getElementById("btn-hoteles").onclick = () => {
  mostrarHoteles();
  scrollToMapa();
};

document.getElementById("btn-sitios").onclick = () => {
  mostrarSitiosTuristicos();
  scrollToMapa();
};






