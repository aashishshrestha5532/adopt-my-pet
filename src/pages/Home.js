import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <label
        onClick={() => {
          navigate("detail/11");
        }}
      >
        Go to detail
      </label>
    </div>
  );
}
