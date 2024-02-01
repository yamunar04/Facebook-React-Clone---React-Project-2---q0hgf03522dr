import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserProvider";
import DatePicker from "./DatePicker/DatePicker";


function SignUp() {
    const { setUserContext: signUpContext, authTokenData, setAuthTokenData } = useUser();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        gender: '',
    });
    const [error, setError] = useState({
        text: '',
        color: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    async function signUp(userInfo) {
        try {
            // Validation checks
            if (!userInfo.name || !userInfo.password || !userInfo.email || !userInfo.gender) {
                setError({ text: 'All fields must be filled', color: 'red' });
                return;
            } else if (!userInfo.email.includes('@')) {
                setError({ text: 'Email is invalid', color: 'red' });
                return;
            } else if (userInfo.password.length < 6) {
                setError({ text: 'Password should be more than length 6', color: 'red' });
                return;
            }

            // If validation passes, proceed with signup
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/signup", {
                method: 'POST',
                headers: {
                    'projectID': 'q0hgf03522dr',
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

                signUpContext(token);
                navigate('/');
            } else {
                console.error("SignUp Failed");
            }

        } catch (error) {
            console.log("SignUp failed", error);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        signUp(userInfo);
        alert("Signed Up Successfully");
    }

    return (
        <div className="signup-page">

            <div className="signup">
                <div className="signup-header-section">
                    <div>Sign Up</div>
                    <span>It's quick and easy</span>
                </div>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div className="input-div-section">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="First name"
                            required
                            value={userInfo.firstName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            required
                            placeholder="Surname"
                            value={userInfo.surname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="div-input-spacing">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="input-email-section"
                            placeholder="Email address"
                            required
                            value={userInfo.email}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="div-input-spacing">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input-password-section"
                            placeholder="New password"
                            required
                            value={userInfo.password}
                            onChange={handleChange}
                        />
                    </div>

                    <DatePicker />
                    <div className="gender-section">
                        <span className="gender-section1">Gender:</span>
                        <div className="gender-section2">
                            <div className="gender-section3">
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        className="gender-section3-input"
                                        checked={userInfo.gender === 'male'}
                                        onChange={handleChange}
                                    />
                                    Male
                                </label>
                            </div>

                            <div className="gender-section3">
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className="gender-section3-input"
                                        checked={userInfo.gender === 'female'}
                                        onChange={handleChange}
                                    />
                                    Female
                                </label>
                            </div>
                            <div className="gender-section3">
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        className="gender-section3-input"
                                        checked={userInfo.gender === 'other'}
                                        onChange={handleChange}
                                    />
                                    Other
                                </label>
                            </div>

                        </div>
                    </div>
                    <p className="error" style={{ color: `${error.color}` }}>{error.text}</p>
                    <div className="sign-up-submit-button">
                        <input type="submit" value='Sign Up' id="signup-button" />
                    </div>

                </form>
            </div>
        </div>
    );
}

export default SignUp;


