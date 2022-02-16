import './app-info.css';

const AppInfo = ({employees, increased}) => {

    return (
        <div className="app-info">
            <h1>Table of employees of company N</h1>
            <h2>Total amount of employees: {employees} </h2>
            <h2>Will get cookies: {increased} </h2>
        </div>
    )    
}

export default AppInfo;