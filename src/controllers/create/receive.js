module.exports.receive = (dataSW) => {
  try {
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
  } catch (error) {
    if (
      error == "Cannot read properties of undefined (reading 'body')" ||
      error == undefined
    ) {
      return {
        message: 'Data receive Error',
      }
    }
  }
}

// const nuevo = async () => {
//   try {
//     const people = receive()
//     if (people == undefined) {
//       throw new Error('DatareceiveError')
//     }

//     console.log(people.body)
//   } catch (error) {
//     return console.log(`${error}`)
//   }
// }
// nuevo()
