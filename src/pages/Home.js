import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useState } from 'react';


const Category = ({ title }) => {
	const navigate = useNavigate();
	const [data,setdata]= useState([])

	useEffect(() => {
		// khaali haat aayethe hum

		// it is execute before the component mounts

		// api call 
		// api set

		fetch("http://localhost:3001/pets").then((response) => response.json())
		  .then((data) => setdata(data));
		console.log('helli i am under categoruy state')
	},[])

	const navigateToDetail = (id) => {
		return navigate(`/detail/${id}`);
	};

	return (
		<div>
			<h3 style={{ color: '#748DA6' }}>{title}</h3>
			<div className="new_petList">
				{data.map((pet) => (
					<div className="postWrapper" onClick={() => navigateToDetail(pet.id)}>
						<div className="imageWrapper">
							<img src={pet.url} alt="Image Cover" className="postImage" />
						</div>
						<div className="pet_info">
							<label className="petBreed">{pet.breed}</label>
							<br />
							<label className="petAge">{pet.age}</label>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

function Home() {
	return (
		<div className="App">
			<Header/>
			<div className="cover">
				<img src={process.env.PUBLIC_URL + '/cover.jpg'} alt="" className="coverImage" />
			</div>
			<div className="category">
				<Stack spacing={8} direction="row">
					<Button variant="outlined" size="large">
						Dogs
					</Button>
					<Button variant="outlined" size="large">
						Cats
					</Button>
					<Button variant="outlined" size="large">
						Other Pets
					</Button>
				</Stack>
			</div>
			<div className="body">
				<Category title={'Newly Added Pets'} />

				<div style={{ height: 50 }} />
			</div>
		</div>
	);
}

export default Home;
