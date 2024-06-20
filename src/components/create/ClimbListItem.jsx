export const ClimbListItem = ({ number, handleClimbListChange, climbListObject }) => {
    return (
        <li className="rows" key={number}>
                            <input
                                type="text"
                                id="name"
                                className="createInput"
                                placeholder="Climb Name"
                                onChange={(event) => {
                                    const copy = {...climbListObject}
                                    copy.name = event.target.value
                                    handleClimbListChange(copy)
                                }}
                            />
                            <input
                                type="text"
                                id="details"
                                className="createInput"
                                placeholder="Climb Details"
                                onChange={(event) => {
                                    const copy = {...climbListObject}
                                    copy.details = event.target.value
                                    handleClimbListChange(copy)
                                }}
                            />
                            <input
                                type="number"
                                id="points"
                                className="createInput"
                                placeholder="Point Value"
                                onChange={(event) => {
                                    const copy = {...climbListObject}
                                    copy.points = event.target.value
                                    handleClimbListChange(copy)
                                }}
                            />
                        </li>   
    )
}