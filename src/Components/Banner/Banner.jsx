import React from 'react';
import heroimg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex justify-center items-center gap-10 mt-5 bg-gray-200 p-12 rounded-xl'>
            <div >
                <h1 className='text-5xl mb-10  font-serif'>Books to freshen up <br></br> your bookshelf</h1>
                 <a className="btn bg-[#39ab09] text-white">View The List</a>
            </div>
            <div >
                 <figure>
                    <img  className='h-[300px] w-[280px]' src={heroimg} alt="" />
                 </figure>
            </div>
        </div>
    );
};

export default Banner;