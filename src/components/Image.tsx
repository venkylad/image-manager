import React from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../store";
import { useSelector } from "../hooks/useTypedSelector";

interface Props {
  id: string;
  image: string | undefined;
  title: string;
  selected: boolean;
}

const Image: React.FC<Props> = ({ image, title = "Unknown", selected, id }) => {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.checked);

  return (
    <div className={`relative ${selected && "bg-[#E7EAF1]"} rounded w-40`}>
      <input
        type="checkbox"
        onChange={() => {
          dispatch(postActions.checkImage(checked, id));
        }}
        checked={checked.includes(id)}
        className="absolute top-1 left-1 w-4 h-4 rounded border border-[#CCD2E2]"
      />
      <div className="w-full h-24 p-2 overflow-hidden rounded">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full h-full overflow-hidden rounded"
        />
      </div>
      <p className="p-2 text-xs font-semibold">{title}</p>
    </div>
  );
};

export default Image;
