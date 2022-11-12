import './app-info.css';
import {Component} from "react";

class AppInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: 1,
            mainTask: ''
        }

    }

    addTask = () => {
        this.setState({
            task: this.state.task +1
        })
    }

    commitInput = (e) => {
        // console.log(e.target.value)
        this.setState({
            mainTask: e.target.value
        })
    }

    render() {
        return (
            <div className='app-info'>
                <h1>employees records:
                </h1>
                <h2>headcount:</h2>
                <h2>give out a bonus:</h2>
                <h2>task: {this.state.task}</h2>
                <button
                    onClick={this.addTask}
                    className="btn btn-outline-light">add task</button>
                <span></span>
                <h2>main task: {this.state.mainTask}</h2>

                <input
                    type="text"
                    // onChange={this.commitInput}
                    onInput={this.commitInput}
                    className='form-control new-post-label input-head'
                />
            </div>
        )
    }
}

export default AppInfo;