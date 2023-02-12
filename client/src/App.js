import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import Sidebar from './routes/sidebar';
import Home from './routes/home.jsx'
import ErrorPage from './routes/error-page';
import Decks from './routes/decks';
import useModal from './useModal'

function App() {
    const [showModal, toggleShowModal] = useModal()
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
					element: <Decks show={showModal} toggleShow={toggleShowModal} />
				},
			],
		},
	],
	)

	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

export default App;
