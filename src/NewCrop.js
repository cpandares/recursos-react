import CropViewer from "rc-cropping";
import Dialog from "rc-dialog";
import Uploader from "rc-upload";
import "rc-cropping/assets/index.css";
import "rc-dialog/assets/index.css";

const NewCrop = () => {
  const openUpload = (e) => {
    console.log(e)
  };
  return (
    <>
    
    {/* 
      <CropViewer
        getSpinContent={() => <span>loading...</span>}
        renderModal={() => <Dialog  />}
        id="upload"
        onChange= { openUpload }
        
      /> */}

      <Uploader > Send</Uploader>
        
     
    </>
  );
};

export default NewCrop;
