import React, { useState } from "react";
import "./CreatePages.css";
import { useNavigate } from 'react-router-dom';
import { createPageApi } from "../../helper/createPageAPI";
import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePageForm = () => {
  const authToken = localStorage.getItem("authToken");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImages] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createPageApi(authToken, name, description, image);
    setTimeout(() => {
      toast("Page Created Successfully");
    });
    // alert("Page Created Successfully");
    navigate("/");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages(file);
  };

  return (
    <>
      <Navbar />
      <div className="createpage-form">
        <ToastContainer />
      <h3 className="create-page-header">Create New Facebook Page</h3>
        <div className="createpage-form-container">       
          <form onSubmit={handleSubmit} >
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={name}
              placeholder="Add title"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              placeholder="Add description"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

            <label htmlFor="image">Image:</label>
            <input type="file" id="image" onChange={handleImageChange} required/>
            <button type="submit" >Create Page</button>
          </form>
        </div>
      </div>

    </>
  );
};

export default CreatePageForm;

