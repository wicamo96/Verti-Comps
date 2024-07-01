import { useEffect } from "react"
import { useState } from "react"
import { deleteCompetition, getCompetitionList } from "../../services/CompetitionServices.jsx"
import { Button, Table } from "reactstrap"
import "./Competitions.css"
import { useNavigate } from "react-router-dom"

export const AdminCompetitionList = ({ currentUser }) => {
    const [competitionList, setCompetitionList] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getCompetitionList().then(competitionArr => {
            setCompetitionList(competitionArr)
        })
    }, [])

    const formattedDate = (datestring) => {
        const [year, month, day] = datestring.split("-")
        return `${month} - ${day} - ${year}`
    }

    return (
        <article className="wider">
            <h2 className="margin textDark">Compeititons</h2>
            <Table>
                <thead>
                    <tr>
                        <th className="textDark">
                            Name
                        </th>
                        <th className="textDark">
                            Date
                        </th>
                        <th className="textDark">
                            Location
                        </th>
                        <th className="textDark">
                            Registration
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {competitionList.map(competition => {
                        return (
                            <tr key={competition.id}>
                                <th scope="row" className="textDark">
                                    {competition.name}
                                </th>
                                <td className="textDark">
                                    {formattedDate(competition.date)}
                                </td>
                                <td className="textDark">
                                    {competition.location}
                                </td>
                                <td>
                                    <Button color="link" onClick={() => navigate("/competitions/registration", { state: { competition: competition } })}>
                                        View And Edit
                                    </Button>
                                </td>
                                <td>
                                    {competition.userId === currentUser.id ? 
                                        <Button className="btn-color btn-lt-txt" onClick={() => navigate("/competitions/edit", { state: { competition: competition } })}>
                                            Edit
                                        </Button>
                                        :
                                        ""
                                    }
                                </td>
                                <td>
                                    {competition.userId === currentUser.id ? 
                                        <Button className="btn-color btn-lt-txt" onClick={() => deleteCompetition(competition)}>
                                            Delete
                                        </Button>
                                        :
                                        ""
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </article>
    )
}