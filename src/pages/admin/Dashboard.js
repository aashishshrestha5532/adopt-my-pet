import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { storeValue, getValue } from "../../utils/storage";

const Category = ({ title }) => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const carts = getValue("cart") || [];

  useEffect(() => {
    // khaali haat aayethe hum

    // it is execute before the component mounts

    // api call
    // api set

    setLoading(true);
    fetch("http://localhost:3001/pets")
      .then((response) => response.json())
      .then((data) => {
        // if data arrives, set loading to false
        setLoading(false);
        setdata(data);
      })
      .catch((error) => {
        // also if data not found set loading to false
        setLoading(false);
      });
    console.log("helli i am under categoruy state");
  }, []);

  const navigateToDetail = (id) => {
    return navigate(`/detail/${id}`);
  };

  const onAddCart = (category) => {
    const alreadyAddedCarts = carts || [];

    const existedItem = alreadyAddedCarts.find((item) => item.category.breed);

    if (!existedItem) {
      const newCarts = [...alreadyAddedCarts, category];

      storeValue("cart", newCarts);
    }
  };

  return (
    <div>
      <h3 style={{ color: "#748DA6" }}>{title}</h3>
      <div className="new_petList">
        {loading ? (
          <div style={{ textAlign: "center", fontWeight: "600" }}>
            Loading...
          </div>
        ) : data.length === 0 ? (
          <label style={{ width: 400 }}>No data found</label>
        ) : (
          data.map((pet) => (
            <div className="postWrapper">
              <div
                className="imageWrapper"
                onClick={() => navigateToDetail(pet.id)}
              >
                <img src={pet.url} alt="Image Cover" className="postImage" />
              </div>
              <div className="pet_info">
                <label className="petBreed">{pet.breed}</label>
                <br />
                <label className="petAge">{pet.age}</label>
                <br />

                <label className="petAge">Category: <b>{pet.category}</b></label> <br />
                <label  className="petAge" >Color: <b>{pet.color}</b></label>
                <br /> <br />
                <button onClick={() => alert(`${pet.breed} is approved`)}>Approve</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header />

      <div className="body">
        <Category title={"Newly Added Pets"} />

        <div style={{ height: 50 }} />
      </div>
    </div>
  );
}

export default Home;
