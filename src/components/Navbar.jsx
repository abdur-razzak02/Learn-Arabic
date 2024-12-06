import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
    <NavLink to='/'>Home</NavLink>
    <Link>Days</Link>
    <Link>Months</Link>
    <Link>Dates</Link>
    <Link>Numbers</Link>
    <Link>Alphabets</Link>
    <Link>Words</Link>
    </>
  return (
    <div className="navbar bg-base-100 container mx-auto p-0 px-5 lg:px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2  lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 space-y-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="text-xl font-semibold">Learn Arabic</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
