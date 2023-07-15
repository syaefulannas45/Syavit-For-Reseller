import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="lg:flex justify-between items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={"/logo.png"}
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
              alt="logo"
            />
            <p className="text-tittle font-bold lg:text-[36px] text-[25px]">
              SYAVIT
            </p>
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer mr-3"
          >
            <i
              className={`fa-solid fa-bars text-3xl text-text lg:hidden ${
                !toggle ? "block" : "hidden"
              }`}
            ></i>
            <i
              className={`fa-solid fa-xmark text-3xl text-text lg:hidden ${
                toggle ? "block" : "hidden"
              }`}
            ></i>
          </div>
        </div>
        <nav>
          <ul
            className={`lg:space-x-5 ${
              toggle ? "block" : "hidden"
            } ${
              toggle ? "bg-[#f3f3f3] lg:bg-white" : "bg-[#f3f3f3] lg:bg-white"
            } lg:flex py-5 lg:py-0 pl-3 lg:pl-0 space-y-2 lg:space-y-0 mt-5 lg:mt-0 rounded-lg lg:rounded-none lg:text-[17px]`}
          >
            <li>
              <a href="#pernikahan">Pernikahan</a>
            </li>
            <li>
              <a href="#all">Khitan</a>
            </li>
            <li>
              <a href="#all">Aqiqah</a>
            </li>
            <li>
              <a href="#all">Ulang tahun</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
