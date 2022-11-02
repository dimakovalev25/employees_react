import './employees-list.css'
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleRise, onToggleIncrease}) => {

    const Elements = data.map(item => {
        return (
            <EmployeesListItem
                key={item.id}
                name={item.name}
                salary={item.salary}
                like={item.like}
                increase={item.increase}
                onDelete={() => onDelete(item.id)}
                onToggleRise={() => onToggleRise(item.id)}
                onToggleIncrease={() => onToggleIncrease(item.id)}
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