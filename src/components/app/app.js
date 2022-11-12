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
                {id: 1, name: 'John C.', salary: 900, like: false, increase: false},
                {id: 2, name: 'Mark A.', salary: 190, like: false, increase: false},
                {id: 3, name: 'Jo C.', salary: 1900, like: false, increase: false},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
           data: data.map(item => {
               if (item.id === id) {
                   return {...item, increase: !item.increase}
               }
               return item
           })
        }))
    }

    onToggleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item
            })
        }))
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId +1
        }
        this.setState(({data}) => {
            const newData = [newItem, ...data];
            return {
                data: newData
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return  item.name.indexOf(term) > -1
        })

    }

    onUpdateSearch = (term) => {
        this.setState({
          term: term
        })
    }

    // filterSalary = () => {
    //     // console.log('filter')
    //     this.setState(({data}) => {
    //         return {
    //             data: data.filter(item => item.salary > 1000)
    //         }
    //     })
    // }
    //
    // filterEncrease = () => {
    //     this.setState(({data}) => {
    //         return {
    //             data: data.filter(item => item.increase)
    //         }
    //     })
    // }
    //
    // filterAll = () => {
    //
    //     this.setState(({data}) => {
    //         const newData = [...data]
    //         return {
    //             data: newData
    //         }
    //     })
    // }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'more1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {

        const {data, term, filter} = this.state;
        const numberOfWorkes = this.state.data.length;
        const numberOfLike = this.state.data.filter(item => item.like === true).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                by_react
                <AppInfo
                    numberOfWorkes={numberOfWorkes}
                    numberOfLike={numberOfLike}
                />
                <div className='search-panel'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        onFilterSelect={this.onFilterSelect}
                    />
                    <EmployeesList
                        onDelete={this.deleteItem}
                        data={visibleData}
                        onToggleIncrease={this.onToggleIncrease}
                        onToggleLike={this.onToggleLike}

                    />
                    <EmployeesAddForm
                    onAddItem={this.addItem}
                    />
                </div>
            </div>
        )
    }
}

export default App;