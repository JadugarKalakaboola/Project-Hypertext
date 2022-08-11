import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: "https://api-ap-south-1.hygraph.com/v2/cl6lpqcr10ulm01umhz4ucee6/master",
    cache: new InMemoryCache()
})

export default client;