import TaskShow from "./TaskShow";

function TaskList({tasks, deletedData,newData}) {
    return (  
        <div>
            {
                tasks.map((value,index)=> {
                    return <TaskShow key={index} value={value} deletedData={deletedData} onNewUpdate={newData}/>
                })
            }
        </div>
    );
}

export default TaskList;


