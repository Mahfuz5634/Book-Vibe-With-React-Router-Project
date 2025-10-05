import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Reaslist = () => {
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
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Reaslist;