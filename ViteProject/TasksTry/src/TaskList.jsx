import TaskShow from "./TaskShow";

function TaskList({tasks, deletedData}) {
    return (  
        <div>
            {
                tasks.map((value,index)=> {
                    return <TaskShow key={index} value={value} deletedData={deletedData}/>
                })
            }
        </div>
    );
}

export default TaskList;
