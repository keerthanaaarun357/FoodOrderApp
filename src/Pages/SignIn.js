import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./SignIn.css"

const SignIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
  
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
  
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
    navigate("/Home")
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
            <div className="mainContainer">
                <div className={'titleContainer'}>
                    <div className="text-big">Sign In</div>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input
                    value={email}
                    placeholder="Enter email"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input
                    value={password}
                    placeholder="Enter password"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Sign In'} />
                </div>
                </div>
                <footer className="footerD">
                    <p className="text-footer">
                        Copyright ©-All rights are reserved.<br></br>
                        Keerthana Arun<br></br>
                        22BDS0041<br></br>
                    </p>
                </footer>
	</div>
  )
}

export default SignIn