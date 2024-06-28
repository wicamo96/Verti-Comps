export const createUser = (user) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

export const getUserInfoByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then(res => res.json())
}

export const getCompetitors = () => {
    return fetch("http://localhost:8088/users?isStaff=false&_embed=competitorAscents&_embed=competitionRegistrants").then(res => res.json())
}

export const editUserAscent = (ascentObj) => {
    return fetch(`http://localhost:8088/competitorAscents/${ascentObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ascentObj)
    })
}

export const deregisterCompetitor = (competitorRegistration) => {
    return fetch(`http://localhost:8088/competitionRegistrants/${competitorRegistration.id}`, {
        method: "DELETE"
    })
}

export const registerCompetitor = (competitionObj) => {
    return fetch("http://localhost:8088/competitionRegistrants", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(competitionObj)
    })
}

export const addUserAscent = (climbObj) => {
    return fetch("http://localhost:8088/competitorAscents", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(climbObj)
    })
}

export const deleteUserAscent = (climbObj, userId) => {
    return fetch(`http://localhost:8088/competitorAscents?climbId=${climbObj.id}&userId=${userId}`, {
        method: "DELETE"
    })
}
        

export const findUserClimb = (climbId, userId) => {
    return fetch(`http://localhost:8088/competitorAscents?climbId=${climbId}&userId=${userId}`).then(res => res.json())
}

export const getCompetitionPoints = (pointsObj) => {
    return fetch(`http://localhost:8088/competitionRegistrants/${pointsObj.id}`).then(res => res.json())
}

export const updateCompetitionPoints = (pointsObj) => {
    return fetch(`http://localhost:8088/competitionRegistrants/${pointsObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pointsObj)
    })
}

export const getCompetitorObjOnly = (competitorId) => {
    return fetch(`http://localhost:8088/users/${competitorId}`).then(res => res.json())
}

export const updateCompetitorLeaguePoints = (competitorObj) => {
    return fetch(`http://localhost:8088/users/${competitorObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(competitorObj)
    })
}