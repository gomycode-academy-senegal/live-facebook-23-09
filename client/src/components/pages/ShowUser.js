import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

const ShowUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(`http://localhost:5000/api/show-user/${id}`);
    setUser(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>{user.firstname}</h1>
      <NavLink to="">Delete</NavLink>
    </>
  );
};

export default ShowUser;
