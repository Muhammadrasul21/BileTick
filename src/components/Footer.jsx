import React from "react";
import logo from "@/assets/logo.svg";
import google from "@/assets/google.svg";
import appstore from "@/assets/appstore.svg";
import { Link } from "react-router-dom";
import { footerCategory, footerInfo } from "@/static";
import { RiInstagramLine, RiYoutubeLine, RiTelegramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="pb-10">
      <div className="container bg-[#f8f9fa] dark:bg-[#111111] rounded-xl">
        <div className="footer p-8 flex justify-between">
          <div className="flex flex-col gap-2">
            <Link
              to={
                "https://bile-tick-2bk1k69vk-muhammadrasuls-projects.vercel.app/"
              }
              target="blank"
              className="mb-12"
            >
              <img src={logo} alt="#" />
            </Link>

            <Link
              to={"https://play.google.com/store/games?hl=en"}
              target="blank"
            >
              <img src={google} alt="" />
            </Link>

            <Link to={"https://www.apple.com/app-store/"} target="blank">
              <img src={appstore} alt="" />
            </Link>
          </div>

          <ul className="flex  gap-4 flex-col">
            <li className="font-medium mb-1">About Us</li>
            {footerInfo?.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 text-black dark:text-white hover:text-primary hover:underline focus:text-primary focus:underline transition duration-200 cursor-pointer"
              >
                <item.icon className="text-primary" />
                {item.title}
              </li>
            ))}
          </ul>

          <ul className="flex  gap-4 flex-col">
            <li className="font-medium mb-1">Category</li>
            {footerCategory?.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 text-black dark:text-white hover:text-primary hover:underline focus:text-primary focus:underline transition duration-200 cursor-pointer"
              >
                <item.icon className="text-primary" />
                {item.title}
              </li>
            ))}
          </ul>

          <div className="flex  flex-col gap-14">
            <div className="flex flex-col gap-5">
              <p className="font-medium">Contact Us</p>
              <p className="font-medium text-xl text-primary">
                +998 (95) 897-33-38
              </p>
            </div>

            <div className="flex flex-col gap-5 text-primary">
              <p className="text-black dark:text-white font-medium">
                Social Media
              </p>
              <div className="flex gap-5">
                <Link
                  to={"https://www.instagram.com/gulomoov_1"}
                  target="blank"
                >
                  <RiInstagramLine className="min-w-5 min-h-5 cursor-pointer" />{" "}
                </Link>
                <Link to={"https://t.me/gulomjonovs_1"} target="blank">
                  <RiTelegramLine className="min-w-5 min-h-5 cursor-pointer" />{" "}
                </Link>
                <Link
                  to={"https://www.youtube.com/@gulomoov__1"}
                  target="blank"
                >
                  <RiYoutubeLine className="min-w-5 min-h-5 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
