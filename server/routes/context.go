package routes

type AppContext struct {
	Decks map[string]map[string]string
}

func NewAppContext() AppContext {
	c := AppContext{}
	c.Decks = make(map[string]map[string]string)
	/*c.Decks["French 3250"] = map[string]string{"Avoir": "To have", "Être": "To be"}
	c.Decks["C++"] = map[string]string{"+": "Addition", "==": "Comparison"}*/
	return c
}
