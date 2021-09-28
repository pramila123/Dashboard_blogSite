import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";

export const menuItems = [
  { name: "Dashboard", to: "/", icon: <FaHome /> },
  { name: "Category", to: "/category", icon: <IoGitNetworkSharp /> },
  { name: "Sub Category", to: "/subcategory", icon: <FaNetworkWired /> },
  { name: "Products", to: "/products", icon: <BsFillBriefcaseFill /> },
  { name: "About Us", to: "/aboutus", icon: <IoIosPeople /> },
  { name: "Contacts", to: "/contacts", icon: <MdContactPhone /> },
];
