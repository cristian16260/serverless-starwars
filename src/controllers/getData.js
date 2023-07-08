// const { translation } = require('./translation')
const AWS = require('aws-sdk')

module.exports.getData = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  // const people = await translation()
  // console.log(people)
  // let data
  // let tables = {}
  // for (data of people) {
  //   tables = {
  //     nombre: data.name,
  //     altura: data.height,
  //     masa: data.mass,
  //     color_de_cabello: data.hair_color,
  //     color_de_piel: data.skin_color,
  //     color_de_ojos: data.eye_color,
  //     año_de_nacimiento: data.birth_year,
  //     genero: data.gender,
  //     mundo_natal: data.homeworld,
  //     peliculas: data.films,
  //     especies: data.species,
  //     vehiculos: data.vehicles,
  //     naves_estelares: data.starships,
  //     creado: data.created,
  //     editado: data.edited,
  //     url: data.url,
  //   }
  // }
  // await dynamodb
  //   .put({
  //     TableName: 'tableSW',
  //     Item: tables,
  //   })
  //   .promise()

  const result = await dynamodb
    .scan({
      TableName: 'tableSW',
    })
    .promise()
  console.log(result)
  const LISTSW = result.Items

  return {
    status: 200,
    body: { LISTSW },
    event: event,
  }
}
