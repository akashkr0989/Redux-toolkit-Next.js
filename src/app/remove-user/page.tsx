"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

function RemoveUser() {
  const userData = useSelector((data: any) => data.usersData.users);
  console.log(userData);

  const dispatch = useDispatch();

  return (
    <div className="display-user">
      <h1>This is Remove User Page</h1>
      {userData.map((data: any) => {
        return (
          <div className="user-list" key={data.id}>
            <span>{data.name}</span>
            <button onClick={()=>dispatch(removeUser(data.id))}>Remove User</button>

          </div>
        );
      })}
    </div>
  );
}

export default RemoveUser;
