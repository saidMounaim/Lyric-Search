import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import HomePage from './screens/HomePage';

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalStyles />
				<Header />
				<Switch>
					<Route path={['/songs/:id', '/']}>
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
