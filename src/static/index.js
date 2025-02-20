
import { PiMonitorFill } from "react-icons/pi";
import { BsFillTabletFill } from "react-icons/bs";
import { HiMiniTicket } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

export const navbarItems = [
    {
        id:1,
        icon: PiMonitorFill,
        name:"Home",
        path: "/"
    },
    {
        id:2,
        icon: BsFillTabletFill,
        name:"Movie",
        path: "/movie"
    },
    {
        id:3,
        icon: HiMiniTicket,
        name:"Saved",
        path: "/saved"
    },
    {
        id:4,
        icon: FaSearch,
        name:"Search",
        path: "/search"
    }
]