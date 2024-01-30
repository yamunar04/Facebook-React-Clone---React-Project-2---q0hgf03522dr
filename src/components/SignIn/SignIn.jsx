import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserProvider";

function SignIn() {
    const { setUserContext: signInContext, authTokenData, setAuthTokenData } = useUser();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    async function signIn(userInfo) {
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
                method: 'POST',
                headers: {
                    'projectID': 'edectfwoklm6',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...userInfo,
                    appType: 'facebook',
                })
            });

            if (response.ok) {
                const data = await response.json();
                const { token, data: { name } } = data;

                localStorage.setItem('authToken', token);
                localStorage.setItem('userInfo', JSON.stringify({ name }));
                setAuthTokenData(token);

                signInContext(token);
                alert("Logged-In Successfully");
                navigate('/');
            } else {
                console.error("SignIn Failed");
            }
        } catch (error) {
            console.error("SignIn failed", error);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        signIn(userInfo);
    }

    return (
        <div className="signin-page">
            <div className="signin-description">
                <h3 className="signin-heading">facebook</h3>
                <p className="signin-para">Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="signin">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                    <input type="submit" value='Sign In' id="signin-button" />
                    <p>Don't have an account?</p>
                    <button onClick={() => navigate('/signup')}>SignUp Here</button>
                </form>
            </div>
        </div>


    )
}

export default SignIn;
