import React from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
	const nav = useNavigate();
 
    const SignIn = () => {
        nav("/SignIn");
	}

	return (
		<div class = "fullPage">
			<nav class="navbar background">
				<ul class="nav-list">
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

			<section className = "sectionA">
					<div className = "divA">
						<h1 className = "text-big">Veg</h1>
						<h3 className = "text-mid">Starters</h3>
						<ul className="starters">
							<li><p className = "text-small">Spring Rolls ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Manchurian ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Baby Corn Fritters ---------------------- Rs 110</p></li>
							<li><p className = "text-small">Sweet Chili Potatoes -------------------- Rs 120</p></li>
							<li><p className = "text-small">Crispy Chili Corn ----------------------- Rs 120</p></li>
						</ul>
						<h3 className = "text-mid">Noodles</h3>
						<ul className="starters">
							<li><p className = "text-small">Soft Noodles ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Chilli Garlic Noodles ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Schezwan Noodles ---------------------- Rs 110</p></li>
							<li><p className = "text-small">Singapore Noodles -------------------- Rs 120</p></li>
							<li><p className = "text-small">Hakka Noodles ----------------------- Rs 120</p></li>
						</ul>
						<h3 className = "text-mid">Fried Rice</h3>
						<ul className="starters">
							<li><p className = "text-small">Spring Rolls ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Manchurian ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Baby Corn Fritters ---------------------- Rs 110</p></li>
							<li><p className = "text-small">Sweet Chili Potatoes -------------------- Rs 120</p></li>
							<li><p className = "text-small">Crispy Chili Corn ----------------------- Rs 120</p></li>
						</ul>
						<h3 className = "text-mid">Soup</h3>
						<ul className="starters">
							<li><p className = "text-small">Spring Rolls ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Manchurian ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Baby Corn Fritters ---------------------- Rs 110</p></li>
							<li><p className = "text-small">Sweet Chili Potatoes -------------------- Rs 120</p></li>
							<li><p className = "text-small">Crispy Chili Corn ----------------------- Rs 120</p></li>
						</ul>
						<h3 className = "text-mid">Dessert</h3>
						<ul className="starters">
							<li><p className = "text-small">Spring Rolls ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Manchurian ----------------------------- Rs 100</p></li>
							<li><p className = "text-small">Baby Corn Fritters ---------------------- Rs 110</p></li>
							<li><p className = "text-small">Sweet Chili Potatoes -------------------- Rs 120</p></li>
							<li><p className = "text-small">Crispy Chili Corn ----------------------- Rs 120</p></li>
						</ul>
					</div>

					<div className = "divB">
						<h1 className = "text-big">Non-Veg</h1>
						<h3 className = "text-mid">Starters</h3>
						<ul className="starters">
							<li><p className = "text-small">Kung Pao Chicken ------------------------- Rs 150</p></li>
							<li><p className = "text-small">Diced Chicken in Devil's Sauce ------------ Rs 150</p></li>
							<li><p className = "text-small">Lollipops ---------------------------------- Rs 155</p></li>
							<li><p className = "text-small">Butter Garlic Prawn ----------------------- Rs 175</p></li>
							<li><p className = "text-small">Sweet 'N Sour Chicken -------------------- Rs 160</p></li>
						</ul>
						<h3 className = "text-mid">Noodles</h3>
						<ul className="starters">
							<li><p className = "text-small">Chicken Soft Noodles ------------------------- Rs 150</p></li>
							<li><p className = "text-small"> ------------ Rs 150</p></li>
							<li><p className = "text-small">Lollipops ---------------------------------- Rs 155</p></li>
							<li><p className = "text-small">Butter Garlic Prawn ----------------------- Rs 175</p></li>
							<li><p className = "text-small">Sweet 'N Sour Chicken -------------------- Rs 160</p></li>
						</ul>
						<h3 className = "text-mid">Fried Rice</h3>
						<ul className="starters">
							<li><p className = "text-small">Kung Pao Chicken ------------------------- Rs 150</p></li>
							<li><p className = "text-small">diced Chicken in Devil's Sauce ------------ Rs 150</p></li>
							<li><p className = "text-small">Lollipops ---------------------------------- Rs 155</p></li>
							<li><p className = "text-small">Butter Garlic Prawn ----------------------- Rs 175</p></li>
							<li><p className = "text-small">Sweet 'N Sour Chicken -------------------- Rs 160</p></li>
						</ul>
						<h3 className = "text-mid">Soup</h3>
						<ul className="starters">
							<li><p className = "text-small">Kung Pao Chicken ------------------------- Rs 150</p></li>
							<li><p className = "text-small">diced Chicken in Devil's Sauce ------------ Rs 150</p></li>
							<li><p className = "text-small">Lollipops ---------------------------------- Rs 155</p></li>
							<li><p className = "text-small">Butter Garlic Prawn ----------------------- Rs 175</p></li>
							<li><p className = "text-small">Sweet 'N Sour Chicken -------------------- Rs 160</p></li>
						</ul>
						<h3 className = "text-mid">Dessert</h3>
						<ul className="starters">
							<li><p className = "text-small">Kung Pao Chicken ------------------------- Rs 150</p></li>
							<li><p className = "text-small">diced Chicken in Devil's Sauce ------------ Rs 150</p></li>
							<li><p className = "text-small">Lollipops ---------------------------------- Rs 155</p></li>
							<li><p className = "text-small">Butter Garlic Prawn ----------------------- Rs 175</p></li>
							<li><p className = "text-small">Sweet 'N Sour Chicken -------------------- Rs 160</p></li>
						</ul>
					</div>
			</section>
			
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved.<br></br>
					Keerthana Arun<br></br>
					22BDS0041<br></br>
				</p>
			</footer>
		</div>
	);
}

export default Menu;