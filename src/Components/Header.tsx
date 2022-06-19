import React from "react";
import Bin from "../images/bin.svg";
import Search from "../images/mag.svg";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-3 flex-wrap">
        <div>
          <h3 className="text-xl font-semibold mb-2">Media Library</h3>
          <p className="text-sm font-normal opacity-50">
            Create, edit, and manage the media on your community.
          </p>
        </div>
        <div className="mt-4 md:m-0">
          <button className="bg-gradient-to-r from-[#0099FF] to-[#0B79C3] px-3 py-2 text-white rounded-md">
            Add Image
          </button>
        </div>
      </div>
      <div className="tool-box w-full rounded-lg">
        <div className="flex items-center border-b border-[#E7EAF1]">
          <div className="flex p-6 border-r border-[#E7EAF1]">
            <div className="flex items-center">
              <input type="checkbox" value="" />
              <p className="text-sm font-semibold ml-2">Select All </p>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="ml-4 h-4">
              <img src={Bin} alt="" className="px-3 w-full h-full" />
            </div>
            <div className="relative flex items-center mr-4 bg-white rounded-md w-[245px] h-[32px] border border-[#CCD2E2]">
              <div className=" h-4">
                <img src={Search} alt="" className="px-3 w-full h-full" />
              </div>
              <input
                className="border-0 font-semibold text-sm py-2 rounded-md h-[30px] focus: outline-none"
                type="text"
                placeholder="Search Media"
                value=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex p-6 border-r border-[#E7EAF1]">
            <div className="flex items-center">
              <p className="text-sm font-semibold ml-2">Sort By </p>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="ml-4">
              <button className="px-4 text-xs font-semibold py-1 text-[#0099FF] rounded-md border border-[#0099FF]">
                Title
              </button>
              <button className="ml-4 text-xs font-semibold px-4 py-1 text-[#0099FF] rounded-md border border-[#0099FF]">
                Title
              </button>
              <button className="ml-4 text-xs font-semibold px-4 py-1 text-[#0099FF] rounded-md border border-[#0099FF]">
                Title
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
