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
        this.props.onPr(this.state.project);
        this.setState({
            project: ''

        })
    }

    render() {
        const {quantity, data, addProject} = this.props
        return (
            <div className="app-info">
                <h1>Department: {this.state.dep} </h1>
                <h2>projects: {quantity} <br/>
                </h2>
                <MainProjects data={data}/>
                <form className="add-form d-flex">
                    <input
                        type="text"
                        onChange={this.onInputValue}
                        value={this.state.project}
                        name='name'
                        placeholder='main project'

                    />
                    <button
                        type="submit"
                        className="btn btn-outline-light"
                        onClick={addProject}
                    >add</button>

                </form>

            </div>
        )
    }
}

export default Who;