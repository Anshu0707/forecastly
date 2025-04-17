import { useState } from 'react';
import cityList from "../utils/cityList"

const SearchBox = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const[suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setCity(value);       // Setting state value to the input city in the searchbox to render it to UI.

        if(value.length > 0){
            const filtered = cityList.filter( (c) => c.toLowerCase().includes(value.toLowerCase())).slice(0,15)   //Limiting to 15 suggestions. This will return a filtered list array.
            setSuggestions(filtered.slice(0,15)); //Limiting Suggestions to 15.
        } else{
            setSuggestions([])
        }
    };

    const handleSearch = () => {
        if (city.trim()) onSearch(city);
        setSuggestions([]);
    };

    const handleSuggestionClick = (suggestedCity) => {
        setCity(suggestedCity);
        setSuggestions([]);
        onSearch(suggestedCity);
    };

    return (
        <div className='search-container'>
            <input 
                type="text" 
                placeholder="Enter city" 
                value={city} 
                onChange={handleChange}
            />
            <button className="search-button" onClick={handleSearch}>Get Weather</button>

            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                 {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)} className='suggestion-item'>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBox;