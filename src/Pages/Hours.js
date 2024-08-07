import React from "react";
import "./Hours.css";
import { useNavigate } from "react-router-dom";

function Hours() {
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

            <section className="shopImg">
                <div className="fstdiv">
                    <img src="hrs.jpeg" className="hrs_img"></img>
                    <img src="res_img.jpeg" className="hrs_img"></img>
                </div>
            </section>

            <section className="title">
                <h1 className="text-big">Hours & Location</h1>
                <p className="text-small"><b>Hours of Operation:</b><br></br>
                    Monday - Thursday: 11:00 AM - 9:00 PM<br></br>
                    Friday - Saturday: 11:00 AM - 10:00 PM<br></br>
                    Sunday: Closed<br></br><br></br>

                    <b>Location:</b><br></br>
                    Dragon's Den<br></br>
                    123 Main Street<br></br>
                    Bangalore, Karnataka<br></br><br></br>

                    <b>Dragon's Den is conveniently located in the heart of 
                    Bangalore, easily accessible from major highways and 
                    public transportation. Our central location ensures 
                    that you can enjoy our delectable cuisine without 
                    any hassle. Whether you're a local resident or just 
                    passing through, we look forward to welcoming you to 
                    our restaurant.</b></p>
            </section>

            <section className="about">
                <h1 className="text-big"> About Us</h1>
                <p className="text-small"><i>Welcome to Dragon's Den, where 
                culinary excellence meets traditional charm! Established 
                with a passion for sharing the rich tapestry of Chinese 
                cuisine, our restaurant is a testament to the artistry and 
                authenticity that define our culinary offerings.<br></br><br></br>
                At Dragon's Den, we pride ourselves on offering a dining 
                experience that transcends the ordinary. Our journey began 
                with a vision to create a space where guests can immerse 
                themselves in the flavors and aromas of China, right here 
                in Bangalore. From the moment you step through our doors, 
                you'll be greeted with warm hospitality and an ambiance 
                that reflects the vibrant spirit of Chinese culture.<br></br><br></br>
                Our menu is a celebration of the diverse regional cuisines 
                that make up the culinary landscape of China. From the 
                fiery spices of Sichuan to the delicate dim sum of Cantonese 
                cuisine, each dish is crafted with precision and care by 
                our talented chefs. We source the finest ingredients and 
                stay true to time-honored recipes, ensuring that every bite 
                is a journey through the heart of China.<br></br><br></br>
                But more than just a place to eat, Dragon's Den is a 
                gathering place for friends and family to come together 
                and create lasting memories. Whether you're celebrating a 
                special occasion or simply craving a delicious meal, we 
                invite you to join us at Dragon's Den and experience the 
                magic of authentic Chinese cuisine.<br></br><br></br>
                Welcome to our table, welcome to Dragon's Den.</i></p>
            </section>

			<footer className="footerA">
				<p className="text-footer">
					Copyright ©-All rights are reserved.<br></br>
					Keerthana Arun<br></br>
					22BDS0041<br></br>
				</p>
			</footer>
		</div>
	);
}

export default Hours;