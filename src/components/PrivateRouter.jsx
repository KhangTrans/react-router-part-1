import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const PrivateRouter = () => {
  const location = useLocation();


  const [isAllowed] = useState(
    JSON.parse(localStorage.getItem("auth") || "false")
  );

  if (!isAllowed) {
    // Chuyển hướng về /login, đồng thời nhớ đường dẫn cũ để login xong quay lại
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Được phép thì render các route con
  return <Outlet />;
};

export default PrivateRouter;
