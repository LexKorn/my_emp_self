import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.sass';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}/>
        )
    });

    if (elements.length) {
        return (
            <ul className="app-list list-group">
                {elements}
            </ul> 
        )
    } else {
        return (
            <h4>В списке нет ни одного сотрудника</h4>
        )
    }
}

export default EmployeesList;