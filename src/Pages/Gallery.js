import React from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

function Gallery() {
	const nav = useNavigate();
 
    const SignIn = () => {
        nav("/SignIn");
	}

	return (
		<div class = "fullPage">
			<nav class="navbar1 background">
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

            <section className="gallery1">
                <img src="gallery1.jpeg" className="gal_img"></img>
				<img src="babycorn.jpeg" className="gal_img"></img>
                <img src="gallery2.jpeg" className="gal_img"></img>
				<img src="buttergarlicprawn.jpeg" className="gal_img"></img>
				<img src="chiligarlicnoodles.jpeg" className="gal_img"></img>
                <img src="gallery5.jpeg" className="gal_img"></img>
				<img src="honeychilipotatoes.jpeg" className="gal_img"></img>
                <img src="gallery3.jpeg" className="gal_img"></img>
				<img src="lollipop.jpeg" className="gal_img"></img>
                <img src="gallery6.jpeg" className="gal_img"></img>
				<img src="manchurian.jpeg" className="gal_img"></img>
                <img src="gallery4.jpeg" className="gal_img"></img>
				<img src="schezwannoodles.jpeg" className="gal_img"></img>
                <img src="gallery7.jpeg" className="gal_img"></img>
				<img src="springrolls.jpeg" className="gal_img"></img>
                <img src="cat_img.jpg" className="gal_img"></img>
				<img src="sweetnsourchicken.jpeg" className="gal_img"></img>
                <img src="div_img1.jpeg" className="gal_img"></img>
            </section>

			<footer className="footerC">
				<p className="text-footer">
					Copyright ©-All rights are reserved.<br></br>
					Keerthana Arun<br></br>
					22BDS0041<br></br>
				</p>
			</footer>
		</div>
	);
}

export default Gallery;