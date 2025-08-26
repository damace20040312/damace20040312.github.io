const sitiosTuristicos = [
  {
    nombre: "Museo Contisuyo - MOQUEGUA",
    lat: -17.19271473695945,
    lng: -70.93469862945061,
    imagen: "imagenes/sit1.jpg",
    descripcion: "Centro cultural que conserva y exhibe restos arqueológicos de las culturas prehispánicas del valle de Moquegua, como la cultura Tiwanaku y la cultura Estuquiña."
  },
  {
    nombre: "Geoglifo Chen Chen - MOQUEGUA",
    lat: -17.18734540675845,
    lng: -70.94670566033379,
    imagen: "imagenes/sit2.jpg",
    descripcion: "Antiguo geoglifo ubicado en el desierto de Chen Chen, representando figuras humanas y animales; evidencia de la cosmovisión de culturas ancestrales."
  },
  {
    nombre: "Parque Mirador Turístico Cristo Blanco - MOQUEGUA",
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
    nombre: "Cerro Baul - MOQUEGUA",
    lat: -17.112553980953212, 
    lng: -70.8601502168121,
    imagen: "imagenes/sit8.jpg",
    descripcion: "Importante centro ceremonial Wari con vista panorámica del valle, que data de la época preincaica y se halla sobre la cima de una meseta o cerro de acceso difícil.."
  },
  {
    nombre: "Cocatedral - MOQUEGUA",
    lat: -17.193856093826838, 
    lng: -70.93371909086994,
    imagen: "imagenes/sit9.jpg",
    descripcion: "Co-catedral de Santo Domingo, es el principal templo católico en la ciudad de Moquegua. Está ubicada en la plaza de armas de Moquegua."
  },

  {
    nombre: "Aguas termales de Cuchumbaya",
    lat: -16.751177671596576, 
    lng: -70.68282617649137,
    imagen: "imagenes/sit10.jpg",
    descripcion: "Estas termas, ubicadas cerca del volcán Ticsani (~3 137 m s. n. m.), ofrecen pozas con aguas calientes y propiedades terapéuticas, además de buen equipamiento para visitantes."
  },

  ,
  {
    nombre: "Valle Interandino del Ticsani - ICHUÑA",
    lat: -16.77674463234189, 
    lng: -70.71104447803042,
    imagen: "imagenes/sit11.jpg",
    descripcion: "Ubicados entre Carumas, Cuchumbaya y San Cristóbal, estos valles ofrecen agricultura típica, danzas, agroturismo y deportes de aventura."
  }
  ,
  {
    nombre: "Laguna Jucumarini - CARUMAS",
    lat: -16.307924231358804, 
    lng: -70.39209948427033,
    imagen: "imagenes/sit13.jpg",
    descripcion: "A unos 4 412 m s.n.m. en el distrito de Ichuña, esta laguna es un hábitat para aves como ajullas, fulica ardesiaca y patos andinos. Su entorno natural y clima frío la hacen ideal para ecoturismo y observación de fauna."
  },

  ,
  {
    nombre: "Baños termales de Putina",
    lat: -17.434131771972716, 
    lng: -70.03836750530773,
    imagen: "imagenes/sit14.jpg",
    descripcion: "Cerca del río Putina (a unos 20 km de Moquegua), estas aguas pueden superar los 90 °C y ofrecen propiedades curativas. También existen géiseres y fuentes en lugares como Puente Bello (Yunga), Exchage, Ullucan (Coalaque) y otras zonas de Ichuña."
  },
  
  {
    nombre: "Glorieta José Gálvez y Muelle Fiscal - ILO",
    lat: -17.64365711765759, 
    lng: -71.34552367646664,
    imagen: "imagenes/sit12.jpg",
    descripcion: "En Ilo, la Glorieta José Gálvez —sobre un peñasco y accesible al cercano Muelle Fiscal son escapes tranquilos junto al mar, ideales para contemplar aves, lobos marinos y paisajes costeros poco concurridos."
  },

  ,
  {
    nombre: "Templo de San Gerónimo - ILO",
    lat: -17.496332498271222, 
    lng: -71.36176292547987,
    imagen: "imagenes/sit15.jpg",
    descripcion: "Este templo centenario (más de 120 años) posee una antigua pila bautismal y arquitectura barroca con detalles originales."
  },

  ,
  {
    nombre: "Museo El Algarrobal - ILO",
    lat: -17.622900252799266, 
    lng: -71.26875667646726,
    imagen: "imagenes/sit16.jpg",
    descripcion: "En el valle de Ilo, este museo presenta piezas de la cultura Chiribaya: cerámicas, textiles y adornos de cuarzo."
  },

  ,
  {
    nombre: "Hacienda Chiribaya - ILO",
    lat: -17.62664268026415,
    lng: -71.28075380530233,
    imagen: "imagenes/sit17.jpg",
    descripcion: "La Hacienda Chiribaya ofrece una experiencia rural accesible en vehículo desde Ilo."
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
