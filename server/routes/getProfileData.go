package routes

import (
	"encoding/json"
	"net/http"
)

func (ac AppContext) GetProfileData() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		json.NewEncoder(w).Encode(ac.User)
	}
}
