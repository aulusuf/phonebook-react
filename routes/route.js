import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "../views/Home";
import Detail from "../views/Detail";
import Edit from "../views/Edit";
import New from "../views/New";

function Routes() {
    const client = new ApolloClient({
        uri: "https://phone-book-99.hasura.app/v1/graphql",
        headers: {
            "x-hasura-admin-secret": `nRYrylap4iHko8jFCtmdO1MnV6IFiWsAMTP3Fvz4NknmW7PYLkyYT3msn8xcBDqz`
        },
        cache: new InMemoryCache(),
    });

    return (
        <BrowserRouter>
          <Auth0Provider
            domain="phonebook-react.us.auth0.com"
            clientId="abKHCCKAESmd7FJWMFmL3mQOEe4v0vf6"
            redirectUri={window.location.origin}
          >
            <ApolloProvider client={client}>
              <Switch>
                {/* http://localhost:3000 */}
                <Route exact path="/">
                  {(props) => (
                    <div>
                      <Home {...props} />
                    </div>
                  )}
                </Route>
                {/* http://localhost:3000/devanada */}
                <Route exact path="/todos">
                  {(props) => (
                    <div>
                      <TodoInput {...props} />
                    </div>
                  )}
                </Route>
                {/* http://localhost:3000/todos/&id=1 */}
                <Route path="/todos/&id=:id">
                  {(props) => (
                    <div>
                      <MyToDo {...props} />
                    </div>
                  )}
                </Route>
                {/* http://localhost:3000/todos/1 */}
                <Route path="/todos/:id">
                  {(props) => (
                    <div>
                      <MyToDo {...props} />
                    </div>
                  )}
                </Route>
                <Route>
                  {(props) => (
                    <div>
                      <NotFound {...props} />
                    </div>
                  )}
                </Route>
              </Switch>
            </ApolloProvider>
          </Auth0Provider>
        </BrowserRouter>
      );
    }
    
    export default Routes;
 