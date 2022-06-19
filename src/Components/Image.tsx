import React from "react";

type Props = {
  image: string;
  title: string;
  selected: boolean;
  checked?: string;
  handleCheckImage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Image: React.FC<Props> = ({
  image,
  title,
  selected,
  checked,
  handleCheckImage,
}) => {
  return (
    <div className={`relative ${selected && "bg-[#E7EAF1]"} rounded w-40`}>
      <input
        type="checkbox"
        onChange={handleCheckImage}
        value={checked}
        className="absolute top-1 left-1 w-4 h-4 rounded border border-[#CCD2E2]"
      />
      <div className="w-full p-2 h-24 overflow-hidden rounded">
        <img src={image} alt="" className="w-full  object-cover" />
      </div>
      <p className="p-2 text-xs font-semibold">{title}</p>
    </div>
  );
};

export default Image;
