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
                {id: 1, name: 'John C.', salary: 900, increase: false, like: false},
                {id: 2, name: 'Mark A.', salary: 1900, increase: false, like: false},
                {id: 3, name: 'Jo C.', salary: 1900, increase: false, like: false},
                // {id: 4, name: 'Jack C.', salary: 1900, increase: false, like: false},
            ],
            term: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
            data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
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
        this.setState({term: term})
    }

    render() {

        const {data, term} = this.state;
        const headcount = this.state.data.length;
        const bonus = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term)

        return (
            <div className='app'>
                soft by_react
                <AppInfo
                    headcount={headcount}
                    bonus={bonus}
                />
                <div className='search-panel'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter/>
                    <EmployeesList
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onToggleIncrease={this.onToggleIncrease}
                        onToggleRise={this.onToggleRise}
                    />
                </div>
                <EmployeesAddForm/>
            </div>
        )
    }
}

export default App;