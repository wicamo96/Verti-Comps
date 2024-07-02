import { useEffect, useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from "reactstrap"
import { getCompetitionClimbListById, getCompetitionList } from "../../services/CompetitionServices.jsx"
import { CompetitorValidateTableRow } from "./CompetitorValidateTableRow.jsx"

export const CompetitorValidate = ({ currentUser }) => {
    const [competitionList, setCompetitionList] = useState([])
    const [competition, setCompetition] = useState({})
    const [competitionClimbList, setCompetitionClimbList] = useState([])
    const [competitionDropdownOpen, setCompetitionDropdownOpen] = useState(false)
    const [filterCompetitionList, setFilterCompetitionList] = useState([])

    const toggleCompetition = () => setCompetitionDropdownOpen((prevState) => !prevState);

    

    useEffect(() => {
        getCompetitionList().then(competitionArr => {
            setCompetitionList(competitionArr)
        })
    }, [])

    useEffect(() => {
        getCompetitionClimbListById(competition.id).then(climbListArr => {
            setCompetitionClimbList(climbListArr)
        })
    }, [competition])

    useEffect(() => {
        const arr = []
        for (const competition of competitionList) {
            if (competition.hasStarted) {
                arr.push(competition)
            }
        }
        setFilterCompetitionList(arr)
    }, [competitionList])

    return (
        <article className="validateContainer">
            <header className="margin">
                <h1 className="textDark">Scorecard</h1>
            </header>
            <div className="d-flex p-5 spaceEvenly">
                <Dropdown isOpen={competitionDropdownOpen} toggle={toggleCompetition} >
                    <DropdownToggle className="dropdownColor" caret>Select Competition</DropdownToggle>
                    <DropdownMenu>
                        {filterCompetitionList.map(competition => {
                            return (
                                <DropdownItem className="textDark" key={competition.id} onClick={() => setCompetition(competition)}>{competition.name}</DropdownItem> 
                            )   
                        })}
                    </DropdownMenu>
                </Dropdown>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th className="textDark">
                            Name
                        </th>
                        <th className="textDark">
                            Points
                        </th>
                        <th className="textDark">
                            Climbed
                        </th>
                        <th className="textDark">
                            Notes
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {competitionClimbList.map(climb => {
                        return (
                            <CompetitorValidateTableRow currentUser={currentUser} climb={climb} key={climb.id} competition={competition} />
                        )
                    })}
                </tbody>
            </Table>
        </article>
    )
}