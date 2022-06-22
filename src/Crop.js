import { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import ReactCrop from "react-image-crop";

const Crop = () => {


  const [srcImg, setSrcImg] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [result, setResult] = useState(null);

  const handleImage = async (event) => {
    setSrcImg(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
    console.log(srcImg)
  };

  const getCroppedImg = async () => {
    try {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      const base64Image = canvas.toDataURL("image/jpeg", 1);
      setResult(base64Image);
      console.log(result);
    } catch (e) {
      console.log("crop the image");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(result);
    
  };

  console.log(srcImg)
  return (
    <div className="container" fluid="md">
      <h5 className="header">React Image Crop</h5>
      <form onSubmit={ handleSubmit }>
        
        <div>
          <input type="file" accept="image/*" onChange={handleImage} />
        </div>

        <div>
          {srcImg && (
            <div>
              <ReactCrop
                style={{ maxWidth: "50%" }}
                src={ srcImg }
                onImageLoaded={ setImage } 
                crop={ crop }
                onChange={  setCrop }
              />
              <button className="cropButton" onClick={ getCroppedImg } >
                crop
              </button>
            </div>
          )}
          {result && (
            <div>
              <img src={ result } alt="cropped" />
            </div>
          )}
        </div>

        <button className="primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Crop;
