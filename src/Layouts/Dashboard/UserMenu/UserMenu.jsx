import { MdOutlineAppRegistration } from "react-icons/md";
import { RxHome } from "react-icons/rx";
import { IoIosSend } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { GiPayMoney, GiReceiveMoney, GiUnbalanced } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { NavLink } from 'react-router-dom'
const UserMenu = () => {
    return (
        <>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><RxHome /> Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><MdOutlineAppRegistration /> Registration</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><CiLogin /> Secure Login</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><IoIosSend /> Send Money</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><GiReceiveMoney /> Cash-Out</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><GiPayMoney /> Cash-in</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><GiUnbalanced /> Balance Inquiry</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><GrTransaction /> Transaction History</NavLink></li>
        </>
    );
};

export default UserMenu;