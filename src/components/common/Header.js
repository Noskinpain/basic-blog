import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/Links";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import SocialLinks from "../../utils/SocialLinks";
import { IoMdClose } from "react-icons/io";
import SideBar from "./headerComponents/SideBar";
import Menu from "./headerComponents/Menu";
import MenuOptions from "./headerComponents/MenuOptions";
import useHeader from "../../hooks/use-header";

const Header = () => {
  const {
    handleClick,
    isOpen,
    handleDropDown,
    dropdownOpen,
    toggleDropdown,
    isScroll,
  } = useHeader();

  const renderedLinks = links.map((link, index) => (
    <li key={link.path} className="relative">
      {link.dropdown ? (
        <>
          <button className="" onClick={() => toggleDropdown(index)}>
            {link.label}
          </button>
          {dropdownOpen === index && (
            <ul className="absolute left-0 mt-2 bg-gray-700 p-2 rounded">
              {link.dropdown.map((sublink) => (
                <li key={sublink.path}>
                  <NavLink
                    to={sublink.path}
                    className="block px-4 py-2  hover:bg-gray-600"
                    onClick={() => handleDropDown()}
                  >
                    {sublink.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <NavLink
          to={link.path}
          className=""
          //    exact
        >
          {link.label}
        </NavLink>
      )}
    </li>
  ));
  return (
    <div className="text-[12px] text-[#687385]">
      <section className="flex justify-between items-center py-5 px-6 lg:px-28 ">
        <img
          src="https://stories.botble.com/storage/general/logo.png"
          alt="logo"
        />
        <div className="flex gap-6">
          <div className="font-[500] text-[#71889B] flex items-center gap-1">
            <div className="transform scale-x-[-1]">
              <i className="bi bi-search "></i>
            </div>
            <p>search</p>
          </div>

          <button className="font-[700] w-fit p-2 h-fit text-white rounded-md bg-[#5869DA] hover:bg-[#E3363E] focus:bg-[#E3363E]">
            Subscribe
          </button>
        </div>
      </section>
      <hr />

      <section
        className={`${
          isScroll
            ? "fixed px-6 lg:px-28 bg-white top-0 w-full z-20 border-b shadow-sm lg:flex items-center justify-between"
            : "px-6 lg:px-28 lg:flex items-center justify-between border-b"
        }`}
      >
        <nav className="lg:flex gap-1 items-center hidden">
          <i className="bi bi-house-door text-sm"></i>
          <ul className="flex space-x-10">{renderedLinks}</ul>
        </nav>

        <div className="  pb-0 flex justify-between md:justify-end items-center gap-2">
          <Menu />
          <div className="flex gap-2 items-center">
            <SocialLinks />
            {isOpen ? (
              <IoMdClose
                className="h-16 w-6 cursor-pointer"
                onClick={handleClick}
              />
            ) : (
              <HiOutlineMenuAlt2
                className="h-16 w-6 cursor-pointer"
                onClick={handleClick}
              />
            )}
          </div>
        </div>
      </section>
      <MenuOptions />

      {isOpen ? <SideBar /> : null}
    </div>
  );
};

export default Header;
