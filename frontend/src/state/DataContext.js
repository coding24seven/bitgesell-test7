import React, { createContext, useCallback, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [items, setItems] = useState([]);

  const fetchItems = useCallback(async (controller) => {

    // simulate 2 sec request duration
    setTimeout(async () => {
      let parsedJson

      try {
        const res = await fetch('http://localhost:3001/api/items?limit=500', { signal: controller.signal }); // Intentional bug: backend ignores limit
        parsedJson = await res.json();
        setItems(parsedJson);
        console.log('following items have been set:', parsedJson);
      } catch {
        console.warn('request interrupted. following items have not been set:', parsedJson);
      }
    }, 2000);
  }, []);

  return (
    <DataContext.Provider value={{ items, fetchItems }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);