import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';
// the root DOM element in which react will appear
const root = document.getElementById('root');
// main app
const App = () => <div className='container-fluid'>
    <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Movie List Application</h1>
    </nav>
    <List />
</div>;
// rendering
ReactDOM.render(<App />, root);