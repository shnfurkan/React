import {Data2} from "./Types"

function Instructor(proops:Data2) {
    return (  
        <div>
            {proops.newYapi.firstName} {' '}
            {proops.newYapi.lastName}
        </div>
    );
}

export default Instructor;


