import { useState } from "react";
import { Form } from "react-bootstrap";
import { nanoid } from "nanoid";

function ImageForm({ addImage }) {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //stops submit button from refreshing page when not wanted

    const image = {
      id: nanoid(),
      image,
    };

    addImage(url, caption);
    setUrl(""); //to empty out value after you have set it to clear it out
    setCaption("");
  };
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  return (
    // <div className="dropdown-menu">
    <form onSubmit={handleSubmit} className="px-4 py-3">
      <div className="mb-3">
        <label htmlFor="exampleDropdownFormUrl"></label>
        <input
          onChange={handleUrlChange}
          value={url}
          type="url"
          className="form-control"
          id="exampleDropdownFormUrl"
          placeholder="Image URL"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleDropdownFormCaption"></label>
        <input
          onChange={handleCaptionChange}
          value={caption}
          type="text"
          className="form-control"
          id="exampleDropdownFormCaption"
          placeholder="Image Caption"
        />
      </div>
      <button type="button" className="btn btn-primary">
        Cancel
      </button>
      <button type="submit" className="btn btn-primary">
        Add image
      </button>
    </form>
    // </div>
  );
}

export default ImageForm;
