import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdatePage = () => {
  const { state: restaurant } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(restaurant);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update?")) {
      const localData = JSON.parse(localStorage.getItem("evalData")) || [];
      const updatedData = localData.map(item => 
        item.restaurantID === formData.restaurantID ? { ...formData, parkingLot: String(formData.parkingLot) === "true" } : item
      );
      
      localStorage.setItem("evalData", JSON.stringify(updatedData));
      alert("Successful update");
      navigate("/admin/dashboard");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Restaurant</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={formData.restaurantName} onChange={(e) => setFormData({...formData, restaurantName: e.target.value})} /><br/>
        <input type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} /><br/>
        <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
          {["Rajasthani", "Gujarati", "Mughlai", "Jain", "Thai", "North Indian", "South Indian"].map(t => <option key={t}>{t}</option>)}
        </select><br/>
        <select value={formData.parkingLot} onChange={(e) => setFormData({...formData, parkingLot: e.target.value})}>
          <option value="true">Parking Available</option>
          <option value="false">No Parking</option>
        </select><br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePage;