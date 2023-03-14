package main

import (
	"log"
	"net/http"

	app_context "github.com/GrantCanty/flashcards/appContext"
	"github.com/GrantCanty/flashcards/routes"

	//"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("content-type", "application/json;charset=UTF-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization, Token")
		w.Header().Add("Access-Control-Allow-Credentials", "true")
		w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	ctx := app_context.NewAppContext()
	r := mux.NewRouter()
	r.Use(corsMiddleware)
	apiRoute := r.Host("api.localhost").Subrouter()

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	})
	handler := c.Handler(r)

	r.HandleFunc("/api/decks", routes.GetDeckTitles(&ctx)).Methods("GET")
	r.HandleFunc("/api/deck/{id}", routes.GetDeck(&ctx)).Methods("GET")
	r.HandleFunc("/api/deck/{id}", routes.AddDeck(&ctx)).Methods("POST")
	r.HandleFunc("/api/deckcount", routes.GetDeckLength(&ctx)).Methods("GET")
	r.HandleFunc("/api/user", routes.GetProfileData(&ctx)).Methods("GET")

	apiRoute.HandleFunc("/decks", routes.GetDeckTitles(&ctx)).Methods("GET")
	apiRoute.HandleFunc("/deck/{id}", routes.GetDeck(&ctx)).Methods("GET")
	apiRoute.HandleFunc("/deck/{id}", routes.AddDeck(&ctx)).Methods("POST")
	apiRoute.HandleFunc("/deckcount", routes.GetDeckLength(&ctx)).Methods("GET")
	apiRoute.HandleFunc("/user", routes.GetProfileData(&ctx)).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", handler))
}
