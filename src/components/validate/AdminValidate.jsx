import { useEffect, useState } from "react"
import { getCompetitors } from "../../services/UserServices.jsx"
import { getCompetitionList } from "../../services/CompetitionServices.jsx"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from "reactstrap"
import "./Validate.css"

export const AdminValidate = () => {
    const [competitorList, setCompetitorList] = useState([])
    const [competitor, setCompetitor] = useState({})
    const [competitionList, setCompetitionList] = useState([])
    const [competition, setCompetition] = useState({})
    const [filteredCompetitorList, setFilteredCompetitorList] = useState([])
    const [competitionDropdownOpen, setCompetitionDropdownOpen] = useState(false);
    const [competitorDropdownOpen, setCompetitorDropdownOpen] = useState(false);

    const toggleCompetitor = () => setCompetitorDropdownOpen((prevState) => !prevState);
    const toggleCompetition = () => setCompetitionDropdownOpen((prevState) => !prevState);

    const handleFilterCompetitors = () => {
        let arr = []
        for (const competitorObj of competitorList) {
            for (const competitionObj of competitor?.competitionRegistrants) {
                if (competition && competition.competitionId === competitionObj.id) {
                    arr.push(competitorObj)
                }
            }
        }
        setFilteredCompetitorList(arr)
    }


    useEffect(() => {
        getCompetitors().then(competitorArr => {
            setCompetitorList(competitorArr)
        })
    }, [])

    useEffect(() => {
        getCompetitionList().then(competitionArr => {
            setCompetitionList(competitionArr)
        })
    }, [])

    useEffect(() => {
        handleFilterCompetitors()
    }, [competition])


    return (
        <article className="validateContainer">
            <header className="margin">
                <h1>Validate Ascents</h1>
            </header>
            <div className="d-flex p-5 spaceEvenly">
                <Dropdown isOpen={competitionDropdownOpen} toggle={toggleCompetition} >
                    <DropdownToggle caret>Select Competition</DropdownToggle>
                    <DropdownMenu>
                        {competitionList.map(competition => {
                            return (
                                <DropdownItem key={competition.id} onClick={() => setCompetition(competition)}>{competition.name}</DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown isOpen={competitorDropdownOpen} toggle={toggleCompetitor} >
                    <DropdownToggle caret>Select Competitor</DropdownToggle>
                    <DropdownMenu>
                        {competitorList.map(competitor => {
                            return (
                                <DropdownItem key={competitor.id} onClick={() => setCompetitor(competitor)}>{competitor.name}</DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </Dropdown>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Point Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </Table>
        </article>
    )
}