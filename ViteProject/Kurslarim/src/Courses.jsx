import Course from "./Course";

function Courses({tasks,data}) {
    return (  
        <div>
            <h2>Kurslarim</h2>
            {
                tasks.map((value,index) => {
                    return <Course key={index} {...value} data={data}/>
                })
            }

        </div>
    );
}

export default Courses;


