import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

const Pets = [
	{
		breed: 'Labrador Retriever',
		age: '6 months',
		url:
			'https://images.unsplash.com/photo-1561495376-dc9c7c5b8726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFicmFkb3IlMjByZXRyaWV2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
	},
	{
		breed: 'Pug',
		age: '3 months',
		url:
			'https://images.unsplash.com/photo-1587245976235-8967aa9277a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVnJTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		breed: 'Leopard Cat',
		age: '1 month',
		url:
			'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	}
];

const Category = ({ title,data }) => {
	const navigate = useNavigate();

	const navigateToDetail = (id) => {
		return navigate(`/detail/${id}`);
	};

	return (
		<div>
			<h3 style={{ color: '#748DA6' }}>{title}</h3>
			<div className="petList">
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

function Categories() {

	const {type} = useParams();

	console.log('type',type);
	const [data,setdata]= useState([])
	useEffect(() => {

		fetch(`http://localhost:3001/pets?category=${type}`).then((response) => response.json())
		  .then((data) => setdata(data));
		
	},[type])
	// http://localhost:3001/pets?category=${type}

	console.log(data)
	return (
		<div className="App">
			<Header/>

			<div className="body">
				<Category title={`Newly Added ${type}`} data={data} />
				{/* <Category title={'Rare Dogs'} />
				<Category title={'Pug'} /> */}
			</div>
		</div>
	);
}

export default Categories;
