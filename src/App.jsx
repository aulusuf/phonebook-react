import React from "react";
import Home from "./views/Home";
import New from "./views/New";
import Detail from "./views/Detail";
import Edit from "./views/Edit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
	const client = new ApolloClient({
		uri: "https://valid-barnacle-31.hasura.app/v1/graphql",
		headers: {
			"x-hasura-admin-secret": `JTxrBB6KflvJ8jwSVULohkvNvMJ1P9b0w6kfU7GGXN64leNwpNqjDAmeDSd2rA9g`,
		},
		cache: new InMemoryCache(),
	});
	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<Navbar />
				<div class="body">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/new" component={New} />
						<Route path="/:id" component={Detail} />
						<Route path="/edit/:id" component={Edit} />
					</Switch>
					<Footer />
				</div>
			</ApolloProvider>
		</BrowserRouter>
	);
}

export default App;
