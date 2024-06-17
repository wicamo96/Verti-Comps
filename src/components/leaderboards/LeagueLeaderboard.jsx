import { useEffect, useState } from "react"
import { getLeagueLeaderboard } from "../../services/LeaderboardServices.jsx"

export const LeagueLeaderboard = () => {
    const [leaderboardList, setLeaderboardList] = useState([])

    const getAndSetLeaderboard = () => {
        getLeagueLeaderboard().then(leaderboardObj => {
            setLeaderboardList(leaderboardObj)
        })
    }

    const sortLeaderboard = () => {
        leaderboardList.sort((a, b) => b.user.leaguePoints - a.user.leaguePoints) 
    }

    useEffect(() => {
        getAndSetLeaderboard()
    }, [])

    useEffect(() => {
        sortLeaderboard()
    }, [leaderboardList])

    console.log(leaderboardList)

    return (
        <div>hi</div>
    )
}