import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addTostore } from "../Utility/getdata";

const About = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singledata = data.find((book) => book.bookId == id);


  const markread =(id)=>{
      addTostore(id);
  }

  return (
    <div className="md:flex justify-center items-center container mx-auto p-5 gap-5 ">
      <div className="md:h-[650px] md:w-[500px] bg-gray-300  p-10 flex justify-center items-center rounded-2xl">
        <img
          className="md:h-[450px] md:w-[350px] h-auto w-auto"
          src={singledata.image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold font-serif">{singledata.bookName}</h1>
        <p className="font-semibold my-2">By: {singledata.author}</p>
        <hr />
        <h1 className="font-semibold my-2">{singledata.category}</h1>
        <hr />

        <p className="text-justify my-2">
          <span className="font-bold">Review: </span>
          {singledata.review}
        </p>
        <p className="flex items-center flex-wrap">
          <span className="font-bold my-2">Tag:</span>
          <span className="flex gap-3">
            {singledata.tags.map((tag) => (
              <span key={tag} className="text-[#38ab60] ml-2">
                {tag}
              </span>
            ))}
          </span>
        </p>
           <hr />
        <div className="my-4">
         
          <p>Pages:  <span className="font-bold">{singledata.totalPages}</span></p>
          <p>Publisher:  <span className="font-bold">{singledata.publisher}</span></p>
          <p>Year Of Publishing:  <span className="font-bold">{singledata.yearOfPublishing}</span></p>
          <p>Rating:  <span className="font-bold">{singledata.rating}</span></p>
        </div>
        <hr />
        <div className="mt-4">
          <button onClick={()=>markread(id)} className="btn btn-soft mr-5">Mark As Read</button>
          <button className="btn bg-[#6ab2bd]"> Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default About;
