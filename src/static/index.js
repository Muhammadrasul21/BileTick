import { PiMonitorFill } from "react-icons/pi";
import { BsFillTabletFill } from "react-icons/bs";
import {
  RiCoupon3Line,
  RiBasketballLine,
  RiMovie2Line,
  RiClapperboardLine,
  RiMovieLine,
  RiFileList2Line,
  RiPhoneLine,
  RiShiningLine,
} from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const navbarItems = [
  {
    id: 1,
    icon: PiMonitorFill,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    icon: BsFillTabletFill,
    name: "Movie",
    path: "/movie",
  },
  {
    id: 3,
    icon: RiCoupon3Line,
    name: "Saved",
    path: "/saved",
  },
  {
    id: 4,
    icon: FaSearch,
    name: "Search",
    path: "/search",
  },
];

export const footerInfo = [
  {
    id: 1,
    icon: RiFileList2Line,
    title: "Public Offer",
  },
  {
    id: 2,
    icon: RiShiningLine,
    title: "Advertisement",
  },
  {
    id: 3,
    icon: AiOutlineQuestionCircle,
    title: "F.A.Q",
  },
  {
    id: 4,
    icon: RiPhoneLine,
    title: "Contacts",
  },
];
export const footerCategory = [
  {
    id: 1,
    icon: RiMovieLine,
    title: "Movie",
  },
  {
    id: 2,
    icon: RiClapperboardLine,
    title: "Theatre",
  },
  {
    id: 3,
    icon: RiMovie2Line,
    title: "Concerts",
  },
  {
    id: 4,
    icon: RiBasketballLine,
    title: "Sport",
  },
];
