import "./app-filter.css";

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: "all employees"},
        {name: 'rise', label: "bonus"},
        {name: 'more1000', label: "salary over 1000$"},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}

            {/*<button type="button"*/}
            {/*        className="btn btn-light">*/}
            {/*     all employees*/}
            {/*</button>*/}
            {/*<button type="button"*/}
            {/*        className="btn btn-outline-light">*/}
            {/*        bonus*/}
            {/*</button>*/}
            {/*<button type="button"*/}
            {/*        className="btn btn-outline-light"*/}
            {/*        // onClick={props.filterSalary}*/}
            {/*>*/}
            {/*        salary over 1000$*/}
            {/*</button>*/}
        </div>
    )
}

export default AppFilter;