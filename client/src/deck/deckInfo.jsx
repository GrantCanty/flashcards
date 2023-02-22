import './deck.css'

function DeckInfo({id, name, toggleShow, setID}) {
    return (
        <div className="deck-item" id={`id${id%5}`} onClick={ () => { 
                                                                        setID(id)
                                                                        toggleShow()}
                                                                    } >
            <h2>{ name }</h2> 
        </div>
    )
}

export default DeckInfo;