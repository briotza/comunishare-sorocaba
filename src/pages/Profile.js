import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { useUser } from './UserContext';

function Profile() {
   
    return (
        <div className='d-flex flex-row justify-content-center page-login'>
            Perfil
        </div>
    );
}

export default Profile;
