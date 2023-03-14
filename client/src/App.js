import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import Sidebar from './sidebar/sidebar';
import HomeRoute from './routes/homeRoute.jsx'
import ErrorPage from './routes/error-page';
import DeckRoute from './routes/deckRoute';
import EditDeckRoute from './routes/editDeckRoute';
import ReviewDeckRoute from './routes/reviewDeckRoute';
import useModal from './useModal'

function App() {
    const [showModal, toggleShowModal] = useModal()
	const [deckID, setDeckID] = React.useState(Number)
	const [deckNameResponse, setDeckNameResponse] = React.useState(new Map())
	const [reviewedDeckCount, setReviewedDeckCount] = React.useState(Number)

	function increaseReviewedCount() {
		setReviewedDeckCount(reviewedDeckCount+1)
	}

	const homeRoute ='/'
	const deckRoute = '/decks'
	const editDeckRoute = '/decks/edit'
	const reviewDeckRoute = '/deck/review'
	
	const router = createBrowserRouter([
		{
			path: homeRoute,
			element: <Sidebar homeRoute={homeRoute} deckRoute={deckRoute} />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: homeRoute,
					element: <HomeRoute reviewedDeckCount={reviewedDeckCount} />
				},
				{
					path: deckRoute,
					element: <DeckRoute deckNames={deckNameResponse} setDeckNames={setDeckNameResponse} show={showModal} toggleShow={toggleShowModal} deckID={deckID} setDeckID={setDeckID} editDeckRoute={editDeckRoute} reviewDeckRoute={reviewDeckRoute} increaseReviewedCount={increaseReviewedCount} />
				},
				{
					path: editDeckRoute + "/:id",
					element: <EditDeckRoute deckNames={deckNameResponse} deckID={deckID} />
				},
				{
					path: reviewDeckRoute + "/:id",
					element: <ReviewDeckRoute deckID={deckID} />
				},
			],
		},
		/*{
			path: editDeckRoute,
			element: <Sidebar homeRoute={homeRoute} deckRoute={deckRoute} />,
		},
		{
			path: reviewDeckRoute,
			element: <Sidebar homeRoute={homeRoute} deckRoute={deckRoute} />,
		},*/
	],
	)

	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

export default App;
