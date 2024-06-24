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