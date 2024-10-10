import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import 'swiper/css/bundle';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const Product = () => {
  const ProductList = [
    {
      imgsrc:
        "https://image1.jdomni.in/product/8E/0D/15/Mix-Farsan_1497539114677.jpg",
      text: "Mix Farsan",
      price: "₹80",
    },
    {
      imgsrc:
        "https://image1.jdomni.in/product/BD/DF/D6/Namkeen-Farsan_1497539177379.jpg",
      text: "Namkeen Gathiya",
      price: "₹70",
    },
    {
      imgsrc:
        "https://image1.jdomni.in/product/2C/40/85/Aloo-Wafers_1498041535288.jpg",
      text: "Aloo Wafers",
      price: "₹50",
    },
    {
      imgsrc:
        "https://image1.jdomni.in/product/35/DA/52/Banana-Wafers_1498041754401.jpg",
      text: "Banana Wafers",
      price: "₹50",
    },
    {
      imgsrc:
        "https://image1.jdomni.in/product/06/29/90/Namkeen_1498041876441.jpg",
      text: "Lemon Chivda",
      price: "₹90",
    },
    {
      imgsrc:
        "https://image1.jdomni.in/product/F8/2F/75/Gathiya_1498042008991.jpg ",
      text: "Gathiya Namkeen",
      price: "₹100",
    },
  ];

  return (
    <div className="flex flex-col max-w-[1126px] mx-auto">
      <h1 className="font-bold text-3xl flex justify-center mb-8 mt-5 ">
        Product
      </h1>
      <div className="w-3/4 m-auto">
        {/* Swiper Container */}
        <Swiper
        slidesPerView={5}
        spaceBetween={24}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Pagination]}
        className='w-full'
      >
        
 
    {      ProductList.map((ele, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded-xl border w-[192px] h-[192px]"
                src={ele.imgsrc}
                alt="items"
              />
              <h2>{ele.text}</h2>
              <h2 className="font-bold">{ele.price}</h2>
            </SwiperSlide>
          ))}
      </Swiper>


      </div>
    </div>
  );
};

export default Product;

          
