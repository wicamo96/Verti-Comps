import { useEffect } from "react"
import { useState } from "react"
import { deleteCompetition, getCompetitionList } from "../../services/CompetitionServices.jsx"
import { Button, Table } from "reactstrap"
import "./Competitions.css"
import { useNavigate } from "react-router-dom"
import { AdminCompetitionListRow } from "./AdminCompetitionListRow.jsx"

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
            <h2 className="margin textDark">Competitions</h2>
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
                            <AdminCompetitionListRow competition={competition} key={competition.id} currentUser={currentUser} competitionList={competitionList} navigate={navigate} formattedDate={formattedDate} />
                        )
                    })}
                </tbody>
            </Table>
        </article>
    )
}