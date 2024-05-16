import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Banner = () => {
    const banners = [
        {
            _id : "0123",
            image:"https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/uploads/1530257544.jpg",
            title:"",
            desc:""
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
    return (
        <div className=" overflow-hidden">
            <Slider {...settings}>
                {banners.map(banner=><div className=" h-[70vh]" key={banner._id}>
                    <img className="w-full h-full" src={banner.image} alt="Bannar Image" />
                </div>)}
            </Slider>
        </div>
    )
}

export default Banner