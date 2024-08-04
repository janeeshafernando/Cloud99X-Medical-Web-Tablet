import { Outlet, Link, useLocation } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { TfiPulse } from "react-icons/tfi";
import { IconType } from "react-icons";

interface NavItemProps {
  to: string;
  icon: React.ReactElement<IconType>;
  label: string;
}

function Layout() {
  const location = useLocation();

  const NavItem = ({ to, icon, label }: NavItemProps) => {
    const isActive = location.pathname === to || 
                     (to === "/tracker" && location.pathname === "/exercise");
    const isTracker = to === "/tracker";
    return (
      <li
        className={`p-2 rounded-[40px] flex flex-col items-center justify-center py-10 ${
          isActive ? "bg-white rounded-[40px] py-10" : ""
        }`}
      >
        <Link
          to={to}
          className={`flex flex-col items-center ${
            isActive ? "text-cyan-150" : "text-white"
          }`}
        >
          <div className={isActive ? "text-cyan-150" : "text-white"}>
            {isTracker ? (
              <div
                className={`border-[1.5px] border-solid rounded-[3px] w-[20px] h-[20px] flex items-center justify-center ${
                  isActive ? "bg-cyan-150 text-white" : "border-white"
                }`}
              >
                <TfiPulse size={20} className="w-[14px] h-[14px]" />
              </div>
            ) : (
              icon
            )}
          </div>
          <span className="text-sm mt-2 hidden xl:block">{label}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className="flex min-h-screen">
      <nav className="bg-cyan-150 text-white w-[60px] xl:w-[120px] fixed h-full p-2 xl:p-4 rounded-tl-[35px] xl:rounded-tl-[70px] rounded-bl-[35px] 
      xl:rounded-bl-[70px] rounded-tr-[15px] xl:rounded-tr-[30px] rounded-br-[15px] xl:rounded-br-[30px]">
        <ul className="flex flex-col justify-center h-full my-auto">
          <NavItem
            to="/"
            icon={<TbLayoutDashboardFilled size={20} />}
            label="Dashboard"
          />
          <NavItem
            to="/doctor"
            icon={<IoIosAddCircleOutline size={24} />}
            label="Doctor"
          />
          <NavItem
            to="/contact"
            icon={<RiContactsLine size={20} />}
            label="Contact"
          />
          <NavItem
            to="/tracker"
            icon={
              <div className="border-[1.5px] border-solid rounded-[3px] w-[20px] h-[20px] flex items-center justify-center">
                <TfiPulse size={20} className="w-[14px] h-[14px]" />
              </div>
            }
            label="Tracker"
          />
        </ul>
      </nav>
      <div className="bg-slate-150 overflow-hidden w-full ml-[60px] xl:ml-[120px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;