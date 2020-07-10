module.exports = {
  async up (db, client) {
    return await db.createCollection('participants', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['user', 'sujet'],
          properties: {
            user: {
              bsonType: 'objectId'
            },
            sujet: {
              bsonType: 'objectId'
            }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error'
    })
  },

  async down (db, client) {
    return await db.collection('participants').drop()
  }
}
