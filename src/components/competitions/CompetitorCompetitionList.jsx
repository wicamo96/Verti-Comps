import { useEffect, useState } from "react"
import { getCompetitionList } from "../../services/CompetitionServices.jsx"
import { Table } from "reactstrap"
import { CompetitorCompListRow } from "./CompetitorCompListRow.jsx"
import { getCompetitors } from "../../services/UserServices.jsx"

export const CompetitorCompetitionList = ({ currentUser }) => {
    const [competitionList, setCompetitionList] = useState([])
    const [allCompetitorsList, setAllCompetitorsList] = useState([])
    const [competitorRegistrationList, setCompetitorRegistrationList] = useState([])

    const getAndSetCompetitionList = () => {
        getCompetitionList().then(compListArr => {
            setCompetitionList(compListArr)
        })
    } 
    
    useEffect(() => {
        getAndSetCompetitionList()
    }, [])

    useEffect(() => {
        getCompetitors().then(competitorArr => {
            setAllCompetitorsList(competitorArr)
        })
    }, [])

    useEffect(() => {
        const filteredCompetitorList = allCompetitorsList.filter(competitor => competitor.id === currentUser.id)
        setCompetitorRegistrationList(filteredCompetitorList[0]?.competitionRegistrants)
    }, [allCompetitorsList])

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
                            <CompetitorCompListRow key={competition.id} currentUser={currentUser} competition={competition} formattedDate={formattedDate} competitorRegistrationList={competitorRegistrationList} setCompetitionList={setCompetitionList}/>
                        )
                    })}
                </tbody>
            </Table>
        </article>
    )
}