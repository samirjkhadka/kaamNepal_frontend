import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center py-3 gap-4 mt-20">
      <img width={160} src={assets.logo} alt="" className="" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @ Byte Stack {new Date().getFullYear()} | All rights reserved
      </p>
      <div className="flex gap-2.5">
        <img width={38} src={assets.facebook_icon} alt="" className="" />
        <img width={38} src={assets.twitter_icon} alt="" className="" />
        <img width={38} src={assets.instagram_icon} alt="" className="" />
      </div>
    </div>
  );
};

export default Footer;
