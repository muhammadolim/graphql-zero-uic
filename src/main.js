import './style.css'
import { createApp, provide, h } from 'vue'
import App from './App.vue'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://graphqlzero.almansi.me/api',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

import { DefaultApolloClient } from '@vue/apollo-composable'

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.mount('#app')
