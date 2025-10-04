import React from 'react';

const Book = ({data}) => {
     console.log(data)
     const {image}=data;
     
    return (
    <div className='md:w-[300px] md:h-[440px] border-1 border-gray-100 p-5  rounded-xl'>
        <div className='bg-gray-200  md:w-[250px] md:h-[250px] flex justify-center items-center rounded-xl'>
            <img className='md:w-[130px] md:h-[160px] w-[80px] h-[150px]' src={image} alt="" />
        </div>
        <div cl className='flex gap-5 mt-2 mb-2'>
            <h1 className='text-[#39ab09] font-semibold'>Young Adult</h1>
            <h1 className='text-[#39ab09] font-semibold'>Identity</h1>
        </div>
        <div className='border-b-1 border-gray-200'>
            <h1 className='font-serif md:text-2xl mb-2'>The Catcher in the Rye</h1>
            <p className='font-serif mb-2'>By : Awlad Hossain</p>
        </div>
        <div className='flex justify-between items-center mt-3'>
            <h1 className='font-semibold'>Ficton</h1>
            <div className='flex gap-2'>
              <h1 className='font-semibold'>5.00</h1>
              <p>⭐</p>
            </div>
        </div>
   </div>
        
    );
};

export default Book;