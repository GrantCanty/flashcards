package main

import (
	"log"
	"net/http"

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
	ctx := routes.NewAppContext()
	r := mux.NewRouter()
	r.Use(corsMiddleware)
	apiRoute := r.Host("api.localhost").Subrouter()

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	})
	handler := c.Handler(r)

	r.HandleFunc("/api/decks", ctx.GetDeckTitles()).Methods("GET")
	r.HandleFunc("/api/deck/{id}", ctx.GetDeck()).Methods("GET")
	r.HandleFunc("/api/deck/{id}", ctx.AddDeck()).Methods("POST")
	r.HandleFunc("/api/deckcount", ctx.GetDeckLength()).Methods("GET")
	r.HandleFunc("/api/user", ctx.GetProfileData()).Methods("GET")

	apiRoute.HandleFunc("/decks", ctx.GetDeckTitles()).Methods("GET")
	apiRoute.HandleFunc("/deck/{id}", ctx.GetDeck()).Methods("GET")
	apiRoute.HandleFunc("/deck/{id}", ctx.AddDeck()).Methods("POST")
	apiRoute.HandleFunc("/deckcount", ctx.GetDeckLength()).Methods("GET")
	apiRoute.HandleFunc("/user", ctx.GetProfileData()).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", handler))
}
