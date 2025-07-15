import { useState } from "react";
import { useData } from "../state/DataContext";

export function ItemsSearch() {
  const [search, setSearch] = useState('')
  const { setSearchTerm } = useData()

  return <>
    <input onChange={(e) => {
      setSearch(e.target.value)
    }}/>
    <button onClick={() => setSearchTerm(search)}>Search</button>
  </>
}