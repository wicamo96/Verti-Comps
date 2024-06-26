export const postNewCompetition = (competitionObj) => {
    return fetch("http://localhost:8088/competitions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(competitionObj)
    }).then(res => res.json())
}

export const getCompetitionList = () => {
    return fetch("http://localhost:8088/competitions").then(res => res.json())
}

export const getCompetitionClimbListById = (id) => {
    return fetch(`http://localhost:8088/climbs?competitionId=${id}`).then(res => res.json())
}

export const getCompetitionsViaLeaderboard = () => {
    return fetch("http://localhost:8088/competitions?_embed=competitionLeaderboard").then(res => res.json())
}

export const editExistingCompetition = (competitionObj) => {
    return fetch(`http://localhost:8088/competitions/${competitionObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(competitionObj)
    })
}

export const deleteCompetition = (competitionObj) => {
    return fetch(`http://localhost:8088/competitions/${competitionObj.id}`, {
        method: "DELETE"
    })
}