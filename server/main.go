package main

import (
	"log"
	"net/http"

	"github.com/GrantCanty/flashcards/routes"
	"github.com/gorilla/mux"
)

/*func (ah appHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	status, err := ah.H(ah.appContext, w, r)
	if err != nil {
		log.Printf("HTTP %d: %q", status, err)
		switch status {
		case http.StatusNotFound:
			http.NotFound(w, r)
			// iff err := ah.renderTemplate(w, "http_404.tmpl", nil)
		case http.StatusInternalServerError:
			http.Error(w, http.StatusText(status), status)
		default:
			http.Error(w, http.StatusText(status), status)
		}
	}
}*/

func main() {
	ctx := routes.NewAppContext()
	r := mux.NewRouter()
	//main := r.Host("localhost").Subrouter()
	apiRoute := r.Host("api.localhost").Subrouter()

	//main.HandleFunc("/decks", getDeckNames).Methods("GET")

	apiRoute.HandleFunc("/decks", ctx.GetDeckNames()).Methods("GET")
	apiRoute.HandleFunc("/deck/{title}", ctx.GetCards()).Methods("GET")
	apiRoute.HandleFunc("/decks", ctx.AddDeck()).Methods("POST")
	log.Fatal(http.ListenAndServe(":8080", r))
}
