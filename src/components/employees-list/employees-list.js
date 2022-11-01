import './employees-list.css'
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete}) => {

    const Elements = data.map(item => {
        return (
            <EmployeesListItem
                key={item.id}
                name={item.name}
                salary={item.salary}
                like={item.like}
                onDelete={() => onDelete(item.id)}
            />
        )
    })

    return (
        <ul className='app-list list-group'>
            {Elements}
        </ul>
    )
};

export default EmployeesList;