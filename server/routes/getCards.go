package routes

import (
	"encoding/json"
	"net/http"
	"strconv"

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

		for i := range ac.Decks {
			if i.ID == id {
				json.NewEncoder(w).Encode(ac.Decks[i])
				return
			}
		}
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}
}
