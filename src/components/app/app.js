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
                {id: 1, increase: false, rise: false, name: 'Jo', salary: 800},
                {id: 2, increase: false, rise: false, name: 'John', salary: 1800},
                {id: 3, increase: false, rise: false, name: 'Jack', salary: 3800},
                {id: 4, increase: false, rise: false, name: 'Jan', salary: 700}
            ],
            projects: [
                {id:1, project: 'line Green'},
                {id:2, project: 'line Red'},
            ],
            term: '',
            filter: 'all'
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

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);
    //
    //         const old = data[index];
    //         const newItem = {...old, increase: !old.increase }
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1) ];
    //
    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    onToggleIncrease = (id) => {

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterSalary = (data) => {
        this.setState({
            data: this.state.data.filter(item => item.salary > 1000)
        })
    }

    // filterSalary = () => {
    //     console.log('!')
    // }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'more1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }


    render() {
        const quantity = this.state.projects.length;
        const quantityEmpl = this.state.data.length;
        const quantityRise = this.state.data.filter(item => item.rise === true).length
        const visibleData = this.filterPost(this.searchEmp(this.state.data, this.state.term), this.state.filter);

        return (
            <div className="app">
                <Who
                    data={this.state.projects}
                    onAdd={this.addProject}
                    quantity={quantity}
                />
                <AppInfo
                    quantityEmpl={quantityEmpl}
                    quantityRise={quantityRise}
                />


                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        // filterSalary={this.filterSalary}
                        filter={this.state.filter}
                        onFilterSelect={this.onFilterSelect}

                    />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}

                />
                <EmployeesAddForm
                    onAdd={this.addItem}

                />
            </div>
        );
    }
}

export default App;
