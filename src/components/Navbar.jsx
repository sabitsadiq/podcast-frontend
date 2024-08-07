import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-[72px] bg-[#1c1e27] shadow-xl">
      <div className="relative w-full h-full px-5 flex items-center justify-end">
        <Link to="signin">
          <button className="px-[15px] py-1 bg-transparent border border-[#3ea6ff] text-[#3ea6ff] rounded-lg mx-auto transition delay-150 hover:scale-110 duration-300 ease-in-out flex items-center gap-1 font-medium mt-2 cursor-pointer">
            <AccountCircleIcon />
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
