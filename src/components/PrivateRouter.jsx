import React from "react";
import { Outlet } from "react-router-dom";
const PrivateRouter = () => {
  return (
    <div>
      <h1>Khu vực cho Admin</h1>
      <Outlet />
    </div>
  );
};

export default PrivateRouter;
