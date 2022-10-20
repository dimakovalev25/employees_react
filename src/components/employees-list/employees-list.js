import './employees-list.css'
import EmployeesListItem from "../employees-list-item/employees-list-item";
import {Component} from "react";

class EmployeesList extends Component {
    render() {
        let {data, onDelete} = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            return (
                // <EmployeesListItem key={item.id} name={item.name} salary={item.salary} subname={item.subname} increase={item.increase}/>
                <EmployeesListItem
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
            )
        });

        return (
            <ul className='app-list list-group'>
                {elements}
            </ul>
        )
    }
}


export default EmployeesList;