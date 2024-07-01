import { useEffect, useState } from "react"
import { getCompetitionList } from "../../services/CompetitionServices.jsx"
import "./Create.css"
import { ClimbListItem } from "./ClimbListItem.jsx"

export const CreateClimbList = ({ currentUser }) => {
    const [competitionList, setCompetitionList] = useState([])
    const [newComp, setNewComp] = useState({})
    const [counter, setCounter] = useState(1)
    const [counterArray, setCounterArray] = useState([])
    const [climbListArray, setClimbListArray] = useState([])
    const [submit, setSubmit] = useState(false)

    const handleSetCounterArray = () => {
        let arr = []
        for (let i = 0; i < counter; i++) {
            arr.push(i)
        }
        setCounterArray(arr)
    }

    const iterateCounter = () => {
        let copy = counter
        copy++
        setCounter(copy)
    }

    const subtractCounter = () => {
        let copy = counter
        copy--
        setCounter(copy)
    }


    useEffect(() => {
        getCompetitionList().then(competitionObj => {
            setCompetitionList(competitionObj)
        })
    }, [])

    useEffect(() => {
        const id = competitionList.length
        const comp = competitionList.find(competition => competition.id === id && competition.userId === currentUser.id)
        setNewComp(comp)
    }, [competitionList])

    useEffect(() => {
        handleSetCounterArray()
    }, [counter])


    return (
        <article className="widerContainer">
            <h2 className="margin textDark">Enter Climbs For {newComp?.name}</h2>
            <ul>
                <li className="rows">
                    <div><h4 className="textDark">Name</h4></div>
                    <div><h4 className="textDark">Description</h4></div>
                    <div><h4 className="textDark">Points</h4></div>
                </li>
                {counterArray.map(number => {
                    return (
                        <ClimbListItem key={number} counter={counter} submit={submit} newComp={newComp}/>
                    )
                })}
                <div>
                    <button className="margin btn-color btn-lt-txt" onClick={() => iterateCounter()}>
                        Add
                    </button>
                    <button className="margin btn-color btn-lt-txt" onClick={() => subtractCounter()}>
                        Remove
                    </button>
                </div>
                <button className="btn-color btn-lt-txt" onClick={() => setSubmit(true)}>
                    Submit
                </button>
            </ul>
        </article>
    )
}
