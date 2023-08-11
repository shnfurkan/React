import {} from "./App.css"
import AssignmentIcon from '@mui/icons-material/Assignment';

function Header() {
    return (  
        <header className="title">
            <h1>
            <AssignmentIcon/> {" "}
            ToDo Project
            </h1>
        </header>
    );
}

export default Header;
