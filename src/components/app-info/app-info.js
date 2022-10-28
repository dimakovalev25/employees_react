import "./app-info.css";

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>all employees</h1>
            <h2>records employees: {props.quantityEmpl}</h2>
            <h2>add bonus: {props.quantityRise}</h2>
        </div>
    )
}

export default AppInfo;