import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Books from './Books';

const Home = () => {
    const [allbooks,setallbooks]=useState();

    useEffect(()=>{
        fetch('/public/booksData.json') 
        .then(res=>res.json())
        .then(data=>setallbooks(data))
    },[])
    console.log(allbooks)
    return (
        <div>
           <Banner></Banner>
           <Books></Books>
        </div>
    );
};

export default Home;