import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "../components/Users";
import Pagination from "../components/Pagination";
import mainLogo from "./../assets/images/logo.png";
import dashboard from "./../assets/images/dashboard.png";
import invoice from "./../assets/images/invoice.png";
import user from "./../assets/images/user.png";
import search from "./../assets/images/search.png";
import bell from "./../assets/images/bell.png";
import avatar from "./../assets/images/avatar.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(2);

  let API = "https://reqres.in/api/users";

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(API);
      setUsers(response.data.data);
      setLoading(false);
      console.log(response);
    };

    fetchUsers();
  }, [API]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div class="flex flex-row">
        <div class="basis-1/4 pl-[30px] pt-[34px] w-[249px] h-screen	 border-r">
          <Link to="/">
            <img className="pb-10 pl-3 w-[160px]" src={mainLogo} alt="" />
          </Link>
          <p className="pl-3 text-[#B0B7C3] font-medium">Pages</p>
          <div className="flex cursor-pointer items-center pt-10 pl-3 ">
            <img className="" src={dashboard} alt="" />
            <span className="pl-5 text-[#A7AFBC] font-medium">Dashboard</span>
          </div>
          <div className="flex cursor-pointer items-center my-10 bg-[#F0F5FA] rounded-2xl w-[216px] h-[50px]">
            <img className="pl-3" src={user} alt="" />
            <span className="pl-5 text-[#A7AFBC] font-medium ">User</span>
          </div>
          <div className="flex cursor-pointer items-center pl-3 ">
            <img src={invoice} alt="" />
            <span className="pl-5 text-[#A7AFBC] font-medium">Sales</span>
          </div>
        </div>
        <div class="pl-10 basis-3/4">
          <div className="flex justify-between items-center pt-[25px]">
            <div className=" relative ">
              <input
                type="text"
                name=""
                placeholder="Search"
                className="w-[540px] bg-[#F0F5FA] h-[58px] border border-[##F3F3F3] rounded-2xl pl-12"
              />
              <img src={search} alt="" className="absolute right-7 top-5" />
            </div>
            <div className="flex pr-10 items-center">
              <img
                src={bell}
                className="w-[25px] justify-between h-[25px]  mr-5"
                alt=""
              />

              <img src={avatar} alt="" />
            </div>
          </div>
          <p className="pt-10 text-[23px] font-semibold text-[#323B4B]">
            Users List
          </p>
          <Users users={currentUsers} loading={loading} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
