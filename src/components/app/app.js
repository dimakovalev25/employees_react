import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        {id: 1,increase: true, name: 'Jo', salary: 800},
        {id: 2,increase: false, name: 'John', salary: 1800},
        {id: 3,increase: false, name: 'Jack', salary: 3800},
        {id: 4,increase: false, name: 'Jan', salary: 700},
    ];

  return (
    <div className="app">
        <AppInfo />


        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
