import "./App.css";
import React, { useState, useCallback, useMemo } from "react";
import UserList from "./components/UserList";

function App() {
  const userList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" },
  ];

  const [filter, setFilter] = useState("");

  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [userList]
  );

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  return (
    <>
      <div className="Main">
        <h1>User List</h1>
        <input
          type="text"
          placeholder="Filter users..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <UserList users={filteredUsers} />
      </div>
    </>
  );
}

export default App;
