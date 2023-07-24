function Course({id,content,title,price,data}) {

    const handleDelete = () => {
        data(id);
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


