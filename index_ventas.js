const propiedades_ventas_inicio = [
  {
    nombre: "Mirador del Golf",
    src: "https://http2.mlstatic.com/D_NQ_NP_848686-MLC72938153974_112023-W.webp",
    descripcion: "Exquisita residencia con vista panorámica en Mirador del Golf, donde la elegancia se encuentra con el confort.",
    ubicacion: "Avenida Jose Rabat 9620, Colina, Chile, Chicureo, Colina, RM (Metropolitana)",
    habitacion: "4",
    costo: "$10.000",
    pets: true,
    pets: true,
  },
  {
    nombre: "Condominio Panorama Reñaca",
    src: "https://http2.mlstatic.com/D_NQ_NP_906882-MLC52334358224_112022-W.webp",
    descripcion: "Moderna vivienda con impresionante vista en Mirador del Lago, donde el diseño vanguardista se combina con la tranquilidad del entorno.",
    ubicacion: "Vicuña Mackenna 87, Reñaca, Viña Del Mar, Valparaíso.",
    habitacion: "4",
    costo: "$10.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio Chicureo",
    src: "https://http2.mlstatic.com/D_NQ_NP_697278-MLC73127961189_112023-W.webp",
    descripcion: "Encantadora casa en el corazón de la naturaleza, ubicada en Mirador del Bosque, donde la serenidad se fusiona con la modernidad",
    ubicacion: "Vicuña Mackenna 87, Reñaca, Viña Del Mar, Valparaíso",
    habitacion: "San Diego 887, Santiago",
    costo: "$10.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Condominio Las Flores",
    src: "https://http2.mlstatic.com/D_NQ_NP_735480-MLC50452733678_062022-W.webp",
    descripcion: "Elegante residencia con jardines exuberantes en Mirador del Valle, donde el lujo se entrelaza con la armonía de un entorno privilegiado.",
    ubicacion: "Camino Nueva La Dehesa 12.090 Lote 2a, La Dehesa, Lo Barnechea, RM (Metropolitana)",
    habitacion: "4",
    costo: "$10.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Condominio Palomar",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_855036-MLC68867693980_042023-O.webp",
    descripcion: "Experimenta la armonía moderna y la elegancia en nuestro desarrollo de viviendas, donde la ubicación privilegiada se combina con espacios pensados para tu bienestar y confort",
    ubicacion: "Alejandro Guzman 765, Chicureo",
    habitacion: "4",
    costo: "$10.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Condominio Pan de Azucar",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_624113-MLC71426542824_092023-O.webp",
    descripcion: "Vive el lujo contemporáneo en nuestro proyecto residencial, donde el diseño innovador se fusiona con la comodidad, ofreciendo un estilo de vida excepcional.",
    ubicacion: "Agustinas 568, Melipilla",
    habitacion: "4",
    costo: "$12.000",
    smoke: false,
    pets: true,
  },

];

var tres_propiedades = propiedades_ventas_inicio.slice(3.6)

var almacenada = ""

for(e of tres_propiedades) {
    almacenada += `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${e.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${e.nombre}
                </h5>
                <p class="card-text">
                ${e.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${e.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${e.habitacion} Habitaciones |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${e.costo}</p>

                <p class="${e.smoke ? 'text-success' : 'text-danger'}">
                     ${e.smoke ? '<i class="fas fa-smoking"></i> Se puede fumar' : '<i class="fas fa-smoking-ban"></i> No se puede fumar'}
                </p>
                <p class="${e.pets ? 'text-success' : 'text-danger'}">
                    ${e.pets ? '<i class="fas fa-paw"></i> Se permiten mascotas' : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>
    `;
}

var div_origen = document.querySelector("#div_ventas_inicio")

div_origen.innerHTML = almacenada
