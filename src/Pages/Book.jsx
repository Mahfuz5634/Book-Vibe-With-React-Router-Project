
import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link, Links, useNavigate } from 'react-router';
const Book = ({data}) => {
     const {image}=data;
     const navigate=useNavigate();
     const handle=()=>{
         navigate(`/about/${data.bookId}`)
     }
     
    return (
    <div onClick={handle} className='md:w-[300px] md:h-full border-1 shadow border-gray-100 p-5  rounded-xl'>
        <div className='bg-gray-200  md:w-[250px] md:h-[250px] flex justify-center items-center rounded-xl'>
            <img className='md:w-[130px] md:h-[160px] w-[80px] h-[150px]' src={image} alt="" />
        </div>
        <div cl className='flex gap-5 mt-2 mb-2'>
            <h1 className='text-[#39ab09] font-semibold'>{data.tags[0]}</h1>
            <h1 className='text-[#39ab09] font-semibold'>{data.category}</h1>
        </div>
        <div className='border-b-1 border-gray-200'>
            <h1 className='font-serif md:text-2xl mb-2'>{data.bookName}</h1>
            <p className='font-serif mb-2'>By : {data.author}</p>
        </div>
        <div className='flex justify-between items-center mt-3'>
            <h1 className='font-semibold'>Ficton</h1>
            <div className='flex justify-center items-center gap-2'>
              <h1 className='font-semibold'>{data.rating}</h1>
              <p><FaRegStarHalfStroke /></p>
            </div>
        </div>
   </div>
        
    );
};

export default Book;