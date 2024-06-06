import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Foto from "../assets/img/no-pic.png";
import Social from "../assets/img/social.png";
import "../App.css";

function ForgotPassword() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
  
<p>Oi</p>
);
};

export default ForgotPassword;