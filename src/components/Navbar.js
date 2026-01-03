import React from "react";

const Navbar = ({ onSearch, onTypeFilter, onParkingFilter, searchRef }) => {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc", display: "flex", gap: "10px" }}>
      <input 
        ref={searchRef} 
        placeholder="Search name or address..." 
        onChange={(e) => onSearch(e.target.value)} 
      />
      <select onChange={(e) => onTypeFilter(e.target.value)}>
        <option value="All">All Types</option>
        {["Rajasthani", "Gujarati", "Mughlai", "Jain", "Thai", "North Indian", "South Indian"].map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <select onChange={(e) => onParkingFilter(e.target.value)}>
        <option value="All">All Parking</option>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>
    </nav>
  );
};

export default Navbar;