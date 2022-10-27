import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                 all employees
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    bonus
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    salary over 1000$
            </button>
        </div>
    )
}

export default AppFilter;