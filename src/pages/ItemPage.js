import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'; 
import Foto from "../assets/img/no-pic.png";
import "../App.css";

function ItemPage() {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return (
        <p>Página do item</p>
    );
}

export default ItemPage;