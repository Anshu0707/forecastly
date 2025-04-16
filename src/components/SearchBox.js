import { useState } from 'react';

const SearchBox = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city.trim()) onSearch(city);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter city" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Get Weather</button>
        </div>
    );
};

export default SearchBox;