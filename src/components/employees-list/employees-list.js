import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {
    // console.log(data)
    const elementsItem = data.map(item => {
        return (
            <EmployeesListItem
                key={item.id}
                name={item.name}
                salary={item.salary}
                increase={item.increase}
                rise={item.rise}
                onDelete={() => onDelete(item.id)}
            />
        )
    })


    return (
        <ul className="app-list list-group">
            {elementsItem}
        </ul>
    )
}

export default EmployeesList;