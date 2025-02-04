import { useClerk } from "@clerk/clerk-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { openSignIn } = useClerk();

  return (
    <div className="shadow py-4 sticky">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center ">
        <img src={assets.logo} alt="" className="" />
        <div className="flex gap-4 max-sm:text-xs">
          <button className="text-gray-600 bg-gray-200 px-6 sm:px-9 py-2 rounded-full">
            Recruiter Login
          </button>
          <button
            onClick={(e) => openSignIn()}
            className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
