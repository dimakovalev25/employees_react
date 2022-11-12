import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {id: 1,name: 'all', label:'all employees'},
        {id: 2,name: 'like', label:'only like'},
        {id: 3,name: 'more1000', label:'salary over 1,000 $'},
    ];

    const buttons = buttonsData.map(({name, label,id}) => {
        return (
            <button
                className='btn btn-outline-light'
                type='button'
                key={id}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )
};

export default AppFilter;