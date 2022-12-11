import React from "react";
import Header from "../components/Header";
import './Payment.css';

const styles = {
  container: {
    flex: 1,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function Payment() {
  return (
    <>
      <Header />

      <div style={styles.container}>
        <h3>Choose Payment method</h3>

        <div style={{ width: "40%", height: 300 }}>
          <img src={process.env.PUBLIC_URL + "./esewa.png"} className="esewa" />

          <img
            src={process.env.PUBLIC_URL + "./khalti.png"}
            className="khalti"
          />
        </div>
      </div>
    </>
  )
}
