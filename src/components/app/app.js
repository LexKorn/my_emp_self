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
      ],
      term: '',
      filter: 'all'
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

  searchEmp = (items, term) => {
      if (term.length === 0) {
        return items
      } else {
        return items.filter(item => {
          return item.name.indexOf(term) > -1;          
        });     
      }   
  }

  onUpdateSearch = (term) => {
    this.setState({term: term});  // более краткая запись ({term})
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case 'rise': 
        return items.filter(item => item.rise);
      case 'moreThan1000': 
        return items.filter(item => item.salary > 1000);
      default: 
        return items;
    }
  }

  onFilterSelect = (filter) => {     
    this.setState ({     
      filter: filter   // более краткая запись  this.setState ({filter})
    })
  }


  render() {
    const employees = this.state.db.length,
          increased = this.state.db.filter(item => item.increase).length,
          {db, term, filter} = this.state,
          visibleDB = this.filterPost(this.searchEmp(db, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
  
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter 
            onFilterSelect={this.onFilterSelect}
            filter={filter}/>
        </div>
  
        {/* <EmployeesList 
          data={visibleDB}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/> */}
        {/* <EmployeesAddForm onAdd={this.addItem}/> */}
      </div>
    );
  }  
}

export default App;