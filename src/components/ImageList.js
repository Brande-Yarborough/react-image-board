function ImageList({ images }) {
  const imagesHTML = images.map((image) => (
    <div>
      <img src={image.src}></img>
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
