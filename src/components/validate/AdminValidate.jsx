import { useEffect, useState } from "react"
import { getCompetitors } from "../../services/UserServices.jsx"
import { getCompetitionClimbListById, getCompetitionList } from "../../services/CompetitionServices.jsx"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from "reactstrap"
import "./Validate.css"

export const AdminValidate = () => {
    const [competitorList, setCompetitorList] = useState([])
    const [competitor, setCompetitor] = useState({})
    const [competitionList, setCompetitionList] = useState([])
    const [competition, setCompetition] = useState({})
    const [filteredCompetitorList, setFilteredCompetitorList] = useState([])
    const [competitionDropdownOpen, setCompetitionDropdownOpen] = useState(false)
    const [competitorDropdownOpen, setCompetitorDropdownOpen] = useState(false)
    const [filterCompetitorRegistration, setFilterCompetitorRegistration] = useState([])
    const [competitorAscentList, setCompetitorAscentList] = useState([])
    const [allCompetitionsClimblist, setAllCompetitionsClimbList] = useState([])

    const toggleCompetitor = () => setCompetitorDropdownOpen((prevState) => !prevState);
    const toggleCompetition = () => setCompetitionDropdownOpen((prevState) => !prevState);

    const handleFilterCompetitors = () => {
        let arr = []
        for (const competitorObj of filterCompetitorRegistration) {
            for (const competitionObj of competitorObj.competitionRegistrants) {
                if (competition.id === competitionObj.competitionId) {
                    arr.push(competitorObj)
                    console.log(competitorObj)
                }
            }
        }
        setFilteredCompetitorList(arr)
    }

    const handleFilterCompetitorRegistration = () => {
        const arr = []
        for (const competitor of competitorList) {
            if (competitor.competitionRegistrants) {
                arr.push(competitor)
            }
        }
        setFilterCompetitorRegistration(arr)
    }

    const handleCompetitorAndAscentList = (competitor) => {
        setCompetitor(competitor)
        const arr = []
        for (const ascent of competitor.competitorAscents) {
            if (allCompetitionsClimblist.filter(climb => climb.climbId === ascent.climbId)) {
                arr.push(ascent)
            }
        }
        setCompetitorAscentList(arr)
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
        getCompetitionClimbListById(competition.id).then(climbListArr => {
            setAllCompetitionsClimbList(climbListArr)
        })
    }, [competition])

    useEffect(() => {
        handleFilterCompetitorRegistration()
    }, [competition, competitorList])

    useEffect(() => {
        handleFilterCompetitors()
    }, [competition, competitorList])


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
                        {filteredCompetitorList.map(competitor => {
                            return (
                                <DropdownItem key={competitor.id} onClick={() => handleCompetitorAndAscentList(competitor)}>{competitor.name}</DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </Dropdown>
            </div>
                {competitor.length === 0 ? "" : <header><h2>{competitor.name}'s Climb List</h2></header>}
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
                    {competitorAscentList.map(ascent => {
                        return (
                            <tr>
                                <th scope="row">
                                    {ascent.climbId}
                                </th>
                                <td>
                                    Mark
                                </td>
                                <td>
                                    Otto
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </article>
    )
}