const Search = ({ search, setSearch }) => {
  return (
    <header>
      <h1>😎 EmojiSearch 😎</h1>
      <form>
        <input
          placeholder="What emoji are you looking for ?"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </header>
  );
};

export default Search;
