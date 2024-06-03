import React from "react";
import { Link, Outlet } from "react-router-dom";

export function About(){
    return(
        <div>
            <h1>About</h1>
            <nav>
                <Link to="Services">Services</Link><br/>
                <Link to="History">History</Link><br/>
                <Link to="Location">Location</Link><br/>
            </nav>
            <Outlet/>
        </div>
    );
}