import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostsCard from '../Posts/PostsCard/PostsCard';
import "./SearchBar.css";
import Navbar from '../Navbar/Navbar';

const SearchResult = () => {
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);

      try {
        const postResponse = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"${term}", "title":"${term}", "content":"${term}","channel.name":"${term}"}`, {
          headers: {
            'projectId': 'q0hgf03522dr',
          },
        });
        const data = await postResponse.json();
        console.log(data)
        setSearchResults(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [term]);

  return (
    <>
      <Navbar />
      <div>
        <h2 className='search-results'>Search Results for "{term}"</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="postList-container">
            {searchResults.map((post, index) => (
              <PostsCard key={index} {...post} />
            ))}
          </div>
        )}
      </div>
    </>

  );
};

export default SearchResult;
