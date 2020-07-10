module.exports = {
  async up (db, client) {
    return await db.createCollection('choices', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['type', 'fields'],
          properties: {
            type: {
              // type input (multi choice, radio)
              bsonType: 'string'
            },
            fields: {
              // array des choices
              bsonType: 'array'
            },
            createdBy: {
              // Object ID de l'utilisateur qui a créer ces choices
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
    return await db.collection('choices').drop()
  }
}
