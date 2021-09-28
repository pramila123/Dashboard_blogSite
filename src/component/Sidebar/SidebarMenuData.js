import { AiOutlineHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoGitNetworkSharp } from "react-icons/io5";
import {FaNetworkWired} from "react-icons/fa"
import {AiFillEdit} from "react-icons/ai"

export const menuItems = [
    { name: 'Dashboard', to: '/', icon: <AiOutlineHome /> },
    { name: 'Category', to: '/category', icon: <IoGitNetworkSharp /> },
    { name: 'Sub Category', to: '/subcategory', icon: <FaNetworkWired /> },
    { name: 'Products', to: '/products', icon: <BsFillBriefcaseFill /> },
    { name: 'Order', to: '/order', icon: <AiFillEdit/> },
    { name: 'About Us', to: '/aboutus', icon: <IoIosPeople /> },
    { name: 'Contacts', to: '/contacts', icon: <MdContactPhone /> },
    

  ];