import {Component} from "react";
import MainProjects from "../main-projects/main-projects";

class Who extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dep: "Marketing",
            project: ''
        }
    }

    onInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.project);
        this.setState({
            project: '',
        })
    }

    render() {
        const {quantity, data, addProject} = this.props
        return (
            <div className="app-info">
                <form
                    onSubmit = {this.onSubmit}>
                >
                    <h1>Department: {this.state.dep} </h1>
                    <h2>projects: {quantity} <br/>
                        main project: <br/>
                        {this.state.project}
                    </h2>
                    <MainProjects data={data}/>
                    <input
                        type="text"
                        name='project'
                        value={this.state.project}
                        placeholder='main project'
                        onChange={this.onInputValue}

                    />
                    <button
                        type="submit"
                        className="btn btn-outline-light"
                        onClick={addProject}
                    >add
                    </button>
                </form>
            </div>
        )
    }
}

export default Who;