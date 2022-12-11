import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Header";

const appStyle = {
  height: "450px",
  display: "flex",
};

const formStyle = {
  margin: "auto",
  padding: "20px",
  border: "1px solid #c9c9c9",
  borderRadius: "5px",
  background: "#f5f5f5",
  width: "220px",
  display: "block",
};

const labelStyle = {
  margin: "10px 0 5px 0",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px",
};

const inputStyle = {
  margin: "5px 0 10px 0",
  padding: "5px",
  border: "1px solid #bfbfbf",
  borderRadius: "3px",
  boxSizing: "border-box",
  width: "100%",
};

const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#3085d6",
  width: "100%",
  fontSize: "15px",
  color: "white",
  display: "block",
};

const Field = React.forwardRef(({ label, type,required,name }, ref) => {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input ref={ref} type={type} style={inputStyle} required={required} />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const slugRef = React.useRef();
  const breedRef = React.useRef();
  const ageRef = React.useRef();

  const categoryRef = React.useRef();
 const urlRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      slug: slugRef.current.value,
      breed: breedRef.current.value,
      age: ageRef.current.value,
      category: categoryRef.current.value,
       url: urlRef.current.value,
    };
    onSubmit(data);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit}>

      <Field ref={slugRef} label="Slug:" type="text" required={true}/>
      <Field ref={breedRef} label="Breed:" type="text" required={true} />
      <Field ref={ageRef} label="Age:" type="text"  required={true}/>

      <Field ref={categoryRef} label="Category:" type="text" required={false} />
      <Field ref={urlRef} label="Image:" type="file" required={false} />

      <div>
        <button style={submitStyle} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

// Usage example:

const App = () => {
  const handleSubmit = (data) => {
    fetch("http://localhost:3001/pets", {
      method: "POST",
        headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(data)
    }).then(response => response.json()).then((response) => {
        alert('New pet registered successfully')

    });
       
   };
  return (
    <div>
      <Header />

      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default App;
