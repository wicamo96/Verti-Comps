export const getLeagueLeaderboard = () => {
    return fetch("http://localhost:8088/leagueLeaderboard?_expand=user").then(res => res.json())
}

export const postToLeagueLeaderboard = (competitorObj) => {
    return fetch("http://localhost:8088/leagueLeaderboard", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(competitorObj)
    })
}

export const postToCompetitionLeaderboard = (competitorObj) => {
    return fetch("http://localhost:8088/competitionLeaderboard", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(competitorObj)
    })
}