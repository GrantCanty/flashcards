package routes

import (
	"encoding/json"
	"net/http"
)

func (ac AppContext) GetDeckTitles() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		deckNames := []string{}
		for name := range ac.Decks {
			deckNames = append(deckNames, name.Title)
		}

		json.NewEncoder(w).Encode(deckNames)
	}
}