// Filename - App.js

import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
	const nav = useNavigate();
 
    const SignIn = () => {
        nav("/SignIn");
	}

	return (
		<div className = "fullPage">
			<nav className="navbar background">
				<ul className="nav-list">
						<li>
							<a href="/Menu" class = "a">Menus</a>
						</li>
						<li>
							<a href="/Hours&location" class = "a">Hours & Location</a>
						</li>
						<li>
							<a href="/Gallery" class = "a">Gallery</a>
						</li>
						<li>
							<a href="/Order" class = "a"><b>Order Now!</b></a>
						</li>
				</ul>
				<ul className="logo">
						<li>
							<a href="/Home" className = "a">Dragon's Den</a>
							<button className="signIn" onClick={SignIn}>Sign In</button>
						</li>
				</ul>
			</nav>

			<section className = "section1">
					<div className = "div1">
						<img src = "main_img.jpeg" class = "image"></img>
						<img src = "main_img2.jpeg" class = "image"></img>
						<img src = "main_img5.jpeg" class = "image"></img>
						<img src = "main_img3.jpeg" class = "image"></img>
					</div>
			</section>

			<section className="section">
				<div className="box-main">
					<div className="firstHalf">
						<h1 className="text-big">
							Menus
						</h1>
						<p className="text-small">
						Welcome to Dragon's Den, where 
						flavors dance and aromas enchant! Step 
						into a realm where tradition meets 
						innovation, where every dish tells a 
						tale of culinary mastery. Prepare your 
						taste buds for a journey through the 
						heart of China, where each bite is a 
						symphony of spices and textures.
						<br></br><br></br>
						Whether you crave the fiery heat of 
						Sichuan peppers, the subtle sweetness 
						of Cantonese delicacies, or the hearty 
						comfort of northern specialties, our 
						menu promises to delight even the most 
						discerning palate. So sit back, relax, 
						and let us whisk you away on a culinary 
						adventure like no other.
						</p>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="box-main">
					<div className="secondHalf">
						<h1 className="text-big" id="program">
							Catering
						</h1>
						<p className="text-small">
						Welcome to Dragon's Den Catering, where 
						we bring the vibrant flavors of China 
						to your special events and gatherings!
						<br></br><br></br>
						Elevate your next occasion with our 
						exquisite catering services, designed 
						to impress even the most discerning of 
						guests. From corporate luncheons to 
						elegant weddings, our experienced team 
						is dedicated to creating unforgettable 
						culinary experiences tailored to your 
						unique tastes and preferences.
						<br></br><br></br>
						Sit back, relax, and let us take your 
						event to the next level with our unparalleled 
						Chinese catering services. Trust 
						Gragon's Den to deliver an unforgettable 
						culinary experience that will leave a 
						lasting impression on your guests.
						</p>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="box-main">
					<div className="secondHalf">
						<h1 className="text-big" id="program">
							Reservation
						</h1>
						<p className="text-small">
						Welcome to Dragon's Den! Elevate your 
						dining experience with our exclusive 
						reservation service, where we ensure 
						that your visit is nothing short of 
						exceptional from the moment you step 
						through our doors.
						<br></br><br></br>
						Reserving your table at Dragon's Den 
						guarantees you a seat in our inviting 
						ambiance, where the tantalizing aromas 
						of authentic Chinese cuisine await. Whether 
						you're planning a romantic evening for two, 
						a family celebration, or a business gathering, 
						our reservation system ensures that your 
						preferences are met with precision and care.
						</p>
					</div>
				</div>
			</section>
			<footer className="footer1">
				<p className="text-footer">
					Copyright ©-All rights are reserved.<br></br>
					Keerthana Arun<br></br>
					22BDS0041<br></br>
				</p>
			</footer>
		</div>
	);
}

export default Home;
