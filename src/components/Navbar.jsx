import { IoIosArrowDown } from "react-icons/io";
import React from "react";

const Navbar = () => {
  const items = [
    {
      name: "Swiggy Corporate",
      icon: <i className="fi fi-rs-corporate text-xl"></i>,
    },
    {
      name: "Search",
      icon: <i className="fi fi-rs-search text-xl"></i>,
    },
    {
      name: "Offers",
      icon: <i className="fi fi-rs-badge-percent text-xl"></i>,
    },
    {
      name: "Help",
      icon: <i className="fi fi-rr-life-ring text-xl"></i>,
    },
    {
      name: "Sign In",
      icon: <i className="fi fi-br-user text-xl"></i>,
    },
    {
      name: "Cart",
      icon: <i className="fi fi-rr-dolly-flatbed-empty text-xl"></i>,
    },
  ];
  return (
    <>
      <nav className=" w-full shadow-sm p-3">
        <div className="w-[82%] mx-auto flex justify-between items-center ">
          <div className=" flex items-center gap-6">
            <img
              src="/public/logoSwiggy.png"
              alt=""
              srcset=""
              className="h-14 hover:scale-110 transition-all"
            />
            <div className=" flex items-center gap-3 p-1 text-[14px] group">
              <p className="  font-bold  border-b-black group-hover:text-orange-500 transition-all">
                Other
              </p>
              <span className="group-hover:text-gray-500 font-normal">
                Mumbai, Maharashtra, India
              </span>
              <IoIosArrowDown className="text-orange-500 text-[18px]" />
            </div>
          </div>

          <div>
            <ul className=" flex items-center gap-12 text-[16px] font-semibold relative">
              {items.map((item, index) => {
                return (
                  <>
                    <li
                      index={index}
                      className=" flex items-center gap-3 hover:text-orange-500 transition-all "
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                    </li>
                  </>
                );
              })}
              <span className="text-black absolute right-[40px] bottom-2">
                3
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
