import React, { Suspense } from 'react';
import Book from './Book';

const Books = ({bookdata}) => {
    return (
        <div className='m-5 '>
            <h1 className='text-3xl text-center font-semibold font-serif  mb-1'>Books</h1>
            <p className='text-center font-semibold mb-5'>Click on Books for more details</p>
            <div className='md:grid grid-cols-4 md:gap-5 container mx-auto'>
                <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                 {
                    bookdata.map((data,index)=><Book key={index} data={data}></Book>)
                 }
            </Suspense>
            </div>
        </div>
    );
};

export default Books;