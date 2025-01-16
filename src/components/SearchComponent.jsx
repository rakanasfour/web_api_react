"use client";
import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = ({ onSearchResults }) => {
    const [query, setQuery] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) {
            setError('Please enter a search term!');
            return;
        }
        setError('');
        setLoading(true);

        try {
            const response = await axios.get('http://localhost:8080/api/items/search', {
                params: { name: query },
            });
            onSearchResults(response.data); // Pass results to the parent
        } catch (err) {
            console.error('Error fetching items:', err);
            setError('Failed to fetch results. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2"
            />
            <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                Search
            </button>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default SearchComponent;
