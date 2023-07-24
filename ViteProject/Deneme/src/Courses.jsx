import Course from "./Course";

function Courses({family,deletingData}) {
    return (  
        <div>
            <h2>Aile Tablosu</h2>
            {
                family.map(
                    (value,index) => {
                        return <Course key={index} {...value} deletingData={deletingData}/>
                    }
                )
            }
        </div>
    );
}

export default Courses;

