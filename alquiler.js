const propiedades_alquiler = [
    {
        nombre: "Mirador del Golf",
        src: "https://http2.mlstatic.com/D_NQ_NP_891407-MLC73017934015_112023-W.webp",
        descripcion: "Exquisita residencia con vista panorámica en Mirador del Golf, donde la elegancia se encuentra con el confort.",
        ubicacion: "Elegante residencia en el corazón de Bosque Real, fusionando la sofisticación arquitectónica con la serenidad de la naturaleza circundante.",
        habitacion: "4",
        costo: "$150",
        pets: false,
        pets: false,
    },
    {
        nombre: "Condominio Panorama Pucón",
        src: "https://http2.mlstatic.com/D_NQ_NP_882992-MLC48812507219_012022-W.webp",
        descripcion: "Excepcional casa de campo en La Cima de la Montaña, donde la belleza del paisaje se integra perfectamente con las comodidades modernas y el estilo de vida",
        ubicacion: "Vicuña Mackenna 79, Reñaca, Viña Del Mar, Valparaíso.",
        habitacion: "4",
        costo: "$120",
        smoke: false,
        pets: false,
    },
    {
        nombre: "Condominio Las Condes",
        src: "https://http2.mlstatic.com/D_NQ_NP_913584-MLC48331344348_112021-W.webp",
        descripcion: "Innovador loft urbano en el Distrito Financiero, donde la arquitectura contemporánea se encuentra con la energía vibrante de la vida citadina.",
        ubicacion: "Vicuña Mackenna 55, Reñaca, Viña Del Mar, Valparaíso",
        habitacion: "4",
        costo: "$120",
        smoke: false,
        pets: true,
    },
    {
        nombre: "Condominio Las Flores",
        src: "https://http2.mlstatic.com/D_NQ_NP_823361-MLC73094785426_112023-W.webp",
        descripcion: "Loft minimalista en el centro histórico, ofreciendo un estilo de vida contemporáneo en medio de la rica historia y cultura que rodea este emblemático vecindario.",
        ubicacion: "Camino Nueva La Dehesa 12.090 Lote 2a, La Dehesa, Lo Barnechea, RM (Metropolitana)",
        habitacion: "4",
        costo: "$140",
        smoke: false,
        pets: true,
    },
    {
        nombre: "Condominio Del Valle",
        src: "https://http2.mlstatic.com/D_NQ_NP_2X_781703-MLC48860795030_012022-O.webp",
        descripcion: "Elegante residencia en Altos del Bosque, donde la arquitectura clásica se encuentra con la comodidad contemporánea, creando un espacio de vida refinado y acogedor.",
        ubicacion: "Camino El Huinganal 3929-4, La Dehesa, Lo Barnechea, RM (Metropolitana)",
        habitacion: "4",
        costo: "$160",
        smoke: false,
        pets: true,
    },
    {
        nombre: "Conde del Maule",
        src: "https://http2.mlstatic.com/D_NQ_NP_2X_753032-MLC51818419007_102022-O.webp",
        descripcion: "Loft vanguardista en el distrito artístico, ofreciendo un oasis moderno en medio de la efervescencia creativa de galerías y eventos culturales.",
        ubicacion: "Camino Nueva La Dehesa 12.090 Lote 2a, La Dehesa, Lo Barnechea, RM (Metropolitana)",
        habitacion: "4",
        costo: "$160",
        smoke: false,
        pets: true,
    },




];


var tres_propiedades = propiedades_alquiler.slice(0.4)

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



var div_origen = document.querySelector("#div_alquiler")

div_origen.innerHTML = almacenada



