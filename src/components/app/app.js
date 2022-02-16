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
        {name: 'Ivan Ivanov', salary: 800, increase: false, rise: true, id:1},
        {name: 'Jonh Smith', salary: 1500, increase: false, rise: false, id:2},
        {name: 'Petr Petrov', salary: 2500, increase: true, rise: false, id:3}
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
      rise: false,    
      id: this.maxId++
    }

    this.setState(({db}) => {
      const newArr = db.concat(newItem);
      return {
        db: newArr
      }
    })
  }

  /*
  onToggleIncrease = (id) => {
    // this.setState(({db}) => {
    //   const index = db.findIndex(elem => elem.id === id),
    //         old = db[index],
    //         newItem = {...old, increase: !old.increase},
    //         newArr = [...db.slice(0, index), newItem, ...db.slice(index + 1)];

    //   return {
    //     db: newArr
    //   }
    // })

    this.setState(({db}) => ({
      db: db.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase};
        }
        return item;
      })
    }))
  }
  */

  onToggleProp = (id, prop) => {
    this.setState(({db}) => ({
      db: db.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]};
        }
        return item;
      })
    }))
  }


  render() {
    const employees = this.state.db.length,
          increased = this.state.db.filter(item => item.increase).length;

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList 
          data={this.state.db}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }  
}

export default App;