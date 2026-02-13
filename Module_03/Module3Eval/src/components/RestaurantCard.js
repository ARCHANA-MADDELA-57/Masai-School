import React from "react";

const RestaurantCard = ({ data, isAdmin, onDelete, onUpdate }) => {
  return (
    <div className="card" style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
      <img src={data.image} alt={data.restaurantName} style={{ width: "100%", borderRadius: "4px" }} />
      <h3>{data.restaurantName}</h3>
      <p>{data.address}</p>
      <p><strong>Cuisine:</strong> {data.type}</p>
      <p><strong>Parking:</strong> {data.parkingLot ? "Available" : "Not Available"}</p>
      
      {isAdmin && (
        <div style={{ marginTop: "10px" }}>
          <button onClick={() => onUpdate(data)}>Update</button>
          <button onClick={() => onDelete(data.restaurantID)} style={{ marginLeft: "5px", color: "red" }}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;