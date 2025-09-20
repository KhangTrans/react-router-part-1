import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Bọc nhóm route cần bảo vệ bằng PrivateRouter */}
        <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />} />
        </Route>

        {/* route mặc định */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
