export const getLeagueLeaderboard = () => {
    return fetch("http://localhost:8088/leagueLeaderboard?_expand=user").then(res => res.json())
}