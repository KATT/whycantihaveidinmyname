import { Query } from './Query'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
  },
  AuthPayload,
  Post: {
    category: {
      fragment: 'fragment PostFragment on Post { category }',
      resolve: (source, args, context, info) => {
        console.log('🗒️', { source })
        return {
          name: source.category,
          popularity: Math.random(),
        }
      }
    }
  }
}
