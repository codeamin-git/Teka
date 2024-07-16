import { CiLogin } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdHistory, MdOutlineAppRegistration } from "react-icons/md";
import { TbZoomMoney } from "react-icons/tb";
import { RxHome } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const AgentMenu = () => {
    return (
        <>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><RxHome /> Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><MdOutlineAppRegistration /> Registration</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><CiLogin /> Secure Login</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><GiTakeMyMoney /> Transaction Management</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><TbZoomMoney /> Balance Inquiry</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><MdHistory /> Transaction History</NavLink></li>
        </>
    );
};

export default AgentMenu;