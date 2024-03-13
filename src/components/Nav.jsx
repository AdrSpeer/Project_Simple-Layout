import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between  p-6 text-white mb-[17vw]">
      <Link to="/">
        <h2>Home_H</h2>
      </Link>
      <div className="flex items-center gap-10">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Furniture</a>
        <a href="#">Contact us</a>
        <Link>
          <button className="border border-solid border-white p-2 rounded-md">
            Log in
          </button>
        </Link>
        <Link>
          <button className="text-white bg-amber-300 p-2 rounded-md">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
