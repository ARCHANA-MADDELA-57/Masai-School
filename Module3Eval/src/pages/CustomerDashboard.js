import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [parkingFilter, setParkingFilter] = useState("All");
  const searchInputRef = useRef(null);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("evalData")) || []);
    searchInputRef.current?.focus();
  }, []);

  const filteredData = data.filter(res => {
    const matchesSearch = res.restaurantName.toLowerCase().includes(search.toLowerCase()) || res.address.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "All" || res.type === typeFilter;
    const matchesParking = parkingFilter === "All" || String(res.parkingLot) === parkingFilter;
    return matchesSearch && matchesType && matchesParking;
  });

  return (
    <div>
      <Navbar 
        onSearch={setSearch} 
        onFilterType={setTypeFilter} 
        onFilterParking={setParkingFilter} 
        searchRef={searchInputRef} 
      />
      <div className="restaurant-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" }}>
        {filteredData.map(res => (
          <RestaurantCard key={res.restaurantID} data={res} isAdmin={false} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDashboard;