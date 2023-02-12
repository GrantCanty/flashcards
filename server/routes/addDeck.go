package routes

import (
	"net/http"
	/*"encoding/json"
	"errors"
	"log"
	"reflect"

	"github.com/GrantCanty/flashcards/types.go"*/)

func (ac *AppContext) AddDeck() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		//var deck map[string]interface{}
		//deck = make(map[string]interface{})

		/*_ = json.NewDecoder(r.Body).Decode(&deck)
		if value, found := deck["title"]; found {
			switch key := value.(type) {
			case string:
				if _, found = ac.Decks == key; !found {
					if value, found = deck["data"]; found {
						switch v := value.(type) {
						case map[string]interface{}:
							var data map[string]string
							data = make(map[string]string)
							for value, pair := range v {
								if reflect.ValueOf(pair).Kind() == reflect.String {
									data[value] = pair.(string)
								} else {
									w.WriteHeader(422)
									json.NewEncoder(w).Encode("Could not complete request")
									//log.Fatal("deck['data'] is not of type map[string]string")
									panic(errors.New("asfasdf"))
								}
							}
							ac.Decks[types.DeckMetaData{ID: ac.Count.New(), Title: key}] = data
						default:
							json.NewEncoder(w).Encode("Could not complete request")
							log.Println(reflect.TypeOf(v))
							log.Fatal("deck['data'] is not of type map[string]string")
						}
						//Decks[key] = value.(map[string]string)
						json.NewEncoder(w).Encode("Completed Request")
						//default:
						//	json.NewEncoder(w).Encode("Could not complete request")
						//	log.Println(reflect.TypeOf(v))
						//	log.Fatal("deck['data'] is not of type map[string]string")
						//}
					}
				}
			default:
				json.NewEncoder(w).Encode("Could not complete request")
				log.Fatal("deck['title'] is not of type 'string'")
			}
		}*/

	}
}
