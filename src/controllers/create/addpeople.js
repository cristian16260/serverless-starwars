const AWS = require('aws-sdk')
const { receive } = require('./receive')

module.exports.addpeople = async (event) => {
  const datos = JSON.parse(event.body)
  console.log(datos)

  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const data = receive({ body: datos })

  await dynamodb
    .put({
      TableName: 'tableSW',
      Item: data.body,
    })
    .promise()

  return {
    status: 200,
    body: data.body,
  }
}
