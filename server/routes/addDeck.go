package routes

import (
	"log"
	"net/http"

	app_context "github.com/GrantCanty/flashcards/appContext"
	"github.com/GrantCanty/flashcards/types.go"
)

func AddDeck(ac *app_context.AppContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("added deck")

		deckName := r.URL.Query().Get("deckName")
		log.Println("deckName: ", deckName)

		var deck []types.Card
		deck = append(deck, types.Card{Topic: "", Description: ""})

		ac.Decks[types.DeckMetaData{ID: ac.DeckCounter.New(), Title: deckName}] = deck
	}
}
