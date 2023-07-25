import {Link, Outlet} from 'react-router-dom'
import React from 'react';

function History() {
    return (  
        <>
        <div> History</div>
        <nav>
        <Link to="Team">Team</Link> <br></br>
        <Link to="Company">Company</Link> <br></br>
        </nav>
        <Outlet/>
        </>
    );
}

export default History;


