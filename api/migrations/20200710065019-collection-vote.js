module.exports = {
  async up (db, client) {
    return await db.createCollection('votes', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['participation', 'vote'],
          properties: {
            participation: {
              bsonType: 'objectId'
            },
            vote: {
              // resultat du vote
              bsonType: 'array'
            }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error'
    })
  },

  async down (db, client) {
    return await db.collection('votes').drop()
  }
}
