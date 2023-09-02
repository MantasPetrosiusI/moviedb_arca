import "../css/SearchPage.css"; // Import the CSS file

function SearchPage() {
  return (
    <div className="search-page">
      <input
        className="search-input"
        type="text"
        placeholder="Search for movies"
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchPage;
