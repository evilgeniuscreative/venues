function Search() {
  return (
    <>
      <main>
        <label htmlFor="searchBy"></label>
        <select name="SearchBy" id="searchBy">
          <options></options>
          <options></options>
          <options></options>
          <options></options>
        </select>
        <label htmlFor="search"></label>
        <input type="text" id="search" />
      </main>
    </>
  );
}

export default Search;
