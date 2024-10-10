import React from 'react'

const Category = () => {

    const Image =[
        {
        imgsrc :"https://image3.jdomni.in/banner/26082021/2C/81/3F/63A0B2985A90E1BE8D6BD6FB6F_1629988229951.jpg?output-format=webp",
        text:"Mathri",
        },
        {
            imgsrc:"https://image3.jdomni.in/banner/09102020/AB/54/A4/D3A3445AD0BD0668CA14BC4B3F_1602248621170.png?output-format=webp",
            text:"Mix Farsan",
        },
        {
            imgsrc:"https://image3.jdomni.in/banner/10082022/D1/6E/55/7E925F316C358FF214AFF65BA5_1660115135053.jpg?output-format=webp",
            text:"Banana Wafers",
        },
        {
            imgsrc:"https://image3.jdomni.in/banner/10082022/57/4D/65/8B325539E26379A1FE649C11E8_1660115689241.png?output-format=webp",
            text:"Potato Wafers",
        },
        {
            imgsrc:"https://image3.jdomni.in/banner/10082022/A3/9B/ED/5989D00EDD6D20FF2089DAA41F_1660115399938.jpg?output-format=webp",
            text:"Chivda",
        },
        {
            imgsrc:"https://image3.jdomni.in/banner/10082022/D3/8C/E6/820B239DCCA9B2383DE3F757A3_1660115460624.jpg?output-format=webp",
            text:"Bhakarwadi",
        },
        {
            imgsrc:"https://image2.jdomni.in/banner/10082022/39/A6/85/6E255CCA45B85CCA00313459E1_1660115630825.jpg?output-format=webp",
            text:"Khakhra",
        },
        {
            imgsrc:"https://image3.jdomni.in/banner/25082021/1F/C3/EA/F5BC4706B27945D71E9F6A954B_1629914306853.png?output-format=webp",
            text:"Chakli",
        },
    ]

  return (
    <div className='max-w-[1126px] mx-auto'>
      <div className='flex flex-col justify-center items-center mt-6'>
        <h1 className='text-3xl font-bold'>Our Categories</h1>
        <h2 className='font-semibold mt-2'>More Food...More Variety...More Fun</h2>
      </div>

      {/* images */}
      <div className='grid grid-cols-4 grid-rows-2 gap-4 w-11/12 mx-auto mt-[25px] gap-y-11 '>   
        {

            Image.map((ele) =>{
                return (

                    <div className='flex flex-col justify-center items-center  '>
                    <img src={ele.imgsrc} className='w-[228] h-[228px] rounded-xl'/>
                    <p className='text-2xl mt-2'>{ele.text}</p>
                </div>
                )
            })
        }
       
        {/* image div end */}
      </div>
    </div>
  )
}

export default Category
