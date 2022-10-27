import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>add new employees</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="name" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="salary $?" />

                <button type="submit"
                        className="btn btn-outline-light">add</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;