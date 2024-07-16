import DashContent from "../../../component/shared/DashContent/DashContent";
import { MdClose, MdOutlineAppRegistration } from "react-icons/md";
import { RxHome } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AgentMenu from "../AgentMenu/AgentMenu";
import AdminMenu from "../AdminMenu/AdminMenu";

const Dashboard = () => {
    return (
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        
      </div>
      <div className="mx-2 flex-1 px-2">
        <img src="/taka.png" alt="" className="w-10 h-10 animate animate-ping" />
        <h1 className="text-2xl font-medium"><span className="text-[#008000]">Teka</span> <span className="text-red-500">Kori</span></h1>
        </div>
      
    </div>
    {/* Page content here */}
    <div className="flex items-center justify-center mt-10">
        <DashContent />
    </div>
  </div>

  <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay" aria-label="close sidebar"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 relative">
          {/* Close Icon */}
          <li className="flex justify-end items-end">
            <label htmlFor="my-drawer-3" className="hover:bg-red-400 hover:text-white absolute top-1 z-10">
              <MdClose className="text-xl"/>
            </label>
          </li>
          {/* Sidebar content here */}
          <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><RxHome /> Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'flex items-center text-xl bg-slate-800 text-green-400' : 'flex items-center text-xl'}><MdOutlineAppRegistration /> Registration</NavLink></li>

          <div className="divider"></div>
          {/* user dash */}
          <UserMenu />

          <div className="divider"></div>
          {/* agent dash */}
          <AgentMenu />

          <div className="divider"></div>
          {/* admin dash */}
          <AdminMenu />
        </ul>
      </div>
</div>
    );
};

export default Dashboard;