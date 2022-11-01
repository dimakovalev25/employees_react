import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'John C.', salary: 900, increase: false, like: true},
                {id: 2, name: 'Mark A.', salary: 1900, increase: false, like: true},
                {id: 3, name: 'Jo C.', salary: 1900, increase: false, like: true},
                // {id: 4, name: 'Jack C.', salary: 1900, increase: false, like: true},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
            data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className='app'>
                soft by_react
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                    <EmployeesList
                        data={this.state.data}
                        onDelete={this.deleteItem}
                    />
                </div>
                <EmployeesAddForm/>
            </div>
        )
    }
}

export default App;