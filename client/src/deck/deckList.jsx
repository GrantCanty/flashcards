import DeckInfo from "./deckInfo";

const DeckList = ({deckNameResponse, toggleShow, setDeckID}) => {
    return (
        <div className='deck-list'>
            { [...deckNameResponse.keys()].map((i) => {
                return <DeckInfo name={deckNameResponse.get(i)} key={i} id={i} toggleShow={toggleShow} setID={setDeckID} />
                })
            }
        </div>
    )
}

export default DeckList;