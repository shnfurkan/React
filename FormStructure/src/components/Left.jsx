
function Left({mainInputs,handleChange}) {
    
    return (  
        <div className="Left">
            <h3>Left Platform Form</h3>
            <input onChange={handleChange} name="leftInput" value={mainInputs.leftInput}/> <br/> <br/>
            <input onChange={handleChange} name="leftInput2" value={mainInputs.leftInput2}/>
        </div>
    );
}

export default Left;

