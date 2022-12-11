import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "@mui/icons-material/ShoppingCartCheckout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { getValue } from "../utils/storage";

export default function Header() {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");
  const totalCarts = getValue("cart")?.length || [];
  const navigateToHome = () => {
    return navigate(`/`);
  };
  return (
    <div className="app_header">
      <div className="app_headerWrapper">
        <img
          className="app_headerImage"
          src={process.env.PUBLIC_URL + "/petdot_logo.png"}
          alt=""
          onClick={navigateToHome}
        />
        <label className="header_title">PetDot</label>
        <input type="text" placeholder="Search" className="search_input" />
        <IconButton
          aria-label="notificationsactive"
          onClick={() => {
            navigate("/notifications");
          }}
          style={{ color: "white", marginLeft: 300 }}
        >
          <Badge badgeContent={4} color="primary">
            <NotificationsActiveIcon />
          </Badge>
        </IconButton>

        <IconButton
          aria-label="notificationsactive"
          onClick={() => {
            navigate("/cart");
          }}
          style={{ color: "white", marginLeft: 30 }}
        >
          <Badge badgeContent={totalCarts || 0} color="primary">
            <CartIcon />
          </Badge>
        </IconButton>

        {!isLoggedIn ? (
          <>
            <label
              type="button"
              onClick={() => {
                navigate("/login");
              }}
              style={{
                marginLeft: 40,
                padding: 5,
                color: "white",
                border: "0.01px lightblue",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              LOG IN
            </label>
            <label
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
              style={{
                marginLeft: 40,
                padding: 5,
                color: "white",
                border: "0.01px lightblue",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              SIGN UP
            </label>
          </>)
		  : <label
              type="button"
              onClick={() => {
                localStorage.removeItem('token');

				window.location.href="/"
				window.location.reload()
              }}
              style={{
                marginLeft: 40,
                padding: 5,
                color: "white",
                border: "0.01px lightblue",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              LOG OUT
            </label>
        }
      </div>
    </div>
  );
}
