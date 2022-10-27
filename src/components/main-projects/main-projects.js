import {Component} from "react";

class MainProjects extends Component {
    render() {
        let {data} = this.props;

        const projectItem = data.map(item => {
            return (
                <div key={item.id}>
                    {item.project}
                </div>
            )
        })

        return (
            <div>
                <h3>
                    list projects:

                </h3>
                <h4>
                    {projectItem}
                </h4>
            </div>
        )
    }
}

export default MainProjects;
