import React from 'react';
import {render} from 'react-dom';

import AppComponent from './AppComponent';

/**
 * Import GraphQL, Apollo
 */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

require('./assets/styles/styles.scss');

/**
 * Create Apollo CLIENT
 *
 * @type {DefaultClient<any>}
 */
const client = new ApolloClient({
    uri: `https://w5xlvm3vzz.lp.gql.zone/graphql`
});

/**
 * Stateless component
 *
 * @returns {boolean}
 * @constructor
 */
const App = () => (
    <ApolloProvider client={client}>
        <div>
                <h2>GraphQL / ApolloClient</h2>
            <ul>
                <AppComponent currency={'USD'}></AppComponent>
            </ul>
        </div>
    </ApolloProvider>
);

render(
    <App />,
    document.querySelector('#root')
)