import { useState } from "react"
import "./Create.css"
import { postNewCompetition } from "../../services/CompetitionServices.jsx"
import { useNavigate } from "react-router-dom"
import { Card } from "reactstrap"

export const Create = ({ currentUser }) => {
    const [competitionInfo, setCompetitionInfo] = useState({})

    const navigate = useNavigate()

    const handleCompetitionSubmit = () => {
        const copy = {...competitionInfo}
        copy.inProgress = false
        copy.hasStarted = false
        copy.userId = currentUser.id
        postNewCompetition(copy)
        navigate('/create/climbList')
    }

    return (
        <article className="createContainer">
            <h2 className="textDark">Create New Competition</h2>
            <form>
                <Card className="card">
                    <fieldset>
                        <div>
                            <h5 className="textDark">Enter Competition Name</h5>
                            <input
                            type="text"
                            id="name"
                            className="createInput"
                            placeholder="Name"
                            required
                            autoFocus
                            onChange={(event) => {
                                const copy = {...competitionInfo}
                                copy.name = event.target.value
                                setCompetitionInfo(copy)
                            }}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <h5 className="textDark">Enter Date</h5>
                            <input
                            type="date"
                            id="date"
                            className="createInput"
                            placeholder="Enter competition date"
                            required
                            onChange={(event) => {
                                const copy = {...competitionInfo}
                                copy.date = event.target.value
                                setCompetitionInfo(copy)
                            }}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <h5 className="textDark">Enter Location</h5>
                            <input
                            type="text"
                            id="location"
                            className="createInput"
                            placeholder="Location"
                            required
                            onChange={(event) => {
                                const copy = {...competitionInfo}
                                copy.location = event.target.value
                                setCompetitionInfo(copy)
                            }}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <h5 className="textDark">Enter Start Time</h5>
                            <input
                            type="time"
                            id="startTime"
                            className="createInput"
                            placeholder="Start Time"
                            required
                            onChange={(event) => {
                                const copy = {...competitionInfo}
                                copy.startTime = event.target.value
                                setCompetitionInfo(copy)
                            }}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <button className="login-btn btn-color margin" type="submit" onClick={() => handleCompetitionSubmit()}>
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </Card>
            </form>
        </article>
    )
}