package routes

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func (ac AppContext) GetCards() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		params := mux.Vars(r)
		cards, found := ac.Decks[params["title"]]
		if found {
			json.NewEncoder(w).Encode(cards)
		} else {
			http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
		}

	}
}
