import React from "react";
import Image from "./Image";
import Img from "../images/Img.png";

const Gallery: React.FC = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      <Image
        image={Img}
        title="Jaffa"
        selected={true}
        checked="yes"
        handleCheckImage={() => {}}
      />
      <Image
        image={Img}
        title="Jaffa"
        selected={false}
        checked="yes"
        handleCheckImage={() => {}}
      />
    </div>
  );
};

export default Gallery;
