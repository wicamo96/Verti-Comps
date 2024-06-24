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

    return (
        <article className="wider">
            <h2 className="margin">Compeititons</h2>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Location
                        </th>
                        <th>
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
                                <th scope="row">
                                    {competition.name}
                                </th>
                                <td>
                                    {competition.date}
                                </td>
                                <td>
                                    {competition.location}
                                </td>
                                <td>
                                    <Button color="link" onClick={() => navigate("/competitions/registration", { state: { competition: competition } })}>
                                        View And Edit
                                    </Button>
                                </td>
                                <td>
                                    {competition.userId === currentUser.id ? 
                                        <Button onClick={() => navigate("/competitions/edit", { state: { competition: competition } })}>
                                            Edit
                                        </Button>
                                        :
                                        ""
                                    }
                                </td>
                                <td>
                                    {competition.userId === currentUser.id ? 
                                        <Button onClick={() => deleteCompetition(competition)}>
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