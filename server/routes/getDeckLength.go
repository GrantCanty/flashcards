package routes

import (
	"encoding/json"
	"net/http"
)

func (ac AppContext) GetDeckLength() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		length := len(ac.Decks)
		deckCount := map[string]int{"deckCount": length}
		json.NewEncoder(w).Encode(deckCount)
		//http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}

}
