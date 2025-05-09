import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";


export default function Header() {
return (
    <div>
        <div className="navbar bg-base-100 border-b border-purple-200 px-4">
            <div className="w-full flex items-center justify-between">
                
                <div className="flex-1">
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl font-bold">
                        Gadget Heaven
                    </NavLink>
                </div>

                <div className="flex-1 flex justify-center">
                    <ul className="menu menu-horizontal px-1 text-sm text-gray-600">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-main" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-main" : ""}>
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-main" : ""}>
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 flex justify-end gap-2">
                    <NavLink to="/cart" className="btn btn-circle btn-ghost text-xl">
                        <FaShoppingCart />
                    </NavLink>
                    <NavLink to="/favorites" className="btn btn-circle btn-ghost text-xl">
                        <AiOutlineHeart />
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
);
}
