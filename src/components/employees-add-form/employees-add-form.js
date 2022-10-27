import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }




    render() {
        let {addItem} = this.props;
        return (
            <div className="app-add-form">
                <h3>add new employees</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                           onChange={this.onInputValue}
                           value={this.state.name}
                           name='name'
                           className="form-control new-post-label"
                           placeholder="name"/>
                    <input type="number"
                           onChange={this.onInputValue}
                           value={this.state.salary}
                           name='salary'
                           className="form-control new-post-label"
                           placeholder="salary $?"/>

                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={addItem}>add
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;