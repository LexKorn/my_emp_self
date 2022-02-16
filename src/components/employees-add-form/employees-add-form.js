import {Component} from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })        
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, salary} = this.state;

        if (name === '' || name.length < 3 || salary === '' || salary.length < 3 ) {
            alert('Wrong input! Try again!')
        } else {
            this.props.onAdd(name, salary);
            this.setState({
                name: '',
                salary: ''
            })
        }  
    }

    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Enter employee" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Enter salary" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>        
        )
    }
}

export default EmployeesAddForm;