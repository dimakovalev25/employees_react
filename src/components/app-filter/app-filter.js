import "./app-filter.css";

function AppFilter({searchBigSalary}) {


    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                all employees
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                wage increase
            </button>
            <button type="button"
                    className="btn btn-outline-light"
            >
                salary over 1,000
            </button>
        </div>
    )
}

export default AppFilter;