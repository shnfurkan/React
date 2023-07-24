
function ImageItem({value}) {
    return (  
        <div>
            <img src={value.urls.small} alt={value.alt_description}/>
        </div>
    );
}

export default ImageItem;

