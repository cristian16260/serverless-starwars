module.exports.receive = (dataSW) => {
  const {
    nombre,
    altura,
    masa,
    color_de_cabello,
    color_de_piel,
    color_de_ojos,
    año_de_nacimiento,
    género,
    mundo_natal,
    peliculas,
    especies,
    vehiculos,
    naves_estelares,
    url,
  } = dataSW.body
  const newpeople = {
    nombre,
    altura,
    masa,
    color_de_cabello,
    color_de_piel,
    color_de_ojos,
    año_de_nacimiento,
    género,
    mundo_natal,
    peliculas,
    especies,
    vehiculos,
    naves_estelares,
    creado: Date.now(),
    editado: Date.now(),
    url,
  }

  return { body: newpeople }
}
