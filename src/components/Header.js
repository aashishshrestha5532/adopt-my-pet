import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

	const navigateToHome = () => {
		return navigate(`/`);
	};
  return (
    <div className="app_header">
				<div className="app_headerWrapper">
					<img className="app_headerImage" src={process.env.PUBLIC_URL + '/petdot_logo.png'} alt="" 
                    onClick={navigateToHome}/>
					<label className="header_title">PetDot</label>
					<input type="text" placeholder="Search" className="search_input" />
				</div>
			</div>
  )
}
