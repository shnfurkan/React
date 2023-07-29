import {Link,Outlet} from 'react-router-dom'

function AltComponent() {
    return (  
        <>
        <nav>
            <Link to='Team1'>Team1</Link> <br></br>
            <Link to='Team2'>Team2</Link>
        </nav>
        <Outlet/>
        </>
    );
}

export default AltComponent;