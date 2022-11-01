import './employees-list.css'
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data}) => {

    const Elements = data.map(item => {
        return (
        <EmployeesListItem key={item.id} name={item.name} salary={item.salary} />
            )

    })

    // console.log(Elements)

    return (
    <ul className='app-list list-group'>
        {Elements}
    </ul>
    )
};


export default EmployeesList;