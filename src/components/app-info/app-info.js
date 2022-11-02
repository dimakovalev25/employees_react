import './app-info.css';

const AppInfo = ({headcount, bonus}) => {
    return (
        <div className='app-info'>
            <h1>employees records</h1>
            <h2>headcount: {headcount}</h2>
            <h2>give out a bonus: {bonus}</h2>
        </div>
    )
};

export default AppInfo;