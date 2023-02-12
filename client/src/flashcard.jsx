import './flashcard.css'

function Flashcard({className, id, name, toggleShow}) {
    return (
        <div className={className} id={id} onClick={toggleShow} >
            <h2>{ name }</h2> 
        </div>
    )
}

export default Flashcard;