import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { YoutubeSearchedForSharp } from "@mui/icons-material";

function App() {
  const Pets = [
    {
      breed: "Labrador Retriever",
      age: "6 months",
      url: 
      "https://images.unsplash.com/photo-1561495376-dc9c7c5b8726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFicmFkb3IlMjByZXRyaWV2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      breed:"Pug",
      age: "3 months",
      url:
      "https://images.unsplash.com/photo-1587245976235-8967aa9277a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVnJTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];
  return (
    <div className="App">
      <div className="app_header">
        <div className="app_headerWrapper">
        <img className="app_headerImage"
        src={process.env.PUBLIC_URL+'/petdot_logo.jpg'}
        alt = ''
        />
        </div>
      </div>
      <div className="cover">
        <img src={process.env.PUBLIC_URL+'/cover.jpg'} alt=''/>
      </div>
      <div className="category">
      <Stack spacing={8} direction="row">
      <Button variant="outlined" size="large">Dogs</Button>
      <Button variant="outlined" size="large">Cats</Button>
      <Button variant="outlined" size="large">Other Pets</Button>
    </Stack>
      </div>
      <div className="body">
      <h2 style={{ color: "#748DA6" }}>Newly Added Pets</h2>
      <div className="new_petList">
        {Pets.map((pet) => (
          <div className="">
            <div className="imageWrapper">
              <img
              src={pet.url}
              alt='Image Cover'
              className="postImage"/>
            </div>
            <label className="petBreed">{pet.breed}</label><br/>
            <label className="petAge">{pet.age}</label>
          </div>
        )) }
      </div>
      </div>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
