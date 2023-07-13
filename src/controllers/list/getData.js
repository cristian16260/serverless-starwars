const { translation } = require('./translation')
const AWS = require('aws-sdk')

module.exports.getData = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()

  const people = await translation()
  console.log(people)
  let data = {}
  for (data of people) {
    await dynamodb
      .put({
        TableName: 'tableSW',
        Item: data,
      })
      .promise()
  }
  const { limit, startKey } = event.queryStringParameters
  const ExclusiveStartKey = {
    primary_key: startKey,
  }
  const result = await dynamodb
    .scan({
      TableName: 'tableSW',
      Limit: limit | 3,
      ...(startKey ? { ExclusiveStartKey } : {}),
    })
    .promise()

  const LISTSW = result.Items

  return {
    status: 200,
    count: LISTSW.length,
    lastkey: result.Items?.LastEvaluatedKey?.primary_key,
    body: LISTSW,
  }
}
