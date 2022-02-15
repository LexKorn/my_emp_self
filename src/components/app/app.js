import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [
        {name: 'Ivan Ivanov', salary: 800, increase: false, like: false, id:1},
        {name: 'Jonh Smith', salary: 1500, increase: false, like: false, id:2},
        {name: 'Petr Petrov', salary: 2500, increase: true, like: false, id:3}
      ]
    }
    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({db}) => {
      return {
        db: db.filter(item => item.id !== id)
      }
    })    
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++
    }

    this.setState(({db}) => {
      const newArr = db.concat(newItem);
      // const newArr = [...db, newItem];
      return {
        db: newArr
      }
    })
  }


  render() {
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList 
          data={this.state.db}
          onDelete={this.deleteItem}/>
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }  
}

export default App;