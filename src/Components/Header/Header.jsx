import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div>
            <div
                className={`navbar bg-base-100 px-4 ${
                    isHome ? "bg-herobg mt-5 rounded-t-[20px] text-white" : ""
                }`}
            >
                <div className="w-full flex items-center justify-between">
                    {/* Hamburger Menu */}
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#9801C0] rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${isActive ? "text-main border-b" : ""} ${
                                            isHome ? "text-white" : ""
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive }) =>
                                        `${isActive ? "text-main" : ""} ${
                                            isHome ? "text-white" : ""
                                        }`
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        `${isActive ? "text-main" : ""} ${
                                            isHome ? "text-white" : ""
                                        }`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex-1">
                        <NavLink
                            to="/"
                            className=" normal-case text-xl font-bold"
                        >
                            Gadget Heaven
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <ul className="menu menu-horizontal px-1 text-sm text-gray-600">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${isActive ? "text-main border-b" : ""} ${
                                            isHome ? "text-white" : ""
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive }) =>
                                        `${isActive ? "text-main" : ""} ${
                                            isHome ? "text-white" : ""
                                        }`
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        `${isActive ? "text-main" : ""} ${
                                            isHome ? "text-white" : ""
                                        }`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Icons */}
                    <div className="flex-1 flex justify-end gap-2">
                        <NavLink to="/cart" className="btn btn-circle btn-ghost text-xl ">
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
