package routes

import "github.com/GrantCanty/flashcards/types.go"

type AppContext struct {
	Decks map[types.DeckMetaData][]Card
	User
	DeckCounter Counter
	CardCounter Counter
}

type User struct {
	Name         string
	About        string
	ProfilePhoto string
}

type Card struct {
	Topic       string `json:"topic"`
	Description string `json:"description"`
	ID          int    `json:"id"`
}

type Counter struct {
	num int
}

func (c *Counter) Init() Counter {
	return Counter{0}
}

func (c *Counter) New() int {
	c.num++
	return c.num - 1
}

func (c Counter) Current() int {
	return c.num
}
func (c Counter) Last() int {
	return c.num - 1
}

func NewAppContext() AppContext {
	c := AppContext{}
	c.DeckCounter.Init()
	c.CardCounter.Init()

	c.Decks = make(map[types.DeckMetaData][]Card)
	//c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "French 3250"}] = map[string]string{"Avoir": "To have", "Être": "To be", "Dire": "To say"}
	c.Decks[types.DeckMetaData{ID: c.DeckCounter.New(), Title: "French 3250"}] = []Card{{Topic: "Avoir", Description: "To have", ID: c.CardCounter.New()}, {Topic: "Être", Description: "To be", ID: c.CardCounter.New()}, {Topic: "Dire", Description: "To say", ID: c.CardCounter.New()}, {Topic: "Lire", Description: "To read", ID: c.CardCounter.New()}}
	c.Decks[types.DeckMetaData{ID: c.DeckCounter.New(), Title: "CS 2400"}] = []Card{{Topic: "+", Description: "Addition", ID: c.CardCounter.New()}, {Topic: "==", Description: "Comparison", ID: c.CardCounter.New()}, {Topic: "-", Description: "Subtraction", ID: c.CardCounter.New()}, {Topic: "float", Description: "number with ability to have decimals", ID: c.CardCounter.New()}}
	/*c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "CS 2400"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Calculus 2100"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Calculus 2740"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Econ 3200"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Journalism 4660"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Journalism 4660"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Journalism 4660"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Journalism 4660"}] = map[string]string{"+": "Addition", "==": "Comparison"}*/

	c.User.Name = "Grant Canty"
	c.User.About = "I enjoy coding, snowboarding, and playing N64 in my free time"
	return c
}
