

import 'rc-dialog/assets/index.css';
import 'rc-cropping/assets/index.css';
import CropViewer from 'rc-cropping';
import Dialog from 'rc-dialog';
import Upload from 'rc-upload';



/* const  beforeUpload = (file)=> {
      const cropper = this.cropper;
      console.log('>> cropper', this.cropper);
      return cropper.selectImage(file).then(image => {
        console.log('>> selecTImage', image);
        return image;
      });
  } */
const CropFrag = () => {


    return (
        <div>
      {/*   <Upload type="drag" beforeUpload={ beforeUpload } ><a>开始上传</a></Upload> */}
        <CropViewer
          getSpinContent={() => <span>loading...</span> }
          renderModal={() => <Dialog />}
          locale="zh-CN"
          ref={ele => cropper = ele} 
          circle
        />
      </div>
    );
};

export default CropFrag;