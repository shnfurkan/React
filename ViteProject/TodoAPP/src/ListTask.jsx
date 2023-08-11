import ShowTask from "./ShowTask";

function ListTask({tasks,deletingData}) {
    return (  
        <div>
            {
                tasks.map((item,index)=> {
                    return <ShowTask key={index} {...item} deletingData={deletingData}/>
                })
            }
        </div>
    );
}

export default ListTask;

