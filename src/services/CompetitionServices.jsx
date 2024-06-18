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