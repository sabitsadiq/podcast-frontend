import HomeIcon from "@mui/icons-material/Home";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="sticky top-0 flex-1 min-w-52 text-sm bg-[#15171E] h-full min-h-screen text-white">
      <div className="py-5 px-[26px]">
        <Link to="/">
          <div className="flex items-center gap-1 font-bold mb-6">
            <img src="" className="h-6" />
            STREAMTROJAN
          </div>
        </Link>
        <div className="flex flex-col gap-4 font-medium text-base">
          <Link to="/">
            <div className="flex items-center p-2 gap-2 cursor-pointer transition delay-150 hover:bg-[#373737] duration-300 ease-in-out rounded-[3px]">
              <HomeIcon /> <p>Dashboard</p>
            </div>
          </Link>
          <div className="flex items-center p-2 gap-2 cursor-pointer transition delay-150 hover:bg-[#373737] duration-300 ease-in-out rounded-[3px]">
            <SearchIcon /> <p>Search</p>
          </div>
          <div className="flex items-center p-2 gap-2 cursor-pointer transition delay-150 hover:bg-[#373737] duration-300 ease-in-out rounded-[3px]">
            <FavoriteIcon /> <p>Favourites</p>
          </div>
          <div className="my-[15px] border-[0.1px] border-[#373737] w-full"></div>
          <div className="flex items-center p-2 gap-2 cursor-pointer transition delay-150 hover:bg-[#373737] duration-300 ease-in-out rounded-[3px]">
            <CloudUploadIcon /> <p>Upload</p>
          </div>
          <div className="flex items-center p-2 gap-2 cursor-pointer transition delay-150 hover:bg-[#373737] duration-300 ease-in-out rounded-[3px]">
            <LightModeIcon /> <p>Light Mode</p>
          </div>
          <div>
            <Link to="signin">
              <button className="px-[15px] py-1 bg-transparent border border-[#3ea6ff] text-[#3ea6ff] rounded-lg mx-auto transition delay-150 hover:scale-110 duration-300 ease-in-out flex items-center gap-1 font-medium mt-2 cursor-pointer">
                <AccountCircleIcon />
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
