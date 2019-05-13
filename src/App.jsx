import React from 'react';
import '../node_modules/primereact/resources/themes/nova-light/theme.css';
import './main.css';

const App = ({ children }) => {
    return <main className="app">{children}</main>;
};

export default App;
