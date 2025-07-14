import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [items, setItems] = useState([]);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState('1')

  const limit = 5
  const pagesTotal = Math.ceil(itemsTotal / limit)

  useEffect(() => {
    setPageNumber(1)
  }, [searchTerm])

  const fetchItems = useCallback(async (controller) => {

    // simulate some request duration
    setTimeout(async () => {
      let parsedJson

      try {
        const res = await fetch(`http://localhost:3001/api/items?limit=${limit}&page=${pageNumber}&q=${searchTerm}`, { signal: controller.signal }); // Intentional bug: backend ignores limit
        parsedJson = await res.json();
        setItems(parsedJson.items);
        setItemsTotal(parsedJson.total)
        console.log('following items have been set:', parsedJson);
      } catch {
        console.warn('request interrupted. following items have not been set:', parsedJson);
      }
    }, 1000);
  }, [searchTerm, pageNumber]);

  return (
    <DataContext.Provider value={{ items, pageNumber, pagesTotal, fetchItems, setSearchTerm, setPageNumber }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);