import {Button} from "@mui/material"
import AnimationIcon from '@mui/icons-material/Animation';
import CommentIcon from '@mui/icons-material/Comment';

function ShowTask({id,inputValue,textArea,deletingData}) {

    const handleClickDelete = () => {
        deletingData(id);
    }

    return (
        <div className="newNotes">
            <h2 className="notes">
                <AnimationIcon fontSize="small"/>
                Title</h2>
            <p>{inputValue}</p>
            <h2 className="notes">
                <CommentIcon fontSize="small"/>
                Notes</h2>
            <p>{textArea}</p>
            <Button color="error" onClick={handleClickDelete}>Delete</Button>
        </div>
    );
}

export default ShowTask;
