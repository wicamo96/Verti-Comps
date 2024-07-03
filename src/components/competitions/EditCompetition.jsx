import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { editExistingCompetition } from "../../services/CompetitionServices.jsx"
import { Card } from "reactstrap"

export const EditCompetition = () => {
    const [competitionInfo, setCompetitionInfo] = useState([])

    const { state } = useLocation()

    const navigate = useNavigate()

    const handleCompetitionEdit = () => {
        editExistingCompetition(competitionInfo)
        navigate("/competitions")
    }
    
    useEffect(() => {
        const info = {
            id: state.competition.id,
            name: state.competition.name,
            date: state.competition.date,
            location: state.competition.location,
            startTime: state.competition.startTime,
            userId: state.competition.userId
        }

        setCompetitionInfo(info)
    }, [])

    return (
        <article className="createContainer">
            <form>
                <h2 className="marginBottom">Edit {state.competition.name} Information</h2>
                <Card className="card">
                    <fieldset>
                        <div>
                            <h4 className="textDark">Edit Competition Name</h4>
                            <input
                            type="text"
                            id="name"
                            className="createInput"
                            placeholder="Name"
                            required
                            autoFocus
                            defaultValue={state.competition.name}
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
                            <h4 className="textDark">Edit Date</h4>
                            <input
                            type="date"
                            id="date"
                            className="createInput"
                            placeholder="Enter competition date"
                            required
                            defaultValue={state.competition.date}
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
                            <h4 className="textDark">Edit Location</h4>
                            <input
                            type="text"
                            id="location"
                            className="createInput"
                            placeholder="Location"
                            required
                            defaultValue={state.competition.location}
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
                            <h4 className="textDark">Edit Start Time</h4>
                            <input
                            type="time"
                            id="startTime"
                            className="createInput"
                            placeholder="Start Time"
                            required
                            defaultValue={state.competition.startTime}
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
                            <button className="login-btn btn-color margin" type="submit" onClick={() => handleCompetitionEdit()}>
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </Card>
            </form>
        </article>
    )
}