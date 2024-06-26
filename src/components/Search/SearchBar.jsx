import React, { useState, useEffect , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const searchbarRef = useRef(null);

    const focusSearchBar = () => {
        if (searchbarRef.current) {
            searchbarRef.current.focus();
        }
    };

    const handleSearch = () => {
        navigate(`/search/${searchTerm}`);
    };

    useEffect(() => {
        const handlePageReload = (event) => {
            // Check if it's a page reload
            if (event.window.performance.navigation.type === 1) {
                setSearchTerm('');
            }
        };

        window.addEventListener('beforeunload', handlePageReload);

        return () => {
            window.removeEventListener('beforeunload', handlePageReload);
        };
    }, []);

    return (
        <>
            {/* <FaSearch onClick={focusSearchBar} className='search-bar-icon' /> */}
            <FaSearch  className='search-bar-icon' />
            <input
                type="text"
                id="search"
                // ref={searchbarRef}
                placeholder="Search...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="search-input"
            />
        </>
    );
};

export default SearchBar;

