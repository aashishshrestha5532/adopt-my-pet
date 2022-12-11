import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Categories from "./pages/Categories";
import Login from "./pages/login";
import SignUp from './pages/signup';
import Notifications from './pages/notification';
import Cart from './pages/Cart'
import Payment from './pages/Payment';

import AdminLogin from './pages/admin/Login'
import AdminCategory from './pages/admin/AddCategory'
import AdminDashboard from './pages/admin/Dashboard'
function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/categories/:type" element={<Categories/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/notifications" element={<Notifications />} />
                <Route path="/cart" element={<Cart />} />

        <Route path="/payment" element={<Payment />}/>

        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>


        {/* Admin start frm here */}

        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/add" element={<AdminCategory/>} />
      </Routes>
  );
}

export default App;
