import { Link } from "react-router-dom";

const Navbar = () => {
  let accesstoken = localStorage.getItem("accesstoken");

  return (
    <nav className="absolute top-0 h-[70px] w-full bg-white flex items-center justify-between px-6 shadow z-50">
      <div className="font-extrabold text-3xl text-gray-600  drop-shadow-lg select-none">
        MyApp
      </div>

      <aside className="flex gap-4 font-semibold">
        {accesstoken ? (
          <button
          className="bg-black py-2 px-6 rounded text-white cursor-pointer hover:bg-gray-200 hover:border hover:text-black"
          >Logout</button>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-100 transition font-bold border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Login
              </button>
            </Link>

            <Link to={"/"}>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-bold border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
                Signup
              </button>
            </Link>
          </>
        )}
      </aside>
    </nav>
  );
};

export default Navbar;
