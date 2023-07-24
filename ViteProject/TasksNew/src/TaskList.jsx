import TaskShow from "./TaskShow";

function TaskList({tasks, DeleteData, onUpdate}) {
    return (  
        <div>
            {
                tasks.map(
                    (dataShow,index) => {
                        return <TaskShow key={index} newData={dataShow} DeleteData={DeleteData} onUpdate={onUpdate}/>
                    }
                )
            }
        </div>
    );
}

export default TaskList;
