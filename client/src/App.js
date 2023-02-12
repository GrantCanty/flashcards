import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import Sidebar from './routes/sidebar';
import Home from './routes/home.jsx'
import ErrorPage from './routes/error-page';
import Review from './routes/review';

function App() {
    const homeRoute ='/'
	const deckRoute = '/decks'
	
	const router = createBrowserRouter([
		{
			path: homeRoute,
			element: <Sidebar homeRoute={homeRoute} deckRoute={deckRoute} />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "",
					element: <Home />
				},
				{
					path: "decks",
					element: <Review />,
				},
				{
					path: "deck",
					element: null,
				},
			],
		},
	],
	)
	//const navigate = useNavigate()
	/*const homeRoute ='/'
    const deckRoute = '/decks'*/


	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

export default App;
