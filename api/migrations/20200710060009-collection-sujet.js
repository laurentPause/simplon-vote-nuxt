module.exports = {
  async up (db, client) {
    return await db.createCollection('sujets', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['question', 'quota', 'choices', 'nbVote', 'createdBy', 'status'],
          properties: {
            question: {
              bsonType: 'string'
            },
            quota: {
              bsonType: 'int'
            },
            choices: {
              bsonType: 'objectId'
            },
            nbVote: {
              bsonType: 'int'
            },
            createdBy: {
              // Object ID de l'utilisateur qui a créer le sujet de vote
              bsonType: 'objectId'
            },
            status: {
              // On peut avoir 3 valeurs : created,inprogress,finished
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
    return await db.collection('sujets').drop()
  }
}
