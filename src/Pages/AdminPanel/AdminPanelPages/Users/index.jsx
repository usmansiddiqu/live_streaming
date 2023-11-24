import React from "react";
import UsersTable from "../../../../Components/UsersTable";

function Users() {
  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        left: "14%",
        width: "85vw",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <UsersTable />
    </div>
  );
}

export default Users;
