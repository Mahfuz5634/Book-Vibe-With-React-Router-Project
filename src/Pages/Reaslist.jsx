import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStorebook } from '../Utility/getdata';
import BookCard from './BookCard';

const Reaslist = () => {
     const data=useLoaderData();
     const [readdata,setreaddata]=useState([]);
    useEffect(()=>{
       const bookdata=getStorebook();
       const convertbookdata=bookdata.map(id=>parseInt(id));
       const readlist=data.filter(data=>convertbookdata.includes(data.bookId))
       setreaddata(readlist);
    },[])

    return (
        <div className=''>
           <div className='p-5 my-4 bg-gray-300 rounded-2xl'>
             <h1 className='text-center text-2xl font-semibold'>Books</h1>
           </div>
             <Tabs>
    <TabList>
      <Tab ><span className='font-semibold opacity-90'>Read Books</span></Tab>
       <Tab ><span className='font-semibold opacity-90'>WishList Books</span></Tab>
    </TabList>

    <TabPanel>
      <div className='grid grid-cols-1 gap-5 my-5'>
        {
        readdata.map((book,index)=><BookCard key={index}  book={book}></BookCard>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-center my-10 text-3xl'>Working On it</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Reaslist;