import {useState } from "react";

function ImageGaller({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="gallery">
            <img className="main-image" src="main-image.jpg" alt="Property" />
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