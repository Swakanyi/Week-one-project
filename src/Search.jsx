import React, { useState } from 'react'

function Search ( {onSearch} ) {
    const [ query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        className='search'
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <button type="submit" className="btn"> Search</button>
      </div>
    </form>
  )
}

export default Search