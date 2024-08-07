import { Fragment } from "react";
import mainheaderImage from "../../Assets/headerBanner.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.Module.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const nav = useNavigate();
 
    const SignIn = () => {
        nav("/SignIn");
	}
  return (
    <Fragment>
      <header class="navbar2 background">
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
			</header>
      <header className="header">
        <h1>Order Now!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mainheaderImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;