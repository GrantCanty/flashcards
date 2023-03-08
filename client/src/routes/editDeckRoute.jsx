import React from "react"
//import axios from "axios"
import EditFlashcard from "../editFlashcard/editFlashcard"

const EditDeckRoute = ({deckID}) => {
    //const url = "http://localhost:8080/api/deck/" + deckID

    /*let tmpList = []
    const tmp = new Map()
    const tmp2 = new Map()
    const tmp3 = new Map()
    
    tmp.set("topic", "avoir")
    tmp.set("description", "to have")
    tmp.set("id", 0)

    tmp2.set("topic", "dire")
    tmp2.set("description", "to say")
    tmp2.set("id", 1)

    tmp3.set("topic", "lire")
    tmp3.set("description", "to read")
    tmp3.set("id", 2)

    tmpList = [tmp, tmp2, tmp3]*/
    
    const [deckInfo, setDeckInfo] = React.useState([])

    /*React.useEffect(() => {
        axios.get(url).then((response) => {
            setDeckInfo(new Map(Object.entries(response.data)))
        })
    }, [])*/

    React.useEffect(() => {
        const tmp = new Map()
        const tmp2 = new Map()
        const tmp3 = new Map()

        tmp.set("topic", "avoir")
        tmp.set("description", "to have")
        tmp.set("id", 0)

        tmp2.set("topic", "dire")
        tmp2.set("description", "to say")
        tmp2.set("id", 1)

        tmp3.set("topic", "lire")
        tmp3.set("description", "to read")
        tmp3.set("id", 2)

        let tmpList = [tmp, tmp2, tmp3]
        setDeckInfo(tmpList)
        console.log(deckInfo)
    }, [])

    function newCard() {
        const tmpDeck = new Map()
        tmpDeck.set("topic", "")
        tmpDeck.set("description", "")
        tmpDeck.set("id", deckInfo.length++)

        let tmpArr = []
        deckInfo.map((card) => {
            tmpArr.push(card)
        })
        tmpArr.push(tmpDeck)

        setDeckInfo(tmpArr)
    }

    function handleDeckInfoChange(index, e) {
        console.log(`${[e.target.name]}: ${e.target.value} ${index} `)
        setDeckInfo(prevState => ({
            ...prevState.map(card => ({
                ...card.get("id") === index
                ? card.set([e.target.name], e.target.value)
                : card
            }))
        }))
        /*let tmpDeckInfo = []
        tmpDeckInfo = deckInfo
        for(let i = 0; i < tmpDeckInfo.length; i++) {
            //console.log(tmpDeckInfo[i].get("id") === index)
            if(tmpDeckInfo[i].get("id") === index) {
                tmpDeckInfo[i].set(e.target.name, e.target.value)
            }
        }
        console.log("tmpDeckInfo: ", tmpDeckInfo)

        setDeckInfo(tmpDeckInfo)*/
    }

    
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <h1>Your Flashcards</h1>
                    <button onClick={newCard} >Add Card</button>
                </div>
                {deckInfo.map((flaschard, num) => {
                        return <EditFlashcard key={num} index={num} flaschard={flaschard} change={handleDeckInfoChange} />
                    }
                )}

            </div>
        </>
    )
}

export default EditDeckRoute;

/*
{deckInfo.map((flaschard, num) => {
                        return <EditFlashcard key={num} index={num} flaschard={flaschard} change={handleDeckInfoChange} />
                    }
                )}
*/
//{console.log("is deckInfo an array: ", Array.isArray(deckInfo))}