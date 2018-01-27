
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
// import Routers from './components/routers'
// import routes from './components/routers'

import Routes from './components/routers';

// Render the main component into the dom
// ReactDOM.render(<App >
//                 {/* <Routes/> */}
//                 <div>dd</div>
//             </App>
//     , document.getElementById('app'));

ReactDOM.render(
    <Routes/>
    // <App/>
,document.getElementById('app'))