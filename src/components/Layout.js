import React from 'react';
import '../theme.css'

function Layout(props) {
    return (
        <div className="container">
            <div className="cycle"><div className="cycle small-cycle"/></div>
            <div className="children">{props.children}</div>
        </div>
    );
}

export default Layout;
