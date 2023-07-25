const translation = async () => {
  let table = []
  for (let people = 1; people < 13; people++) {
    const res = await fetch(`https://swapi.py4e.com/api/people/${people}`)
    const data = await res.json()

    table.push({
      nombre: data.name,
      altura: data.height,
      masa: data.mass,
      color_de_cabello: data.hair_color,
      color_de_piel: data.skin_color,
      color_de_ojos: data.eye_color,
      año_de_nacimiento: data.birth_year,
      genero: data.gender,
      mundo_natal: data.homeworld,
      peliculas: data.films,
      especies: data.species,
      vehiculos: data.vehicles,
      naves_estelares: data.starships,
      creado: data.created,
      editado: data.edited,
      url: data.url,
    })
  }
  return table
}

const translation1 = async () => {
  try {
    let table = []
    for (let people = 1; people < 13; people++) {
      const res = await fetch(`https://swapi.py4e.com/api/peop/${people}`)
      const data = await res.json()

      table.push({
        nombre: data.name,
        altura: data.height,
        masa: data.mass,
        color_de_cabello: data.hair_color,
        color_de_piel: data.skin_color,
        color_de_ojos: data.eye_color,
        año_de_nacimiento: data.birth_year,
        genero: data.gender,
        mundo_natal: data.homeworld,
        peliculas: data.films,
        especies: data.species,
        vehiculos: data.vehicles,
        naves_estelares: data.starships,
        creado: data.created,
        editado: data.edited,
        url: data.url,
      })
    }
    return table
  } catch (error) {
    if (
      error == 'fetch failed' ||
      error == 'Unexpected token < in JSON at position 1' ||
      error == undefined
    ) {
      return {
        message: 'Error trying to connect',
      }
    }
  }
}

// const prueba = async () => {
//   const lista = await translation()
//   console.log(lista)
//   return lista
// }

// prueba()

module.exports = {
  translation,
  translation1,
}
