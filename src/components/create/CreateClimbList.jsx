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
    const [climbListObject, setClimbListObject] = useState({})

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

        const copyArr = [...climbListArray]
        copyArr.push(climbListObject)
        setClimbListArray(copyArr)

        setClimbListObject({})
    }

    const subtractCounter = () => {
        let copy = counter
        copy--
        setCounter(copy)
    }

    const handleClimbListChange = (climbObj) => {
        
        if (climbListArray.length === 0) {
            
            climbObj.id = counter
            setClimbListObject(climbObj)
            
            // setClimbListArray(climbObj)
        
        } else if (climbListArray.length > 0) {
            const existingClimb = climbListArray.find(climb => climb.id === climbObj.id)
            // const copyArr = [...climbListArray]
            // for (const climb of copyArr) {
            //     if (existingClimb.id === climb.id) {
            //         climb = climbObj
            //     }
            // }
            // console.log(copyArr)
            // setClimbListArray(copyArr)
            console.log(existingClimb)
        }
        else {
            climbObj.id = counter
            setClimbListObject(climbObj)
            // const copyArr = {...climbListArray}
            // copyArr.push(climbObj)
            // setClimbListArray(copyArr)
        }
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

    useEffect(() => {
        handleClimbListChange(climbListObject)
    }, [climbListObject])

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
                        // <li className="rows" key={number}>
                        //     <input
                        //         type="text"
                        //         id="name"
                        //         className="createInput"
                        //         placeholder="Climb Name"
                        //         onChange={(event) => {
                        //             const copy = {...climbListObject}
                        //             copy.name = event.target.value
                        //             handleClimbListChange(copy)
                        //         }}
                        //     />
                        //     <input
                        //         type="text"
                        //         id="details"
                        //         className="createInput"
                        //         placeholder="Climb Details"
                        //         onChange={(event) => {
                        //             const copy = {...climbListObject}
                        //             copy.details = event.target.value
                        //             handleClimbListChange(copy)
                        //         }}
                        //     />
                        //     <input
                        //         type="number"
                        //         id="points"
                        //         className="createInput"
                        //         placeholder="Point Value"
                        //         onChange={(event) => {
                        //             const copy = {...climbListObject}
                        //             copy.points = event.target.value
                        //             handleClimbListChange(copy)
                        //         }}
                        //     />
                        // </li>   
                        <ClimbListItem key={number} handleClimbListChange={handleClimbListChange} climbListObject={climbListObject} />
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
            </ul>
        </article>
    )
}
