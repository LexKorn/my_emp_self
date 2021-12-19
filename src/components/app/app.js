import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const db = [
    {name: 'Vasya Pupkin', salary: 1000, increase: false},
    {name: 'Jonh Smith', salary: 5000, increase: false},
    {name: 'Lex Korn', salary: 5000, increase: true},
    {name: 'Paul Vang', salary: 3500, increase: true}
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={db}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;