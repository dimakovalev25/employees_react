import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {Component} from "react";



class Who extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dep: "Marketing",
            projects: 47,
            mainProject: ''

        }
    }

    addProject = () => {
        this.setState({
            projects: this.state.projects + 1
        })
    }

    mainProject = (e) => {
        this.setState({
            mainProject: e.target.value
        })
    }

    render() {
        const {name, subname} = this.props
        return (
            <div className="app-info">
                <h1>Department: {this.state.dep} </h1>
                <h1>boss: {name} {subname}</h1>
                <h2>projects: {this.state.projects} <br/>

                </h2>
                <button className="btn btn-light" onClick={this.addProject}>add project</button> <br/>
                <h2>
                    main project: {this.state.mainProject}
                </h2>
                <input
                    type="text"
                    placeholder='main project'
                    onChange={this.mainProject}
                />
            </div>
        )
    }
}

function App() {
    const data = [
        {id: 1,increase: true, rise: true, name: 'Jo', salary: 800},
        {id: 2,increase: false, rise: true, name: 'John', salary: 1800},
        {id: 3,increase: false, rise: true, name: 'Jack', salary: 3800},
        {id: 4,increase: false, rise: true, name: 'Jan', salary: 700},
    ];

  return (
    <div className="app">

        <Who name="Garry" subname="Green" />
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
