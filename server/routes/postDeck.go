package routes

import (
	"net/http"

	app_context "github.com/GrantCanty/flashcards/appContext"
)

func PostDeck(ac *app_context.AppContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		r.GetBody()
	}
}
