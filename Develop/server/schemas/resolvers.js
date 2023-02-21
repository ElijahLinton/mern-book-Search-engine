
const {AuthenticationError} = require('apollo-server-express')
const {User, BookSchema} = require('../models');
const {signToken} = require('../utils/auth')
const resolvers = {
    Query: {
        users: async () => {
            return User.find({}).populate('book')
        },
        user: async (parent, {username}) => {
            return User.findOne({user}).populate('user')
        },
        books: async (parent, {username}) => {
            const params = username ? {username} : {};
            return bookSchema.find(params).sort({createdAt: -1});
    },
    book: async (parent, {username}) => {
        return BookSchema.findOne({_id: bookId})
    }
},
Mutation: {
    newUser: async (parent, {email, password}) => {
        const user = await User.create({username, email, password})
        const token = signToken(user)
        return  {user, token}
    },
    login: async (parent,{email, password}) => {
         const user = await User.findOne({email});
         if (!user) {
            throw new AuthenticationError('no sucj user!....try again?')
         }
         const passwordnerify = await user.isCorrectPassword(password);
         if(!passwordnerify){
            throw AuthenticationError('wrong password')
         }
         const token = signToken(user);
        
         return {token, user};
    },

    addBook: async (parent, {user}) => {
        const updatedUser = await User.findByIdAndUpdate(
                { _id: user._id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true }
            )
            return updatedUser
        }
    },
    removeBook: async(parent, {bookId}) => {
        return BookSchema.findOneAndDelete({_id: bookId})
    }
}

module.exports = resolvers;
