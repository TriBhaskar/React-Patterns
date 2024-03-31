import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const lastChange = useRef();
  const [searchTerm, setSeachTerm] = useState("");
  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleChange(event) {
    // implementing debounce which will wait for 500ms before updating the search term helps to reduce the number of times the search results are updated
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSeachTerm(event.target.value);
    }, 500);
  }
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search..." onChange={handleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
