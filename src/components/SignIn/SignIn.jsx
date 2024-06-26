// // import React, { useState,useEffect } from "react";
// // import "./SignIn.css";
// // import { useNavigate } from "react-router-dom";
// // import { useUser } from "../Provider/UserProvider";
// // import { FaFacebook } from "react-icons/fa";
// // import { toast } from "react-toastify";

// // function SignIn() {
// //     const { setUserContext: signInContext, authTokenData, setAuthTokenData } = useUser();
// //     const navigate = useNavigate();
// //     const [userInfo, setUserInfo] = useState({
// //         email: '',
// //         password: ''
// //     });
// //     const [error, setError] = useState(null);

// //     function handleChange(event) {
// //         const { name, value } = event.target;
// //         setUserInfo({ ...userInfo, [name]: value });
// //         setError(null); // Reset error when the user makes changes
// //     }
// //     const { isUserLoggedIn } = useUser();

// //     useEffect(() => {
// //         console.log(isUserLoggedIn)
// //         if (isUserLoggedIn) {
// //             navigate("/");
// //         }
// //     });

// //     async function signIn(userInfo) {
// //         try {
// //             const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
// //                 method: 'POST',
// //                 headers: {
// //                     'projectID': 'q0hgf03522dr',
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({
// //                     ...userInfo,
// //                     appType: 'facebook',
// //                 })
// //             });

// //             if (response.ok) {
// //                 const data = await response.json();
// //                 const { token, data: { name } } = data;

// //                 localStorage.setItem('authToken', token);
// //                 localStorage.setItem('userInfo', JSON.stringify({ name }));
// //                 setAuthTokenData(token);

// //                 signInContext(token);
// //                 toast("Logged-In Successfully");
// //                 navigate('/');
// //             } else {
// //                 // const errorData = await response.json();
// //                 // console.log(errorData);
// //                 console.error("SignIn Failed");
// //                 alert("Sign In failed");
// //                 setError(errorData.message); // Set the error message
// //             }
// //         } catch (error) {
// //             console.error("SignIn failed", error);
// //         }
// //     }

// //     function handleSubmit(event) {
// //         event.preventDefault();
// //         signIn(userInfo);
// //     }

// //     return (
// //         <div className="signin-page">
// //             <div className="signin-description">
// //                 {/* <h3 className="signin-heading">facebook</h3>
// //                 <p className="signin-para">Facebook helps you connect and share with the people in your life.</p> */}
// //                  <FaFacebook id="signin-logo" className="nav-logo" />
// //                  <h2 className="sigin-header">Sign in to your account</h2>
// //             </div>
           
// //             <div className="signin">
            
// //                 <form onSubmit={handleSubmit}>
// //                     <label for="email" className="signin-email-label">Email Address</label>
// //                     <input
// //                         type="text"
// //                         id="email"
// //                         name="email"
// //                         className="signin-input"
// //                         placeholder="Email address"
// //                         value={userInfo.email}
// //                         onChange={handleChange}
// //                     />
// //                     <label for="password" className="signin-password-label">Password</label>
// //                     <input
// //                         type="password"
// //                         id="password"
// //                         name="password"
// //                         className="signin-input"
// //                         placeholder="Password"
// //                         value={userInfo.password}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                     <input
// //                         type="submit"
// //                         value='Sign in'
// //                         className="signin-input"
// //                         required
// //                         id="signin-button"
// //                     />
// //                     {/* Display error message */}
// //                     {error && <p className="error-message">{getErrorText(error)}</p>}
// //                     {/* <p className="signin-p" onClick={() => alert("Try with correct Password")}>Forgotten password?</p> */}
// //                     <hr></hr>
// //                     <div className="signup-button-container">
// //                         <input
// //                             type="submit"
// //                             value="Create new account"
// //                             className="signup-button"
// //                             onClick={() => navigate('/signup')}
// //                         />
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // }


// // function getErrorText(error) {
// //     switch (error) {
// //         case "incorrect_email":
// //             return "Incorrect email address";
// //         case "incorrect_password":
// //             return "Incorrect password";
// //         default:
// //             return "Unknown error";
// //     }
// // }

// // export default SignIn;


// import React, { useState, useEffect } from "react";
// import "./SignIn.css";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../Provider/UserProvider";
// import { FaFacebook } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function SignIn() {
//     const { setUserContext: signInContext, authTokenData, setAuthTokenData } = useUser();
//     const navigate = useNavigate();
//     const [userInfo, setUserInfo] = useState({
//         email: '',
//         password: ''
//     });
//     const [error, setError] = useState(null);

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setUserInfo({ ...userInfo, [name]: value });
//         setError(null); // Reset error when the user makes changes
//     }
//     // const { isUserLoggedIn } = useUser();

//     // useEffect(() => {
//     //     console.log(isUserLoggedIn)
//     //     if (isUserLoggedIn) {
//     //         navigate("/");
//     //     }
//     // });

//     async function signIn(userInfo) {
//         try {
//             const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
//                 method: 'POST',
//                 headers: {
//                     'projectID': 'q0hgf03522dr',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     ...userInfo,
//                     appType: 'facebook',
//                 })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 const { token, data: { name } } = data;

//                 localStorage.setItem('authToken', token);
//                 localStorage.setItem('userInfo', JSON.stringify({ name }));
//                 setAuthTokenData(token);

//                 signInContext(token);
//                 // setTimeout(() => {
//                 //     toast("Logged-Out Succesfully");
//                 //   });
//                 navigate('/');
//             } else {
//                 const errorData = await response.json();
//                 console.error("SignIn Failed", errorData.message);
//                 alert("Sign In failed");
//                 setError(errorData.message); // Set the error message
//             }
//         } catch (error) {
//             console.error("SignIn failed", error);
//         }
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         signIn(userInfo);
//         // toast.success("Logged-In Successfully"); 
//         // setTimeout(() => {
//         //     navigate('/');
//         // }); 
//         setTimeout(() => {
//             toast("Logged-In Succesfully");
//           });
//     }

//     return (
//         <div className="signin-page">
//             <ToastContainer /> 
//             <div className="signin-description">
//                  <FaFacebook id="signin-logo" className="nav-logo" />
//                  <h2 className="sigin-header">Sign in to your account</h2>
//             </div>
           
//             <div className="signin">
            
//                 <form onSubmit={handleSubmit}>
//                     <label for="email" className="signin-email-label">Email Address</label>
//                     <input
//                         type="text"
//                         id="email"
//                         name="email"
//                         className="signin-input"
//                         placeholder="Email address"
//                         value={userInfo.email}
//                         onChange={handleChange}
//                     />
//                     <label for="password" className="signin-password-label">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         className="signin-input"
//                         placeholder="Password"
//                         value={userInfo.password}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="submit"
//                         value='Sign in'
//                         className="signin-input"
//                         required
//                         id="signin-button"
//                     />
//                     {/* {error && <p className="error-message">{getErrorText(error)}</p>} */}
//                     <hr></hr>
//                     <div className="signup-button-container">
//                         <input
//                             type="submit"
//                             value="Create new account"
//                             className="signup-button"
//                             onClick={() => navigate('/signup')}
//                         />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }


// // function getErrorText(error) {
// //     switch (error) {
// //         case "incorrect_email":
// //             return "Incorrect email address";
// //         case "incorrect_password":
// //             return "Incorrect password";
// //         default:
// //             return "Unknown error";
// //     }
// // }

// export default SignIn;

import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useUser } from "../Provider/UserProvider";
import { FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
    const { setUserContext: signInContext, authTokenData, setAuthTokenData } = useUser();
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
        setError(null); // Reset error when the user makes changes
    }

    async function signIn(userInfo) {
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
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
                const { token, data: { name,_id } } = data;
                console.log(_id);
                setUserId(_id);
                
                localStorage.setItem('authToken', token);
                localStorage.setItem('userInfo', JSON.stringify({ name }));
                setAuthTokenData(token);
                
                signInContext(token);
                toast("Logged-In Successfully");
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error("SignIn Failed", errorData.message);
                alert("Sign In failed");
                setError(errorData.message); // Set the error message
            }
        } catch (error) {
            console.error("SignIn failed", error);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        signIn(userInfo);
    }
    console.log(userId);
    return (

        <div className="signin-page">
            <ToastContainer /> 
            <div className="signin-description">
                 <FaFacebook id="signin-logo" className="nav-logo" />
                 <h2 className="sigin-header">Sign in to your account</h2>
            </div>
           
            <div className="signin">
            
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="signin-email-label">Email Address</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="signin-input"
                        placeholder="Email address"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="password" className="signin-password-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="signin-input"
                        placeholder="Password"
                        value={userInfo.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="submit"
                        value='Sign in'
                        className="signin-input"
                        required
                        id="signin-button"
                    />
                    <hr></hr>
                    <div className="signup-button-container">  
                        <NavLink to="/signup" className="signup-button">Create new account</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;

