/* eslint-disable no-undef */

const {AuthenticationError} = require('apollo-server-express')
const {User, BookSchema} = require('../models');
const {signToken} = require('../utils/auth')
const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('books');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
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
            throw new AuthenticationError('no such user!....try again?')
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
        },
    
    removeBook: async (parent, {bookId}, context) => {  
      
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $pull: { savedBooks: { bookId: bookId } } },
                  { new: true }
                )
                return updatedUser
              }
              

        
          
    }
  },
}


module.exports = resolvers;
