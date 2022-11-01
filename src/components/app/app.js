import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


function App() {
    const data = [
        {id: 1, name: 'John C.', salary: 900, increase: false},
        {id: 2, name: 'Mark A.', salary: 1900, increase: false},
        {id: 3, name: 'Jo C.', salary: 1900, increase: false},

    ];

    return (
        <div className='app'>
            soft by_react
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
                <EmployeesList data={data}/>
            </div>
                <EmployeesAddForm/>
        </div>
    )
}

export default App;