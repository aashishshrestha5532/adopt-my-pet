import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

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

const Category = ({ title }) => {
	const navigate = useNavigate();

	const navigateToDetail = (id) => {
		return navigate(`/detail/${id}`);
	};

	return (
		<div>
			<h3 style={{ color: '#748DA6' }}>{title}</h3>
			<div className="new_petList">
				{Pets.map((pet) => (
					<div className="postWrapper" onClick={() => navigateToDetail(pet.breed)}>
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
	return (
		<div className="App">
			<div className="app_header">
				<div className="app_headerWrapper">
					<img className="app_headerImage" src={process.env.PUBLIC_URL + '/petdot_logo.png'} alt="" />
					<label className="header_title">PetDot</label>
					<input type="text" placeholder="Search" className="search_input" />
				</div>
			</div>

			<div className="body">
				<Category title={'Newly Added Dogs'} />
				<Category title={'Rare Dogs'} />
				<Category title={'Pug'} />
			</div>
		</div>
	);
}

export default Categories;
