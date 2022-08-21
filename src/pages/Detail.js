import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import './Detail.css';


const dog = {
		breed: 'Labrador Retriever',
		age: '6 months',
		info: [' Creamy white in color.',' Very friendly and a playful pup.',' Well-trained.'],
		url:
			'https://images.unsplash.com/photo-1561495376-dc9c7c5b8726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFicmFkb3IlMjByZXRyaWV2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
	}
	
const Pets = [
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
	
	
	return (
		<div>
			<h3 style={{ color: '#748DA6' }}>{title}</h3>
			<div className="new_petList">
				{Pets.map((pet) => (
					<div className="postWrapper" >
						<div className="imageWrapper">
							<img src={pet.url} alt="" className="postImage" />
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

export default function Detail() {
	const params = useParams();

	console.log('params', params.id);

	const [data,setdata]= useState({})

	useEffect(() => {
		// khaali haat aayethe hum

		// it is execute before the component mounts

		// api call 
		// api set

		fetch(`http://localhost:3001/pets/${params.id}`).then((response) => response.json())
		  .then((data) => {
			console.log('data',data)
			setdata(data)}
			);
		console.log('helli i am under categoruy state')
	},[params.id])

	console.log('dtta',data)
	if(!data) {
		return null;
	}

	return (
		<div className="App">
			<Header />
			<div className="body">
				<div className="dog_detail" >
					
						<div className='detail_wrapper'>
							<div className='image_wrapper'>
							<img src={data.url} alt="" className='dog_image'/>
							</div>
							<div className='dog_info'>
								<label className="dogBreed"><b>Breed: </b>{data.breed}</label>
							<br />
							<label className="dogAge"><b>Age: </b>{data.age}</label>
							<br/>
							<ul>
								{data?.description?.map(item => (
                                  <li className='left'><label className='dogInfo'>{item}</label></li>
								))}
							</ul>
							</div>
					</div>
				</div>
				<div>
				<Category title={'Similar pets like this'} />

				<div style={{ height: 50 }} />
			</div>
			</div>
		</div>
	);
}
