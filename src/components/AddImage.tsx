import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Cross from "../images/cross.svg";
import Search from "../images/mag.svg";
import { useSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { postActions } from "../store";
import AddSingleImage from "./AddSingleImage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "1190px",
    zIndex: 9999,
    borderRadius: "8px",
  },
};

type Props = {
  open: boolean;
  close: () => void;
};

const AddImage: React.FC<Props> = ({ open, close }) => {
  const images = useSelector((state) => state.search);
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("office");
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      postActions.getSearchImages(
        `https://api.unsplash.com/search/photos/?client_id=63XyR-MdNNJwESg67izcfmHsZOB07CMpSZd0iQ4nshI&page=1&query=${query}&per_page=20`
      )
    );
  };

  useEffect(() => {
    dispatch(
      postActions.getSearchImages(
        `https://api.unsplash.com/search/photos/?client_id=63XyR-MdNNJwESg67izcfmHsZOB07CMpSZd0iQ4nshI&page=1&query=${query}&per_page=20`
      )
    );
  }, [dispatch]);

  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-10">
          <div className="flex justify-between">
            <div>
              <h4 className="mb-1 text-xl font-bold">Select Image</h4>
              <p className="text-sm font-normal opacity-75">
                Search and select an image
              </p>
            </div>
            <div onClick={close} className="cursor-pointer">
              <img src={Cross} alt="" />
            </div>
          </div>
          <div className="mt-8">
            <form className="flex" onSubmit={handleSearchSubmit}>
              <div className="flex bg-white border border-[#CCD2E2] px-3 py-1 rounded">
                <img src={Search} alt="" className="w-4 h-full" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-3 text-lg font-semibold outline-none focus:outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
          <div className="border-dashed border-4 border-[#CCD2E2] mt-10 p-2 rounded-lg">
            <div className="scrollbar-thin  scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  w-full h-full overflow-y-scroll max-h-[440px] ">
              {images?.results.map((item) => (
                <div
                  className={`w-full h-[128px] overflow-hidden  ${
                    selected === item?.id &&
                    "border-4 border-blue-600 rounded-lg"
                  }`}
                  onClick={() => setSelected(item?.id)}
                  key={item?.id}
                >
                  <img
                    src={item?.urls?.thumb}
                    alt=""
                    className="object-cover object-center w-full h-full rounded"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end w-full mt-10">
            <button
              className="bg-gradient-to-r from-[#0099FF] to-[#0B79C3] px-3 py-2 text-white rounded-md"
              onClick={() => {
                close();
                const selectedItem = images?.results.filter(
                  (item) => item?.id === selected
                );
                console.log(selectedItem);
                dispatch(
                  postActions.selectImageToAdd({
                    id: selectedItem[0]?.id,
                    created_at: selectedItem[0]?.created_at,
                    width: selectedItem[0]?.width,
                    height: selectedItem[0]?.height,
                    urls: {
                      regular: selectedItem[0]?.urls?.regular,
                      thumb: selectedItem[0]?.urls?.thumb,
                    },
                    description: selectedItem[0]?.description,
                  })
                );
                setOpenModal(true);
              }}
            >
              Add Image
            </button>
          </div>
        </div>
      </Modal>
      {open && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
      )}
      <AddSingleImage open={openModal} close={() => setOpenModal(false)} />
    </div>
  );
};

export default AddImage;
