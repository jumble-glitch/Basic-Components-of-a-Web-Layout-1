import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PercentageLoader from './PercentageLoader';


ReactDOM.render (<React.StrictMode>
    <div className="loaderContainer">
        <PercentageLoader valueEnd={75}
            title="CSS"
            pathColor="#66C05C"/>
            <PercentageLoader valueEnd={80}
            title="JS"
            pathColor="#66C05C"/>
            <PercentageLoader valueEnd={70}
            title="React"
            pathColor="#66C05C"/>
    </div>

</React.StrictMode>, document.getElementById('root'));
