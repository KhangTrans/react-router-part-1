import { Route, BrowserRouter  as Router, Routes } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
import AdminIndex from "./components/AdminIndex";
import Account from "./components/Account";
import Product from "./components/Product";
import Order from "./components/Order";
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<AdminIndex />} />
          <Route path="account" element={<Account />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
