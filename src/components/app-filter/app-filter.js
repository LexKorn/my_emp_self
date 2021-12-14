import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                    Show all
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Will get cookies
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Salary more than 3000$
            </button>
        </div>
    )
}

export default AppFilter;