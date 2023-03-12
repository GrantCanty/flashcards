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
		params := mux.Vars(r)
		deckName := r.URL.Query().Get("deckName")
		var deck []Card

		_ = json.NewDecoder(r.Body).Decode(&deck)

		log.Println("params: ", params)
		log.Println("urlVals: ", deckName)
		id, err := strconv.Atoi(params["id"])
		if err != nil {
			log.Println(err)
		}

		//var deckID = types.DeckMetaData{}
		//var flashCards []Card
		/*for deckID, _ := range ac.Decks {
			if deckID.ID == id {
				ac.Decks. = deck

			} else {
				log.Println(flashCards)
			}
		}*/

		if _, found := ac.Decks[types.DeckMetaData{ID: id, Title: deckName}]; found {
			log.Println(ac.Decks[types.DeckMetaData{ID: id, Title: deckName}])
			ac.Decks[types.DeckMetaData{ID: id}] = deck
		}

		log.Println("found Deck: ", ac.Decks[types.DeckMetaData{ID: id, Title: deckName}])

		/*if value, found := deck["title"]; found {
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
