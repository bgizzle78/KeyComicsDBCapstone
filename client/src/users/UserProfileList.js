import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserDetails from "./UserDetails";
import { getAllUsers } from "../modules/UserProfileManager";

const UserProfileList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        getAllUsers().then(all => setUsers(all))
    };

    useEffect(
        () => {
            getUsers();
        }, []);

    console.log(users)
    
    return (<div>
        <h3 style={{ margin: '15px' }}>User Profile</h3>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '15px' }}>
            <div style={{ margin: '20px' }}>
                <UserDetails key={users.id} user={users} get={getUsers} />
            </div>
        </div>
    </div>)
}

export default UserProfileList;