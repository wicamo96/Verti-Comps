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
            <h2>Enter Climbs For the {newComp?.name} competition</h2>
            <ul>
                <li className="rows">
                    <div><h4>Name</h4></div>
                    <div><h4>Description</h4></div>
                    <div><h4>Points</h4></div>
                </li>
                {counterArray.map(number => {
                    return (
                        <ClimbListItem key={number} counter={counter} submit={submit} newComp={newComp}/>
                    )
                })}
                <div>
                    <button className="margin" onClick={() => iterateCounter()}>
                        Add
                    </button>
                    <button className="margin" onClick={() => subtractCounter()}>
                        Subtract
                    </button>
                </div>
                <button onClick={() => setSubmit(true)}>
                    Submit
                </button>
            </ul>
        </article>
    )
}
