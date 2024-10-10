import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' mt-1'>
      <nav className='p-2 flex flex-row justify-between  h-[60px] items-center max-w-[1126px] mx-auto  mx-[70px]  '>
        {/* logo */}
        <div className='flex items-center gap-4 font-semibold'>
            <img src='https://image1.jdomni.in/storeLogo/12052022/5F/E7/54/8662A4EEB7A5806015F6715A68_1652354952903.png?output-format=webp' 
            className='w-[160px] h-[50px]' alt='logo'/>
            {/* <h2>Tilak Namkeen</h2> */}
        </div>

        {/* Route */}
        <div className='  '>
        <ul className='flex flex-row items-center justify-center gap-3 text-[14px]'>
          <Link to='/' ><li>HOME</li></Link>
          <Link to='/namkeen' ><li>NUMKEEN</li></Link>
          <Link to='/product' ><li>PRODUCTS</li></Link>
          <Link to='/about' ><li>ABOUT US</li></Link>
          <Link to='/contact' ><li>CONTACT US</li></Link>
           
           
        </ul>
        </div>

      <div className='flex gap-3'>
        <div className='flex items-center search-design'>
        <input type='text' placeholder='Search' maxLength='35' className=''/>
        <IoSearchOutline />

        </div>
      <HiOutlineShoppingBag size={28} />
      </div>
    
      </nav>
    </div>
  )
}

export default Navbar
