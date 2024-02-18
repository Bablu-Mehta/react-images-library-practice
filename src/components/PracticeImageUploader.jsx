import React, { useState } from "react";
import ReactImageUploading from "react-images-uploading";

const PracticeImageUploader = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 3;

  const handleChange = (imageList, index) => {
    console.log(imageList);
    console.log(index);
    setImages(imageList);
  };
  
  return (
    <ReactImageUploading
      value={images}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      multiple
      onChange={handleChange}
    >
      {({
        imageList,
        onImageRemove,
        onImageUpload,
        onImageUpdate,
        onImageRemoveAll,
        dragProps,
      }) => (
        <div>
          <button onClick={onImageUpload} {...dragProps}>
            click or drag you image
          </button>
          <button onClick={onImageRemoveAll}>Remove All Images</button>
          {imageList.map((image, index) => (
            <div>
              <img
                src={image["data_url"]}
                style={{ width: "200px", borderRadius: "50%" }}
              />
              <button onClick={() => onImageUpdate(index)}>update image</button>
              <button onClick={() => onImageRemove(index)}>Remove image</button>
            </div>
          ))}
        </div>
      )}
    </ReactImageUploading>
  );
};

export default PracticeImageUploader;
