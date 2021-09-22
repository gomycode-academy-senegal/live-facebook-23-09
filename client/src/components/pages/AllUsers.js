import React, { useState, useEffect } from "react";
import axios from "axios";

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
            <h1>{user.firstname}</h1>
        </React.Fragment>
      ))}
    </>
  );
};

export default AllUsers;
