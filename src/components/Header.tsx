import React, { useEffect, useState } from "react";
import Bin from "../images/bin.svg";
import BinActive from "../images/bin-act.svg";
import Search from "../images/mag.svg";
import { useSelector } from "../hooks/useTypedSelector";
import { postActions } from "../store";
import { useDispatch } from "react-redux";
import {
  deleteAllCheckedImage,
  deleteCheckedImages,
  removeCheckOnImages,
  searchImage,
} from "../store/actions/action-creators/postActions";
import AddImage from "./AddImage";
import { Image } from "../models/postModel";

const Header: React.FC = () => {
  const checked = useSelector((state) => state.checked);
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("title");
  const [selectAll, setSelectAll] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(images?.data || []);

  const [openModal, setOpenModal] = useState(false);

  console.log(searchResults);

  const filterImages = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = searchResults.filter((item) => {
        return item.description
          .split(" ")[0]
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setSearchResults(results);
    } else {
      setSearchResults(images?.data);
    }

    setSearch(keyword);
  };

  // useEffect(() => {
  //   setSearchResults(
  //     searchResults?.filter((val: Image) => {
  //       val?.description
  //         ?.split(" ")[0]
  //         ?.toLowerCase()
  //         .includes(search.toLowerCase());
  //     })
  //   );
  // }, [search]);

  return (
    <>
      <AddImage open={openModal} close={() => setOpenModal(false)} />

      <div className="flex flex-wrap items-center justify-between mb-3">
        <div>
          <h3 className="mb-2 text-xl font-semibold">Media Library</h3>
          <p className="text-sm font-normal opacity-50">
            Create, edit, and manage the media on your community.
          </p>
        </div>
        <div className="mt-4 md:m-0">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-[#0099FF] to-[#0B79C3] px-3 py-2 text-white rounded-md"
          >
            Add Image
          </button>
        </div>
      </div>
      <div className="w-full rounded-lg tool-box">
        <div className="flex items-center border-b border-[#E7EAF1]">
          <div className="flex p-6 border-r border-[#E7EAF1]">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={() => {
                  setSelectAll(!selectAll);
                  if (!selectAll) {
                    dispatch(deleteAllCheckedImage(images?.data, checked));
                  } else {
                    dispatch(removeCheckOnImages());
                  }
                }}
              />
              <p className="ml-2 text-sm font-semibold">Select All</p>
            </div>
          </div>
          <div className="flex items-center justify-between flex-1">
            <div
              className="h-4 ml-4"
              onClick={() => {
                dispatch(deleteCheckedImages(images?.data, checked));
                dispatch(removeCheckOnImages());
              }}
            >
              <img
                src={checked?.length > 0 ? BinActive : Bin}
                alt=""
                className="w-full h-full px-3 cursor-pointer"
              />
            </div>
            <div className="relative flex items-center mr-4 bg-white rounded-md w-[245px] h-[34px] border border-[#CCD2E2]">
              <div className="h-4 ">
                <img
                  src={Search}
                  alt=""
                  className="w-full h-full px-3 text-black"
                />
              </div>
              <input
                className="border-0 font-semibold text-sm  rounded-md h-[30px] focus: outline-none"
                type="text"
                placeholder="Search Media"
                value={search}
                onChange={(e) => {
                  filterImages(e);
                  dispatch(searchImage(images?.data, e.target.value));
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex p-6 border-r border-[#E7EAF1]">
            <div className="flex items-center">
              <p className="ml-2 text-sm font-semibold">Sort By </p>
            </div>
          </div>
          <div className="flex items-center justify-between flex-1">
            <div className="ml-4">
              <button
                onClick={() => {
                  dispatch(postActions.sortByTitle(images?.data));
                  setSortBy("title");
                }}
                className={`px-4 text-xs font-semibold py-1 mr-3  ${
                  sortBy === "title"
                    ? "bg-[#0099ff38] text-[#0099FF] border border-[#0099FF]"
                    : "opacity-75 text-gray-600 border border-gray-600"
                } rounded-md `}
              >
                Title
              </button>
              <button
                onClick={() => {
                  dispatch(postActions.sortByDate(images?.data));
                  setSortBy("date");
                }}
                className={`px-4 text-xs font-semibold py-1 mr-3  ${
                  sortBy === "date"
                    ? "bg-[#0099ff38] text-[#0099FF] border border-[#0099FF]"
                    : "opacity-75 text-gray-600 border border-gray-600"
                } rounded-md `}
              >
                Date
              </button>
              <button
                onClick={() => {
                  dispatch(postActions.sortBySize(images?.data));
                  setSortBy("size");
                }}
                className={`px-4 text-xs font-semibold py-1  ${
                  sortBy === "size"
                    ? "bg-[#0099ff38] text-[#0099FF] border border-[#0099FF]"
                    : "opacity-75 text-gray-600 border border-gray-600"
                } rounded-md `}
              >
                Size
              </button>
            </div>
            <div className="relative "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
