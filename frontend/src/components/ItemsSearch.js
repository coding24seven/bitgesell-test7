import { useState } from "react";
import { useData } from "../state/DataContext";

export function ItemsSearch() {
  const [search, setSearch] = useState('')
  const { setSearchTerm } = useData()

  const handleSearch = () => {
    setSearchTerm(search);
  };

  return <>
    <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}/>
    <button onClick={handleSearch}>Search</button>
  </>;
}