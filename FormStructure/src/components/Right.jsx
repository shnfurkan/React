
function Right({mainInputs, handleChange}) {

    return (  
        <div className="Right">
            <h3>Right Platform Form</h3>
            <input onChange={handleChange} name="rightInput" value={mainInputs.rightInput}/> <br/> <br/>
            <input onChange={handleChange} name="rightInput2" value={mainInputs.rightInput2}/>
        </div>
    );
}

export default Right;

