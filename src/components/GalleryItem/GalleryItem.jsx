import './GalleryItem.css';

function GalleryItem(props) {
  
    return (
        <>
            <p>in GalleryItem</p>
            <img src={props.path} height={150} width={250}/>
            <p> </p>
            <p>{props.description} {props.likes}</p>
            <button>Like</button>
        </>
    ) // end return
} // end GalleryItem fn

export default GalleryItem;