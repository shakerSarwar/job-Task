import React from "react";

const Users = ({ users, loading }) => {
  if (loading) {
    return <p>Loading.....</p>;
  }
  return (
    <table className="w-full text-center mt-10 mb-5 text-[#4E5D78] font-bold	h-[200px]">
      <thead className="pb-3">
        <tr className="bg-[#FAFBFC] h-[44px] ">
          <th>#ID</th>
          <th>USER</th>
          <th>EMAIL</th>
          <th>OPTIONS</th>
        </tr>
      </thead>
      {users.map((user) => (
        <tbody className="font-medium my-2">
          <tr className="h-[60px]">
            <td>{user.id}</td>
            <td className="flex justify-center items-center">
              <img src={user.avatar} alt="" className="w-[60px] h-[60px]" />
              <span>{user.first_name}&nbsp; </span>
              <span>{user.last_name}</span>
            </td>
            <td>{user.email}</td>
            <td>...</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Users;
