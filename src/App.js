import { useState } from "react";
import "./App.css";
import Form from "./components/Form";


const INITIAL_IMAGES = [
  { src: "https://www.globeguide.ca/wp-content/uploads/2020/07/Washington-Olymipc-national-park-beach.jpg", caption:"Olympic National Park Beach, Washington"},
  { src: "https://www.doi.gov/sites/doi.gov/files/styles/social_media_1200x627/public/blog-post/thumbnail-images/glaciernpshanlin.jpg?itok=BlwMSQH5", caption: "Glacier National Park, Montana"},
  { src: "https://media.cntraveler.com/photos/56c4b2bc5464a8041fd7b883/16:9/w_1280,c_limit/more-than-just-parks-cr.jpg", caption: "Zion National Park, Utah"}
];

function App() {
  const [images, setImages] = useState(INITIAL_IMAGES); //set initial value of images to be this array of objects, Images method to update value when we want

  const imagesHTML = images.map((image) => ( //implied return fat arrow function
      <Image key={image.id} image={image} /> //calling instance of Image component
    )
  );

  const addImage = (image) => {
    //addImage method when called, takes image and adds to array
    setImages([...images, image]); //spread out current value of images, then add this new image to update value of images
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 offset-md-3 col-md-6">
          <Form addImage={addImage} />
          <div className="image-list">
            {imagesHTML}
            <button onClick={addImage}>Add image</button>
            </div>
        </div>
      </div>
    </div>
  );


  
  
  
  


}

export default App;
