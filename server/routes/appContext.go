package routes

type AppContext struct {
	Decks map[string]map[string]string
	User
}

type User struct {
	Name         string
	About        string
	ProfilePhoto string
}

func NewAppContext() AppContext {
	c := AppContext{}
	c.Decks = make(map[string]map[string]string)
	c.Decks["French 3250"] = map[string]string{"Avoir": "To have", "Être": "To be", "Dire": "To say"}
	c.Decks["C++"] = map[string]string{"+": "Addition", "==": "Comparison"}

	c.User.Name = "Grant Canty"
	c.User.About = "I enjoy coding, snowboarding, and playing N64 in my free time"
	return c
}
