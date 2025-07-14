import React, { useEffect, useState } from 'react';
import { useData } from '../state/DataContext';
import { Link } from 'react-router-dom';
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

function Items() {
  const { items, fetchItems } = useData();

  useEffect(() => {
    const controller = new AbortController();
    // Intentional bug: setState called after component unmount if request is slow
    fetchItems(controller).catch(console.error);

    // Clean‑up to avoid memory leak (candidate should implement)
    return () => {
      controller.abort('aborted by Items.js useEffect cleanup')
    };
  }, [fetchItems]);

  if (items.length === 0) return <p>Loading...</p>;

  const ListItem = ({ index, style }) => (
    <li style={style}>
      <Link to={`/items/${items[index].id}`}>{items[index].name}</Link>
    </li>
  );

  return (
    <ul style={{ height: '100vh', width: '100vw' }}>
      <AutoSizer>
        {({ height, width }) => (

          <FixedSizeList
            height={height}
            width={width}
            itemCount={items.length}
            itemSize={28}
          >
            {ListItem}
          </FixedSizeList>
        )}
      </AutoSizer>
    </ul>
  );
}

export default Items;