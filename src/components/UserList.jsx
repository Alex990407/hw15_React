import React from "react";

// import React, { useState, useEffect } from "react";
// import axios from "axios";

function UserList({ users }) {
  //   const [users, setUsers] = useState([]);

  // Функция для получения данных
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/api/users");
  //       console.log(response.data);
  //       return response.data;
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //       return [];
  //     }
  //   };

  // Получение данных при монтировании компонента
  //   useEffect(() => {
  //     fetchUsers().then((data) => setUsers(data));
  //   }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>

    // <div>
    //   <h1>Users</h1>
    //   <ul>
    //     {users.map((user) => (
    //       <li key={user.id}>{user.username}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default UserList;
