package routes

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/GrantCanty/flashcards/types.go"
	"github.com/gorilla/mux"
)

func (ac *AppContext) AddDeck() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		deckName := r.URL.Query().Get("deckName")
		params := mux.Vars(r)
		id, err := strconv.Atoi(params["id"])
		if err != nil {
			log.Println(err)
		}

		var deck []Card
		_ = json.NewDecoder(r.Body).Decode(&deck)

		if _, found := ac.Decks[types.DeckMetaData{ID: id, Title: deckName}]; found {
			log.Println(ac.Decks[types.DeckMetaData{ID: id, Title: deckName}])
			ac.Decks[types.DeckMetaData{ID: id, Title: deckName}] = deck
		}
	}
}
