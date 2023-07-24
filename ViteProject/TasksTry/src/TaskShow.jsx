
function TaskShow({value, deletedData}) {

    const handleDelete = () => {
        deletedData(value.id);
    }

    return (  
        <div>
            <h3>Göreviniz</h3>
            <p>{value.title}</p>
            <h3>Yapilacaklar</h3>
            <p>{value.text}</p>
            <button onClick={handleDelete}>Sil</button>
        </div>
    );
}

export default TaskShow;
