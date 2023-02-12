package routes

import "github.com/GrantCanty/flashcards/types.go"

type AppContext struct {
	Decks map[types.DeckMetaData]map[string]string
	User
	Count Counter
}

type User struct {
	Name         string
	About        string
	ProfilePhoto string
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
	c.Count.Init()

	c.Decks = make(map[types.DeckMetaData]map[string]string)
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "French 3250"}] = map[string]string{"Avoir": "To have", "Être": "To be", "Dire": "To say"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "CS 2400"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Calculus 2100"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Calculus 2740"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Econ 3200"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Journalism 4660"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Journalism 4660"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Journalism 4660"}] = map[string]string{"+": "Addition", "==": "Comparison"}
	c.Decks[types.DeckMetaData{ID: c.Count.New(), Title: "Journalism 4660"}] = map[string]string{"+": "Addition", "==": "Comparison"}

	c.User.Name = "Grant Canty"
	c.User.About = "I enjoy coding, snowboarding, and playing N64 in my free time"
	return c
}
