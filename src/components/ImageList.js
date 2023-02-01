function ImageList({ images }) {
  const imagesHTML = images.map((image, index) => ( //use nanoid instead of index
    <div key={index}>
      <img src={image.src} alt={image.caption}></img>
      <p>{image.caption}</p>
    </div>
  )
  );
  return (
    <div className="image-list-container">
      {imagesHTML}
    </div>
  )
}

export default ImageList;
