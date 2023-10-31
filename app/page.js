"use client";
import "./globals.css";
import React, { useState } from "react";
import axios from "axios";

export const page = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    const data = response.data;
    setImages(data);
  };
  return (
    <div>
      <>
        <button
          type="button"
          onClick={getImages}
          className="px-5 py-3 bg-green-800 text-white transition duration-100 hover:scale-125"
        >
          Get Images
        </button>
        <div className="p-10">
          {Images.map((elem, i) => {
            return (
              <img
                key={i}
                src={elem.download_url}
                width={300}
                height={300}
                className="m-10 rounded inline-block transition duration-100 hover:scale-125"
              />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default page;
