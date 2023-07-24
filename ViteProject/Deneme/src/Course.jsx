function Course({id,content,title,price,deletingData}) {

    const handleDelete = () => {
        deletingData(id);
    }

    return (  
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{content}</p>
            <button onClick={handleDelete}>Sil</button>

        </div>
    );
}

export default Course;

