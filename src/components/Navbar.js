import React from "react";

const Navbar = ({ onSearch, onFilterType, onFilterParking, searchRef}) =>{
    return(
        <nav className="navbar" style={{padding:"10px", borderBottom:"1px solid #ccc", marginBottom:"20px"}}>
            <input
            ref={searchRef}
            type="text"
            placeholder="Search name or address..."
            onChange={(e)=>onSearch(e.target.value)}/>
                <select onChange={(e)=>onFilterType(e.target.value)}>
                <option value="All">All Types</option>
                {["Rajasthani","Gujarati","Mughlai","Jain","Thai","North Indian","South Indian"].map(t=>(
                    <option key={t} value={t}>{t}</option>
                ))}
                </select>

                <select onChange={(e)=>onFilterParking(e.target.value)}>
                    <option value="All">All</option>
                    <option value="true">Has Parking</option>
                    <option value="false">No Parking</option>
                </select>
        </nav>
    );
};

export default Navbar;