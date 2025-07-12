import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Items from './Items';
import ItemDetail from './ItemDetail';
import { DataProvider } from '../state/DataContext';

function App() {
  return (
    <DataProvider>
      <nav style={{padding: 16, borderBottom: '1px solid #ddd'}}>
        <Link to="/">Items</Link>
        <br/>
        <Link to="/unmount">Unmount Items.js while items are loading</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/unmount" element={<h1>Items.js unmounted</h1>} />
      </Routes>
    </DataProvider>
  );
}

export default App;