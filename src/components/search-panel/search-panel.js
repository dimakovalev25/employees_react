import './search-panel.css';
import {Component} from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdate = (e) => {
        const term = e.target.value;
        this.setState({

            term: term
        })
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="find employee"
                   value={this.state.term}
                   onChange={this.onUpdate}
            />
        )
    }
}

export default SearchPanel;