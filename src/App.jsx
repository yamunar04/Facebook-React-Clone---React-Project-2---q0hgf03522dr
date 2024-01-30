import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import SearchResult from './components/Search/SearchResult';
import UserProfile from './components/UserProfile/UserProfile';
import SinglePost from './components/SinglePost/SinglePost';
import CreatePostForm from './components/CreatePosts/CreatePostForm';
import CreatePageForm from './components/CreatePages/CreatePageForm';
import ChannelsList from './components/Channels/ChannelsList/ChannelsList';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userprofile/:userId" element={<UserProfile />} />
          <Route path="/search/:term" element={<SearchResult />} />
          <Route path="/posts/:_id" element={<SinglePost />} />
          <Route path="/channelslist" element={<ChannelsList />} />
          <Route path="/createposts" element={<CreatePostForm />} />
          <Route path="/createpages" element={<CreatePageForm />} />

        </Routes>
      </div>
    </>
  )
}

export default App
