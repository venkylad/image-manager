import React from "react";
import Modal from "react-modal";
import Cross from "../images/cross.svg";
import Search from "../images/mag.svg";
import { useSelector } from "../hooks/useTypedSelector";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "1190px",
    height: "771px",
    zIndex: 9999,
  },
};

type Props = {
  open: boolean;
  close: () => void;
};

const AddImage: React.FC<Props> = ({ open, close }) => {
  const images = useSelector((state) => state.images);

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   }

  return (
    <div>
      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-10">
          <div className="flex justify-between">
            <div>
              <h4 className="mb-2 text-xl font-bold">Select Image</h4>
              <p className="text-sm font-normal opacity-75">
                Search and select an image
              </p>
            </div>
            <div>
              <img src={Cross} alt="" />
            </div>
          </div>
          <div className="mt-10">
            <form className="flex">
              <div className="flex bg-white border border-[#CCD2E2] px-3 py-1 rounded">
                <img src={Search} alt="" className="w-4 h-full" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-3 text-lg font-semibold outline-none focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-2 ml-4 text-sm font-semibold rounded border border-[#CCD2E2] shadow-md"
              >
                Search
              </button>
            </form>
          </div>
          <div className="p-4 rounded-lg grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 w-full h-full overflow-y-scroll max-h-[440px] border-dashed border-4 border-[#CCD2E2] ">
            {images?.data.map((item) => (
              <div className="w-full h-[128px] rounded overflow-hidden">
                <img
                  src={item?.urls?.thumb}
                  alt=""
                  className="object-cover object-center w-full h-full rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </Modal>
      {open && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
      )}
    </div>
  );
};

export default AddImage;
