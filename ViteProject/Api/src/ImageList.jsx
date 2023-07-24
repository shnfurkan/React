import ImageItem from "./ImageItem";

function ImageList({newValue}) {
    return (
        
        <div>
            {
                newValue.map(
                    (value,index) => {
                        return <ImageItem key={index} value={value}/>
                    }
                )
            }
        </div>
    );
}

export default ImageList;

