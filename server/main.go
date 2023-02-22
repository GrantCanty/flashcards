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

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")                                                            // 允许访问所有域，可以换成具体url，注意仅具体url才能带cookie信息
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization, Token") //header的类型
		w.Header().Add("Access-Control-Allow-Credentials", "true")                                                    //设置为true，允许ajax异步请求带cookie信息
		w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")                             //允许请求方法
		w.Header().Set("content-type", "application/json;charset=UTF-8")                                              //返回数据格式是json
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
	//main := r.Host("localhost").Subrouter()
	apiRoute := r.Host("api.localhost").Subrouter()

	//main.HandleFunc("/decks", getDeckNames).Methods("GET")

	r.HandleFunc("/api/decks", ctx.GetDeckTitles()).Methods("GET")
	r.HandleFunc("/api/deck/{id}", ctx.GetCards()).Methods("GET")
	r.HandleFunc("/api/decks", ctx.AddDeck()).Methods("POST")
	r.HandleFunc("/api/deckcount", ctx.GetDeckLength()).Methods("GET")
	r.HandleFunc("/api/user", ctx.GetProfileData()).Methods("GET")

	apiRoute.HandleFunc("/decks", ctx.GetDeckTitles()).Methods("GET")
	apiRoute.HandleFunc("/deck/{id}", ctx.GetCards()).Methods("GET")
	apiRoute.HandleFunc("/deck", ctx.AddDeck()).Methods("POST")
	apiRoute.HandleFunc("/deckcount", ctx.GetDeckLength()).Methods("GET")
	apiRoute.HandleFunc("/user", ctx.GetProfileData()).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", r))
}
