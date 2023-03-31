import React from "react";
import LeftArrow from "./../assets/images/leftArrow.png";
import RightArrow from "./../assets/images/rightArrow.png";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex items-center">
      <img src={LeftArrow} alt="" />
      {pageNumbers.map((number) => (
        <div key={number} className="px-5 ">
          <a
            className="hover:bg-blue-600 hover:text-white border p-2 text-[#333333] font-medium"
            onClick={() => paginate(number)}
            href="#"
          >
            {number}
          </a>
        </div>
      ))}
      <img src={RightArrow} alt="" />
    </div>
  );
};

export default Pagination;
