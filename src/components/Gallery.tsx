import React, { useState } from "react";
import ImageComponent from "./Image";
import { Image } from "../models/postModel";

type Props = {
  images: {
    data: Image[] | null;
    loading?: boolean | null;
    error?: string | null;
  };
};

const Gallery: React.FC<Props> = ({ images }) => {
  const [selected, setSelected] = useState<string>("");
  const [checked, setChecked] = useState<string[]>([]);

  const handleSelected = (id: string) => {
    if (selected !== id) {
      setSelected(id);
    }
  };

  const handleChecked = (id: string) => {
    const existingImage = checked.some((item) => item === id);
    if (!existingImage) {
      setChecked([...checked, id]);
    } else {
      setChecked(checked.filter((item) => item !== id));
    }
  };
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {images?.data?.map((item) => {
        return (
          <div key={item?.id} onClick={() => handleSelected(item?.id)}>
            <ImageComponent
              id={item?.id}
              image={item?.urls?.thumb}
              selected={selected === item?.id}
              title={item?.description?.split(" ")[0]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
