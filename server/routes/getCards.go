package routes

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/GrantCanty/flashcards/types.go"
	"github.com/gorilla/mux"
)

func (ac AppContext) GetCards() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		params := mux.Vars(r)
		id, err := strconv.Atoi(params["id"])
		if err != nil {
			http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
			return
		}

		cards, found := ac.Decks[types.DeckMetaData{ID: id, Title: params["title"]}]
		if found {
			json.NewEncoder(w).Encode(cards)
		} else {
			http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
		}

	}
}
