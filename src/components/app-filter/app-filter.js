import "./app-filter.css";

function AppFilter(props) {

    const buttonsData = [
        {name: 'all', label: "all employees"},
        {name: 'rise', label: "wage increase"},
        {name: 'moreThen1000', label: "salary over 1,000"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;