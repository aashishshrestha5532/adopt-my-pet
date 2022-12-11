import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { getValue } from "../utils/storage";
import "./Cart.css";
const styles = {
  container: {
    flex: 1,
    padding: 15,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    objectFit: "contain",
  },
};

export default function Cart() {
  const carts = getValue("cart");

  const navigate = useNavigate();

  const total = carts.reduce((acc,item) => 10 + acc,0)

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={{ textAlign: "center" }}>Cart</h1>

        {/* Table data */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <table style={{ width: "60%", border: 0 }} border={"0px"}>
            <tr>
              <th>Pet</th>
              <th>Breed</th>
              <th>Contact</th>

              <th>Price</th>
            </tr>

            {carts.map((cart) => (
              <tr>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={cart.url}
                      width={50}
                      height={50}
                      style={styles.cartImage}
                    />
                  </div>
                </td>
                <td>{cart.breed}</td>
                <td>9708912112</td>

                <td>$10</td>
              </tr>
            ))}

            <tr>
              <td>
                <div style={{ display: "flex", alignItems: "center" }}></div>
              </td>
              <td></td>
              <td>
                <b>Total</b>
              </td>
              <td>
                <b>${total}</b>
              </td>
            </tr>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="checkout-btn" onClick={() => navigate("/payment")}>
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );
}
