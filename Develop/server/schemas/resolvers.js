const {User, bookSchema} = require('../models');

const resolvers = {
    Query: {
        book: async () => {
            return bookSchema.find({});
        }
    }
}
