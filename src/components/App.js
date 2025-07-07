import React, { useState } from 'react';
import '../styles/App.css';
import menu from './data';
import Menu from './Menu';

const allCategories = ['All', ...new Set(menu.map(item => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(menu);
    } else {
      const newItems = menu.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {allCategories.map((category, index) => (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
