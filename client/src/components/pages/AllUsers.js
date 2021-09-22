import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const result = await axios.get("http://localhost:5000/api/all-users");
    setUsers(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <table className="table table-dark table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">first name</th>
                <th scope="col">last name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <NavLink
                      className="btn btn-outline-primary"
                      to={`/show-user/${user._id}`}
                    >
                      show
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </>
  );
};

export default AllUsers;
