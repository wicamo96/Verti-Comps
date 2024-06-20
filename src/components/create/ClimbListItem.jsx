import { useEffect, useState } from "react"
import { PostToClimbList } from "../../services/ClimbListServices.jsx"
import { useNavigate } from "react-router-dom"

export const ClimbListItem = ({ number, setClimbListArray, climbListArray, counter, submit, newComp }) => {
    const [climbListObject, setClimbListObject] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const copy = {...climbListObject}
        copy.id = counter
        setClimbListObject(copy)
    }, [])

    useEffect(() => {
        if (climbListArray.length === 0) {
            setClimbListArray(climbListObject)
        }
        // } else if (climbListArray.length > 0) {
        //     const copyArr = [...climbListArray]
        //     copyArr.push(climbListObject)
        //     setClimbListArray(copyArr)
        // }
    }, [climbListObject])

    useEffect(() => {
        if (submit === true) {
            const climb = {
                name: climbListObject.name,
                details: climbListObject.details,
                points: climbListObject.points,
                competitionId: newComp.id
            }
            PostToClimbList(climb)
            navigate("/")
        }
    }, [submit])

    return (
        <li className="rows" key={number}>
                            <input
                                type="text"
                                id="name"
                                className="createInput"
                                placeholder="Climb Name"
                                onChange={(event) => {
                                    const copy = {...climbListObject}
                                    copy.name = event.target.value
                                    setClimbListObject(copy)
                                }}
                            />
                            <input
                                type="text"
                                id="details"
                                className="createInput"
                                placeholder="Climb Details"
                                onChange={(event) => {
                                    const copy = {...climbListObject}
                                    copy.details = event.target.value
                                    setClimbListObject(copy)
                                }}
                            />
                            <input
                                type="number"
                                id="points"
                                className="createInput"
                                placeholder="Point Value"
                                onChange={(event) => {
                                    const copy = {...climbListObject}
                                    copy.points = event.target.value
                                    setClimbListObject(copy)
                                }}
                            />
                        </li>   
    )
}