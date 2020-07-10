module.exports = {
  async up (db, client) {
    return await db.createCollection('users', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['login', 'email', 'password'],
          properties: {
            login: {
              bsonType: 'string'
            },
            email: {
              bsonType: 'string',
              pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'
            },
            password: {
              bsonType: 'string'
            }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error'
    })
  },

  async down (db, client) {
    return await db.collection('users').drop()
  }
}
