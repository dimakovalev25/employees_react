import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>employees records</h1>
            <h2>headcount: {employees}</h2>
            <h2>give out a bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;