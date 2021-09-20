import { AiOutlineHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoGitNetworkSharp } from "react-icons/io5";

export const menuItems = [
    { name: 'Dashboard', to: '/', icon: <AiOutlineHome /> },
    { name: 'Category', to: '/category', icon: <IoGitNetworkSharp /> },
    { name: 'Products', to: '/products', icon: <BsFillBriefcaseFill /> },
    { name: 'About Us', to: '/aboutus', icon: <IoIosPeople /> },
    { name: 'Contacts', to: '/contacts', icon: <MdContactPhone /> },
  ];