import { useEffect, useState } from "react"
import { getCompetitors } from "../../services/UserServices.jsx"
import { getCompetitionClimbListById, getCompetitionList, getCompetitionsViaLeaderboard } from "../../services/CompetitionServices.jsx"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from "reactstrap"
import "./Validate.css"
import { AdminValidateTableRow } from "./AdminValidateTableRow.jsx"

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
    const [competitionsViaLeaderboard, setCompetitionsViaLeaderboard] = useState([])

    const toggleCompetitor = () => setCompetitorDropdownOpen((prevState) => !prevState);
    const toggleCompetition = () => setCompetitionDropdownOpen((prevState) => !prevState);

    const handleFilterCompetitors = () => {
        let arr = []
        for (const competitorObj of filterCompetitorRegistration) {
            for (const competitionObj of competitorObj.competitionRegistrants) {
                if (competition.id === competitionObj.competitionId) {
                    arr.push(competitorObj)
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

    const handleCompetitorAndAscentList = (competitorObj) => {
        setCompetitor(competitorObj)
        const arr = []
        for (const ascent of competitorObj.competitorAscents) {
            if (allCompetitionsClimblist.find(climb => climb.id === ascent.climbId && ascent.competitionId === competition.id)) {
                arr.push(ascent)
            }
        }
        setCompetitorAscentList(arr)
    }

 


    useEffect(() => {
        getCompetitors().then(competitorArr => {
            setCompetitorList(competitorArr)
        })
    }, [competitor])

    useEffect(() => {
        getCompetitionList().then(competitionArr => {
            setCompetitionList(competitionArr)
        })
    }, [competitor])

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

    useEffect(() => {
        getCompetitionsViaLeaderboard().then(competitionsArr => {
            setCompetitionsViaLeaderboard(competitionsArr)
        })
    }, [])



    return (
        <article className="validateContainer">
            <header className="margin">
                <h2 className="textDark">Validate Competitor Scorecards</h2>
            </header>
            <div className="d-flex p-5 spaceEvenly ">
                <Dropdown isOpen={competitionDropdownOpen} toggle={toggleCompetition} >
                    <DropdownToggle className="dropdownColor" caret>Select Competition</DropdownToggle>
                    <DropdownMenu>
                        {competitionList.map(competition => {
                            const find = competitionsViaLeaderboard.find(obj => obj.id === competition.id)
                            return (find?.competitionLeaderboard.length > 0 ?
                                <DropdownItem key={competition.id} onClick={() => setCompetition(competition)}>{competition.name}</DropdownItem>
                                :
                                "")
                        })}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown isOpen={competitorDropdownOpen} toggle={toggleCompetitor} >
                    <DropdownToggle className="dropdownColor" caret>Select Competitor</DropdownToggle>
                    <DropdownMenu>
                        {filteredCompetitorList.map(competitor => {
                            return (
                                <DropdownItem key={competitor.id} onClick={() => handleCompetitorAndAscentList(competitor)}>{competitor.name}</DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </Dropdown>
            </div>
                {!competitor.id ? "" : <header><h2 className="textDark">{competitor.name}'s Climb List</h2></header>}
            <Table>
                <thead>
                    <tr>
                        <th className="textDark">
                            #
                        </th>
                        <th className="textDark">
                            Name
                        </th>
                        <th className="textDark">
                            Points
                        </th>
                        <th className="textDark">
                            Validate
                        </th>
                        <th className="textDark">
                            Flag
                        </th>
                        <th className="textDark">
                            Notes
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {competitorAscentList.map(ascent => {
                        return (
                            <AdminValidateTableRow ascent={ascent} allCompetitionsClimblist={allCompetitionsClimblist} competition={competition} userObj={filterCompetitorRegistration.find(registration => registration.id === ascent.userId)}/>
                        )
                    })}
                </tbody>
            </Table>
        </article>
    )
}