import { useState } from "react";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

const INITIAL_IMAGES = [
  { id:1,
    src: "https://www.globeguide.ca/wp-content/uploads/2020/07/Washington-Olymipc-national-park-beach.jpg",
    caption: "Olympic National Park Beach, Washington",
  },
  { id: 2,
    src: "https://www.doi.gov/sites/doi.gov/files/styles/social_media_1200x627/public/blog-post/thumbnail-images/glaciernpshanlin.jpg?itok=BlwMSQH5",
    caption: "Glacier National Park, Montana",
  },
  { id: 3,
    src: "https://media.cntraveler.com/photos/56c4b2bc5464a8041fd7b883/16:9/w_1280,c_limit/more-than-just-parks-cr.jpg",
    caption: "Zion National Park, Utah",
  },
];

function ImageBoard() {
  const [images, setImages] = useState(INITIAL_IMAGES); //set initial value of images to be this array of objects, Images method to update value when we want

  const addImage = (src, caption) => {
    //addImage method when called, takes image and adds to array
    const newImage = {src, caption}
    setImages([...images, newImage]); //spread out current value of images, then add this new image to update value of images
  };

  return (
    <div>
      <h1>Brande's Image Board</h1>
      <ImageForm addImage={addImage}/>
      <ImageList images={images}/>
    </div>
  );
}

export default ImageBoard;
