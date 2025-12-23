import {useState } from "react";

function ImageGallery({ images }) {
    const [mainImage, setMainImage] = useState(0);

    return (
        <div className="gallery">
            <img className="main-image" src={images[mainImage]} alt="Property" />
            <div className="thumbnails">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Thumbnail"
                        onClick={()=> setMainImage(img)}
                        />
                ))}
            </div>
        </div>
    );
    }
export default ImageGallery;