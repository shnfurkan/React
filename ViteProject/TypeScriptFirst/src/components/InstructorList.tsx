import {List} from "./Types"

function InstructorList(proops:List) {
    return (  
        <div>
            {proops.newList.map((item,key) => {
                return (
                    <p key={key}> {item.firstName} and {item.lastName}</p>
                )
            })}
        </div>
    );
}
export default InstructorList;
