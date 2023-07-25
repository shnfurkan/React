import { useParams } from "react-router-dom";

function MembersDetail() {

    const {dataItem} = useParams();

    return (  
        <div>
            MembersDetail: 
            {dataItem}
        </div>
    );
}
export default MembersDetail;
