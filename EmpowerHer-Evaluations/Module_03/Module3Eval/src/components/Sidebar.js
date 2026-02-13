import React, {useState} from "react";

const Sidebar = ({ onRefresh })=>{
    const [form, setForm] =useState({
        restaurantName: "",
        address: "",
        type: "Rajasthani",
        parkingLot: true,
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });

    const handleAdd = (e) =>{
        e.preventDefault();
        if(!form.restaurantName || !form.address) return alert("Empty form cannot be submitted");

        const newRestaurant={...form, restaurantID: Date.now(), parkingLot:form.parkingLot==="true"};
        const localData = JSON.parsel(localStorage.getItem("evalData"))||[];

        localStorage.setItem("evalData", JSON.stringify([...localData, newRestaurant]));
        alert("Successful addition");
        setForm({...form,restaurantName:"", address:""});
        onRefresh();
    };

    return(
        <div style={{width:"250px",borderRight:"1px solid #ccc", padding:"10px"}}>
            <h3>Add Restaurant</h3>
            <form onSubmit={handleAdd}>
                <input type="text" placeholder="Name" value={form.restaurantName} onChange={(e)=>setForm({...form,restaurantName:e.target.value})}/><br/>
                <input type="text" placeholder="Address" value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})}/><br/>
                <select value={form.type} onChange={(e)=>setForm({...form,type:e.target.value})}>
                    {["Rajasthani","Gujarati","Mughlai","Jain","Thai","North Indian","South Indian"].map(opt=>
                        <option key={opt}>{opt}</option>)}
                </select><br/>
                <select value={form.parkingLot} onChange={(e)=>setForm({...form,parkingLot:e.target.value})}>
                    <option value="true">Parking Available</option>
                    <option value="false">No Parking</option>
                </select><br/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Sidebar;