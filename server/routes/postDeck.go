package routes

import "net/http"

func (ac AppContext) PostDeck() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		r.GetBody()
	}
}
