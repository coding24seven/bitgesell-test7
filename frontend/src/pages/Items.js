import React, { useEffect } from 'react';
import { useData } from '../state/DataContext';
import { Link } from 'react-router-dom';
import { FixedSizeList } from 'react-window'

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

  if (!items.length) return <p>Loading...</p>;

  const ListItem = ({ index, style }) => (
    <li style={style}>
      <Link to={`/items/${items[index].id}`}>{items[index].name}</Link>
    </li>
  );

  return (
    <ul>
      <FixedSizeList
        height={window.innerHeight}
        width={'100vw'}
        itemCount={items.length}
        itemSize={28}
      >
        {ListItem}
      </FixedSizeList>
    </ul>
  );
}

export default Items;