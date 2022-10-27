import {Component} from "react";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import Who from "../department/department";

import './app.css';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, increase: true, rise: true, name: 'Jo', salary: 800},
                // {id: 2, increase: false, rise: true, name: 'John', salary: 1800},
                // {id: 3, increase: false, rise: true, name: 'Jack', salary: 3800},
                // {id: 4, increase: false, rise: true, name: 'Jan', salary: 700},
            ],
            projects: [
                {id:1, project: 'line Green'},
                {id:2, project: 'line Red'},
            ]
        }
            this.newId= 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addProject = (project) => {
        let newProject = {
            id: this.newId++,
            project
        }
        this.setState(({projects, data}) => {
            const newArr = [...projects, newProject]
            return {
                projects: newArr
            }
        })
    }

    addItem = (name, salary) => {
        let newData = {
            id: this.newId++,
            increase: false,
            rise: false,
            name,
            salary,
        }

        this.setState(({data}) => {
            const newArr = [...data, newData]
            return {
                data: newArr

            }
        });
    }

    render() {
        const quantity = this.state.projects.length;
        return (
            <div className="app">
                <Who
                    data={this.state.projects}
                    onAdd={this.addProject}
                    quantity={quantity}
                />
                <AppInfo/>


                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}

                />
            </div>
        );
    }
}

export default App;
