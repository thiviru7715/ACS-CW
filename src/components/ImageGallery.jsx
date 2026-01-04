import { useState } from "react";

// Component to display a main image and a strip of thumbnails
function ImageGallery({ images }) {
    const [mainImage, setMainImage] = useState(0);

    return (
        <div className="gallery">
            {/* Display the currently selected image based on the state index */}
            <img className="main-image" src={images[mainImage]} alt="Property" />
            <div className="thumbnails">
                {/* Map through the images array to generate thumbnail images */}
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Thumbnail"
                        // When a thumbnail is clicked, update the state to show this image as main
                        onClick={() => setMainImage(index)}
                    />
                ))}
            </div>
        </div>
    );
}
export default ImageGallery;