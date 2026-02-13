import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);
    const navigate = useNavigate();

    const loadData = () => {
        setData(JSON.parse(localStorage.getItem("evalData")) || []);
    };


    useEffect(() => {
        loadData();
        searchInput.current.focus();
    }, []);

    const handleDelete=(id)=>{
        if(window.confirm("Are you sure you want to delete?")){
            const filtered = data.filter(item=>item.restaurantID!==id);
            localStorage.setItem("evalData",JSON.stringify(filtered));
            loadData();
            alert("Successful Deletion")
        }
    };

    const filtered = data.filter(r=> r.restaurantName.toLowercase().includes(search.toLowerCase())||r.address.toLowercase().includes(search.toLowerCase()));
    return(
        <div style={{display:"flex"}}>
            <Sidebar onRefresh={loadData}/>
            <div style={{flex:1,padding:"20px"}}>
                <input ref={searchInput} placeholder="Search by name/address..." onChange={(e)=>setSearch(e.target.value)}/>
                <div className="grid">
                    {filtered.map(res=>(
                        <div key={res.restaurantID} className="card">
                            <img src={res.image} width="100" alt="res"/>
                            <h4>{res.restaurantName}</h4>
                            <button onClick={()=> navigate(`/admin/restaurants/update`,{state:res})}>Update</button>
                            <button onClick={()=>handleDelete(res.restaurantID)}>Delete</button>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;