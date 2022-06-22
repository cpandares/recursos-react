import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const imagesSlides = [
  {
    src: "https://res.cloudinary.com/cpandares/image/upload/v1619643351/jeevwz6adi9xnbw7nwmo.jpg",
    caption: "computer",
  },
  {
    src: "https://res.cloudinary.com/cpandares/image/upload/v1619643285/jddbldrfaxsyvtpaimqw.jpg",
    caption: "car",
  },
  {
    src: "https://res.cloudinary.com/cpandares/image/upload/v1619727920/yehgedl6w8eiomtaccan.jpg",
    caption: "waves",
  },
  {
    src: "https://res.cloudinary.com/cpandares/image/upload/v1619639864/ujljxubs6x63vnfaq56n.jpg",
    caption: "camera",
  },
];

const Slides = () => {
  return (
    <>
      <Slide autoplay transitionDuration={500}>
        {imagesSlides.map((img, index) => (
          <div key={index}>
            <div
              style={{ 
              height: "100vh", 
              backgroundImage: `url(${img.src})`, 
              backgroundRepeat: 'no-repeat',
              alignContent:'center'
            }}
            >
              <div
                style={{
                  padding: 20,
                  width: 200,
                  borderBottomRightRadius: "20px",
                  boxShadow: "4px 5px 0 rgba(0,0,0,0.2)",
                  backgroundColor: "rgba(255,255,255, 0.8)",
                }}
              >
                {img.caption}
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </>
  );
};

export default Slides;
