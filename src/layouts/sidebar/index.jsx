// react router packages
import { NavLink, useLocation } from "react-router-dom";
// react-package
import { useState } from "react";
// other package
import { motion } from "framer-motion";
// react-icons package
import { IoIosArrowBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
// components
import SubMenu from "./SubMenu";
// logo
import Logo from "../../img/LOGOAR.png";
import { useEffect } from "react";
// context
import { useIsTab } from "../RootContext";

const Sidebar = () => {
  let isTab = useIsTab();
  // console.log(isTab, "isTab");
  // sidebar open state
  const [isOpen, setIsOpen] = useState(isTab ? false : true);
  const { pathname } = useLocation();

  const Sidebar_animation = isTab
    ? //mobile view
      {
        // system view
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // system view
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };
  useEffect(() => {
    if (isTab) {
      // mobile
      setIsOpen(false);
    } else {
      // laptop
      setIsOpen(true);
    }
  }, [isTab]);
  // pathname change -> close sidebar
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname]);
  const subMenusList = [
    {
      name: "build",
      icon: RiBuilding3Line,
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      // mainmenu
      name: "analytics",
      icon: TbReportAnalytics,
      // submenu
      menus: ["dashboard", "realtime", "events"],
    },
  ];
  return (
    <div>
      {/* <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div> */}
      <motion.div
        variants={Sidebar_animation}
        initial={{ x: isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray  z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-slate-300 font-medium py-3 mx-3 h-16 ">
          <div className="flex items-center gap-3 ">
            <img src={Logo} alt="" width={45} />
            <span className="text-xl whitespace-pre">Artist</span>
          </div>
          {isTab && (
            <IoMdClose
              size={25}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

        {/* Menus */}
        <div className="flex flex-col h-full shadow-2xl">
          {/* first */}
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-400 h-[70%] md:h-[68%]">
            <li>
              <NavLink to="/" className={"link"}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                All Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/authentication" className={"link"}>
                <BsPerson size={23} className="min-w-max" />
                Authentication
              </NavLink>
            </li>
            <li>
              <NavLink to="/stroage" className={"link"}>
                <HiOutlineDatabase size={23} className="min-w-max" />
                Stroage
              </NavLink>
            </li>
            {/* with subMenu */}
            {/* mobile view most show subMenu */}
            {(isOpen || isTab) && (
              <div className="border-y py-5 border-slate-300">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product Categories
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink to="/settings" className={"link"}>
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>
          {/* second */}
          {isOpen && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y border-slate-300 p-4">
                <div>
                  <p>Artist</p>
                  <small>No-cost Rp.0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
          <div className=""></div>
        </div>

        {/* control button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : { x: -10, y: -200, rotate: 180 }
          }
          transition={{ duration: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
        >
          {/* react icon */}
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setIsOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
