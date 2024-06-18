export const Dashboard = ({ currentUser }) => {
    return currentUser.isStaff? <div>hi administrator</div> : <div>hi competitor</div>
}