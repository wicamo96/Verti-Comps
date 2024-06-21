export const PostToClimbList = (climbObj) => {
    return fetch("http://localhost:8088/climbs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(climbObj)
    })
}