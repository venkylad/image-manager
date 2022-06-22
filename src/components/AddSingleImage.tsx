import React, { useState } from "react";
import Modal from "react-modal";
import Cross from "../images/cross.svg";
import { useSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { postActions } from "../store";
import useWindowSize from "../hooks/useWindowSize";

type Props = {
  open: boolean;
  close: () => void;
};

const AddSingleImage: React.FC<Props> = ({ open, close }) => {
  const image = useSelector((state) => state.selectImageToAdd);
  const images = useSelector((state) => state.images);

  const { width, height } = useWindowSize();

  const dispatch = useDispatch();

  const [title, setTitle] = useState(image?.description || "");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: width > 767 ? "712px" : "350px",
      zIndex: 9999,
      borderRadius: "8px",
    },
  };
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-2 md:p-4 lg:p-10 max-h-[900px]">
          <div className="flex justify-between">
            <div>
              <h4 className="mb-1 text-xl font-bold">Add Image</h4>
              <p className="text-sm font-normal opacity-75">
                Edit your media files here
              </p>
            </div>
            <div onClick={close} className="cursor-pointer">
              <img src={Cross} alt="" />
            </div>
          </div>

          <div className="border-dashed border-4 border-[#CCD2E2] mt-2 md:mt-4 lg:mt-10 p-4 rounded-lg">
            <div className="">
              <img src={image?.urls?.regular} alt="" />
            </div>
            <div className="flex flex-wrap items-center justify-between mt-2 md:mt-6">
              <div className="flex flex-col mt-1 md:mt-0">
                <p className="text-xs font-normal opacity-50">Title</p>
                <input
                  type="text"
                  placeholder="title"
                  className="w-full px-2 py-1 text-sm font-semibold text-gray-800 border border-gray-600 rounded"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="flex flex-col mt-1 md:mt-0">
                <p className="text-xs font-normal opacity-50">File Type</p>
                <h4 className="text-sm font-semibold text-gray-800">JPG</h4>
              </div>
              <div className="flex flex-col mt-1 md:mt-0">
                <p className="text-xs font-normal opacity-50">File Size</p>
                <h4 className="text-sm font-semibold text-gray-800">324 kb</h4>
              </div>
              <div className="flex flex-col mt-1 md:mt-0">
                <p className="text-xs font-normal opacity-50">Dimensions</p>
                <h4 className="text-sm font-semibold text-gray-800">
                  {image?.width} x {image?.height}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full mt-2 md:mt-4 lg:mt-10">
            <button
              className="bg-gradient-to-r from-[#0099FF] to-[#0B79C3] px-3 py-2 text-white rounded-md"
              onClick={() => {
                close();
                const data = images?.data;
                dispatch(
                  postActions.addNewImage(data, {
                    ...image,
                    description: title,
                  })
                );
                setTitle("");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
      {open && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
      )}
    </div>
  );
};

export default AddSingleImage;
