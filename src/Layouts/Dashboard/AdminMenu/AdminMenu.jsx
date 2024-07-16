import { AiOutlineSafety } from "react-icons/ai";
import { LiaUsersCogSolid } from "react-icons/lia";
import { GiScarecrow } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { RxHome } from "react-icons/rx";
const AdminMenu = () => {
    return (
        <>
         <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><RxHome /> Home</NavLink></li> 
         <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><AiOutlineSafety /> Secure Login</NavLink></li> 
         <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><LiaUsersCogSolid /> User Management</NavLink></li> 
         <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><GiScarecrow /> System Monitoring</NavLink></li> 

        </>
    );
};

export default AdminMenu;