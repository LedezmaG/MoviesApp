import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const httpLink = createUploadLink({
    uri: 'http://127.0.0.1:4000/graphql'
})

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache({ addTypename: false }),
    link: httpLink,
})

export default client
