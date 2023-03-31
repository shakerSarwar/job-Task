import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "./../assets/images/logo.png";

const Header = () => {
  return (
    <div className="px-3 md:px-20 pt-[28px] flex justify-between">
      <div>
        <Link to="/">
          <img className="w-[160px] h-[46px]" src={mainLogo} alt="" />
        </Link>
      </div>

      <div>
        <select className="bg-[#F0F5FA] h-[43px] w-[146px] text-[#B0B7C3] text-xs rounded-2xl	px-2">
          <option className="text-[#B0B7C3] text-xs" value="English">
            English(UK)
          </option>
          <option className="text-[#B0B7C3] text-xs" value="Arabic">
            Arabic
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
