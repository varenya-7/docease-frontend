import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserState } from '../../context/UserProvider'; // Adjust the path as necessary

const ProtectedRoute = ({ children }) => {
    const { user,loading,setUser } = UserState();
    console.log("ProtectedRoute user:", user); // Debugging log
    console.log("ProtectedRoute loading:", loading); // Debugging l
    if(loading)
        {
        return <div>Loading....</div>
        }
   
    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
