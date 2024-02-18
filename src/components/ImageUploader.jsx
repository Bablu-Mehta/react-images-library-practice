import React, { useState } from "react";
import ReactImageUploading from "react-images-uploading";

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 2;

  const handleChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div>
      <ReactImageUploading
        multiple
        value={images}
        onChange={handleChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div>
            <button onClick={onImageUpload} {...dragProps}>
              {isDragging ? "Please Drop here" : "Click here or drop here"}
            </button>

            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index}>
                <img src={image["data_url"]} alt="" width="200" />
                <div>
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
};

export default ImageUploader;
