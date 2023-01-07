const SearchColor = ({ colorValue, setColorValue }) => {
  return (
    <form className="searchForm grid place-content-center" onSubmit={(e) => e.preventDefault()}>
      {/* <label htmlFor="search">Search Color Name:</label> */}
        <input
          type="text"
          autoFocus
          placeholder="Search Color Name"
          required
          id="search"
          role="searchbox"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          class="border-2 w-72 h-11 bg-white text-slate-900 rounded-md mt-1 pl-6"
        />
    </form>
  );
};

export default SearchColor;
